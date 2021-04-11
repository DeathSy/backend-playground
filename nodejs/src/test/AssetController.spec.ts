import request from "supertest";
import { StorageObject } from "./__mocks__/storageObject";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import app from "../server";

const mockS3Send = jest.fn(() => ({
  Contents: StorageObject,
}));

jest.mock("@aws-sdk/client-s3", () => {
  return {
    ...jest.requireActual("@aws-sdk/client-s3"),
    S3Client: jest.fn().mockImplementation(() => {
      return { send: mockS3Send };
    }),
  };
});

jest.mock("@aws-sdk/s3-request-presigner", () => {
  return {
    getSignedUrl: jest.fn().mockImplementation(() => {
      return "https://image-host.com/region/path/to/presign-image/image-key.jpg";
    }),
  };
});

describe("AssetController", () => {
  describe("all", () => {
    it("should give all assets in storage bucket", async () => {
      const result = await request(app).get("/assets").send();
      expect(result.status).toBe(200);
      expect(result.body.assets).not.toBeUndefined();
      expect(result.body.assets).toHaveLength(3);

      expect(mockS3Send).toBeCalledTimes(1);
      expect(getSignedUrl).toBeCalledTimes(3);

      const [, asset] = result.body.assets;
      expect(asset).not.toBeUndefined();
      expect(asset).toStrictEqual({
        url:
          "https://image-host.com/region/path/to/presign-image/image-key.jpg",
      });
    });
  });

  describe("get", () => {
    it("should give asset by specified key", async () => {
      const result = await request(app).get("/assets/image-key").send();
      expect(result.status).toBe(200);
      expect(result.body.url).not.toBeUndefined();
      expect(result.body.url).toEqual(
        "https://image-host.com/region/path/to/presign-image/image-key.jpg"
      );
    });
  });
});

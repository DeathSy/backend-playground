import request from "supertest";
import app from "../server";

describe("AssetController", () => {
  describe("all", () => {
    it("should give all assets in storage bucket", async () => {
      const result = await request(app).get("/assets").send();
      expect(result.status).toBe(200);
      expect(result.body.assets).not.toBeUndefined();
      expect(result.body.assets).toHaveLength(3);

      const [, asset] = result.body.assets;
      expect(asset).not.toBeUndefined();
      expect(asset).toEqual({
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

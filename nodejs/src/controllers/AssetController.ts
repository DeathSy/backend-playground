import { Request, Response } from "express";
import {
  S3Client,
  ListObjectsCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const all = async (request: Request, response: Response) => {
  const s3client = new S3Client({ region: process.env.STORAGE_REGION });

  const listsObjectOutput = await s3client.send(
    new ListObjectsCommand({
      Bucket: process.env.STORAGE_BUCKET,
    })
  );
  const result = await Promise.all(
    listsObjectOutput.Contents.map((object) =>
      getSignedUrl(s3client, new GetObjectCommand({
        Bucket: process.env.STORAGE_BUCKET,
        Key: object.Key
      }))
    )
  );

  response.send({
    assets: result.map(url => ({ url })),
  });
};

export const get = (request: Request, response: Response) => {
  const { key } = request.params;
  response.send({
    url: `https://image-host.com/region/path/to/presign-image/${key}.jpg`,
  });
};

export const store = (request: Request, response: Response) => {
  response.send({ asset: `asset-id-1 created successfully` });
};

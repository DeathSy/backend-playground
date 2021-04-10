import express from "express";
import { json, urlencoded } from "body-parser";
import bootstrap from './bootstrap'

const HOST = process.env.HOST || "0.0.0.0"
const PORT = parseInt(process.env.PORT || "3000", 10);

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

bootstrap(app)

app.listen(PORT, HOST, () =>
  console.log(`express server is running on http://${HOST}:${PORT}`)
);

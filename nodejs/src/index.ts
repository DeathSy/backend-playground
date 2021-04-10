import express from "express";
import { json, urlencoded } from "body-parser";
import bootstrap from './bootstrap'

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

bootstrap(app)

app.listen(PORT, () =>
  console.log(`express server is running on http://localhost:${PORT}`)
);

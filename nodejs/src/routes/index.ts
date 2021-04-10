import { Router, Express } from "express";
import Assets from "./assets";

const _routes: [string, Router][] = [["/assets", Assets]];

const routes = (app: Express) => {
  const router = Router();

  router.get("/", (req, res) => {
    res.status(200).send({
      message: "pong",
    });
  });

  _routes.forEach((route) => {
    const [url, controller] = route;
    router.use(url, controller);
  });

  app.use(router)
};

export default routes;

import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
import { handleUserRequest } from "../controller/userController";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
  router.get("/", homeController.handleHelloWorld);

  router.get("/about", (req, res) => {
    return res.send("This is the about page.");
  });

  router.get("/user", handleUserRequest);

  return app.use("/", router);
};

export default initWebRoutes;

import express from "express";
import {home} from "../controller/rootcontrollers.js";

const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;
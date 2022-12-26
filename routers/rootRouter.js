import express from "express";
import {home, search, mysite, ways} from "../controllers/rootcontroller.js";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/mysite", mysite);
rootRouter.get("/search", search);
rootRouter.get("/ways", ways);

export default rootRouter;
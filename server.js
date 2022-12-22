import "./db.js";
import "./model/Museum.js";
import rootRouter from "./router/rootRouter.js";
import express from "express";

const app = express();
const port = 42151;

app.use(express.urlencoded({extended:true}));

app.use(express.static('views'));
app.use("/",rootRouter);

app.listen(port, ()=> console.log(`http://localhost:${port}`));
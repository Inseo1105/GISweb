import "./db.js";
import "./model/Museum.js";
import rootRouter from "./routers/rootRouter.js";
import express from "express";

const app = express();
const port = 1543;

app.use(express.urlencoded({extended:true}));

app.use(express.static("views"));

app.set('views', process.cwd() + "/views");
app.set('view engine', 'ejs');

app.use("/",rootRouter);

const handleListening = () => {
    console.log(`Server listenting on port http://localhost:${port}`);
};

app.listen(port, handleListening);
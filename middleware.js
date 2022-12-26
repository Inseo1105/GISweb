import rootRouter from "./routers/rootRouter";

export const valu = (req, res, next) => {
    res.locals.museum = museum;
    next();
}
import Museum from "../model/Museum.js";

const properties =  await Museum.find({});
console.log(properties);

export const home = (req, res) =>{
    res.sendfile("views/home.html");
};
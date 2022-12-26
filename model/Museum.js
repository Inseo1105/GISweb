import mongoose from "mongoose";

const museumSchema = new mongoose.Schema({
    name: {type:String, required: true, unique: true},
    address: {type: String, required: true, unique:true},
    price: {type: String},
    number: {type: String},
    hours: {type: String},
    type: {type: String},
    icon: {type: String},
    position:{
        lat:{type:Number},
        lng:{type:Number},
    },
});

const Museum = mongoose.model("Museum", museumSchema);
export default Museum;
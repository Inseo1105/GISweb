import Museum from "../model/Museum.js";

export const home = async (req, res) =>{
    const museum = await Museum.find({});
    return res.render("home", {museum : museum});
};

export const search = async (req, res) => {
    const {keyword} = req.query;
    let museums = []; // museum 생성
    if(keyword){
        console.log("keyword 받기 성공 keyword: " + keyword);
        museums = await Museum.find({
            name:{
                $regex: new RegExp(keyword, "i"),
            }, // name에 keyword 포함 시 museums 배열에 데이터 input
        });
    }
    return res.render("search", {museums : museums});
};

export const mysite = (req, res) =>{    
    return res.render("mysite");
};

export const ways = (req, res) =>{    
    return res.render("ways");
};
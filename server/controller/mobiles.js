
const itemSchema=require("../models/itemSchema");

const getData=async(req,res)=>{
    const mobiles=await itemSchema.find({});
    if(mobiles){
        console.log(mobiles);
        return res.status(201).json({
            mobiles:mobiles
        })
    }

}

module.exports={getData};
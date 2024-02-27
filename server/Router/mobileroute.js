
const express=require("express");
const {getData}=require("../controller/mobiles");
const router=express.Router();

router.get("/mobiles",getData);

module.exports=router;
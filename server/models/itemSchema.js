
const mongoose=require("mongoose");


const itemSchema =  mongoose.Schema({
  model: {
    type:String
    },
  price: {
    type:Number
  }
})

module.exports = mongoose.model("mobiles", itemSchema);
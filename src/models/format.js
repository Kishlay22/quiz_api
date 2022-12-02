const mongoose=require("mongoose");

const que_schema=new mongoose.Schema({
    Ques:{
        type:String,
        required:true
    },
    O1:{
        type:String,
        required:true,
        unique:true,
       },
    O2:{
        type:String,
        required:true,
        unique:true,
       }, 
    O3:{
        type:String,
        required:true,
        unique:true,
       },     
    O4:{
        type:String,
        required:true,
        unique:true,
       },  
    correct:{
        type:String,
        required:true
       }
})

const Questions = mongoose.model("Ques",que_schema);
module.exports=Questions;
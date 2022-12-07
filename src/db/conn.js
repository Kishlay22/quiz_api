const mongoose=require("mongoose");
const db='//mongodb url for the database ';
mongoose.connect(db,{
    useNewUrlParser: true, useUnifiedTopology: true
 }).then(()=>{
    console.log("connection sucsful");
  }).catch((e)=>{console.log(e);})
 

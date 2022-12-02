const mongoose=require("mongoose");
const db='mongodb+srv://quiz_app:nis%40quiz@cluster0.louo2t1.mongodb.net/quiz_details?retryWrites=true&w=majority';
mongoose.connect(db,{
    useNewUrlParser: true, useUnifiedTopology: true
 }).then(()=>{
    console.log("connection sucsful");
  }).catch((e)=>{console.log(e);})
 

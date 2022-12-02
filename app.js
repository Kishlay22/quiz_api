const express=require("express");
require("./src/db/conn")
const app=express();
const Questions=require("./src/models/format.js")
const port=process.env.PORT || 8000;
app.use(express.json());


app.post("/ques", async(req,res)=>{



    const user = new Questions({"Ques": req.body.Ques,
    "O1": req.body.O1,
    "O2": req.body.O2,
    "O3": req.body.O3,
    "O4": req.body.O4,
    "correct": req.body.correct})
    console.log(req.body)

    try {
        const quiz = await Questions.create({"Ques": req.body.Ques,
        "O1": req.body.O1,
        "O2": req.body.O2,
        "O3": req.body.O3,
        "O4": req.body.O4,
        "correct": req.body.correct});
        res.status(200).json(quiz);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }

    // await user.save().then(()=>{
    //     res.send("doc added sucessfully");
    // }).catch((e)=>{
    //     res.send(e);
    // })
})

app.get("/ques_ans",async(req,res)=>{
    try{
       const questiondata=await Questions.find();
       res.send(questiondata)
          
    }catch(e){
         res.send(e);
    }
})


app.listen(port,()=>{
    console.log(`connection established at ${port}`);
})
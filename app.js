const express=require("express");
require("./src/db/conn")
const app=express();
const Questions=require("./src/models/format.js")
const port=process.env.PORT || 8000;
app.use(express.json());


app.post("/ques", async(req,res)=>{



    const user = new Questions({"question": req.body.question,
    answers:[{
      "answerText": req.body.answers[0].answerText,
      "isCorrect": req.body.answers[0].isCorrect},
      {"answerText": req.body.answers[1].answerText,
      "isCorrect": req.body.answers[1].isCorrect},
      {"answerText": req.body.answers[2].answerText,
      "isCorrect": req.body.answers[2].isCorrect},
      {"answerText": req.body.answers[3].answerText,
      "isCorrect": req.body.answers[3].isCorrect}], })
    console.log(req.body)

    try {
        const quiz = await Questions.create({"question": req.body.question,
        answers:[{
          "answerText": req.body.answers[0].answerText,
          "isCorrect": req.body.answers[0].isCorrect},
          {"answerText": req.body.answers[1].answerText,
          "isCorrect": req.body.answers[1].isCorrect},
          {"answerText": req.body.answers[2].answerText,
          "isCorrect": req.body.answers[2].isCorrect},
          {"answerText": req.body.answers[3].answerText,
          "isCorrect": req.body.answers[3].isCorrect}], });
        res.status(200).json(quiz);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
})

app.get("/ques",async(req,res)=>{
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

const mongoose=require("mongoose");
const reqString = {
        type: String,
        required: true,
      };
const que_schema=new mongoose.Schema({
          question : reqString,
          answers : [{
              answerText:reqString,
              isCorrect:reqString
            }],
      });

const Questions = mongoose.model("Ques",que_schema);
module.exports=Questions;

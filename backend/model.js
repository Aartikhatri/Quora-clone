import mongoose, { now } from "mongoose";



const userAutentication = new mongoose.Schema({
    userName : {type : String , trim : true},
    password : {type : String , trim : true}
})

const addQuestion = new mongoose.Schema({
    question: {type : String ,  trim: true },
    image : {  type : String },
    createAt :{ type : Date , default : Date.now()},
    answerId : {type : mongoose.Schema.Types.ObjectId , ref : "answers"  }
})

const createPost = new mongoose.Schema({
    post : {type : String ,  trim: true },
    image : {type : String},
    createAt :{ type : Date , default : Date.now()  }
})

const answer = new mongoose.Schema({
    answer : {type : String  , trim : true},
    createAt :{ type : Date , default : Date.now()  },
    createAt :{ type : Date , default : Date.now() },
    questionId : {type : mongoose.Schema.Types.ObjectId , ref : "questions" }
})

const Ques_Model = new  mongoose.model("questions" , addQuestion  );
const ans_model = new mongoose.model("answers" , answer )
const userAuthModel = new mongoose.model('userInfo' , userAutentication);
const  createPostModel = new mongoose.model('quoraPosts' , createPost);

export { Ques_Model , ans_model , userAuthModel , createPostModel };
import mongoose from "mongoose";

const DbConnection = async()=>{
    try{
   await mongoose.connect(`mongodb+srv://aartikhatri223:aarti%401998@cluster0.n7g8g1s.mongodb.net/undefined` );
   console.log("connected ");
    }catch(e){
     console.log(e);
    }
};

export default DbConnection;
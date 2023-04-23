import express from 'express'
import multer from 'multer';

import { Ques_Model, ans_model, userAuthModel, createPostModel } from './model.js'

class maincontroler {

    static getAll_doc = async (req, res) => {
        try {
            res.send('hello')
            console.log('connected data');
        } catch (error) {
            console.log(error);
        }
    }
    // ==================================================================================================================================================

        // //  for image storage 
        // static Storage = multer.diskStorage({
        //     destination: '/uploads',
        //     filename: (req, file, cb) => {
        //         cb(null, file.originalname)
        //     }
        // });
    
        // static imageUpload = multer({
        //     storage: this.Storage
        // }).single('image')

    // Question send to database
    static Ques_post = async (req, res) => {
        try {
            console.log(req.body , req.file  );
            const { question, answerId} = req.body
            const result = new Ques_Model({
                question: question,
                answerId: answerId,
                image: req.file.path
                // image : req.file.filename
            })
            await result.save()
            res.send("ohk")
            console.log(result);

        } catch (e) {
            console.log(e, "error");
        }
      
    }

    // code for connecting answer collection to  question collection
    static question_details = async (req, res) => {
        try {

            const result = await Ques_Model.aggregate([
                {
                    $lookup: {
                        from: "answers",
                        localField: "_id",
                        foreignField: "questionId",
                        as: "allAnswer"
                    }
                }
            ]).exec().then((doc) => { res.send(doc) }).catch(e => console.log(e))


        } catch (error) {
            console.log(error);
        }
    }

    // ================================================================================================================================================



    // for answer details  
    static ansDetails = async (req, res) => {

        try {
            const { answer, questionId } = req.body
            const result = new ans_model({
                answer: answer,
                questionId: questionId,
            })
            await result.save()
            console.log(result);
            res.send('ohk')
        } catch (e) {
            console.log(e, "error");
        }

    }



    // ================================================================================================================================================


    // for create post 
    static Create_post = async (req, res) => {
        try {
            const { content } = req.body
            const result = await createPostModel({
                post: content,
                image: req.file.filename
            })
            await result.save();
            console.log(result);
            res.send("ohk")
        } catch (error) {
            console.log(error);
        }
    }
}

export default maincontroler 
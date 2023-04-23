import express, { Router } from 'express'
import maincontroler from './maincontroler.js'
import multer from 'multer';
const upload = multer({ dest: '/uploads' })

const router = express.Router();

// router.get('/' , maincontroler.getAll_doc )
router.post('/que' , upload.single('image') , maincontroler.Ques_post )
router.get('/que' , maincontroler.question_details )

router.post('/ans' , maincontroler.ansDetails )
// router.post('/post' , maincontroler.Create_post )


export default router;
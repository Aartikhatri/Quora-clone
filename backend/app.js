import express from "express";
import cors from 'cors'
import path ,  {dirname} from 'path'
import webPage from './route.js'
import DbConnection from "./db.js";
import bodyParser from "body-parser";
import multer from 'multer';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express()
const port = process.env.PORT || 3000;

// calling database;
DbConnection();


// settin middleware
app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())
// app.use(express.json());

// setting of route 
app.use("/" , webPage )

// cors setting
app.use((req , res , next)=>{
  req.header("Access-Control-Allow-Origin"  ,"*" ),
  req.header("Access-Control-Allow-Headers"  ,"*" ),
  req.header('Content-Type', 'text/javascript');
next()
});

app.use('/uploads' ,  express.static( '/uploads'));
app.use(  express.static(path.join(__dirname , '/../frontend/dist')));
app.use(express.static(path.join(__dirname , '/../frontend/src')));
app.use(express.static(path.join(__dirname , '/../frontend/dist/index.html')))

app.get("/*" ,(req , res)=>{
   try{
    res.sendFile(path.join(`${__dirname}/../frontend/dist/index.html`)  )
   }catch(e) {res.send(e , "Opps wrong")} 
})


app.use(cors());



// port listing
app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
  });

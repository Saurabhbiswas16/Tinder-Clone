import express from 'express'
import mongooose from 'mongoose'
import Cors from 'cors';
import cards from './dbCards.js';
//App COnfig

const app=express();
const port= process.env.PORT || 8001;
const connection='mongodb+srv://admin:wld564R4n3cbmWdC@cluster0.xmguo.mongodb.net/tinderdb?retryWrites=true&w=majority';

//Middlewares

app.use(express.json());
app.use(Cors());
//DB config

mongooose.connect(connection,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,

})
//API Endpoints

app.get("/",(req,res)=>{
    res.status(200).send("HEY bro");
})


app.post('/tinder/card',(req,res) =>{
    const dbCard=req.body;
    cards.create(dbCard,(err,data) =>{
        if(err)
        {
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
})


app.get('/tinder/card',(req,res) =>{
   
    cards.find((err,data) =>{
        if(err)
        {
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
})
//Listener
app.listen(port,()=>{
    console.log(`Port ${port}`);
})
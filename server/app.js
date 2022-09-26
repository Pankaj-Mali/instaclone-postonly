const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
const Post = require('./model/post')

mongoose.connect('mongodb://0.0.0.0/instaclone',(e)=>{
    if(e){console.log(e.message)}
    else{
        console.log("mongoose is connected")
    }
})
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyparser())



app.listen(8080, (e)=>{
    if(e){console.log(e.message)}
    else{
        console.log("server is up at 8080")
    }
})
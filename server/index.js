const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
const Post = require('./model/post')
const cors = require('cors')
const fileUpload = require('express-fileupload')
mongoose.connect('mongodb+srv://pankajMali:pankaj98@cluster0.dj3vt0p.mongodb.net/instaclone', (e) => {
    if (e) { console.log(e.message) }
    else {
        console.log("mongoose is connected")
    }
})
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyparser())
app.use(cors())
app.use(fileUpload())


app.post("/addPost", async (req, res) => {
    try {
        const date = new Date
        var day = date.toDateString();
        const name = req.files.postImage.name
        const data = await Post.create({ ...req.body, image: name , likes:0 , date: day});
        const file = req.files.postImage
        file.mv("./uploads/" + name)
        res.status(200).send({ message: "Post uploaded successfully" })
    } catch (e) {
        if (e) return res.status(400).json({
            message: e.message
        })
    }
})

app.get("/homePage", async (req, res) => {
    try {
        const data = await Post.find()
        res.status(200).json(data)
    } catch (e) {
        if (e) return res.status(400).json({
            message: e.message
        })
    }
})

app.get("/uploads/:name", async (req, res) => {
    try {
       res.status(200).sendFile(__dirname+`/uploads/${req.params.name}`)
    } catch (e) {
        if (e) return res.status(400).json({
            message: e.message
        })
    }
})
app.listen(8080, (e) => {
    if (e) { console.log(e.message) }
    else {
        console.log("server is up at 8080")
    }
})
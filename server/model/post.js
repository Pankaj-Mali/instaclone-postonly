const mongoose = require('mongoose')

const Scheme=mongoose.Schema

const postSchema= new Scheme({
    author:{type:String , required:true},
    location:{type:String , required:true},
    discription:{type:String , required:true}
})

const Post = mongoose.model("Post", postSchema)

module.exports=Post;
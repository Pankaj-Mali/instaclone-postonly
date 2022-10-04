const mongoose = require('mongoose')

const Scheme=mongoose.Schema

const postSchema= new Scheme({
    image:{type:String , required:true},
    name:{type:String , required:true},
    location:{type:String , required:true},
    description:{type:String , required:true},
    likes:{type:Number},
    date:{type:String}
})

const Post = mongoose.model("Post", postSchema)

module.exports=Post;
import React from 'react'
import { useState } from 'react'
import Header from './header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../style/post.css'
const Post = () => {

    const Navigator = useNavigate();
    const [post, setPost] = useState({})

    const postData = async (e) => {
        e.preventDefault();
        var date= new Date();
        console.log(date)
        const formData = new FormData();
        formData.append("postImage", post.postImage);
        formData.append("name", post.name);
        formData.append("location", post.location);
        formData.append("description", post.description);

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };
        const data = axios.post("http://localhost:8080/addpost",
            formData, config).then((res) => alert(res.data.message));


        if (data.status === 200) {
            Navigator("/postview")
        }
        else {
            Navigator("/postview")
        }

        //  fetch('http://localhost:8080/addPost', {
        //     method: "POST",
        //     body: formData,
        //     headers: {
        //     'Content-Type': 'multipart/form-data'
        //     }
        //  }).then((res) => res.json).then((data) => console.log(data))
    }
    return (
        <>
            <Header />
            <div className='form-container'>
                <form className='form-box' onSubmit={postData} method="POST">
                    <div className='post-divs'>
                        <input type="file" id='upload' onChange={(e) => setPost({ ...post, postImage: e.target.files[0] })} name='postImage' required />
                    </div>
                    <div className='post-divs'>
                        <input type="text" onChange={(e) => setPost({ ...post, name: e.target.value })} placeholder="Author" className='auther' name='name' required />
                        <input type="text" onChange={(e) => setPost({ ...post, location: e.target.value })} placeholder="Location" className='location' name='location' required />
                    </div>
                    <div className='post-divs'>
                        <input type="text" onChange={(e) => setPost({ ...post, description: e.target.value })} placeholder="Description" className='discription' name='description' required />
                    </div>

                    <button id="btn-post" type="submit" className='post-button' >Post</button>

                </form>
            </div>
        </>

    );
}

export default Post
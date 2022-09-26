import React from 'react'
import { Link } from 'react-router-dom'
import '../style/post.css'
 const Post = () => {
  return (
    <>
    <section className='form-container'>
        <form>
            <div className='post-divs'>
               <input type="text"  name='author'  
                placeholder='author' className='author' />
               <input type="text" name='location'
                placeholder='location'  className='location' />  
            </div> 
            <div className='post-divs'>
            <input type="text" name='discription'
            placeholder='say Something'  className='discription' /> 
            </div>  
            <div>
                <Link to='/postview'>
                <button className='post-button'>post</button> 
                </Link>     
            </div>
            
        </form>

    </section>
    </>
  )
}

export default Post
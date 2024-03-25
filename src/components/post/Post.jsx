import React from 'react'
import './post.css'

function Post() {
  return (
    <div className='post'>
        <img className='postImg'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAamrazU1Erpeit7YHwm8Gvvs6hNsBPxnyaeKjF8w2ZL90d9RLSqu13kAOOA&s" 
        alt="blog post" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCst">Music</span>
                <span className="postCst">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet 
            </span>
            <hr/>
            <span className="postDate">a Hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magni, itaque consequatur! Sequi accusamus consequatur eum recusandae, 
            tempore perspiciatis necessitatibus unde voluptatum ipsa sunt quaerat,
            veniam nesciunt minus molestiae quisquam temporibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magni, itaque consequatur! Sequi accusamus consequatur eum recusandae, 
            tempore perspiciatis necessitatibus unde voluptatum ipsa sunt quaerat,
            veniam nesciunt minus molestiae quisquam temporibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magni, itaque consequatur! Sequi accusamus consequatur eum recusandae, 
            tempore perspiciatis necessitatibus unde voluptatum ipsa sunt quaerat,
            veniam nesciunt minus molestiae quisquam temporibus.
        </p>
    </div>
  )
}

export default Post
import React from "react"
import "../styles/BlogList.css"
import { category } from "../assets/data/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"
// import { Card } from "../components/blog/Card"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className='icon' />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  )
}

function BlogList() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <>
      <section className='category'>
        <div className='content'>
          <Slider {...settings}>
            {category.map((item) => (
              <div className='boxs'>
                <div className='box' key={item.id}>
                  <img src={item.cover} alt='cover' />
                  <div className='overlay'>
                    <h4>{item.category}</h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* <Card/> */}
      </section>
    </>
  )
}

export default BlogList























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import '../styles/BlogList.css';

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredBlogs, setFilteredBlogs] = useState([]);

//   useEffect(() => {
//     axios
//       .get('/api/blogs')
//       .then((res) => {
//         setBlogs(res.data);
//         setFilteredBlogs(res.data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     const filtered = blogs.filter(
//       (blog) =>
//         blog.title.toLowerCase().includes(term) ||
//         blog.content.toLowerCase().includes(term)
//     );
//     setFilteredBlogs(filtered);
//   };

//   return (
//     <div className="blog-list">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search blogs..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>
//       <div className="blog-list-container">
//         {filteredBlogs.map((blog) => (
//           <div key={blog.id} className="blog-card">
//             <Link to={`/blog/${blog.id}`}>
//               <h3>{blog.title}</h3>
//               <p>{blog.excerpt}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogList;

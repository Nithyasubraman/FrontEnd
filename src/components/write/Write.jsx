import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar";
import TopBar from "../topbar/TopBar";
 
 
 
const initialValues = {
  title: "",
  content: "",
  author: "",
  postedDate:"",
  tag:"",
  category:"",
  featuredImage: null,
};
 
function Write() {
  const [values, setValues] = useState(initialValues);

  const categories = [
    'Life',
    'News',
    'Sports',
    'Health',
    'Business',
    'Entertainment',
    'Technology',
    'Travel',
    'Others',
  ];
  
 
  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // const getDefaultDateTime = () => {
  //   const now = new Date();
  //   const year = now.getFullYear();
  //   const month = String(now.getMonth() + 1).padStart(2, '0');
  //   const day = String(now.getDate()).padStart(2, '0');
  //   const hours = String(now.getHours()).padStart(2, '0');
  //   const minutes = String(now.getMinutes()).padStart(2, '0');
  
  //   return `${year}-${month}-${day}T${hours}:${minutes}`;
  // };
 
  const handleImageChange = (e) => {
    setValues({
      ...values,
      featuredImage: e.target.files[0],
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
 
    try {
      const response = await axios.post(
        "http://localhost:5122/api/BlogPosts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.alert("Posted successfully");
      console.log("Posted successfully:", response.data);
    } catch (error) {
      console.error("Post failure:", error);
    }
  };
 
  return (
    <div className="writepage">
       <Navbar/>
        <br/>
        <TopBar/>
        <br/>
        <br/>
    <Container>
      <br/>
      <br/>
      <Card style={{border:"none"}}>
        <CardBody>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
  <Form.Label> </Form.Label>
  <Form.Control
    as="div"
    name="Image"
    // value={values.ImageUrl}
    // value={values.ImageUrl}
    style={{
      backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKLq5yQL4kp_cW87LMjy1QQxMONkVO751kg&usqp=CAU'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '200px',
      width: '100%',
    }}
  />
</Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> </Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={values.title}
                placeholder="Title"
                className='writeInput'
                autoFocus={true}
                style={{fontWeight:"bolder",fontSize:"20px",textAlign:"center"}} 
                onChange={handleInput}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" > */}
            <Form.Group className="writeFormGroup" >
              <Form.Label> </Form.Label>
              <Form.Control
                as="textarea"
                name="content"
                value={values.content}
                placeholder="Content"
                className='postDesc'
                style={{height:"20vh"}}
                onChange={handleInput}
              />
            </Form.Group>
 
            <Form.Group className="mb-3">
              <Form.Label> </Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={values.author}
                placeholder="Author"
                onChange={handleInput}
              />
            </Form.Group>
 
            <Form.Group className="mb-3">
              <Form.Label> </Form.Label>
              <Form.Control
                type="date"
                // type="datetime-local"
                // type="text"
                name="postedDate"
                // value={values.PostedDate || getDefaultDateTime()}
                value={values.postedDate}
                placeholder="Posted Date"
                onChange={handleInput}
              />
            </Form.Group>

            
            <Form.Group className="mb-3">
              <Form.Label> </Form.Label>
              <Form.Control
                //  type="datetime-local"
                type="text"
                name="tag"
                value={values.tag}
                // value={values.PostedDate || getDefaultDateTime()}
                // value={values.tag}
                placeholder="Tag"
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
        <Form.Label> </Form.Label>
        <Form.Select
          name="category"
          value={values.category}
          onChange={handleInput}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
 
           
            <Form.Group className="mb-3">
              <Form.Label> </Form.Label>
              <Form.Control
                type="file"
                name="featuredImage"
                accept="image/*"
                placeholder="Image to Upload"
                className='writeImg'
                onChange={handleImageChange}
              />
            </Form.Group>
 
            <Button type="submit" className="writeSubmit" style={{backgroundColor:"teal"}}>Publish</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
    </div>
  );
}
   
export default Write;
 






























// import React, { useEffect, useState } from "react";
// import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "../Navbar";
// import TopBar from "../topbar/TopBar";
// import Cookies from "js-cookie";
 



//  const userid = Cookies.get('userid')
//  console.log("user",userid);

// const initialValues = {
//   title: "",
//   content: "",
//   author: "",
//   postedDate:"",
//   tag:"",
//   category:"",
//   featuredImage: null,
// };
 
// function Write() {
//   const [values, setValues] = useState(initialValues);
//   const [authorName, setAuthor] = useState('');
//   const currentdate = new Date().toLocaleDateString();

//   const categories = [
//     'Life',
//     'News',
//     'Sports',
//     'Health',
//     'Business',
//     'Entertainment',
//     'Technology',
//     'Travel',
//     'Others',
//   ];
  
 
//   const handleInput = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // const getDefaultDateTime = () => {
//   //   const now = new Date();
//   //   const year = now.getFullYear();
//   //   const month = String(now.getMonth() + 1).padStart(2, '0');
//   //   const day = String(now.getDate()).padStart(2, '0');
//   //   const hours = String(now.getHours()).padStart(2, '0');
//   //   const minutes = String(now.getMinutes()).padStart(2, '0');
  
//   //   return `${year}-${month}-${day}T${hours}:${minutes}`;
//   // };
 
//   const handleImageChange = (e) => {
//     setValues({
//       ...values,
//       featuredImage: e.target.files[0],
//     });
//   };
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.entries(values).forEach(([key, value]) => {
//       formData.append(key, value);
//     });
 
//     try {
//       const response = await axios.post(
//         "http://localhost:5122/api/BlogPosts",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       window.alert("Posted successfully");
//       console.log("Posted successfully:", response.data);
//     } catch (error) {
//       console.error("Post failure:", error);
//     }
//   };

  

//   useEffect(()=>{
//     fetchName(userid);
//   })
  

//   const fetchName = async (userid) => {
//     try {
//         const response = await axios.get(`http://localhost:5122/api/Login/${userid}`);
//         console.log(response.data.name)
//         setAuthor(response.data.name)
//     }
//     catch (error) {
//         console.error('Error fetching :',error);
     
//     }
// };
 
//   return (
//     <div className="writepage">
//        <Navbar/>
//         <br/>
//         <TopBar/>
//         <br/>
//         <br/>
//     <Container>
//       <br/>
//       <br/>
//       <Card style={{border:"none"}}>
//         <CardBody>
//           <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//   <Form.Label> </Form.Label>
//   <Form.Control
//     as="div"
//     name="Image"
//     // value={values.ImageUrl}
//     // value={values.ImageUrl}
//     style={{
//       backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKLq5yQL4kp_cW87LMjy1QQxMONkVO751kg&usqp=CAU'})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       height: '200px',
//       width: '100%',
//     }}
//   />
// </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label> </Form.Label>
//               <Form.Control
//                 type="text"
//                 name="title"
//                 value={values.title}
//                 placeholder="Title"
//                 className='writeInput'
//                 autoFocus={true}
//                 style={{fontWeight:"bolder",fontSize:"20px",textAlign:"center"}} 
//                 onChange={handleInput}
//               />
//             </Form.Group>

//             {/* <Form.Group className="mb-3" > */}
//             <Form.Group className="writeFormGroup" >
//               <Form.Label> </Form.Label>
//               <Form.Control
//                 as="textarea"
//                 name="content"
//                 value={values.content}
//                 placeholder="Content"
//                 className='postDesc'
//                 style={{height:"20vh"}}
//                 onChange={handleInput}
//               />
//             </Form.Group>
 
//             <Form.Group className="mb-3">
//               <Form.Label> </Form.Label>
//               <Form.Control
//                 type="text"
//                 name="author"
//                 value={authorName}
//                 placeholder="Author"
//                 onChange={handleInput}
//               />
//             </Form.Group>
 
//             <Form.Group className="mb-3">
//               <Form.Label> </Form.Label>
//               <Form.Control
//                 type="text"
//                 // type="datetime-local"
//                 // type="text"
//                 name="postedDate"
//                 // value={values.PostedDate || getDefaultDateTime()}
//                 value={currentdate}
//                 placeholder="Posted Date"
//                 onChange={handleInput}
//               />
//             </Form.Group>

            
//             <Form.Group className="mb-3">
//               <Form.Label> </Form.Label>
//               <Form.Control
//                 //  type="datetime-local"
//                 type="text"
//                 name="tag"
//                 value={values.tag}
//                 // value={values.PostedDate || getDefaultDateTime()}
//                 // value={values.tag}
//                 placeholder="Tag"
//                 onChange={handleInput}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//         <Form.Label> </Form.Label>
//         <Form.Select
//           name="category"
//           value={values.category}
//           onChange={handleInput}
//         >
//           <option value="">Select Category</option>
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </Form.Select>
//       </Form.Group>
 
           
//             <Form.Group className="mb-3">
//               <Form.Label> </Form.Label>
//               <Form.Control
//                 type="file"
//                 name="featuredImage"
//                 accept="image/*"
//                 placeholder="Image to Upload"
//                 className='writeImg'
//                 onChange={handleImageChange}
//               />
//             </Form.Group>
 
//             <Button type="submit" className="writeSubmit" style={{backgroundColor:"teal"}}>Publish</Button>
//           </Form>
//         </CardBody>
//       </Card>
//     </Container>
//     </div>
//   );
// }
   
// export default Write;
 

















// import React, { useState } from 'react';
// import './write.css';
// import axios from 'axios';

// function Write() {
//   const [image, setImage] = useState(null);
//   const [featuredImage, setFeaturedImage] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (e.target.id === 'featuredImageInput') {
//       setFeaturedImage(file);
//     } else {
//       setImage(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('image', image);
//     formData.append('title', e.target.title.value);
//     formData.append('content', e.target.content.value);
//     formData.append('author', e.target.author.value);
//     formData.append('postedDate', e.target.postedDate.value);
//     formData.append('tag', e.target.tag.value);
//     formData.append('category', e.target.category.value);
//     formData.append('featuredImage', featuredImage);
//     formData.append('uFileName', e.target.uFileName.value);

//     try {
//       const response = await axios.post('http://localhost:5122/api/BlogPosts', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log(response.data); // log the response from the API
//       // Optionally, you can redirect the user to another page after successful submission
//       // history.push('/success');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className='write'>
//       <img
//         className='writeImg'
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKLq5yQL4kp_cW87LMjy1QQxMONkVO751kg&usqp=CAU"
//         alt="" />
//       <form className='writeForm' onSubmit={handleSubmit}>
//         <div className="writeFormGroup">
//           <label htmlFor='fileInput'>
//             <i className="writeIcon fa-solid fa-plus"></i>
//           </label>
//           <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileChange} />
//           <input
//             type="text"
//             placeholder='Title'
//             className='writeInput'
//             id='title'
//             autoFocus={true} />
//         </div>
//         <div className="writeFormGroup">
//           <input
//             type="text"
//             placeholder='Author'
//             className='writeInput'
//             id='author' />
//         </div>
//         <div className="writeFormGroup">
//           <input
//             type="text"
//             placeholder='Posted Date'
//             className='writeInput'
//             id='postedDate' />
//         </div>
//         <div className="writeFormGroup">
//           <input
//             type="text"
//             placeholder='Tag'
//             className='writeInput'
//             id='tag' />
//         </div>
//         <div className="writeFormGroup">
//           <input
//             type="text"
//             placeholder='Category'
//             className='writeInput'
//             id='category' />
//         </div>
//         <div className="writeFormGroup">
//           <label htmlFor='featuredImageInput'>
//             Upload Featured Image:
//             <input type="file" id="featuredImageInput" onChange={handleFileChange} />
//           </label>
//         </div>
//         <div className="writeFormGroup">
//           <input
//             type="text"
//             placeholder='UFileName'
//             className='writeInput'
//             id='uFileName' />
//         </div>
//         <div className="writeFormGroup">
//           <textarea placeholder='Write Your Blog Content Here...' type="text" className='writeInput writeText' id='content'></textarea>
//         </div>
//         <button type="submit" className="writeSubmit">Publish</button>
//       </form>
//     </div>
//   )
// }

// export default Write;













// import React from 'react'
// import './write.css';
// import axios from 'axios';

// function Write() {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const Title = document.getElementById('title').value;
//     const Content = document.getElementById('content').value;
//     const Author = document.getElementById('author').value;
//     const PostedDate = document.getElementById('postedDate').value;
//     const Tag = document.getElementById('tag').value;
//     const Category = document.getElementById('category').value;
//     const FeaturedImage = document.getElementById('featuredImage').value;
//     const UFileName = document.getElementById('uFileName').value;
  
//     try {
//       const response = await axios.post('http://localhost:5122/api/BlogPosts', {
//         Title: Title,
//         Content: Content,
//         Author:Author,
//         PostedDate:PostedDate,
//         Tag:Tag,
//         Category:Category,
//         FeaturedImage:FeaturedImage,
//         UFileName:UFileName
        
//       });
//       console.log(response.data); // log the response from the API
//       // Optionally, you can redirect the user to another page after successful submission
//       // history.push('/success');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   return (
//     <div className='write'>
//         <img 
//         className='writeImg'
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKLq5yQL4kp_cW87LMjy1QQxMONkVO751kg&usqp=CAU"
//         alt="" />
//         <form className='writeForm'>
//             <div className="writeFormGroup">
//                 <label htmlFor='fileInput'>
//                 <i className="writeIcon fa-solid fa-plus"></i>
//                 </label>
//                 <input type="file" id="fileInput" style={{display:"none"}}/>
//                 <input 
//                 type="text" 
//                 placeholder='Title'
//                 className='writeInput' autoFocus={true} />
//             </div>
//             <div className="writeFormGroup">
//                 <textarea placeholder='Write Your Blog Content Here...' type="text" className='writeInput writeText'></textarea>
//             </div>
//             <button className="writeSubmit" onClick={handleSubmit}>Publish</button>
//         </form>
//     </div>
//   )
// }

// export default Write
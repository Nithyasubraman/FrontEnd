import { useState,useEffect } from 'react'
import axios from 'axios';
import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
 
function Login() {
  const initalvalues = {  Email: "", Password: "" };
    const [formValues, setformValues] = useState(initalvalues);
    const[formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const navigate = useNavigate();
 
    const handleChange = (e) => {
        const {name,value}=e.target;
        setformValues({...formValues,[name]:value})
       
            };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        try {
 
          const response = await axios.post('http://localhost:5122/api/Login/Login', formValues);
         
          console.log('Login Sucessfully:', response.data);
 
          window.alert('Login successfuly');
         
          //  navigate('/home');
 
      }
 
      catch (error) {
 
          console.error('Error:', error);
 
      }
    }
    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])
        const validate=(values)=>{
            const errors ={};
            const regex=/\b[A-Za-z0-9._%+-]+@center\.com\b/;
           
            if(!values.Email){
                errors.Email="Email is required!";
            }
            else {
              let name = values.Email.substring(0,values.Email.indexOf('@'));
              if (regex.test(values.Email)){
                navigate("/menu", {state: {username: name, email: values.Email} })
              }else if (values.Email==='admin@admin.com'&& values.Password==='12345'){
                navigate("/adminhome")
              }else{
                navigate("/home", {state: {username: name, email: values.Email} })
              }
              if(!values.Password){
                errors.Password="Password is required!";
              }else if (values.Password.length < 4 ){
                errors.Password="Password must be more than 4 charcters"
              }else if (values.Password.length > 10 ){
                errors.Password="Password must be exceed more than 10 charcters"
              }
            }
            if(Object.keys(formErrors).length === 0 && isSubmit){
              // navigate("/home")
            }
 
               
            return errors;
        }

        const navigateToHome = () => {
          navigate('/home');
      };
 
     
  return (
    <div class='container'>
 
      <form onSubmit={handleSubmit}>
 
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>Login</h1>
        <hr></hr>
        <div className="form-floating ">
          <input type="email" class="form-control" id="email" name="Email" value={formValues.Email} onChange={handleChange} required/>
          <label htmlFor="email" className={formValues.Email ? "active" : ""}>Email</label>
        </div><p>{formErrors.Email}</p>
 
        <div class="form-floating ">
          <input type="password" class="form-control" id="pwd" name="Password" value={formValues.Password} onChange={handleChange} required />
          <label htmlFor="pwd">Password</label>
        </div><p>{formErrors.Password}</p>
        <div class="footer">
 
          <button class="btn btn-primary" onClick={navigateToHome}>Login</button>
          <NavLink to='/register' style={{ display: 'flex', justifyContent: 'flex-end' }}>Don't Have an account? Signup!</NavLink>
        </div>
      </form>
 
    </div>
  )
}
 
export default Login;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { NavLink} from 'react-router-dom';
// import Cookies from 'js-cookie';
// export function Login() {
//     const [values, setValues] = useState({
//         email: '',
//         password: ''
//     });
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('http://localhost:5122/api/Login/Login', values)
//             .then(res => {
//                 if (res.data["emailstatus"] === true) {
//                     if (res.data["passwordstatus"] === true) {
//                         alert("User Logged in successfully..");
//                         Cookies.set("email", values.email);
//                         Cookies.set("password", values.password);
//                         navigate('/dashboard');
//                         window.location.reload();
//                     }
//                     else {
//                         alert("Invalid Credentials");
//                     }
//                 }
//                 else {
//                     alert("User not availble...");
//                     // navigate('/home');
//                 }
//                 console.log(res);
//             })
//             .catch(err => console.log(err));
//     }
//     return (
//         <>
//         <br/>
//          <h3 className="text-center">LOGIN</h3>
//             <form className="card container mt-5 p-5" onSubmit={handleSubmit} >
               

//                 <div className="mb-3">
//                     <label>Email address</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         placeholder="Enter email"
//                         required
//                         onChange={e => setValues({ ...values, email: e.target.value })}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         placeholder="Enter password"
//                         onChange={e => setValues({ ...values, password: e.target.value })}
//                         required
//                     />
//                 </div>

//                 <div className="d-grid">
//                     <button type="submit" className="btn btn-success">
//                         Submit
//                     </button>
//                 </div>

//                 <p className='signup user text-left'>
//                     {/* <a href='sign-up'>New User?</a> */}
//                     <NavLink to='/register' style={{display:'flex',justifyContent:'flex-end'}}>Already Have an account? Login!</NavLink>
//                 </p>
//             </form>
//         </>
//     );
// }

// export default Login;




// import React, { useState, useEffect } from "react";
// import basestyle from "../../../src/components/Base.module.css";
// // import loginstyle from "./Login.module.css";
// import loginstyle from "./Login.module.css";
// // import loginstyle from "../Login.module.css";
// // import 'Login.css';
// import axios from "axios";
// import { useNavigate, NavLink } from "react-router-dom";
// // import EmailIcon from '@mui/icons-material/Email';
// // import {IconButton} from '@mui/icons-material';

// const Login = ({ setUserState }) => {
//   const navigate = useNavigate();
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [user, setUserDetails] = useState({
//     Email: "",
//     password: "",
//   });

//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({
//       ...user,
//       [name]: value,
//     });
//   };
//   const validateForm = (values) => {
//     const error = {};
//     const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.Email) {
//       error.Email = "Email is required";
//     } else if (!regex.test(values.Email)) {
//       error.Email = "Please enter a valid email address";
//     }else if (values.Email==='admin123@gmail.com'&& values.Password==='admin123'){
//       error.Email="Admin Logged In Successfully";
//       // alert('Admin Logged In Successfully');
//     }else{
//       navigate("/profile")
//     }
//     if (!values.Password) {
//       error.password = "Password is required";
//     }
//     // else
//     // {
//     //   navigate('/profile');
//     // }

//     return error;
//   };


//   const loginHandler = (e) => {
//     e.preventDefault();
//     setFormErrors(validateForm(user));
//     setIsSubmit(true);
//     // if (!formErrors) {

//     // }
//   };

//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(user);
//       axios.post("http://localhost:5122/api/Login/Login", user).then((res) => {
//         alert(res.data.message);
//         setUserState(res.data.user);
//         navigate("/signup", { replace: true });
//       });
//     }
//   }, [formErrors]);
//   return (
//     <div className={ loginstyle.login}>
//       <form>
//         <h1>Login</h1>
//         {/* <span class="material-icons-outlined">
//           email
//         </span> */}
//         <input
//           type="email"
//           name="Email"
//           id="email"
//           placeholder="Email"
//           onChange={changeHandler}
//           value={user.Email}
//         />
//         <p className={basestyle.error}>{formErrors.Email}</p>
//         <input
//           type="password"
//           name="Password"
//           id="password"
//           placeholder="Password"
//           onChange={changeHandler}
//           value={user.Password}
//         />
//         <p className={basestyle.error}>{formErrors.Password}</p>
//         <button className={basestyle.button_common} onClick={loginHandler}>
//           Login
//         </button>
//       </form>
//       <NavLink to="/register">Not yet registered? Register Now</NavLink>
//     </div>
//   );
// };
// export default Login;





// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/Login.css';

// const Login = (props) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post('/api/auth/login', { email, password })
//       .then((res) => {
//         // Handle successful login
//         localStorage.setItem('token', res.data.token);
//         props.history.push('/');
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
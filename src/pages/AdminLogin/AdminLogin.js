import React  from 'react'
// import React, { useState } from 'react'
import './AdminLogin.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
// import PersonIcon from '@mui/icons-material/Person';
// import KeyIcon from '@mui/icons-material/Key';
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
// import { Button, NavItem } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import {Row,Col} from 'react-bootstrap'
 
 
// React form  hook schema validation
 
const schema = yup.object().shape(
    {
        email: yup.string().email("**Invalid Email address").required("**Email is required"),
        password: yup.string().required("**Password is Required").min(6, "**Minmun 6 chars is Required").max(14, "**Enter upto 14 chars is ")
    }
)
 
// created a login function to validate the user.
 
const AdminLogin = () => {
 
    // Calling the below  functions will help us in accessing our data and error messages using hooks.
 
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
 
    const Usenavigate = useNavigate();
 
   
 
    const onSubmit = data => {
      
 
        axios.post('http://localhost:5122/api/Login/checkloginadmin', data)
            .then(response => {
                // Handle success
                // window.alert("Login successfull");
 
                console.log(response.data);
                Cookies.set('userid', response.data); // Set cookie with user email
                Usenavigate('/admin');
 
            })
            .catch(error => {
                // Handle error
                // console.error('Login failed', error);
 
                // failerlogin();
                window.alert("User not found");
 
            })
           //set loading false after completing all process of from submition
    };
 
 
    return (
        <>
           
                <div className='login-app'>
                <div className='login-body-container'>
                </div>
                    <div className='login-containers'>
                        <div className="loginform-containers">
                            <div className="login-header">
                                <h2 data-testid="loginheader">Login</h2>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    {/* <a href='#' style={{color:'black'}} data-testid="nameicon">{<PersonIcon />}</a> */}
                                    <input data-testid="emailfield" {...register('email')} type='email' placeholder='Enter you email....'></input>
                                </div>
                                <p>{errors.email?.message}</p>
                                <div>
                                    {/* <a href='#' style={{color:'black'}} data-testid="passwordicon">{<KeyIcon />}</a> */}
                                    <input data-testid="passwordfield" {...register('password')} type='password' placeholder='Enter your password...'></input>
                                </div>
                                <p>{errors.password?.message}</p>
                                <div className='button-login'>
                                    <button data-testid="loginbutton" className='btn btn-primary' >Login</button>
                                </div>
                                <br/>
                                {/* <Link to='/register'><AppRegistrationIcon/></Link> */}
                                {/* <NavLink to='/register' style={{ display: 'flex', justifyContent: 'flex-end' }}>Don't Have an account? Signup!</NavLink> */}
                            </form>
                        </div>
 
                    </div>
 
                </div>
         
        </>
    )
}
 
export default AdminLogin    






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
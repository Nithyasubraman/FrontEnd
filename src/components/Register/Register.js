import React from 'react'
// import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
// import { NavItem,Button} from 'react-bootstrap';
 
 
 
const schema = yup.object().shape(
    {
        name: yup.string().required('**Last name is required'),
        email: yup.string().email('**Please enter the Valid email').required('**Email is required'),
        password: yup.string().required().min(6, "**Minimun 6 chars is Required").max(14, "**Enter upto 14 chars only"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null])
    }
)
 
const Register = () => {
    const Usenavigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
 
    console.log(errors);
 
    // function to handle form submission
    const onSubmit = data => {
        axios.post('http://localhost:5122/api/Login/UserSignup', data)
            .then(response => {
                // Handle success
 
 
                window.alert("Registration successfull", response.data);
                Usenavigate('/Login')
                // console.log('Registration successful', response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Registration failed', error);
            });
 
        // console.log(data);
 
    };
 
 
 
    return (
        <>
            <div className='registration-app'>
                <div className="registration-container">
                    <div className='registerHeader'>
                        <h2 data-testid='registration-heading'>Registration</h2>
                    </div>
                    <div className='registerform-container'>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <input {...register('name')} placeholder='First Name.....' data-testid='namefield'></input>
                            <p data-testid="nameerrormessage">{errors.name?.message}</p>
 
                            <input {...register('email')} type='email' placeholder='Email.....' data-testid='emailfield'></input>
                            <p>{errors.email?.message}</p>
 
                            <input {...register('password')} type='password' placeholder='Password.....' data-testid='passwordfield'></input>
                            <p>{errors.password?.message}</p>
 
                            <input {...register('confirmPassword')} type='password' placeholder='Confirm Password.....' data-testid='confirmPasswordfield'></input>
                            <p>{errors.confirmPassword?.message}</p>
 
                            <button data-id="registerbutton" className='btn btn-primary'>Register!</button>
                            <br/>
                            <br/>
                            <NavLink to='/login' style={{display:'flex',justifyContent:'flex-end'}}>Already Have an account? Login!</NavLink>

                        </form>
<br></br>
                        {/* <Link to="/"><button className='btn btn-success'>Back</button></Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Register






// import React, { useEffect, useState } from "react";
// import basestyle from "../Base.module.css";
// import registerstyle from "./Register.module.css";
// import axios from "axios";

// import { useNavigate, NavLink } from "react-router-dom";
// const Register = () => {
//   const navigate = useNavigate();

//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [user, setUserDetails] = useState({
//     // fname: "",
//     Name: "",
//     Email: "",
//     Password: "",
//     confirmPassword: "",
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
//     // if (!values.fname) {
//     //   error.fname = "First Name is required";
//     // }
//     if (!values.Name) {
//       error.Name = "Name is required";
//     }
//     if (!values.Email) {
//       error.Email = "Email is required";
//     } else if (!regex.test(values.Email)) {
//       error.Email = "This is not a valid email format!";
//     }
//     if (!values.Password) {
//       error.Password = "Password is required";
//     } else if (values.Password.length < 4) {
//       error.Password = "Password must be more than 4 characters";
//     } else if (values.Password.length > 10) {
//       error.Password = "Password cannot exceed more than 10 characters";
//     }
//     if (!values.confirmPassword) {
//       error.confirmPassword = "Confirm Password is required";
//     } else if (values.confirmPassword !== values.Password) {
//       error.confirmPassword = "Confirm password and password should be same";
//     }
//     else{
//       navigate('/login');
//     }
//     return error;
//   };
//   const signupHandler = (e) => {
//     e.preventDefault();
//     setFormErrors(validateForm(user));
//     setIsSubmit(true);

//     if (!formErrors) {
//       setIsSubmit(true);
//     }
//     const Login = () => {
//       navigate('/Login');
//     };

//     // navigate('/Login');
//   };

//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(user);
//       axios.post("http://localhost:5122/api/Login/UserSignup", user).then((res) => {
//         alert(res.data.message);
//         navigate("/login", { replace: true });
//       });
//     }
//   }, [formErrors]);
//   return (
//     <div className="rgpage">
//       <div className={registerstyle.register}>
//         <form>
//           <h1>Create your account</h1>
//           <br/>
//           <input
//             type="text"
//             name="Name"
//             id="name"
//             placeholder="Name"
//             onChange={changeHandler}
//             value={user.Name}
//           />
//           <p className={basestyle.error}>{formErrors.Name}</p>
//           {/* <input
//             type="text"
//             name="fname"
//             id="fname"
//             placeholder="First Name"
//             onChange={changeHandler}
//             value={user.fname}
//           />
//           <p className={basestyle.error}>{formErrors.fname}</p>
//           <input
//             type="text"
//             name="lname"
//             id="lname"
//             placeholder="Last Name"
//             onChange={changeHandler}
//             value={user.lname}
//           />
//           <p className={basestyle.error}>{formErrors.lname}</p> */}
//           <input
//             type="email"
//             name="Email"
//             id="email"
//             placeholder="Email"
//             onChange={changeHandler}
//             value={user.Email}
//           />
//           <p className={basestyle.error}>{formErrors.Email}</p>
//           <input
//             type="password"
//             name="Password"
//             id="password"
//             placeholder="Password"
//             onChange={changeHandler}
//             value={user.Password}
//           />
//           <p className={basestyle.error}>{formErrors.Password}</p>
//           <input
//             type="password"
//             name="confirmPassword"
//             id="confirmPassword"
//             placeholder="Confirm Password"
//             onChange={changeHandler}
//             value={user.confirmPassword}
//           />
//           <p className={basestyle.error}>{formErrors.confirmPassword}</p>
          
//           <button className={basestyle.button_common} onClick={signupHandler}>   
//             Register
//           </button>
//         </form>
//         <NavLink to="/login">Already registered? Login</NavLink>
//       </div>
//     </div>
//   );
// };
// export default Register;

import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink ,useNavigate} from 'react-router-dom';
// import recycle from './Images/recycle.png'
// import './Signup.css'
 
// import Cookies from 'js-cookie';
function Register() {
    const initalvalues = { id:0, Name: "", Email: "", Password: "", ConfirmPassword: "" };
    const [formValues, setformValues] = useState(initalvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
   
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value })
    }
    const navigate = useNavigate();
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])
 
    const handleSubmit = async(e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        try {
            const response = await axios.post('http://localhost:5122/api/Login/UserSignup', formValues);
            console.log('User created:', response.data);
            
            // window.alert('User Registered successfuly');
       
            navigate('/login');
 
        }
 
        catch (error) {
 
            console.error('Error:', error);
 
        }
    }
 
    const validate = (values) => {
        const errors = {};
 
        const regex = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/;
 
        if (!values.Name) {
            errors.Name = "Name is required!";
        }
        if (!values.Email) {
            errors.Email = "Email is required!";
        }
        if (!values.Password) {
          errors.Password = "Password is required!";
      
        } else if (!regex.test(values.Email)) {
            errors.Email = "This is not a valid email format!"
        }
        if (!values.Password) {
            errors.Password = "Password is required!";
        } else if (values.Password.length < 4) {
            errors.Password = "Password must be more than 4 charcters"
        } else if (values.Password.length > 10) {
            errors.Password = "Password must be exceed more than 10 charcters"
        }
       
        if (!values.ConfirmPassword) {
            errors.ConfirmPassword = "Confirm Password is required";
        } else if (values.ConfirmPassword !== values.Password) {
            errors.ConfirmPassword = "Confirm password and password should be same";
        }
        // if (Object.keys(formErrors).length === 0 && isSubmit){
        //     navigate('/userdash')
        // }
        return errors;
    }
  
    return (
        <div class='container' style={{border:"none"}}>
            <div className='signup'>
                <form onSubmit={handleSubmit} className='form'>
                    <h1 style={{ display: 'flex', justifyContent: 'center' }}>Signup</h1>
                    <hr></hr>
                    <div className="form-floating ">
                        <input type="text" class="form-control" id="Name" name="Name" value={formValues.Name} onChange={handleChange} />
                        <label htmlFor="name">Name</label>
                    </div><p>{formErrors.Name}</p>
                    <div className="form-floating ">
                        <input type="email" class="form-control" id="Email" name="Email" value={formValues.Email} onChange={handleChange} />
                        <label htmlFor="email">Email</label>
                    </div><p>{formErrors.Email}</p>
 
                    <div class="form-floating ">
                        <input type="password" class="form-control" id="Password" name="Password" value={formValues.Password} onChange={handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div><p>{formErrors.Password}</p>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="ConfirmPassword" name="ConfirmPassword" value={formValues.ConfirmPassword} onChange={handleChange}/>
                        <label htmlFor="confirmpassword">ConfirmPassword</label>
                    </div><p>{formErrors.ConfirmPassword}</p>
               
                   
                    <button class="btn btn-primary">Submit</button>
                    <NavLink to='/login' style={{display:'flex',justifyContent:'flex-end'}}>Already Have an account? Login!</NavLink>
                </form>
            </div>
            {/* <div className='signup-post'>
                <img src={recycle} alt='Signup' />
            </div> */}
        </div>
    )
}
 
export default Register;






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
//     ConfirmPassword: "",
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
//     if (!values.ConfirmPassword) {
//       error.ConfirmPassword = "Confirm Password is required";
//     } else if (values.ConfirmPassword !== values.Password) {
//       error.ConfirmPassword = "Confirm password and password should be same";
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
//             name="ConfirmPassword"
//             id="ConfirmPassword"
//             placeholder="Confirm Password"
//             onChange={changeHandler}
//             value={user.ConfirmPassword}
//           />
//           <p className={basestyle.error}>{formErrors.ConfirmPassword}</p>
          
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

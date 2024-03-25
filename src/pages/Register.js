// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/Register.css';

// const Register = (props) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post('/api/auth/register', { email, password })
//       .then((res) => {
//         // Handle successful registration
//         props.history.push('/login');
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="register">
//       <h2>Register</h2>
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
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
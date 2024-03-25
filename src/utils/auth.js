// src/utils/auth.js
const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null;
  };
  
  const isAdmin = () => {
    // Replace with your logic to check if the user is an admin
    return true;
  };
  
  const logout = () => {
    localStorage.removeItem('token');
    // Optionally, you can also clear other user-related data from localStorage or state
  };
  
  export { isAuthenticated, isAdmin, logout };









// const isAuthenticated = () => {
//     const token = localStorage.getItem('token');
//     return token !== null;
//   };
  
//   const isAdmin = () => {
//     // Replace with your logic to check if the user is an admin
//     return true;
//   };
  
//   export { isAuthenticated, isAdmin };
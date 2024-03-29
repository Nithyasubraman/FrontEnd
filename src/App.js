import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './elements/Navbar';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogDetails from './pages/BlogDetails';
// import CreatePost from './pages/CreatePost';
import Login from './pages/Login/Login';
import Register from './components/Register/Register';
// import PrivateRoute from './components/PrivateRoute';
// import AdminDashboard from './pages/AdminDashboard';
// import PrivateRoute from './elements/PrivateRoute';
import './App.css';
import Navbar from './components/Navbar';
import TopBar from './components/topbar/TopBar';
import Write from './components/write/Write';
import Footer from './components/footer/Footer';
import SearchForm from './components/search/SearchForm';
import Admin from './components/admin/Admin';
import AdminLogin from './pages/AdminLogin/AdminLogin';
// import Dashboard from './DashboardModule/Dashboard';
// import Header from './components/headerCpy/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* <Header/> */}
        <Routes>
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* <Route exact path="/" element={<Home/>} /> */}
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/write" element={<Write/>} />
          <Route path="/blogs" element={<BlogList/>} />
          <Route path="/blog/:id" element={<BlogDetails/>} />
          {/* <Route 
          path="/create"
          element={
            <PrivateRoute component={CreatePost} />
          }
          /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register/>} />
          <Route path="/search" element={<SearchForm/>} />
          <Route path="/topBar" element={<TopBar/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/adminlogin" element={<AdminLogin/>} />
          {/* <Route path="/dashboard" element={<Dashboard/>} /> */}

          {/* <Route path="/register" element={<Register/>} /> */}
          {/* <Route 
          path="/admin"
          element={
            <PrivateRoute component={AdminDashboard} />
          }
          /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;





import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Pagenotfound from './pages/pageNotFound/Pagenotfound';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import Adduser from './pages/AddUser/Adduser';
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    
      <Route index path="/" element={<Home/>}/>
      <Route index path="/login" element={<Login/>}/>
      <Route index path="/userdata" element={<UserList/>}/>
      <Route index path="/userdata/user/:id" element={<User/>}/>
      <Route index path="/adduser" element={<Adduser/>}/>
     
      
      
      <Route path="*" element={<Pagenotfound/>}/>
      
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;

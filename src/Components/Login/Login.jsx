import React from "react";
import './Login.css'
import { Dashboard } from '../Dashboard/Dashboard';
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";

const Login = () => {

    return (
        <div className="mainpage">
          <div className="container">
           <div className="headerleft">
            <div className="Section1">
               Welcome 
            </div>
            <div className="Section1part">
              Time management Application by Mohan
            </div>
            

          </div>


           <div className="headerright">
            
            <div className="Section2">
            <img src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611737.jpg" alt="22" />
            </div>
            <div className="Section3">
            Welcome Mohan
            </div>

           </div>
    
           
        </div>
        <div>
        <Sidebar/>

        </div>
        <div className="dashboardcontent">

        <BrowserRouter>
        <Routes>
          
          <Route path="/task" element={<Profile/>}/>
          <Route path="/home" element={<Dashboard/>}/>

        </Routes>
        
        
        </BrowserRouter>
           
        </div>
        
        </div>
        
    )
    
    }

export default Login

import React from "react";
import './Sidebar.css'
import logo from '../Asset/logo.png'
import Dashboard from "../Dashboard/Dashboard";

import { Sidebardata } from "./Sidebardata";







const Sidebar = () => {

     return (
        <div>
        <div className="Sidebar">
            <div className="logo">
                
            <img className="logoimg" src={logo} alt="Girl in a jackeqt" width="65%" ></img>
            </div>
            <ul className="Sidebarlist"  >
                {Sidebardata.map((val)=>{
                return (
                    <li   className="Row" onClick={() => {window.location.pathname = val.link}}>{val.title}</li>
                )
            })}
            </ul>
           
            

        </div>

            

        </div>

        
     )
    
    }

    

export default Sidebar;



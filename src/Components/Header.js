import { IMAGE_URL } from "../utils/linkUrl";
import { useState } from "react";

 const Header=()=>{
   const[btnName,setBtnName]=useState("Login")
  return(<div className="header">
        <div >
          <img className="logo" src={IMAGE_URL} />
        </div>
        <div className="nav-item"> 
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="Loginbtn" onClick={()=>{
             btnName==="Login"? setBtnName("LogOut") : setBtnName("Login")
            }}>{btnName}</button>
          </ul>
          </div> 
        </div>)
 }
 export default Header;
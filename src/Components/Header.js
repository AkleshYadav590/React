import { IMAGE_URL } from "../utils/linkUrl";
import { useState } from "react";
import { Link } from "react-router";

 const Header=()=>{
   const[btnName,setBtnName]=useState("Login")
  return(<div className="header">
        <div >
          <img className="logo" src={IMAGE_URL} />
        </div>
        <div className="nav-item"> 
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <button className="Loginbtn" onClick={()=>{
             btnName==="Login"? setBtnName("LogOut") : setBtnName("Login")
            }}>{btnName}</button>
          </ul>
          </div> 
        </div>)
 }
 export default Header;
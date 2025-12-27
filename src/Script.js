import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestroMenu from "./Components/RestroMenu";
import Error from "./Components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import Body from "./Components/Body";

const AppLayout=()=>{
  return(
    <div className="App">
<Header/>
<Outlet/>
<Footer/>
    </div>
  )
}

const AppRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[ 
    {
    path:"/",
    element:<Body />
    }  ,{
    path:"/about",
    element:<About />
  },{
    path:"/contact",
    element:<Contact/>
  },{
     path:"/restro/:resid",
    element:<RestroMenu/>
  }],
    errorElement:<Error/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
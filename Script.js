import React from "react";
import ReactDOM from "react-dom/client";
 

const Heading = ()=> 
(
<div>
<h1>
Namaste react 🚀🚀
</h1>
</div>
)
 const Button=()=>(
    <button onClick={alert} >Hello</button>
 )

const  ReactComponent= () => (
<div>
    <Heading/>
<h1 id="parent"> ReactComponent mode </h1>
<Button/>
</div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent/>);
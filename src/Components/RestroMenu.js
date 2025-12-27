import { useEffect } from "react";
const RestroMenu=()=>{
useEffect(()=>{
    fetchMenu()
},[])

const fetchMenu=async()=>{
const Data= await fetch (  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=");

console.log(Data);
const json= await Data.json()
console.log(json);

}
    return(
        <div className="Menu-Container">
            <h1>Restro Name</h1>
            <h3>Menu</h3>
            <ul>
<li>Burgur</li>
<li>chomin</li>
<li>tea</li>


            </ul>

        </div>
    )
}
export default RestroMenu;
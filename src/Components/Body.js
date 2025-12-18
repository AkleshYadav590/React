import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
// Body Component
const Body = () => {
  //initial Restraunt list container
  const [restroList, setrestroList] = useState([]);
  //Contains initial SearchText and SearchText
  const[searchText,setSearchText]=useState("")
  //Work Like A BackUp Restraunt list Container 
  const[FilteredRestro,setFilteredRestro]=useState([]);


 
  useEffect(() => {
    fetchData();
  }, []);

 //Api From Swiggy
  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7596035&lng=83.38185130000001&collection=83639&tags=layout_CCS_Biryani&offset=0"
    );

    const json = await res.json();

    const restaurants =json?.data?.cards?.
    find(card =>card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    ?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//Using Both to contain Restraunts,Later Used In Search Function 
    setrestroList(restaurants);
    setFilteredRestro(restaurants);
  };
 
//Until Api Call Is Made And We Have The Data Shimmer IS There Working As Fake Data Body
//Search BAR And Search Button
  return restroList.length=== 0?  <Shimmer/> : (
    <div>
      <div className="search">
      <input type="text" className="Search-Bar" value={searchText}
       onChange={(e)=>{setSearchText(e.target.value)}}/> 
      <button className="SearchBtn"
      onClick={()=>{       
        const FilteredSearchRestro=restroList.
        filter((restaurants)=>restaurants.info.name.toLowerCase().includes(searchText.toLowerCase()))
        //Searched Restro Will only Render In UI
        setFilteredRestro(FilteredSearchRestro)}}>Search</button>

          
       <button
       //Filter Button 
          className="Filter-Btn"
          onClick={() => {
            const filtered = restroList.filter(
              restro => restro.info.avgRating >= 4
            );
            setrestroList(filtered);
          }}
        >Filter Top Restro</button>
      </div>
      

      <div className="res-container">
        {FilteredRestro.map(restaurant => (
          <ResCard
            key={restaurant.info.id}
            resData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
//Summary of RestroList And FilteredRestro Local State is That THey Both Contain Lists Of Restraunts. RestroList Contains all Restro list and renders It on UI While FilteredRestro Contains Restro LIst Of SEarched Restro And Renders THem IN Ui
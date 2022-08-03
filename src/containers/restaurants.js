import { useEffect, useState } from "react";
import Api from "../API/Api";
import Restaurant from "../component/restaurant";


const Restaurants = () => {

 const [nval, setNval] = useState([])
 useEffect(() => {
  Api('restaurants').then((aD) => setNval(aD)).catch((error) => error.message)
 }, []);

 return (
  <div className="Restaurants">
   {nval.map((rest) =>
    <div key={'r'+rest.id}>
     <Restaurant restaurant={rest} />
    </div>
   )}
  </div>
 )
}

export default Restaurants

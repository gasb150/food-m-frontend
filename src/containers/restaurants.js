import { useEffect, useState } from "react";
import Api from "../API/Api";
import Restaurant from "../component/restaurant";
import { fetchRestaurant } from "../reducers/restaurantSlice";
import store from "../store";


const Restaurants = () => {

 const [nval, setNval] = useState([])
 console.log(fetchRestaurant.restaurant)
 useEffect(() => {
  store.dispatch(fetchRestaurant()).then(({ payload }) => (setNval(payload)))
 }, [])
 return (
  <div className="Restaurants">
   {nval.map((rest) =>
    <div key={'r' + rest.id}>
     <Restaurant restaurant={rest} />
    </div>
   )}
  </div>
 )
}

export default Restaurants

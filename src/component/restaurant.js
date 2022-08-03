import React from "react"


const Restaurant = (props) => {
 let restaurant = props.restaurant
 let restaurant_name = restaurant.name
 let key = restaurant.id
 let full_name = restaurant.owner.first_name + ' ' +restaurant.owner.last_name
 return (
  <div key ={key} className="Restaurant">
   <li key={'rest' + key}>{restaurant_name}</li>
   <li key={'owner' + key}>{full_name}</li>
   <li key={'menu' + key}><a href='#'>menu</a></li>
   <li key={'cont' + key}><a href='#'>contact</a></li>
  </div>
 )
}

export default Restaurant
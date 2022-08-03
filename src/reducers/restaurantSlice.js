import { configureStore, createSlice } from "@reduxjs/toolkit";

//import { composeWithDevTools } from "redux-devtools-extension";

const initialState = null

const restaurantSlice = createSlice({
 name: 'restaurantRequest',
 initialState,
 reducers: {
  get_restaurants: (state, action) => {
   state = action.payload
  },
  /*get_menues: (state, action) => {
   state = action.payload
  },
  get_dishes: (state, action) => {
   state = action.payload
  }
  */
 }
})



// module.exports = restaurantSlice.reducer
export const restaurantActions = restaurantSlice.actions

export default restaurantSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from './reducers/restaurantSlice'
import menuReducer from './reducers/menuSlice'
import dishReducer from './reducers/dishSlice'

const store = configureStore({
 reducer: {
  restaurants: restaurantReducer,
  menues: menuReducer,
  dishes: dishReducer
 }
})

export default store
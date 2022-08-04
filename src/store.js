import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import restaurantReducer from './reducers/restaurantSlice'
import menuReducer from './reducers/menuSlice'
import dishReducer from './reducers/dishSlice'


const store = configureStore({
 reducer: {
  restaurants: restaurantReducer,
  menues: menuReducer,
  dishes: dishReducer
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
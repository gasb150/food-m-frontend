import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../API/Api";

//import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
 loading: false,
 restaurants: [],
 error: ''
}

export const fetchRestaurant = createAsyncThunk('restaurant/fetchRestaurants', ()=>
 Api('restaurants')
 )

const restaurantSlice = createSlice({
 name: 'restaurantRequest',
 initialState,
 extraReducers: builder =>{
  builder.addCase(fetchRestaurant.pending, state =>  {
   state.loading = true
  })
  builder.addCase(fetchRestaurant.fulfilled, (state, {payload}) =>{
   state.loading = false
   state.restaurants = payload
   state.error = ''
  })
  builder.addCase(fetchRestaurant.rejected, (state, action) =>{
   state.loading = false
   state.restaurants = []
   state.error = action.error.message
  })
 }
})


export default restaurantSlice.reducer
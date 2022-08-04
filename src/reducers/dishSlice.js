import { createSlice } from '@reduxjs/toolkit';

// import { composeWithDevTools } from "redux-devtools-extension";

const initialState = null;

const dishSlice = createSlice({
  name: 'dishRequest',
  initialState,
  reducers: {
  /* get_restaurants: (state, action) => {
   state = action.payload
  },
  get_menues: (state, action) => {
   state = action.payload
  },
   */
    get_dishes: (state, action) => action.payload,
  },
});

export const dishActions = dishSlice.actions;
export default dishSlice.reducer;

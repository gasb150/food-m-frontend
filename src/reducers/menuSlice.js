import { createSlice } from '@reduxjs/toolkit';

// import { composeWithDevTools } from "redux-devtools-extension";

const initialState = null;

const menuSlice = createSlice({
  name: 'menuRequest',
  initialState,
  reducers: {
  /* get_restaurants: (state, action) => {
    state = action.payload
  },
  */
    get_menues: (state, action) => action.payload,
  /*
  get_dishes: (state, action) => {
    state = action.payload
  }
  */
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;

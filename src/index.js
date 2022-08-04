import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { fetchRestaurant } from './reducers/restaurantSlice';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Initial state', store.getState())
const fetching = store.subscribe(()=>{})
store.dispatch(fetchRestaurant())

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


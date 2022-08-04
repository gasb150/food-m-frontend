import { useEffect, useState } from 'react';
import Restaurant from '../component/restaurant';
import { fetchRestaurant } from '../reducers/restaurantSlice';
import store from '../store';

const Restaurants = () => {
  const [nval, setNval] = useState([]);
  useEffect(() => {
    store.dispatch(fetchRestaurant()).then(({ payload }) => (setNval(payload)));
  }, []);
  return (
    <div className="Restaurants">
      {
      nval.map((rest) => (
        <div key={`r ${rest.id}`}>
          <Restaurant owner={rest.owner} menu={rest.menu} id={rest.id} name={rest.name} />
        </div>
      ))
      }
    </div>
  );
};

export default Restaurants;

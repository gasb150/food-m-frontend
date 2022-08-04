import React from 'react';
import PropTypes from 'prop-types';

const Restaurant = ({ restaurant, name, id }) => {
  const restaurantName = name;
  const key = id;
  const fullName = `${restaurant.owner.first_name} ${restaurant.owner.last_name}`;
  return (
    <div key={key} className="Restaurant">
      <li key={`rest ${key}`}>{restaurantName}</li>
      <li key={`owner ${key}`}>{fullName}</li>
      <li key={`menu ${key}`}><a href="/menu">menu</a></li>
      <li key={`cont ${key}`}><a href="/contact">contact</a></li>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};

Restaurant.defaultProps = {
  restaurant: 'nil',
  name: 'nil',
  id: 'nil',
};

export default Restaurant;

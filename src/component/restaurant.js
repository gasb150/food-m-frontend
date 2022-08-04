import React from 'react';
import PropTypes from 'prop-types';

const Restaurant = (restaurant) => {
  const {
    name, key, owner, menuId,
  } = restaurant;

  const fullName = `${owner.first_name} ${owner.last_name}`;
  return (
    <div key={key} className="Restaurant">
      <li key={`rest ${key}`}>{name}</li>
      <li key={`owner ${key}`}>{fullName}</li>
      <li key={`menu ${key}`}><a href={`/menu ${menuId}`}>menu</a></li>
      <li key={`cont ${key}`}><a href="/contact">contact</a></li>
    </div>
  );
};

Restaurant.propTypes = {
  owner: PropTypes.shape(
    {
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    },
  ).isRequired,
};

export default Restaurant;

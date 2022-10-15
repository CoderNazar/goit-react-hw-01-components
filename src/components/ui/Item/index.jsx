import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ label, quantity }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{quantity}</span>
    </li>
  );
};

Item.defaultProps = {
  label: 'Label',
  quantity: 0,
};

Item.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.number,
};


export { Item };

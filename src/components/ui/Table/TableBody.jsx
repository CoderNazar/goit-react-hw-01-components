import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ children, className }) => {
  return <tbody className={className}>{children}</tbody>;
};

TableBody.defaultProps = {
  className: '',
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { TableBody };

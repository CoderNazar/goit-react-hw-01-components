import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ children, className }) => {
  return <tr className={className}>{children}</tr>;
};

TableRow.defaultProps = {
  className: '',
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { TableRow };

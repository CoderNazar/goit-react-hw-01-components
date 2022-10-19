import React from 'react';
import PropTypes from 'prop-types';

const TableCellHeader = ({ children }) => {
  return <th>{children}</th>;
};

TableCellHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export { TableCellHeader };

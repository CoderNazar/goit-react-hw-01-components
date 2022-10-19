import React from 'react';
import PropTypes from 'prop-types';

const TableCellBody = ({ children }) => {
  return <td>{children}</td>;
};

TableCellBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export { TableCellBody };

import React from 'react';
import PropTypes from 'prop-types';

const TableCellBody = ({ children, className }) => {
  return <td className={className}>{children}</td>;
};

TableCellBody.defaultProps = {
  className: '',
};

TableCellBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};

export { TableCellBody };

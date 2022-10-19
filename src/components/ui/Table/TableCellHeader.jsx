import React from 'react';
import PropTypes from 'prop-types';

const TableCellHeader = ({ children, className }) => {
  return <th className={className}>{children}</th>;
};

TableCellHeader.defaultProps = {
  className: '',
};

TableCellHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};

export { TableCellHeader };

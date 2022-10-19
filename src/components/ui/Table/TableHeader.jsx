import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ children, className }) => {
  return <thead className={className}>{children}</thead>;
};

TableHeader.defaultProps = {
  className: '',
};

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { TableHeader };

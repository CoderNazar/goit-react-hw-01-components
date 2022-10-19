import React, { createElement, memo } from 'react';
import PropTypes from 'prop-types';

const List = memo(({ tag, className, children }) => {
  const ComponentList = () => createElement(tag, { className }, children);
  return <ComponentList />;
});

List.defaultProps = {
  children: null,
  tag: 'ul',
  className: '',
};

List.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
};

export { List };

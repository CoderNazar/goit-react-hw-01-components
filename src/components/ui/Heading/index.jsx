import React, { createElement } from 'react';
import PropTypes from 'prop-types';

const Heading = ({ tag, text, className }) => {
  const Component = () => createElement(tag);
  return <Component className={className}>{text}</Component>;
};

Heading.defaultProps = {
  tag: 'h1',
  text: 'text',
  className: 'name',
};

Heading.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export { Heading };

import React,{memo} from 'react';
import PropTypes from 'prop-types';

const Text = memo(({ text, className }) => {
  return <p className={className}>{text}</p>;
});

Text.defaultProps = {
  className: '',
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export { Text };

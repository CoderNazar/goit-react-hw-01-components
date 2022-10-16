import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Image = ({ src, alt, width, height, className, circle, ...arts }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cx(className, { [styles.roundPicture]: circle })}
      width={width}
      height={height}
      {...arts}
    />
  );
};

Image.defaultProps = {
  alt: 'alt',
  className: '',
  width: 40,
  height: 40,
  circle: true,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circle: PropTypes.bool,
};

export { Image };

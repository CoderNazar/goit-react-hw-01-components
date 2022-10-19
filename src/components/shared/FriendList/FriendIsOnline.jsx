import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const FriendIsOnline = ({ isOnline }) => {
  return (
    <span
      className={cx(
        styles.wrapperIsOnline,
        isOnline ? styles.online : styles.offline
      )}
    ></span>
  );
};

FriendIsOnline.defaultProps = {
  isOnline: false,
};

FriendIsOnline.propTypes = {
  isOnline: PropTypes.bool,
};

export { FriendIsOnline };

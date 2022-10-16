import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const ContentItem = ({
  statLabel,
  statInfo,
  classNameLabel,
  classNameInfo,
}) => {
  return (
    <>
      <span className={classNameLabel}>{statLabel}</span>
      <span className={classNameInfo}>{statInfo}</span>
    </>
  );
};

const Item = ({
  children,
  statLabel,
  statInfo,
  className,
  classNameLabel,
  classNameInfo,
}) => {
  return (
    <li className={cx(styles.containerItem, className)}>
      {children ? children : (
        <ContentItem
          statLabel={statLabel}
          statInfo={statInfo}
          classNameLabel={classNameLabel}
          classNameInfo={classNameInfo}
        />
      )}
    </li>
  );
};

Item.defaultProps = {
  children: null,
  statLabel: 'label',
  statInfo: 'info',
  className: '',
  classNameLabel: '',
  classNameInfo: '',
};

Item.propTypes = {
  children: PropTypes.node,
  statLabel: PropTypes.string,
  statInfo: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  classNameLabel: PropTypes.string,
  classNameInfo: PropTypes.string,
};

export { Item };

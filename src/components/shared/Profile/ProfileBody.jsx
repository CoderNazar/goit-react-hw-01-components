import React from 'react';
import PropTypes from 'prop-types';
import { Item, List } from 'components/ui';
import { firstLetterToUppercase } from 'utils/helpers';
import styles from './index.module.css';

const ProfileBody = ({ allStats }) => {

  if(!allStats.length){
    return null
  }

  return (
    <List className={styles.wrapperProfileBody}>
      {allStats.map(([label, quantity], index) => {
        const newLabel = firstLetterToUppercase(label);
        return (
          <Item
            key={index}
            statLabel={newLabel}
            statInfo={quantity}
            classNameLabel={styles.labelProfile}
            classNameInfo={styles.infoProfile}
            className={styles.item}
          />
        );
      })}
    </List>
  );
};

ProfileBody.defaultProps = {
  allStats: [],
};

ProfileBody.propTypes = {
  allStats: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ),
};

export { ProfileBody };

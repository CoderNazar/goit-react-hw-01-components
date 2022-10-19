import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { generateColor } from 'utils/helpers';
import { List, Item } from 'components/ui';
import styles from './index.module.css';

const StatisticsBody = ({ stats }) => {

  if(!stats.length){
    return null
  }

  return (
    <List className={styles.wrapperStatisticsBody}>
      {stats.map(({ id, label, percentage }) => {
        const newPercentage = `${percentage}%`;
        return (
          <Item
            key={id}
            statLabel={label}
            statInfo={newPercentage}
            className={cx(styles.item, generateColor(label))}
            classNameLabel={styles.labelStatistic}
            classNameInfo={styles.infoStatistic}
          />
        );
      })}
    </List>
  );
};

StatisticsBody.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.string,
    })
  ).isRequired,
};

export { StatisticsBody };

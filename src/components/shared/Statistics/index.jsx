import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsHeader } from './StatisticsHeader';
import { StatisticsBody } from './StatisticsBody';
import styles from './index.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.wrapperStatistics}>
      <StatisticsHeader title={title} />
      <StatisticsBody stats={stats} />
    </section>
  );
};

StatisticsBody.defaultProps = {
  title: 'title',
  stats: [],
};

StatisticsBody.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export { Statistics };

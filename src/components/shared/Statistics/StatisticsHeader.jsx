import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'components/ui';
import styles from './index.module.css';

const StatisticsHeader = ({ title }) => {
  return <Heading tag={'h2'} text={title} className={styles.titleStatistic} />;
};

StatisticsHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export { StatisticsHeader };

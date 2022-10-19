import React from 'react';
import styles from './index.module.css';

const Loader = () => {
  return (
    <div className={styles.containerLoader}>
      <p>Loading...</p>
    </div>
  );
};

export { Loader };

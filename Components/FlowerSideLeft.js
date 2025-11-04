import React from 'react';
import styles from './FlowerSideLeft.module.css';

const FlowerSideLeft = () => {
  return (
    // This wrapper should be placed inside a parent with position: relative
    <div className={styles.flowerWrapper} aria-hidden="true">
      <img src="/flower1.png" alt="" className={styles.flower} />
    </div>
  );
};

export default FlowerSideLeft;

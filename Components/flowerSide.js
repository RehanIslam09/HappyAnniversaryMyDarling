import React from 'react';
import styles from './FlowerSide.module.css';

const FlowerSide = () => {
  return (
    // This wrapper should be placed inside a parent that has position: relative
    <div className={styles.flowerWrapper} aria-hidden="true">
      <img src="/flower2.png" alt="" className={styles.flower} />
    </div>
  );
};

export default FlowerSide;

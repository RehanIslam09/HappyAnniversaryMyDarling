import React from 'react';
import { Great_Vibes } from 'next/font/google';
import styles from './Header.module.css';

// Load font
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
});

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={`${styles.title} ${greatVibes.className}`}>
        Happy First Anniversary My Darling
      </h1>
    </header>
  );
}

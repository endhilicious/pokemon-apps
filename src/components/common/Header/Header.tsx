import React from 'react';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Pokemon List</h1>
    </div>
  )
}

export default Header;

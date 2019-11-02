import React from 'react';
import Button from 'antd/es/button';
import styles from './index.css';
import NavigationMenu from '../components/NavigationMenu';

const Index: React.FC = () => {
  return (
    <div>
      <div className={styles.welcome}>
        <div className={styles.welcomeText}>
          <h1> WelCome to SDTTTT Page! 🐳  </h1>
        </div>
      </div>
    </div>
  );
}

export default Index

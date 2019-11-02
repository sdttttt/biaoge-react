import React from 'react';
import styles from './index.css';
import NavigationMenu from '../components/NavigationMenu';

const BasicLayout: React.FC = props => {

  return (
    <div className={styles.normal}>
      <NavigationMenu />
      {props.children}
    </div>
  );

};

export default BasicLayout;

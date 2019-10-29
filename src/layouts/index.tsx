import React from 'react';
import styles from './index.css';
import Hello from '../components/Hello';

const BasicLayout: React.FC = props => {

  if ((props as any).location.pathname == '/login') {
    return (
        <div className={styles.normal}>
          <h1 className={styles.title}> 123 </h1>
          <Hello />
        </div>
    );
  }

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}> 垃圾表哥 </h1>
      {props.children}
    </div>
  );
};

export default BasicLayout;

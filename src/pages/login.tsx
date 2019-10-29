import React from 'react';
import styles from './login.css';

export default class Login extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={styles.normal}>
        <h1>Page login</h1>
      </div>
    );
  }
}

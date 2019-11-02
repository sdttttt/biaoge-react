import React from 'react';
import styles from './index.css';
import NavigationMenu from '../components/NavigationMenu';
import { Provider } from 'react-redux';
import store from '../redux/store';

const BasicLayout: React.FC = props => {

  return (
    <Provider store={store}>
      <div className={styles.normal}>
        <NavigationMenu />
        {props.children}
      </div>
    </Provider>
  );

};

export default BasicLayout;

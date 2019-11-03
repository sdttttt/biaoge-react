import React from 'react';
import styles from './index.css';
import NavigationMenu from '../components/NavigationMenu';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store,{ persistStore } from '../redux/store';

const BasicLayout: React.FC = props => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore}>
      <div className={styles.normal}>
        <NavigationMenu />
        {props.children}
      </div>
      </PersistGate>
    </Provider>
  );

};

export default BasicLayout;

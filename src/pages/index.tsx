import React from 'react';
import styles from './index.css';
import http from '@/http';

const Index: React.FC = () => {

  http.post('http://121.40.48.194:10086/login', {
    data: {
      username: 'sdttttt',
      password: 'password'
    }
  }).then(req => { console.log(req) } )

  return (
    <div>
      <div className={styles.welcome}>
        <div className={styles.welcomeText}>
          <h1> WelCome to SDTTTT Page! 🐳 </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;

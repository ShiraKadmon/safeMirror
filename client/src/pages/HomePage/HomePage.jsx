import React from "react";
import styles from './Home.module.css';
import Buttons from '../../components/Buttons/Buttons.jsx';


const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Welcome to Safe Mirror!</h1>
      <Buttons />
    </div>
  );
};

export default Home;
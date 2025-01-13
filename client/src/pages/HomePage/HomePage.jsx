import React from "react";
import styles from './Home.module.css';
import Buttons from '../../components/Buttons/Buttons.jsx';
import botButton from '../../assets/Safe-Mirror-Button.png';


const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Welcome to Safe Mirror!</h1>
      <h2 className={styles.secondarytext}>Your safe place for conversations to raise self-confidence and body image</h2>
      <button className={styles.imagebutton}>
        <img src={botButton} alt="chat-bot" className={styles.botpicture} />
      </button>
    </div>
  );
};

export default Home;
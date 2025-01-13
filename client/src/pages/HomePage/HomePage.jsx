import React from "react";
import styles from './Home.module.css';
<<<<<<< HEAD
import Buttons from '../../components/Buttons/Buttons.jsx';
import botButton from '../../assets/Safe-Mirror-Button.png';
=======
import LoginPage from '../../components/LoginPage.jsx';
>>>>>>> main


const Home = () => {
  return (
    <div className={styles.home}>
<<<<<<< HEAD
      <h1 className={styles.headline}>Welcome to Safe Mirror!</h1>
      <h2 className={styles.secondarytext}>Your safe place for conversations to raise self-confidence and body image</h2>
      <button className={styles.imagebutton}>
        <img src={botButton} alt="chat-bot" className={styles.botpicture} />
      </button>
=======
      <h1 className={styles.headline}>SafeMirror</h1>
      <LoginPage />
>>>>>>> main
    </div>
  );
};

export default Home;
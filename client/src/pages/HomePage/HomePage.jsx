import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';
import botButton from '../../assets/Safe-Mirror-Button.png';
import DailyTip from "../../components/DailyTip/DailyTip";


function Home() {
  const navigate = useNavigate();

  const goToBot = () => {
    navigate("/chatbot");
  };  
  
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Welcome to Safe Mirror!</h1>
      <h2 className={styles.secondarytext}>Your safe place for conversations to raise self-confidence and body image</h2>
      <button onClick={goToBot} className={styles.imagebutton}>
        <img src={botButton} alt="chat-bot" className={styles.botpicture} />
      </button>
      <DailyTip />
    </div>
  );
};

export default Home;
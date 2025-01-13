import styles from './Home.module.css';
import LoginPage from '../../components/LoginPage.jsx';


const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>SafeMirror</h1>
      <LoginPage />
    </div>
  );
};

export default Home;

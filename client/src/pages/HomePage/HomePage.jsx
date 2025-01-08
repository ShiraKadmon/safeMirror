import styles from './Home.module.css';
import LoginPage from '../../components/LoginPage.jsx';


const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Duck It</h1>
      <LoginPage />
    </div>
  );
};

export default Home;

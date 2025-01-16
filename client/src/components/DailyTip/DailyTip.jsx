import PropTypes from 'prop-types';
import styles from './DailyTip.module.css';

const DailyTip = ({ initialMessage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headertext}>Positive Content</h1>
      </div>
      <div className={styles.content}>
        <p>{initialMessage}</p>
      </div>
    </div>
  );
};

// Define the propTypes for DailyTip
DailyTip.propTypes = {
  initialMessage: PropTypes.string.isRequired, // Ensure initialMessage is a required string
};

export default DailyTip;

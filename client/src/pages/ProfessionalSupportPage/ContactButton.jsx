import styles from "./ContactButton.module.css";
import PropTypes from "prop-types";

const ContactButton = ({ openWindow, buttonText }) => {
  return <button className={styles.contactButton} onClick={openWindow}>
        {buttonText}
    </button>;
};

ContactButton.propTypes = {
    openWindow: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
  };

export default ContactButton;
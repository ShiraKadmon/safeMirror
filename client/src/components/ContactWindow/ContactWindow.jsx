import styles from "./ContactWindow.module.css";
import PropTypes from "prop-types";


const ContactWindow = ({ isOpen, closeWindow, content }) => {
    if (!isOpen) {
        return null;
    }

  return (
    <div className={styles.window} onClick={closeWindow}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <span className={styles.close} onClick={closeWindow}>
          &times;
        </span>
        {content}
      </div>
    </div>
  );
};


ContactWindow.propTypes = {
    isOpen: PropTypes.bool.isRequired, // חובה
    closeWindow: PropTypes.func.isRequired, // חובה
    content: PropTypes.node.isRequired, // חובה
  };

export default ContactWindow;

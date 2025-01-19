import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./TextDisplay.module.css";

const TextDisplay = ({ customStyles, fileUrl, title, source }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // read txt file
    const fetchText = async () => {
      try {
        const response = await fetch(fileUrl);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Error fetching the text file:", error);
        setContent("Error loading content.");
      }
    };

    fetchText();
  }, [fileUrl]);

  return (
    <div className={styles.container} style={customStyles}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.scrollableContent}>
        <p className={styles.content}>{content}</p>
      </div>
      <footer className={styles.source}>{source}</footer>
    </div>
  );
};

// Adding prop types validation
TextDisplay.propTypes = {
    customStyles: PropTypes.object,
    fileUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  };

export default TextDisplay;

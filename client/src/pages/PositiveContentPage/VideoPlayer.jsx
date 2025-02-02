import PropTypes from "prop-types";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ videoURL, title}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <iframe
                    className={styles.videoPlayer}
                    src={videoURL}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
        </div>
    );
};

// Adding prop types validation
VideoPlayer.propTypes = {
    videoURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  

export default VideoPlayer;

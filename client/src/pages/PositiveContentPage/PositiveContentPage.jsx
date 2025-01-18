import styles from './PositiveContentPage.module.css';
import VideoPlayer from './VideoPlayer';
import TextDisplay from './TextDisplay';


const PositiveContentPage = () => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.columnContainer}>
        <VideoPlayer videoURL="https://www.youtube.com/embed/kDGPVF5M8oo" 
        title="בטיחות ברשת" />

        <VideoPlayer videoURL="https://www.youtube.com/embed/5rqHRli1iDc" 
        title="דימוי גוף" />
      </div>
      <div className={styles.columnContainer}>
        <div className={styles.rowContainer}>
          <TextDisplay
              customStyles={{
                height: "230px"
              }}
              fileUrl="/texts/beautiful.txt"
              title="פרק מהספר 'ביוטיפול'"
              source="נעמי כץ"
            />

          <TextDisplay
              customStyles={{
                height: "230px"
              }}
              fileUrl="/texts/razit.txt"
              title="'רזית' (מאת: אידיאל היופי, לחן: עממי)"
              source="נטע דריטר"
            />
          </div>
          <TextDisplay
              customStyles={{
                height: "160px"
              }}
              fileUrl="/texts/metzuka.txt"
              title="זיהוי מצוקה נפשית"
              source="נשים לגופן, 2011. טל תמיר (עורכת)"
            />
      </div>
    </div>
  );
};

export default PositiveContentPage;
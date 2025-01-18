import loadingGif from "../assets/loading.gif";

const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <img
        src={loadingGif}
        alt="טוען..."
        style={{
          display: "block",
          maxWidth: "20%",
          height: "auto",
        }}
      />
      <p
        style={{
          marginTop: "30px",
          fontSize: "2rem",
          color: "white",
          textAlign: "center",
          direction: "rtl",
          fontFamily: "Arial, sans-serif",
        }}
      >
        אנא המתיני, טוען...
      </p>
    </div>
  );
};

export default Loading;
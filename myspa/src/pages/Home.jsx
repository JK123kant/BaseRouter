const Home = () => {
    return (
      <div style={styles.page}>
        <div style={styles.hero}>
        <h1 style={styles.glowtagline}>Your Glow Is Our Mission!</h1>
          <h2 style={styles.glowText}>Welcome to JK Sign Boards</h2>
          <p style={styles.description}>
            We create stunning, illuminated letter light boards for advertisements, events, and dynamic displays.
          </p>
        </div>
      </div>
    );
  };
  
  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#000",
      backgroundImage: "linear-gradient(to bottom, #050505, #111111)",
      color: "#fff",
    },
    hero: {
      textAlign: "center",
    },
    glowText: {
      fontSize: "4rem",
      fontWeight: "bold",
      color: "#0ff",
      textShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff",
      fontFamily: "'Poppins', sans-serif",
    },
    glowtagline: {
        fontSize: "4rem",
        fontWeight: "bold",
        color: "#0df",
        textShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff",
        fontFamily: "'Poppins', sans-serif",
      },
    description: {
      marginTop: "20px",
      fontSize: "1.2rem",
      color: "#ddd",
    },
  };
  
  export default Home;
  
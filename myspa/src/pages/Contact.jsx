/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.heading}>Get in Touch</h1>
          <p style={styles.text}>We'd love to bring your vision to life.</p>
          <p>Email: <b>info@lumieresigns.com</b></p>
          <p>Phone: <b>+91 98765 43210</b></p>
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
      color: "#fff",
    },
    container: {
      textAlign: "center",
      padding: "30px",
      borderRadius: "10px",
      backgroundColor: "#222",
      boxShadow: "0 0 10px #0ff",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "10px",
    },
    text: {
      fontSize: "1.2rem",
      marginBottom: "20px",
    },
  };
  export default Contact;
  
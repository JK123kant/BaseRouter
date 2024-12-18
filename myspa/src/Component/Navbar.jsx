import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/gallery" style={styles.link}>Gallery</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "20px",
    backgroundColor: "#111",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  },
  link: {
    color: "#0ff",
    textDecoration: "none",
    fontSize: "1.2rem",
    transition: "color 0.3s ease",
  },
};

export default Navbar;

const Gallery = () => {
  const images = [
    "/images/img1.png",
    "/images/img2.jpeg",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
    "/images/img6.png",

  ];
 
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Our Work Gallery</h1>
      <div style={styles.gallery}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Sign Board ${index + 1}`} style={styles.image} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "20px",
    backgroundColor: "#000",
    color: "#fff",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "20px",
    textShadow: "0 0 10px #fff",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    justifyItems: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
};

export default Gallery;

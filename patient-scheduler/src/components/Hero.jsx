
export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <p style={styles.badge}>Modern Dental Care</p>

        <h1 style={styles.title}>
          Simple, stress-free appointments for your smile
        </h1>

        <p style={styles.subtitle}>
          High-quality care with seamless online scheduling.
        </p>

        <button onClick={scrollToBooking} style={styles.button}>
          Schedule an Appointment
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    textAlign: "center",
    padding: "0 20px",
  },

  container: {
    maxWidth: "700px",
    position: "relative",
    zIndex: 2,
  },

  title: {
    fontSize: "clamp(36px, 5vw, 56px)",
    fontWeight: 700,
    color: "#111",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },

  button: {
    padding: "14px 24px",
    fontSize: "16px",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  badge: {
    color: "#4f46e5",
    fontWeight: 600,
    marginBottom: 16,
  },
};

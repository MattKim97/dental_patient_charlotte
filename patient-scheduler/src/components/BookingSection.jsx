export default function BookingSection() {
  return (
    <div id="booking" style={{ padding: "80px 20px", textAlign: "center" }}>
      <h2>Schedule an Appointment</h2>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScIZoFwX7XVbgdIvgGoxM-AbaO6zw2mk_T2uJ3HWyMAx7n5ZA/viewform?usp=dialog"
        width="100%"
        height="600"
        style={{ border: "none", maxWidth: 700 }}
      />
    </div>
  );
}

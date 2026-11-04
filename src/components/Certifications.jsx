
function Certifications() {
  const certifications = [
    {
      name: "Masters in Full Stack Developer with Java",
      institute: "Vedant Education Pvt. Ltd.",
      date: "January 2026",
    },
    {
      name: "IBM Java for Data Science",
      institute: "IBM Developer Skills Network",
      date: "February 2026",
    },
    {
      name: "IBM Machine Learning with Java",
      institute: "IBM Developer Skills Network",
      date: "December 2025",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <p className="section-subtitle">MY ACHIEVEMENTS</p>

      <h2>My <span>Certifications</span></h2>

      <div className="certifications-container">
        {certifications.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <h3>{certificate.name}</h3>

            <p>{certificate.institute}</p>

            <span>{certificate.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;

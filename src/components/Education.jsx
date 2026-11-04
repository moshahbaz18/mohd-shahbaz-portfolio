
function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      college: "Integral University, Lucknow",
      year: "2022 – 2025",
      result: "CGPA: 6.10",
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      college: "S.N.I.C. Indaipur Ambedkar Nagar",
      year: "2019 – 2020",
      result: "67.6%",
    },
    {
      degree: "Secondary School Certificate (10th)",
      college: "S.N.I.C. Indaipur Ambedkar Nagar",
      year: "2017 – 2018",
      result: "56.6%",
    },
  ];

  return (
    <section className="education" id="education">
      <p className="section-subtitle">MY QUALIFICATIONS</p>

      <h2>My <span>Education</span></h2>

      <div className="education-container">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <h3>{item.degree}</h3>

            <p>{item.college}</p>

            <span>{item.year}</span>

            <strong>{item.result}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

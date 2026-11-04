function Skills() {
  const skills = [
    {
      title: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Frameworks",
      items: ["React.js", "Bootstrap"],
    },
    {
      title: "Backend",
      items: ["Java", "JDBC", "Servlet"],
    },
    {
      title: "Database",
      items: ["MySQL", "SQL"],
    },
    {
      title: "Tools",
      items: ["VS Code", "IDLE"],
    },
    {
      title: "Other Skills",
      items: ["Canva", "PowerPoint"],
    },
    {
  title: "Tools",
  items: ["VS Code", "Git", "GitHub", "IDLE"],
},
  ];

  return (
    <section className="skills" id="skills">
      <p className="section-subtitle">MY TECHNICAL ABILITIES</p>

      <h2>
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.title}</h3>

            <div className="skill-list">
              {skill.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

function Resume() {
  return (
    <section className="resume" id="resume">
      <p className="section-subtitle">MY QUALIFICATIONS</p>

      <h2>My <span>Resume</span></h2>

      <div className="resume-container">
        <div className="resume-card">
          <h3>My Professional Resume</h3>

          <p>
            Interested in learning new technologies and building
            modern web applications. Check out my resume for
            my skills, education and projects.
          </p>

          <div className="resume-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="resume-button"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

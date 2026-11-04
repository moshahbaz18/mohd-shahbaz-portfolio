
function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="section-subtitle">MY RECENT WORK</p>

      <h2>My <span>Projects</span></h2>

      <div className="projects-container">
        <div className="project-card">
          <h3>MemoryFlip</h3>

          <p>
            A Java-based memory card matching game.
            Players flip cards, find matching pairs
            and improve their memory skills.
          </p>

          <div className="project-tech">
            <span>Java</span>
            <span>Maven</span>
            <span>OOP</span>
          </div>

          <a
            href="https://github.com/moshahbaz18/MemoryFlip"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

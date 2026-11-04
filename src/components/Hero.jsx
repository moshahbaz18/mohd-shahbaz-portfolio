
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Mohd Shahbaz</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p>
          I create modern, responsive and user-friendly
          web applications using React, JavaScript and Java.
        </p>

        <a href="#projects" className="hero-button">
          Explore My Work
        </a>
      </div>

      <div className="hero-image">
      <img src="/images/profile.jpg.jpeg" alt="Mohd Shahbaz" />
      </div>
    </section>
  );
}

export default Hero;


function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-subtitle">GET IN TOUCH</p>

      <h2>Contact <span>Me</span></h2>

      <div className="contact-container">

        <div className="contact-card">
          <h3>Email Address</h3>
          <p>mshahabaz376@gmail.com</p>
          <a href="mailto:mshahabaz376@gmail.com">
            Send Email
          </a>
        </div>

        <div className="contact-card">
          <h3>Phone Number</h3>
          <p>+91 7607140230</p>
          <a href="tel:+917607140230">
            Call Me
          </a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn Profile</h3>
          <p>Connect with me professionally.</p>
          <a
            href="https://linkedin.com/in/mohd-shabaz-879a482b1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit LinkedIn
          </a>
        </div>

        <div className="contact-card">
          <h3>GitHub Profile</h3>
          <p>Explore my coding projects.</p>
          <a
            href="https://github.com/moshahbaz18"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;

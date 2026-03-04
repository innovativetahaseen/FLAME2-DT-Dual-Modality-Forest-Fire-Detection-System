import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>ℹ️ About Project</h1>

      <div className="about-section">
        <h3>How It Helps</h3>
        <ul>
          <li>Early forest fire detection</li>
          <li>Reduces environmental damage</li>
          <li>Helps disaster management teams</li>
          <li>Works with UAV drone systems</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>Future Scope</h3>
        <ul>
          <li>Real-time satellite integration</li>
          <li>Mobile alert system</li>
          <li>Live dashboard monitoring</li>
        </ul>
      </div>

      <div className="about-card">
        <p>
          This project detects forest fire using dual modality input:
          RGB + Thermal Images.
        </p>

        <p>
          Built using React (Frontend), Flask (Backend), and ML Model.
        </p>
      </div>

      {/* Team Section */}

      <h2 style={{ marginTop: "40px" }}>👨‍💻 Project Team</h2>

      <div className="team-container">
        <div className="team-card">
          <h3>Bharti Chaudhary</h3>
          <p>Frontend Developer</p>
        </div>

        <div className="team-card">
          <h3>Tahaseen Khan</h3>
          <p>Backend & API Integration</p>
        </div>

        <div className="team-card">
          <h3>Shaurya Singhal</h3>
          <p>ML Model Developer</p>
        </div>
      </div>
    </div>
  );
}

export default About;

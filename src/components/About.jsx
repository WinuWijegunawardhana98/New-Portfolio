import React from "react";
import myImage from "../assets/my.jpg"; // Profile Image Import

const About = () => {
  const aboutSectionStyle = {
    background: "#0f0f1a",
    color: "#ffffff",
    padding: "50px 20px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "150px", 
    height: "150px",
    borderRadius: "50%",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#00FFFF",
    marginBottom: "20px",
  };

  const subheadingStyle = {
    fontSize: "1.5rem",
    fontWeight: "500",
    color: "#ff00ff",
    marginTop: "20px",
    textAlign: "left",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    color: "#b0b0b0",
    lineHeight: "1.6",
    textAlign: "left",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const skillsListStyle = {
    listStyleType: "none",
    paddingLeft: "0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  };

  const skillItemStyle = {
    backgroundColor: "#222222",
    padding: "15px",
    borderRadius: "8px",
    fontSize: "1rem",
    color: "#ffffff",
    textAlign: "center",
  };

  return (
    <div style={aboutSectionStyle}>
      <img src={myImage} alt="Profile" style={imageStyle} />
      <h1 style={titleStyle}>Winodya Wijegunawardhana</h1>
      <p style={paragraphStyle}>
        I am a passionate and dedicated 4th-year undergraduate student pursuing a BSc (Hons) in Information Technology at SLIIT (Sri Lanka Institute of Information Technology). I am continuously seeking opportunities to learn and grow in the ever-evolving field of software development, particularly in full-stack development, including technologies like JavaScript, Python, Java, React, and Node.js.
      </p>

      <h2 style={subheadingStyle}>Skills & Technologies</h2>
      <ul style={skillsListStyle}>
        <li style={skillItemStyle}>React</li>
        <li style={skillItemStyle}>Node.js</li>
        <li style={skillItemStyle}>JavaScript</li>
        <li style={skillItemStyle}>HTML/CSS</li>
        <li style={skillItemStyle}>MongoDB</li>
        <li style={skillItemStyle}>MySQL</li>
        <li style={skillItemStyle}>AWS</li>
        <li style={skillItemStyle}>Azure</li>
      </ul>

      <h2 style={subheadingStyle}>Experience</h2>
      <p style={paragraphStyle}>
        I have gained hands-on experience as a Full Stack Developer Intern at EWIS Career Training Center, where I developed both front-end and back-end web applications using frameworks and libraries like React.js, Express.js, and Spring Boot. I am proficient in building scalable and efficient applications and APIs, optimizing user interfaces, and integrating cloud services such as AWS and Azure.
      </p>

      <h2 style={subheadingStyle}>Future Goals</h2>
      <p style={paragraphStyle}>
        I am excited to continue developing my skills in software development and exploring new technologies. My goal is to contribute to impactful projects, work in diverse teams, and continue to grow as a developer.
      </p>
    </div>
  );
};

export default About;

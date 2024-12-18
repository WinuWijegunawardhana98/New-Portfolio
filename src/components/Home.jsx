import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"; // Importing icons from react-icons
import myImage from "../assets/my.jpg"; // Import the image from the assets folder

const Home = () => {
  const sectionStyle = {
    background: "#0f0f1a",
    color: "#ffffff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
  };

  const neonTextStyle = {
    fontSize: "3rem",
    textShadow: "0 0 15px #00ffff, 0 0 30px #ff00ff",
  };

  const paragraphStyle = {
    color: "#b0b0b0",
    marginTop: "1rem",
  };

  const imageStyle = {
    width: "150px", // Adjust the size of the image
    height: "150px",
    borderRadius: "50%",
    marginBottom: "20px",
  };

  const iconContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#ffffff",
    transition: "color 0.3s ease",
  };

  // Links to your social media
  const socialLinks = {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    facebook: "https://facebook.com/yourusername",
    instagram: "https://instagram.com/yourusername",
  };

  return (
    <section style={sectionStyle}>
      <div>
        <img
          src={myImage} // Use the imported image
          alt="Your Name"
          style={imageStyle}
        />
        <h1 style={neonTextStyle}>Winodya Wijegunawardhana</h1> {/* Your name */}
        <p style={paragraphStyle}>
          Your next-level web developer and creative solution provider.
        </p>
        <div style={iconContainerStyle}>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FaGithub style={iconStyle} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={iconStyle} />
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook style={iconStyle} />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram style={iconStyle} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

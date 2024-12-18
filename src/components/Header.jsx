import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#0f0f1a",
    padding: "1rem 2rem",
    color: "#ffffff",
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textShadow: "0 0 10px #00ffff",
  };

  const navStyle = {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
  };

  const linkStyle = {
    color: "#00ffff",
    textDecoration: "none",
    transition: "color 0.3s ease, textShadow 0.3s ease",
  };

  const hoverStyle = {
    color: "#ff00ff",
    textShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff",
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Winodya Wijegunawardhana</div>
      <nav>
        <ul style={navStyle}>
          <li>
            <Link
              to="/"
              style={linkStyle}
              onMouseOver={(e) =>
                Object.assign(e.target.style, hoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.target.style, linkStyle)
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={linkStyle}
              onMouseOver={(e) =>
                Object.assign(e.target.style, hoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.target.style, linkStyle)
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              style={linkStyle}
              onMouseOver={(e) =>
                Object.assign(e.target.style, hoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.target.style, linkStyle)
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              style={linkStyle}
              onMouseOver={(e) =>
                Object.assign(e.target.style, hoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.target.style, linkStyle)
              }
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={linkStyle}
              onMouseOver={(e) =>
                Object.assign(e.target.style, hoverStyle)
              }
              onMouseOut={(e) =>
                Object.assign(e.target.style, linkStyle)
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';

const Contact = () => {
  return (
    <section 
      id="contact" 
      style={{ 
        padding: '60px 20px', 
        textAlign: 'center', 
        backgroundColor: '#2c003e', 
        color: '#e6e6e6',  
        borderTop: '4px solid #00bcd4'  
      }}
    >
      <h2 style={{ color: '#b3a3d7', fontSize: '2rem', marginBottom: '20px' }}>Contact Me</h2>
      <p style={{ color: '#d1d1d1', fontSize: '1.1rem', marginBottom: '40px' }}>
        Feel free to reach out for collaborations, inquiries, or just to say hi!
      </p>

      {/* Contact Form */}
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder="Your Name" 
          style={inputStyle} 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          style={inputStyle} 
        />
        <textarea 
          placeholder="Your Message" 
          style={{ ...inputStyle, height: '150px', resize: 'none' }} 
        />
        <button 
          type="submit" 
          style={buttonStyle}
        >
          Send Message
        </button>
      </form>

      <h3 style={{ color: '#b3a3d7', marginTop: '40px' }}>Connect with Me</h3>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        <a 
          href="https://github.com/WinuWijegunawardhana98" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/winodya-wijegunawardhana-a41998217/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

// Styling objects
const inputStyle = {
  width: '80%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ddd',
  fontSize: '1rem',
  boxSizing: 'border-box',
  outline: 'none',
};

const buttonStyle = {
  width: '80%',
  padding: '12px',
  marginTop: '20px',
  backgroundColor: "#0f0f1a",  
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1.1rem',
  transition: 'background-color 0.3s',
};

const linkStyle = {
  fontSize: '1.2rem',
  color: '#00bcd4',  
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'color 0.3s',
};

export default Contact;

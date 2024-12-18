import React from 'react';

const Resume = () => {
  return (
    <section 
      id="resume" 
      style={{
        padding: '60px 20px', 
        textAlign: 'center', 
        backgroundColor: "#0f0f1a",  
        color: '#e6e6e6',
      }}
    >
      <h2 style={{ color: '#a3d9a5', fontSize: '2.5rem', marginBottom: '20px' }}>My Resume</h2>
      <p style={{ color: '#d1d1d1', fontSize: '1.2rem', marginBottom: '40px' }}>
        You can view and download my resume by clicking the button below:
      </p>
      <a 
        href="/Wijegunawardhana G.P.W .pdf" 
        download="Wijegunawardhana G.P.W .pdf"
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '12px 30px',
          fontSize: '1.1rem',
          color: '#fff',
          backgroundColor: '#00bcd4',  
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 0 10px rgba(0, 188, 212, 0.7)', 
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = '0 0 20px rgba(0, 188, 212, 1)';
          e.target.style.backgroundColor = '#0097a7';  
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = '0 0 10px rgba(0, 188, 212, 0.7)';
          e.target.style.backgroundColor = '#00bcd4'; 
        }}
      >
        Download Resume
      </a>
      <p style={{ color: '#a3d9a5', fontSize: '1.2rem', marginTop: '20px' }}>
        {/* Fixed href to point to a contact section */}
        <a 
          href="#contact"  
          style={{
            color: '#00bcd4',  
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.color = '#0097a7'} 
          onMouseLeave={(e) => e.target.style.color = '#00bcd4'} 
        >
          Contact Me
        </a>
      </p>
    </section>
  );
};

export default Resume;

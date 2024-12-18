import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#333', color: '#fff', textAlign: 'center', padding: '10px' }}>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

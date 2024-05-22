import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      2022 - {currentYear} Symbola Labs
    </footer>
  );
};

export default Footer;
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="foot">
      <p>Copyright ⓒ Srujana Prabhu {currentYear}</p>
    </footer>
  );
}

export default Footer;
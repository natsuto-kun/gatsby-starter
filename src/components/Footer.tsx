import React from "react";

const Footer: React.VFC = () => {
  const footerStyle = {
    position: "relative",
    bottom: 0,
    width: "100%",
    height: "10%",
  };

  return (
    <footer style={footerStyle}>
      <p>Footer sample</p>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "gatsby";

export default function Footer() {
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: "20%",
  };

  return (
    <header style={footerStyle}>
      <p>Footer sample</p>
    </header>
  );
}

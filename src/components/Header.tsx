import React from "react";
import { Link } from "gatsby";

const Header: React.VFC = () => {
  const HeaderStyle = {
    position: "relative",
    top: 0,
    height: "10%",
    width: "100%",
    fontFamily: "'Amatic SC', cursive",
    fontFamily: "'Shadows Into Light', cursive",
  };

  const MenuStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };

  return (
    <header style={HeaderStyle}>
      Header
      <ul style={MenuStyle}>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
      </ul>
    </header>
  );
};

export default Header;

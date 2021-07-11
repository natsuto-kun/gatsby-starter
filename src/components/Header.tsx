import React from "react";
import { Link } from "gatsby";

export default function Header() {
  const headerStyle = {
    position: "fixed",
    top: 0,
    height: "10%",
    width: "100%",
  };

  return (
    <header style={headerStyle}>
      <Link to="/">home</Link>
    </header>
  );
}

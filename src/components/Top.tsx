import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../assets/fonts.css";

const Top: React.VFC = () => {
  const TopStyle = {
    textAlign: "center",
  };

  const TopText = {
    fontFamily: "'Shadows Into Light', cursive",
    position: "absolute",
    top: "20px",
    right: "50vw",
    fontSize: "40px",
    color: "white",
  };

  return (
    <div>
      <StaticImage
        src="../images/yukei2.png"
        alt="Yukei"
        style={TopStyle}
        loading="lazy"
      ></StaticImage>
      <p style={TopText}>Nakamura's Portfolio</p>
    </div>
  );
};

export default Top;

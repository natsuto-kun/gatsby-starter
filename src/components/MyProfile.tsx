import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const MyProfile: React.VFC = () => {
  const MyProfileCard = {
    background: "white",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0,0,0,.2)",
    width: "80%",
    left: "auto",
    fontFamily: "'Kiwi Maru', serif",
    textAlign: "center",
    margin: "auto",
  };

  const TitleStyle = {
    fontSize: "40px",
  };

  return (
    <div style={MyProfileCard}>
      <h1 style={TitleStyle}>つくったひと</h1>
      <StaticImage
        src="../images/Icon3.png"
        alt="MyProfile"
        width={300}
        height={200}
      ></StaticImage>
      <p>中村夏都</p>
      <p>2003年生まれ。2019年、北九州高専入学。</p>
      <p>2020年11月、コンピューター研究部に入部。</p>
    </div>
  );
};

export default MyProfile;

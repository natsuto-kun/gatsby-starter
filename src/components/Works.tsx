import React from "react";

const Works: React.VFC = () => {
  const WorksCard = {
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

  return (
    <div style={WorksCard}>
      <p>Works</p>
    </div>
  );
};

export default Works;

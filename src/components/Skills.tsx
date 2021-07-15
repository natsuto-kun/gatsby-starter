import React from "react";

const Skills: React.VFC = () => {
  const SkillsCard = {
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
    <div style={SkillsCard}>
      <p>Skills</p>
    </div>
  );
};

export default Skills;

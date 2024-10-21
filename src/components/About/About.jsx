import React from "react";

export const About = ({ onShowSection }) => {
  return (
    <>
      <button className="small-button" onClick={() => onShowSection("landing")}>
        back
      </button>
    </>
  );
};

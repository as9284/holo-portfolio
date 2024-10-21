import React from "react";

export const About = ({ onShowSection }) => {
  return (
    <>
      <button
        className="small-button group"
        onClick={() => onShowSection("landing")}
      >
        <div className="corner-borders">
          <div className="small-tl-corner"></div>
          <div className="small-tr-corner"></div>
          <div className="small-bl-corner"></div>
          <div className="small-br-corner"></div>
        </div>
        back
      </button>
    </>
  );
};

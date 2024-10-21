import React from "react";

export const Contact = ({ onShowSection }) => {
  return (
    <>
      <button className="small-button" onClick={() => onShowSection("landing")}>
        back
      </button>
    </>
  );
};

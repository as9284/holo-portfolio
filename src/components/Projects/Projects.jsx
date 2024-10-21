import React from "react";

export const Projects = ({ onShowSection }) => {
  return (
    <>
      <div className="w-[20rem] md:w-[40rem] lg:w-[60rem] h-[25rem] px-4 py-1 flex flex-col justify-start items-start text-neutral-200 gap-4 overflow-y-auto custom-scrollbar"></div>
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

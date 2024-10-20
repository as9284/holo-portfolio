import React from "react";

export const Projects = ({ onShowSection }) => {
  return (
    <>
      <div className="w-[20rem] md:w-[40rem] lg:w-[60rem] h-[20rem] flex flex-col justify-start items-start p-1 text-neutral-200 gap-4 overflow-y-auto custom-scrollbar">
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </div>
      <button className="small-button" onClick={() => onShowSection("landing")}>
        back
      </button>
    </>
  );
};

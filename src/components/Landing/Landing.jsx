import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { RiFolderSettingsFill } from "react-icons/ri";

export const Landing = ({ onShowSection }) => {
  return (
    <>
      <div className="min-w-[20rem] flex flex-wrap justify-center items-center p-1 text-neutral-200 gap-4">
        <button
          className="main-button group"
          onClick={() => onShowSection("projects")}
        >
          <span>
            <RiFolderSettingsFill className="main-icon" />
          </span>
          <span className="main-text">my projects</span>
        </button>
        <button
          className="main-button group"
          onClick={() => onShowSection("about")}
        >
          <span className="main-icon">
            <FaCircleQuestion />
          </span>
          <span className="main-text">about me</span>
        </button>
        <button
          className="main-button group"
          onClick={() => onShowSection("contact")}
        >
          <span className="main-icon">
            <IoMdContact />
          </span>
          <span className="main-text">contact me</span>
        </button>
      </div>
    </>
  );
};

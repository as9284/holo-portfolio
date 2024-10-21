import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { RiFolderSettingsFill } from "react-icons/ri";

export const Landing = ({ onShowSection }) => {
  return (
    <>
      <div className="min-w-[20rem] flex flex-wrap justify-center items-center p-1 gap-8">
        <button
          className="main-icon-button group"
          onClick={() => onShowSection("projects")}
        >
          <div className="corner-borders">
            <div className="main-tl-corner"></div>
            <div className="main-tr-corner"></div>
            <div className="main-bl-corner"></div>
            <div className="main-br-corner"></div>
          </div>
          <span className="main-icon">
            <RiFolderSettingsFill />
          </span>
          <span className="main-text">my projects</span>
        </button>
        <button
          className="main-icon-button group"
          onClick={() => onShowSection("about")}
        >
          <div className="corner-borders">
            <div className="main-tl-corner"></div>
            <div className="main-tr-corner"></div>
            <div className="main-bl-corner"></div>
            <div className="main-br-corner"></div>
          </div>
          <span className="main-icon">
            <FaCircleQuestion />
          </span>
          <span className="main-text">about me</span>
        </button>
        <button
          className="main-icon-button group"
          onClick={() => onShowSection("contact")}
        >
          <div className="corner-borders">
            <div className="main-tl-corner"></div>
            <div className="main-tr-corner"></div>
            <div className="main-bl-corner"></div>
            <div className="main-br-corner"></div>
          </div>
          <span className="main-icon">
            <IoMdContact />
          </span>
          <span className="main-text">contact me</span>
        </button>
      </div>
    </>
  );
};

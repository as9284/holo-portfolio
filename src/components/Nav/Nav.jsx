import React from "react";
import { BiSolidPlanet } from "react-icons/bi";

export const Nav = ({ activeSection }) => {
  const getSectionText = () => {
    switch (activeSection) {
      case "landing":
        return "Welcome to my portfolio";
      case "projects":
        return "Here are my projects";
      case "about":
        return "Learn more about me";
      case "contact":
        return "Get in touch with me";
      default:
        return "Welcome to my portfolio";
    }
  };

  return (
    <>
      <div className="min-w-[20rem] min-h-32 flex flex-col justify-center items-center p-4 text-neutral-200 text-center">
        <div className="w-full flex flex-col justify-center items-center animate-pulse">
          <BiSolidPlanet className="text-3xl md:text-5xl drop-shadow-lg" />
          <h1 className="text-xs md:text-base font-semibold drop-shadow-lg">
            Project ASTRA v1.0
          </h1>
        </div>

        <p className="text-2xl md:text-4xl font-extralight py-2 drop-shadow-lg">
          {getSectionText()}
        </p>
      </div>
    </>
  );
};

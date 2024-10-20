import React from "react";
import { Nav } from "../../components/Nav/Nav";
import { Landing } from "../../components/Landing/Landing";

export const Homepage = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-neutral-800 p-8 gap-1">
        <Nav />
        <Landing />
      </div>
    </>
  );
};

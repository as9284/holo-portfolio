import React, { useEffect, useState } from "react";
import { Nav } from "../../components/Nav/Nav";
import { Landing } from "../../components/Landing/Landing";
import { Projects } from "../../components/Projects/Projects";
import { About } from "../../components/About/About";
import { Contact } from "../../components/Contact/Contact";

export const Homepage = () => {
  const [activeSection, setActiveSection] = useState("landing");

  useEffect(() => {
    const savedSection = localStorage.getItem("activeSection");
    if (savedSection) {
      setActiveSection(savedSection);
    }
  }, []);

  const handleShowSection = (section) => {
    setActiveSection(section);
    localStorage.setItem("activeSection", section);
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black p-8 gap-1">
        <Nav activeSection={activeSection} />
        {activeSection === "landing" && (
          <Landing onShowSection={handleShowSection} />
        )}
        {activeSection === "projects" && (
          <Projects onShowSection={handleShowSection} />
        )}
        {activeSection === "about" && (
          <About onShowSection={handleShowSection} />
        )}
        {activeSection === "contact" && (
          <Contact onShowSection={handleShowSection} />
        )}
      </div>
    </>
  );
};

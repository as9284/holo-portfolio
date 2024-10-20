import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";

export const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

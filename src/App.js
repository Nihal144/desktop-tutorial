import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Category from "./components/pages/Category";
import Home from "./components/pages/Home";
import People from "./components/pages/People";
import ProjectStudio from "./components/pages/ProjectStudio";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/studio/:studiotype" element={<Category />} />
          <Route
            path="/studio/:studiotype/:projectstudio"
            element={<ProjectStudio />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

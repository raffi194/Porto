import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tiket from "./Tiket";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound"; 
import First from "./portfolio/first";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tiket />} />
        <Route path="/dashboard/*" element={<Dashboard />} /> 
        <Route path="*" element={<NotFound />} /> 
        <Route path="/portfolio/first" element={<First />} />
      </Routes>
    </Router>
  );  
};

export default App;

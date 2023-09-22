import React, {useEffect} from "react";
import GlobalStyles from 'styles/GlobalStyles';

 
import MainLandingPage from "MainLandingPage.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "Dashboard";


export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
  useEffect(() => {
    document.title = "Insight Ink";
  }, []);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

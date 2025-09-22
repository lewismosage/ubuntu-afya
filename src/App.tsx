import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import ImpactAreas from "./pages/ImpactAreas";
import Strategy from "./pages/Strategy";
import Updates from "./pages/Updates";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/impact" element={<ImpactAreas />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1E40AF",
              color: "#FFFFFF",
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;

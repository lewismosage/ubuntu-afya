import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import ImpactAreas from "./pages/ImpactAreas";
import Overview from "./pages/Overview";
import OurPeople from "./pages/OurPeople";
import Updates from "./pages/Updates";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Strategy from "./pages/Strategy";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/impact" element={<ImpactAreas />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/our-people" element={<OurPeople />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-strategy" element={<Strategy />} />
            <Route
              path="/impact-reports"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl font-bold text-teal-600">
                    Impact Reports - Coming Soon
                  </h1>
                </div>
              }
            />
            <Route
              path="/our-model"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl font-bold text-teal-600">
                    Our Model - Coming Soon
                  </h1>
                </div>
              }
            />
            <Route
              path="/volunteer"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl font-bold text-teal-600">
                    Volunteer - Coming Soon
                  </h1>
                </div>
              }
            />
            <Route
              path="/partnerships"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl font-bold text-teal-600">
                    Partnerships - Coming Soon
                  </h1>
                </div>
              }
            />
            <Route
              path="/events"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl font-bold text-teal-600">
                    Events - Coming Soon
                  </h1>
                </div>
              }
            />
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

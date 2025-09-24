import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Impact from "./pages/Impact";
import Overview from "./pages/Overview";
import OurPeople from "./pages/OurPeople";
import Updates from "./pages/Updates";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Strategy from "./pages/Strategy";
import Model from "./pages/Model";
import Volunteer from "./pages/Volunteer";
import Partnerships from "./pages/Partnerships";
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/our-people" element={<OurPeople />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-strategy" element={<Strategy />} />
            <Route path="/our-model" element={<Model />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/events" element={<Events />} />
            
            
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

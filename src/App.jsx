import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// --- Existing Components ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Hero";
import AppDevelopmentPage from "./pages/solutions/Solution";
import WebDevelopmentPage from "./pages/solutions/WebDevelopment";
import UXUIDesignPage from "./pages/solutions/UiDesign";
import CustomSoftwarePage from "./pages/solutions/CustomeSoftware";
import TechnologyChoicePage from "./pages/solutions/TechnologyChoice";
import MaintenancePage from "./pages/solutions/Maintenance";
import CareerPage from "./pages/Career";
import AboutUsPage from "./pages/AboutUs";
import BlogPage from "./pages/BlogPage";
import ContactUsPage from "./pages/ContactUs";
import NotFoundPage from "./pages/NoFound";
import GetQuotePage from "./pages/GetQoute";

// --- Placeholder Components (Create these files later) ---
// Replace these lines with real imports as you build the pages:

const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
  </div>
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Navbar sits outside Routes so it appears on every page */}
      <Navbar />

      <div className="main-content">
        <Routes>
          {/* 1. Home Route */}
          <Route path="/" element={<Home />} />

          {/* 2. Our Solutions Routes */}
          <Route path="/solutions/app-dev" element={<AppDevelopmentPage />} />
          <Route path="/solutions/web-dev" element={<WebDevelopmentPage />} />
          <Route path="/solutions/ui-ux" element={<UXUIDesignPage />} />
          <Route
            path="/solutions/custom-software"
            element={<CustomSoftwarePage />}
          />
          <Route
            path="/solutions/tech-consulting"
            element={<TechnologyChoicePage />}
          />
          <Route path="/solutions/maintenance" element={<MaintenancePage />} />

          {/* 3. Company Routes */}
          <Route path="/career" element={<CareerPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/quote" element={<GetQuotePage />} />

          {/* 4. Catch-all for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {/* Footer sits outside Routes so it appears on every page */}
      <Footer />
    </Router>
  );
}

export default App;

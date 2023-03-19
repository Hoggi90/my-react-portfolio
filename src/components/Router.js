import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/portfolio";
import Contact from "../pages/contact/Contact";

const Router = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={
        <Homepage
          name={personalDetails.name}
          tagline={personalDetails.tagline} />} />
      <Route path="/about" element={
        <About
          name={personalDetails.name}
          location={personalDetails.location}
          email={personalDetails.email}
          availability={personalDetails.availability}
          brand={personalDetails.brand}
        />
      }
      />
      <Route path="/portfolio" element={
        <Portfolio />} />
      <Route path="/contact" element={
        <Contact
          name={personalDetails.name}
          location={personalDetails.location}
          email={personalDetails.email} />
      }
      />
    </Routes>
  );
};

export default Router;
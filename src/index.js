import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./pages/homepage/homepage.css";
import "./pages/about/about.css";
import "./pages/portfolio/portfolio.css";
import "./pages/contact/contact.css";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

const basename = process.env.PUBLIC_URL;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

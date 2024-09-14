import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// Import the BrowserRouter
import { BrowserRouter } from "react-router-dom";

// Wrap the app component inside <BrowserTouter> context
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

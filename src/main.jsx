import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import posts from "./data/posts.jsx";
import { initializePosts } from "./utils/storage.js";

import App from "./App.jsx";
import "./index.css";

initializePosts(posts);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
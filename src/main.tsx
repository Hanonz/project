import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { ConvexProvider, ConvexReactClient } from "convex/react";

// const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

ReactDOM.render(
  <StrictMode>
    {/* <ConvexProvider client={convex}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ConvexProvider> */}
  </StrictMode>,
  document.getElementById("root")
);

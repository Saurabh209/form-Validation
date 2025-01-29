import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Form from "./components/Form.jsx";
import FurnishingDetails from "./components/FurnishingDetails/FurnishingDetails.jsx";
import Buttons from "./components/FurnishingDetails/Button.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Form /> */}
    <FurnishingDetails />
    {/* <Buttons name="Bulb" /> */}
  </StrictMode>
);

import React from "react";
import Button from "./Button";
import "./FurnishingDetails.css";

const FurnishingDetails = () => {
  return (
    <div class = "furnishingContainer">
    <div class="buttonContainer">
      <Button name="Fridge" availability="true" />
      <Button name="Light" availability="true" />
      <Button name="Modular Kitchen" availability="true" />
      <Button name="AC" availability="true" />
      <Button name="Bed" availability="true" />
      <Button name="Chimney" availability="true" />
      <Button name="Curtains" availability="true" />
      <Button name="Dining Table" availability="true" />
      <Button name="Exhuast Fan" availability="false" />
      <Button name="Fan" availability="false" />
      <Button name="Geyser" availability="true" />
      <Button name="Microwave" availability="true" />
      <Button name="Sofa" availability="true" />
      <Button name="Stove" availability="true" />
      <Button name="TV" availability="true" />
      <Button name="Wardrobe" availability="true" />
      <Button name="Washing Machine" availability="true" />
      <Button name="Water Purifier" availability="true" />
    </div>
    </div>
  );
};
export default FurnishingDetails;

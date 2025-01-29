import React from "react";
import "./Button.css";
import bulb from "./Bulb.svg";

function LogoCard(prop) {
  return (
    <div class="button">
      <img class="logo" src={bulb} alt={prop.name} />
      <div class="Name">{prop.name}</div>
    </div>
  );
}

export default LogoCard;

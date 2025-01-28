import { useState } from "react";

import "./App.css";
import CallBackImage from "./assets/CallBack.svg";
import phoneLogo from "./assets/phoneLogo.png";
import indiaLogo from "./assets/india.png";

function App() {
  return (
    <div className="mainContainer">
      <div className="formContainer">
        <div className="imgHolder">
          <img className="callBackImage" src={CallBackImage} alt="CallBack" />
        </div>
        <div className="loginSection">
          <div className="headings">
            <h3>Get Expert Advice for Your Property Needs!</h3>
            <p>
              Get Quick assistance from our real estate by sharing your mobile
              number for a callback
            </p>
          </div>
          <div className="inputHolder">
            <div className="inputField">
              <img
                src={indiaLogo}
                alt="Country Flag"
                className="flagIcon"
                style={{
                  width: "20px",
                  height: "20px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              />{" "}
              <p style={{ fontSize: "12px" }}>+91</p>
              <input
                className="textHolder"
                type="tel"
                placeholder="Enter"
                pattern="[0-9]{10}"
              />
            </div>

            <div className="Button">
              <div className="buttonLogo">
                <img className="phLogo" src={phoneLogo} alt="Phone Logo" />
              </div>
              <div className="buttonText">Request a Callback</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

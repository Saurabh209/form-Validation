import React from "react";
import india from "../assets/india.png";
import usa from "../assets/usa.png";
import uk from "../assets/uk.png";
import australia from "../assets/australia.png";

const countryCodes = [
  { code: "+91", label: "India", flag: india },
  { code: "+1", label: "USA", flag: usa },
  { code: "+44", label: "UK", flag: uk },
  { code: "+61", label: "Australia", flag: australia },
];

function CountryCodeSelector({ onChange }) {
  return (
    <select className="countryCodeSelector" onChange={onChange}>
      {countryCodes.map((country) => (
        <option key={country.code} value={country.code} data-flag={country.flag}>
          {country.code}
        </option>
      ))}
    </select>
  );
}

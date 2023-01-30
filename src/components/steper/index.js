import React, { useState } from "react";
import "./steper.scss";
import Logo from "../../assets/icons/new-logo.svg";
import SteperLine from "./steperLine";
import FirstStep from "./firstStep";
import SecStep from "./secStep";
import ThreeSteper from "./threeSteper";
import ForthStep from "./forthStep";
import VielenDank from "./vielenDank";
import VielenDank from "./vielenDank";
export default function Steper() {
  const [stepper, setStepper] = useState({
    firstStepper: "",
    secondStepper: "",
    ThirdStepper: "",
    forthStepper: "",
  });
  const [tabview, setTabview] = useState("first");
console.log("@#@#&&&",stepper);
  return (
    <div>
      <div className="steper-all-content-alignment">
        <div className="steper-container">
          <div className="first-content-alignment">
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <div>
              <p>
                Dein Erfolg <span>ist</span> der deiner Mandanten.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-child-content-steper-page-alignment">
        <SteperLine />
        {tabview === "first" && (
          <FirstStep
            stepper={stepper}
            setStepper={setStepper}
            setTabview={setTabview}
          />
        )}
        {tabview === "second" && (
          <SecStep
            stepper={stepper}
            setStepper={setStepper}
            setTabview={setTabview}
          />
        )}

        {tabview === "third" && (
          <ThreeSteper
            stepper={stepper}
            setStepper={setStepper}
            setTabview={setTabview}
          />
        )}
        {tabview === "forth" && (
          <ForthStep
            stepper={stepper}
            setStepper={setStepper}
            setTabview={setTabview}
          />
        )}
         {/* <VielenDank/> */}
      </div>
      <div className="steper-footer">
        <span>Copyright © 2022 FE Finance. Alle Rechte vorbehalten.</span>
      </div>
    </div>
  );
}

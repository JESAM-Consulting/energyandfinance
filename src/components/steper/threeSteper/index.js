import React from "react";
import "./threeSteper.scss";
export default function ThreeSteper(props) {
  const { stepper, setStepper, setTabview } = props;

  return (
    <div>
      <div className="three-step-all-content-alignment">
        <div className="">
          <div className="steper-box-center-alignment">
            <div className="step-box">
              <h5>
                Suchst du eine Perspektive als Berater oder Führungskraft?
              </h5>
              <p>in 3 Schritten zu FE Finance</p>
              <div className="button-left-right-alignment">
                <div>
                  <button
                    onClick={(e) => {
                      setStepper({...stepper, ThirdStepper: "Berater" });
                      setTabview("forth");
                    }}
                  >
                    Berater
                  </button>
                  <button
                    onClick={(e) => {
                      setStepper({...stepper, ThirdStepper: "Führungskraft" });
                      setTabview("forth");
                    }}
                  >
                    Führungskraft
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

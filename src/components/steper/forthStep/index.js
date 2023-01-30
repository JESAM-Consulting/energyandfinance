import React from "react";
import "./forthStep.scss";
export default function ForthStep(props) {
  const { stepper, setStepper } = props;
  console.log("====>",stepper.forthStepper,stepper?.ThirdStepper,stepper.secondStepper,stepper.firstStepper);

  return (
    <div>
      <div className="forth-step-all-content-alignment">
        <div className="forth-box">
          <div className="text-style">
            <h4>Jetzt bewerben</h4>
            <p>
              Wir, die FE Finance GmbH legt großen Wert auf Effizienz und kurze
              Wege. Um den Bewerbungsprozess für dich so angenehm wie möglich zu
              gestalten haben wir auf ein langes Bewerbungsformular verzichtet.
              Wir freuen uns auf deine Bewerbung und melden uns binnen 48h bei
              dir.
            </p>
            <h6>So können wir dich erreichen</h6>
          </div>
          <div className="form-box-center-alignment">
            <div className="form-box">
              <div class="floating-form">
                <div class="floating-label">
                  <input
                    class="floating-input"
                    type="text"
                    placeholder=" "
                    id="fname"
                    name="fname"
                 
                  />
                  <span class="highlight"></span>
                  <label>Vorname</label>
                </div>
                <div class="floating-label">
                  <input
                    class="floating-input"
                    type="text"
                    placeholder=" "
                    id="fname"
                    name="fname"
                 
                  />
                  <span class="highlight"></span>
                  <label>Nachname</label>
                </div>
                <div class="floating-label">
                  <input
                    class="floating-input"
                    type="text"
                    placeholder=" "
                    id="fname"
                    name="fname"
                 
                  />
                  <span class="highlight"></span>
                  <label>Postleitzahl</label>
                </div>
                <div class="floating-label">
                  <input
                    class="floating-input"
                    type="text"
                    placeholder=" "
                    id="fname"
                    name="fname"
                 
                  />
                  <span class="highlight"></span>
                  <label>Email</label>
                </div>
                <div class="floating-label">
                  <input
                    class="floating-input"
                    type="text"
                    placeholder=" "
                    id="fname"
                    name="fname"
                 
                  />
                  <span class="highlight"></span>
                  <label>Telefon</label>
                </div>
              </div>
              <div className="checkbox-content-alignment">
                  <div style={{ display: "flex", marginRight: "2px" }}>
                    <input
                      type="checkbox"
                      checked
                      name="check1"
                      id="new-check1"
                     
                    />
                    <label for="new-check1"></label>
                  </div>
                  <h3 style={{ margin: "0" }}>
                  Hiermit akzeptiere ich die Datenschutzbestimmungen der Energy & Finance GmbH
                  </h3>
                </div>
                <div className="button-design">
                    <button>Absenden</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

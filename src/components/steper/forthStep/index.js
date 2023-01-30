import React, { useState } from "react";
import "./forthStep.scss";
import { toast, ToastContainer } from "react-toastify";

import { ApiGet, ApiPost, ApiPut } from "../../../helpers/API/ApiData";

export default function ForthStep(props) {
  const { stepper, setStepper,setTabview } = props;
  console.log(
    "====>",
    stepper.forthStepper,
    stepper?.ThirdStepper,
    stepper.secondStepper,
    stepper.firstStepper
  );
  const [inputValue, setInputValue] = useState({});
  const [errors, setErrors] = useState({});
  const [terms, setTerms] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
console.log("inputValue",inputValue);
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const bindInput = (value) => {
    var regex = new RegExp("^[^0-9 ]*$");
    var key = String.fromCharCode(
      !value.charCode ? value.which : value.charCode
    );
    if (regex.test(key)) {
      value.preventDefault();
      return false;
    }
  };

  const validateforUserData = () => {
    let isFormValid = true;
    let errors = {};

    if (!inputValue?.fname?.trim() || inputValue?.fname === "") {
      isFormValid = false;
      errors["fname"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }
    if (!inputValue?.lname?.trim() || inputValue?.lname === "") {
      isFormValid = false;
      errors["lname"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }

    if (!inputValue?.postalCode || inputValue?.postalCode === "") {
      isFormValid = false;
      errors["postalCode"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }

    if (
      !inputValue?.email?.trim() ||
      inputValue?.email === "" ||
      regexEmail?.test(inputValue?.email) === false
    ) {
      isFormValid = false;
      errors["email"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }

    if (!inputValue?.phone || inputValue?.phone === "") {
      isFormValid = false;
      errors["phone"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }
    if (terms === false) {
      isFormValid = false;
      errors["check1"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }

    setErrors(errors);
    return isFormValid;
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const submitContact = (e) => {
    e.preventDefault();
    if (validateforUserData()) {
      const data = {
        isSalesExperience: stepper.firstStepper,
        isGradguate: stepper.secondStepper,
        perspective: stepper?.ThirdStepper,
        firstName: inputValue?.fname,
        lastName: inputValue?.lname,
        postalCode: inputValue?.postalCode,
        email: inputValue?.email,
        phone: inputValue?.phone,
      };
      ApiPost(`create-energy-steps`, data)
        .then((res) => {
          toast.success( "Vielen Dank, Ihre Daten wurden erfolgreich eingereicht.");
          setTabview("fifth")
        })
        .catch((err) => {
          toast.error("Etwas ist schief gelaufen. Bitte versuche es erneut");
        });
    }
  };
  return (
    <div>
      <ToastContainer />
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
                    id="fname"
                    name="fname"
                    value={inputValue?.fname}
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                  />
                  <span class="highlight"></span>
                  <label>Vorname</label>
                  <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                    {errors?.fname}
                  </span>
                </div>

                <div class="floating-label">
                  <input
                    class="floating-input"
                    type="text"
                    placeholder=" "
                    id="lname"
                    name="lname"
                    value={inputValue?.lname}
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                  />
                  <span class="highlight"></span>
                  <label>Nachname</label>
                  <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                    {errors?.lname}
                  </span>
                </div>

                <div class="floating-label">
                  <input
                    class="floating-input"
                    type="text"
                    placeholder=" "
                    id="postalCode"
                    name="postalCode"
                    value={inputValue?.postalCode}
                    maxLength={6}
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    onKeyPress={bindInput}
                  />
                  <span class="highlight"></span>
                  <label>Postleitzahl</label>
                  <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                    {errors?.postalCode}
                  </span>
                </div>
                <div class="floating-label">
                  <input
                    class="floating-input"
                    type="text"
                    placeholder=" "
                    id="email"
                    name="email"


                    value={inputValue?.email}
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    // onKeyPress={bindInput}
                  />
                  <span class="highlight"></span>
                  <label>E-mail</label>
                  <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                    {errors?.email}
                  </span>
                </div>

               
                <div class="floating-label">
                  <input
                    class="floating-input"
                    type="text"
                    placeholder=" "
                    id="phone"
                    name="phone"
                    value={inputValue?.phone}
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    onKeyPress={bindInput}
                  />
                  <span class="highlight"></span>
                  <label>Telefon</label>
                  <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                    {errors?.phone}
                  </span>
                </div>
              </div>
              <div className="checkbox-content-alignment">
                <div style={{ display: "flex", marginRight: "2px" }}>
                  <input
                    type="checkbox"
                    checked={terms}
                    name="check1"
                    id="new-check1"
                    onChange={(e) => setTerms(e.target.checked)}
                  />
                  <label for="new-check1"></label>
                </div>
                <h5 style={{ margin: "0" }}>
                  Hiermit akzeptiere ich die Datenschutzbestimmungen der Energy
                  & Finance GmbH
                </h5>
              </div>
              {terms === false && (
                <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                  {errors?.check1}
                </span>
              )}
              <div className="button-design">
                <button onClick={(e) => submitContact(e)}>Absenden</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

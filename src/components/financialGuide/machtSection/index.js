import "./machtSection.scss";
import React, { useState } from "react";

import ModalLogo from "../../../assets/logo/modal-logo.svg";
import CloeIcon from "../../../assets/icons/ei_close.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
export default function MachtSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <div className="macht-finacial-guide-banner">
        <div className="container-md">
          <div className="grid">
            <div className="grid-items">
              <h2>
                Der <span>Financial Guide</span> macht <br />
                <span>deine Position</span> am Markt zur Pole Position.
              </h2>
              <p>
                Als Financial Guide wirst du Teil des innovativsten
                Beratungsnetzwerkes in Deutschland! Das Ganze in Verbindung mit
                der höchstmöglichen Einkommensperspektive von ⌀ 108.000€. <br />
                Wir freuen uns auf deine Bewerbung und gestalten gemeinsam den
                Markt neu.
              </p>
            </div>
            <div className="grid-items">
              <button onClick={() => setModalOpen(!modalOpen)}>
                Jetzt bewerben <br />
                <span className="new-buton-style-span">
                  (ohne Lebenslauf in 30 Sek.)
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <ContactModal
          setModalOpen={setModalOpen}
          setModal2Open={setModal2Open}
        />
      )}
      {modal2Open && <SecModal setModal2Open={setModal2Open} />}
    </div>
  );
}

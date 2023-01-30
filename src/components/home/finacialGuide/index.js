import React, { useState } from "react";
import "./finacialGuide.scss";
import ModalLogo from "../../../assets/logo/modal-logo.svg";
import CloeIcon from "../../../assets/icons/ei_close.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
export default function FinacialGuide() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <div className="finacial-guide-banner">
        <div className="container-md-new">
          <div className="grid">
            <div className="grid-items">
              <h2>
                IHR KOMPETENTER PARTNER <br /> FÜR SICHERHEIT, FINANZSTABILITÄT{" "}
                <br />
                UND WOHLSTAND
              </h2>
              <p>
                Unsere Experten sind seit über 30 Jahren im Edelmetall und
                Rohstoff-Sektor tätig. Diese langjährige Erfahrung nutzen wir,
                um Sie bestmöglich zu informieren und mit der für Sie{" "}
                <span>
                  {" "}
                  optimalen Anlagestrategie, rechtzeitig und ausreichend
                  abzusichern.
                </span>
              </p>
            </div>
            <div className="grid-items">
              {/* onClick={() => setModalOpen(!modalOpen)} */}
              <button onClick={() => setModalOpen(!modalOpen)}>
                Jetzt kostenfreie <br />
                <span className="new-buton-style-span new-buton-style-span-mobile"> Beratung anfordern</span>
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

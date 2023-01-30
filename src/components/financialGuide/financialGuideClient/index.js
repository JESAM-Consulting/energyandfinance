import React, { useState } from "react";
import ProfileImage from "../../../assets/images/profile.png";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
import "./financialGuideClient.scss";
export default function FinancialGuideClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <div className="financial-client-section-content-alignment">
        <div className="container-md-3">
          <div className="grid">
            <div className="grid-items">
              <h1> Durch FE Finance bin ich am Markt überlegen. </h1>
              <p>
                <span>Michael Mues</span> war vorher bei einem der größten
                Finanzdienstleister
              </p>
              <div className="mobile-button-center-alignment">
                <button onClick={() => setModalOpen(!modalOpen)}>
                  Jetzt bewerben
                  <br />
                  <span className="new-buton-style-span">
                    (ohne Lebenslauf in 30 Sek.)
                  </span>
                </button>
              </div>
            </div>
            <div className="grid-items">
              <div className="profile-image">
                <img src={ProfileImage} alt="ProfileImage" />
              </div>
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

import React, { useState } from "react";
import "./clientSection.scss";
import ProfileImage from "../../../assets/images/profile.svg";
import quoteIcon from "../../../assets/icons/quote.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
export default function ClientSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div>
      <div className="new-client-banner-alignment">
        <div className="new-container-3">
          <div className="text-grid">
            <div className="text-grid-items">
              <img src={quoteIcon} />
            </div>
            <div className="text-grid-items">
              <h2>
                Der Energy Guide <span>macht</span> <br />
                deine Position <span>am Markt zur Pole Position.</span>
              </h2>
              <p>
                Als Energy Guide wirst du Teil des innovativsten
                Beratungsnetzwerkes für die Projektierung von
                Photovoltaik-Anlagen für Privatdächer, Gewerbedächer sowie
                Freiflächen und Kapitalanlagen.
              </p>
              <p>
                Das Ganze in Verbindung mit der höchstmöglichen
                Einkommensperspektive von ⌀ 113.000€.{" "}
              </p>
              <p>
                Wir freuen uns auf deine Bewerbung und gemeinsam den Markt neu
                zu gestalten.
              </p>
              <div className="mobile-button-show">
                <button>Jetzt bewerben <br/> <span>(ohne Lebenslauf in 30 Sek.)</span> </button>
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

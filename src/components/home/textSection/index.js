import React, { useState } from "react";
import "./textSection.scss";
import UnionIcon from "../../../assets/icons/Union.svg";
import UnionIcon1 from "../../../assets/icons/Union (1).svg";
import UnionIcon2 from "../../../assets/icons/Union (2).svg";
import Subtract2 from "../../../assets/icons/Subtract.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
export default function TextSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <div className="text-section-all-content-alignment">
        <div className="container-md-4">
          <div className="page-title">
            <p>ENERGY & FINANCE GmbH</p>
            <h4>Deine Karriere ist unser Erfolg</h4>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="sub-grid">
                <div className="sub-grid-items">
                  <div className="icon-design">
                    <img src={UnionIcon} alt="UnionIcon" />
                  </div>
                </div>
                <div className="sub-grid-items">
                  <h2>Unser Netzwerk wird dein Unternehmen</h2>
                  <p>
                    Obwohl du selbstständig bist, profitierst du von einem
                    Unternehmernetzwerk, welches seines Gleichen sucht.
                  </p>
                  <p>
                    Du bist nicht nur dein eigener Chef und bestimmst, wann und
                    von wo du arbeitest, sondern hast auch die Möglichkeit dir
                    dein eigenes Unternehmen aufzubauen.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="sub-grid">
                <div className="sub-grid-items">
                  <div className="icon-design">
                    <img src={UnionIcon1} alt="UnionIcon1" />
                  </div>
                </div>
                <div className="sub-grid-items">
                  <h2>Miteinander und füreinander</h2>
                  <p>
                    Monetäre Leistungen sind nicht unwichtig, aber definitiv
                    nicht Alles! Darüber hinaus wird auch die Anerkennung &
                    Wertschätzung deiner unternehmerischen Leistungen auf
                    persönlicher Ebene honoriert!
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="sub-grid">
                <div className="sub-grid-items">
                  <div className="icon-design">
                    <img src={UnionIcon2} alt="UnionIcon2" />
                  </div>
                </div>
                <div className="sub-grid-items">
                  <h2>Engagement wird finanzieller Erfolg</h2>
                  <p>Leistungsgerechte Bezahlung? Für jeden?</p>
                  <p>
                    Ja, denn du bestimmst mit deinem Engagement deine Karriere,
                    unabhängig deines bisherigen Werdegangs. Auf diesem Weg
                    begleiten wir dich nicht nur, sondern qualifizieren dich in
                    allen Bereichen, wie z.B. Führung, Standortleitung, Aus-und
                    Weiterbildung deiner Partner.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="sub-grid">
                <div className="sub-grid-items">
                  <div className="icon-design">
                    <img src={Subtract2} alt="Subtract2" />
                  </div>
                </div>
                <div className="sub-grid-items">
                  <h2>Dein Erfolg ist der deiner Mandanten</h2>
                  <p>
                    Unser Beratungsansatz ist nicht nur auf die
                    Finanzdienstleistung limitiert, sondern bildet unseren
                    Mandanten auch beispielsweise im Bereich
                    Karriereentwicklung, Jobvermittlung und Energieberatung
                    einen absoluten Mehrwert. Das Ganze wird unsererseits durch
                    Premiumpartner am Markt sichergestellt.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-center-alignment">
            {/* onClick={() => setModalOpen(!modalOpen)} */}
            <button onClick={() => setModalOpen(!modalOpen)}>
              Jetzt bewerben <br />
              <span className="">(ohne Lebenslauf in 30 Sek.)</span>
            </button>
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
    </>
  );
}

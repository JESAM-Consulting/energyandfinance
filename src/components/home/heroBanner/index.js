import React, { useState } from "react";
import "./heroBanner.scss";
import XmldIcon from "../../../assets/icons/xmld.svg";
import XmldIconMobile from "../../../assets/icons/xmld-mobile.svg";
import DownArrow from "../../../assets/icons/mobile-down.svg";
import LongArrow from "../../../assets/icons/long-arrow.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
export default function HeroBanner() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <div className="hero-banner-all-content-alignment">
        <div className="new-container-one">
          <div className="grid">
            <div className="grid-items">
              <div className="text-style">
                {/* <h4>Werde</h4> */}
                <div className="button-rigth-alignment">
                  <button
                    onClick={() => {
                      setModalOpen(!modalOpen);
                    }}>
                    Energy Guide <br /> <span>(m/w/d)</span>
                  </button>
                </div>
                <div className="right-content-alignment">
                  <h6>
                    und lerne deine Aufgaben in diesem kurzen Video kennen
                  </h6>
                </div>
                <div className="mobile-down-show">
                  <div className="arrow-center-alignment">
                    <img src={DownArrow} alt="DownArrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="image-center-alignment">
                <iframe
                  src="https://player.vimeo.com/video/793921345?h=1b52db2d7c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Energy &amp;amp; Finance Werbevideo_CUT4"></iframe>
              </div>
              <div className="video-text-style">
                <h6>Deine Karriere als Energy Guide starten</h6>
                <div className="icon-text">
                  <img src={LongArrow} alt="LongArrow" />
                  <span onClick={() => setModalOpen(!modalOpen)}>
                    Jetzt bewerben (ohne Lebenslauf in 30 Sek.)
                  </span>
                </div>
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

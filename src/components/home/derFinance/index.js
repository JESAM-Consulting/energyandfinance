import React, { useState } from "react";
import "./derFinance.scss";
import Imagebanner from "../../../assets/images/guide-image.png";
import RightIcon from "../../../assets/icons/right.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
import ClockIcon from "../../../assets/icons/clock.svg";
import MobileLocation from "../../../assets/icons/mobile-location.svg";
import New from "../../../assets/icons/new.svg";
import MobileHome from "../../../assets/icons/mobile-home.svg";
import XmlLogo from "../../../assets/icons/xml-svg.svg";

export default function DerFinance() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div>
      <div className="der-finace-all-content-alignment">
        <div className="container-md-2">
          <div className="page-title">
            <p>Der Financial Guide</p>
            <h3>Das sind deine Aufgaben als Financial Guide.</h3>
            <div className="image-center-alignment">
              <iframe
                src="https://player.vimeo.com/video/759241708?h=393305830d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                title="imagefilm_2_9.mp4"
              ></iframe>
            </div>
            <div className="sub-text-style">
              <h4>Deine Karriere starten</h4>
              <div
                className="icon-text-alignment"
                onClick={() => setModalOpen(!modalOpen)}
              >
                <img src={RightIcon} alt="RightIcon" />
                <span>Jetzt bewerben</span>
              </div>
            </div>
          </div>
          <div className="only-mobile-show-data">
            <div className="new-mobile-col-two-grid">
              <div className="new-mobile-col-two-grid-items">
                <div className="icon-align">
                  <img src={ClockIcon} alt="ClockIcon" />
                </div>
                <p>
                  Voll-/Teilzeit und <br /> selbständig
                </p>
                <span>
                  flexible Arbeitszeiten keine Kernzeiten unbefristete
                  Einstellungv nach Probezeit
                </span>
              </div>
              <div className="new-mobile-col-two-grid-items">
                <div className="icon-align">
                  <img src={MobileHome} alt="MobileHome" />
                </div>
                <p>Home-Office</p>
                <span>
                  Flexible Arbeitsorte <br /> und mobiles Arbeiten
                </span>
              </div>
              <div className="new-mobile-col-two-grid-items">
                <div className="icon-align">
                  <img src={MobileLocation} alt="MobileLocation" />
                </div>
                <p>Standort unabhängig</p>
                <span>über 30 Standorte in Deutschland moderne Offices</span>
              </div>
              <div className="new-mobile-col-two-grid-items">
                <div className="icon-align h-55">
                  <img src={New} alt="New" />
                </div>
                <p>Verbraucherschutzkonform nach</p>
                <div className="center-new-as">
                  <img src={XmlLogo} alt="XmlLogo" />
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

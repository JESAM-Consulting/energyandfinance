import React, { useEffect, useState, useCallback } from "react";
import ClientSection from "../home/clientSection";
import DerFinance from "../home/derFinance";
import FinacialGuide from "../home/finacialGuide";
import TextSection from "../home/textSection";
import WirSection from "../home/wirSection";
import "./financialGuide.scss";
import RightIcon from "../../assets/icons/lg-arrow.svg";
import XmlLogo from "../../assets/icons/xml-svg.svg";
import MobileLocation from "../../assets/icons/mobile-location.svg";
import New from "../../assets/icons/new.svg";
import DownArrow from "../../assets/icons/mobile-diwb.svg";
import XmlLogoWeb from "../../assets/icons/xml-mobile.svg";
import MobileHome from "../../assets/icons/mobile-home.svg";
import LgMobile from "../../assets/icons/lg-mobile.svg";
import NewImage from "../../assets/images/faq1.png";
import MenImage from "../../assets/images/men.png";
import ClockIcon from "../../assets/icons/clock.svg";
import MobileMenImage from "../../assets/images/mobile-men.png";
import MachtSection from "./machtSection";
import FinancialGuideGmbh from "./financialGuideGmbh";
import FinancialGuideClient from "./financialGuideClient";
import FinancialGuideWirSection from "./financialGuideWirSection";
import ContactModal from "../ContactModal";
import SecModal from "../secModal";
import IconDesign from "../../assets/icons/001.svg";
import IconDesign2 from "../../assets/icons/002.svg";
import IconDesign3 from "../../assets/icons/003.svg";
import IconDesign4 from "../../assets/icons/005.svg";
import IconDesign6 from "../../assets/icons/006.svg";

export default function FinancialGuide(props) {
  const [openForm, setOpenForm] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <div className="financial-guide-banner-content-alignment">
        <div className="container-md">
          <div className="financial-guide-relative">
            <div className="grid">
              <div className="grid-items">
                <div className="two-section-alignment">
                  <div className="men-new-text">
                    <h1>Lerne den </h1>
                    <div>
                      <span>Financial Guide</span>
                    </div>
                    <div className="new-end">
                      <h2>
                        und lerne deine Aufgaben in diesem kuzen Video kennen
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-items">
                <div className="iframe-video">
                  <iframe
                    src="https://player.vimeo.com/video/759207501?h=9cb8c7e5de&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    title="imagefilm_1_3.mp4"
                  ></iframe>
                </div>
                <div className="new-f">
                  <div className="text-style">
                    <p>Deine Karriere als Financial Guide starten</p>
                    <div
                      className="arrow-text-center-alignment"
                      onClick={() => setModalOpen(true)}
                    >
                      <img src={RightIcon} alt="RightIcon" />
                      <span>Jetzt bewerben</span>
                    </div>
                    <div className="mobile-xml-logo">
                      <img src={XmlLogo} alt="XmlLogo" />
                    </div>
                  </div>
                  {/* <div className="xml-web">
                    <img src={XmlLogoWeb} alt="XmlLogoWeb" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-new-image-show">
            <img src={MobileMenImage} alt="MobileMenImage" />
            <div className="text-bottom-alignment">
              <div className="men-new-text1">
                <h1>Lerne den </h1>
                <div>
                  <span>Financial Guide</span>
                </div>
                <h1>kennen</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tody-update-section">
        <div className="container-lg-6">
          <div className="main-grid">
            <div className="main-grid-items">
              <div className="new-image-style">
                <img src={MenImage} alt="MenImage" />
              </div>
            </div>
            <div className="main-grid-items">
              <div className="grid">
                <div className="grid-items">
                  <div className="icon-alignment-for-web">
                    <img src={IconDesign} alt="IconDesign" />
                  </div>
                  <h2>
                    Voll-/Teilzeit und <br />
                    selbständig
                  </h2>
                  <p>
                    flexible Arbeitszeiten keine Kernzeiten unbefristete
                    Einstellung nach Probezeit
                  </p>
                </div>
                <div className="grid-items">
                  <div className="icon-alignment-for-web">
                    <img src={IconDesign2} alt="IconDesign2" />
                  </div>
                  <h2>Home-Office</h2>
                  <p>
                    Flexible Arbeitsorte <br /> und mobilesArbeiten
                  </p>
                </div>
                <div className="grid-items">
                  <div className="icon-alignment-for-web">
                    <img src={IconDesign3} alt="IconDesign3" />
                  </div>
                  <h2>Standort unabhängig</h2>
                  <p>über 30 Standorte in Deutschland moderne Offices</p>
                </div>
                <div className="grid-items">
                  <div className="icon-alignment-for-web">
                    <img src={IconDesign4} alt="IconDesign4" />
                  </div>
                  <h2>Verbraucherschutzkonform nach</h2>
                  <div className="center-c">
                    <img src={IconDesign6} alt="IconDesign6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-new-section-content-show">
        <div className="container-lg">
          <div className="frist-time-text">
            <p>Werde</p>
            <div className="content-center">
              <div className="content-text">
                Financial Guide <br />
                <span>(m/w/d)</span>
              </div>
            </div>
          </div>
          <div className="two-line-text">
            <p>
              und lerne deine Aufgabe <br />
              in diesem kurzen Video kennen
            </p>
          </div>
          <div className="icon-center-alignment">
            <img src={DownArrow} alt="DownArrow" />
          </div>
          <div className="video-center-alignment">
            <iframe
              src="https://player.vimeo.com/video/759207501?h=9cb8c7e5de&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              title="imagefilm_1_3.mp4"
            ></iframe>
          </div>
          <div className="last-text-style">
            <h3>Deine Karriere als Financial Guide starten</h3>
            <div className="arrow-text-alignment">
              <div>
                <img src={LgMobile} alt="LgMobile" />
              </div>
              <div>
                <p>
                  Jetzt bewerben! <span>(ohne Lebenslauf in 30 Sek.)</span>
                </p>
              </div>
            </div>
          </div>
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
              <p className="new-style-align">Verbraucherschutzkonform nach</p>
              <div className="new-c-aliogn">
                <img src={XmlLogo} alt="XmlLogo" />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-image">
          <img src={NewImage} alt="NewImage" />
        </div>
      </div>
      {modalOpen === true && (
        <ContactModal
          setModalOpen={setModalOpen}
          setModal2Open={setModal2Open}
        />
      )}
      {modal2Open && <SecModal setModal2Open={setModal2Open} />}
      <MachtSection />
      <FinancialGuideGmbh />
      <FinancialGuideClient />
      <FinancialGuideWirSection />
    </>
  );
}

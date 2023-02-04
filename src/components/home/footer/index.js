import React, { useState } from "react";
import "./footer.scss";
import FooterLogo from "../../../assets/logo/logoFooter.svg";
import EmailIcon from "../../../assets/icons/email.svg";
import MobileIcon from "../../../assets/icons/mobile.svg";
import FacebookIcon from "../../../assets/icons/facebook.svg";
import InstaIcon from "../../../assets/icons/insta.svg";
import LinkdinIcon from "../../../assets/icons/linkdin.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div>
      <div className="footer-first">
        <div className="container-md-8">
          <h1>
            Jetzt bewerben und die Branche verändern
            <br />
            <span>Energy & Finance GmbH</span>
          </h1>
          <div className="button-center-alignment">
            {/* onClick={() => setModalOpen(!modalOpen)} */}
            <button onClick={() => setModalOpen(!modalOpen)}>
              Bewerben
              <br />
              <span className="">(ohne Lebenslauf in 30 Sek.)</span>
            </button>
          </div>
        </div>
      </div>
      <div className="footer-design">
        <div className="container-md-11">
          <div className="mobile-footer-show">
            <div className="mobile-footer-center-alignment">
              <div className="footer-logo-mobile">
                <img src={FooterLogo} alt="FooterLogo" />
              </div>
              <div className="first-section-mobile">
                <p>Rendsburger Straße 14 30659 Hannover</p>
                <div className="icon-alignment">
                  <div>
                    <img src={FacebookIcon} alt="FacebookIcon" />
                  </div>
                  <div>
                    <img src={InstaIcon} alt="InstaIcon" />
                  </div>
                  <div>
                    <img src={LinkdinIcon} alt="LinkdinIcon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-grid-items">
              <div className="logo-center-alignment">
                <img src={FooterLogo} alt="FooterLogo" />
              </div>
            </div>
            <div className="footer-grid-items">
              <div className="sub-content-alignment">
                <div className="first-section">
                  <p>
                    Rendsburger Straße 14 <br />
                    30659 Hannover
                  </p>
                  <div className="soc-icon-alignment">
                    <img src={FacebookIcon} alt="FacebookIcon" />
                    <img src={InstaIcon} alt="InstaIcon" />
                    <img src={LinkdinIcon} alt="LinkdinIcon" />
                  </div>
                </div>
                <div className="sec-section">
                  <h2>So erreichst du uns.</h2>
                  <h3>Energy & Finance GmbH</h3>
                  <div className="all-icon-text-alignment">
                    <div className="icon-text-alignment">
                      <div>
                        <img src={EmailIcon} alt="EmailIcon" />
                      </div>
                      <div>
                        <a href="mailto:service@siluna.li?subject = Feedback&body = Message">
                          kontakt@energyfinance.de
                        </a>
                      </div>
                    </div>
                    <div className="icon-text-alignment">
                      <div>
                        <img src={MobileIcon} alt="MobileIcon" />
                      </div>
                      <div>
                        <a href="tel:+49 51156365720">+49 51156365720</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="three-section">
                  <h4>
                    Bewirb dich bei uns!
                    <br />
                    Werde ein Teil von <br />
                    Energy & Finance
                  </h4>
                  <div
                    className="footer-last-child-text-alignmetn"
                    onClick={() => setModalOpen(true)}
                    // onClick={() => setModalOpen(true)}
                  >
                    <div>
                      <p>Jetzt bewerben</p>
                    </div>
                    <div>
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.325865 1.02429C0.11715 1.22127 -4.47227e-07 1.48773 -4.35177e-07 1.76547C-4.23127e-07 2.04322 0.11715 2.30968 0.325865 2.50665L4.29283 6.28089L0.325865 10.0026C0.11715 10.1995 -5.76987e-08 10.466 -4.56486e-08 10.7437C-3.35985e-08 11.0215 0.11715 11.2879 0.325865 11.4849C0.430041 11.5835 0.553981 11.6617 0.690538 11.715C0.827095 11.7684 0.973566 11.7959 1.1215 11.7959C1.26943 11.7959 1.4159 11.7684 1.55246 11.715C1.68902 11.6617 1.81296 11.5835 1.91713 11.4849L6.66853 7.02733C6.77356 6.92959 6.85693 6.81332 6.91382 6.6852C6.97071 6.55709 7 6.41968 7 6.28089C7 6.1421 6.97071 6.00469 6.91382 5.87658C6.85693 5.74846 6.77356 5.63219 6.66853 5.53445L1.91713 1.02429C1.81296 0.925755 1.68902 0.847544 1.55246 0.794169C1.4159 0.740795 1.26943 0.713314 1.1215 0.713314C0.973565 0.713314 0.827095 0.740795 0.690538 0.794169C0.553981 0.847544 0.43004 0.925755 0.325865 1.02429Z"
                          fill="#333333"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-last-chiild-sec">
        <div className="container-md-9">
          <div className="footer-link-alignment">
            <NavLink to="/impressum">Impressum</NavLink>
            <a>|</a>
            <NavLink to="/datenschutzerklaerung">Datenschutz</NavLink>
          </div>
          <p>
            Copyright © 2022 JESAM Consulting GmbH. Alle Rechte vorbehalten.
          </p>
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

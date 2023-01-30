import React from "react";
import "./vielenDank.scss";
import WhiteArrow from "../../../assets/icons/white-arrow.svg";
import MenImage from "../../../assets/images/mencopy.png";
import IconDesign from "../../../assets/icons/00001.svg";
import IconDesign2 from "../../../assets/icons/00002.svg";
import IconDesign3 from "../../../assets/icons/00003.svg";
import IconDesign4 from "../../../assets/icons/00004.svg";
import IconDesign6 from "../../../assets/icons/00005.svg";

export default function VielenDank() {
  return (
    <div>
      <div className="vielenDank-center-alignment">
        <div className="vielenDank-box">
          <div className="text-style">
            <h5>Vielen Dank</h5>
            <p>Wir kümmern uns schnellstöglich um Deine Bewerbung.</p>
            <p>
              Ein Manager in Deiner Nähe wird Dir weitere Infomationen und
              Terminvorschäge auf <br />
              Deinem bevorzugtem Kontaktweg mitteilen.
            </p>
            <div className="button-center-alignment">
              <button>
                mehr zu FE Finance erfahren
                <img src={WhiteArrow} alt="WhiteArrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tody-update-section-new">
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
    </div>
  );
}

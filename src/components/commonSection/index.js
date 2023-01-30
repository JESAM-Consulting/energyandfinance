import React from "react";
import "./commonSection.scss";
import IconDesign from "../../assets/icons/001.svg";
import IconDesign2 from "../../assets/icons/002.svg";
import IconDesign3 from "../../assets/icons/003.svg";
import IconDesign4 from "../../assets/icons/005.svg";
import IconDesign6 from "../../assets/icons/006.svg";
import MenImage from "../../assets/images/m.png";
import MenImage1 from "../../assets/images/mobile-men1.png";
export default function CommonSection() {
  return (
    <div className="new-common-section-content-alignment">
      <div className="new-container">
        <div className="grid">
          <div className="grid-items">
            <div className="image-style">
              <img src={MenImage} alt="MenImage" />
            </div>
          </div>
          <div className="grid-items">
            <div className="sub-grid">
              <div className="sub-grid-items">
                <div className="icon-center-alignment">
                  <img src={IconDesign} alt="IconDesign" />
                </div>
                <h2>Voll-/Teilzeit und selbständig</h2>
                <p>
                  flexible Arbeitszeiten keine Kernzeiten unbefristete
                  Einstellung nach Probezeit
                </p>
                
              </div>
              <div className="sub-grid-items">
                <div className="icon-center-alignment">
                  <img src={IconDesign2} alt="IconDesign2" />
                </div>
                <h2>Home-Office</h2>
                
                <p>Flexible Arbeitsorte und mobiles Arbeiten</p>
              </div>
              <div className="sub-grid-items">
                <div className="icon-center-alignment">
                  <img src={IconDesign2} alt="IconDesign2" />
                </div>
                <h2>Standort unabhängig</h2>
                <p style={{maxWidth:'100%'}}>über 25 Standorte in Deutschland moderne Offices</p>
              </div>
              <div className="sub-grid-items mobile-show-image">
               
               <img src={MenImage1} alt="MenImage1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

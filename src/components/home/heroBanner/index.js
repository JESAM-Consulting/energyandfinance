import React from "react";
import "./heroBanner.scss";
import XmldIcon from "../../../assets/icons/xmld.svg";
import XmldIconMobile from "../../../assets/icons/xmld-mobile.svg";
import DownArrow from "../../../assets/icons/mobile-down.svg";
import LongArrow from "../../../assets/icons/long-arrow.svg";
export default function HeroBanner() {
  return (
    <div>
      <div className="hero-banner-all-content-alignment">
        <div className="new-container-one">
          <div className="grid">
            <div className="grid-items">
              <div className="text-style">
                <h4>Werde</h4>
                <div className="button-rigth-alignment">
                <button>Energy Guide <br/> <span>(m/w/d)</span></button>
                </div>
                <div className="right-content-alignment">
                  <h6>
                    und lerne deine Aufgaben in diesem kurzen Video kennen
                  </h6>
                </div>
                <div className="mobile-down-show">
                  <div className="arrow-center-alignment">
                    <img src={DownArrow} alt="DownArrow"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="image-center-alignment">
                <iframe
                  src="https://player.vimeo.com/video/759241708?h=393305830d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="imagefilm_2_9.mp4"
                ></iframe>
              </div>
              <div className="video-text-style">
                <h6>Deine Karriere als Financial Guide starten</h6>
                <div className="icon-text">
                  <img src={LongArrow} alt="LongArrow"/>
                  <span>Jetzt bewerben</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

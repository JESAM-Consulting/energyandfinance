import React from "react";
import "./newClientSection.scss";
import ProfileRoundImage from '../../../assets/images/profile-round.png';
export default function NewClientSection() {
  return (
    <div>
      <div className="new-client-section-banner-design">
        <div className="container-md-3">
          <div className="grid">
            <div className="grid-items">
            <h1>
             Durch Energy & Finance bin ich am Markt überlegen. 
            </h1> 
            <p>André <span>von Energy & Finance</span></p>
            <button>
            Jetzt bewerben <br/>
            <span>(ohne Lebenslauf in 30 Sek.)</span>
            </button>
            </div>
            <div className="grid-items">
              <div className="profile-image">
                <img src={ProfileRoundImage} alt="ProfileRoundImage"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

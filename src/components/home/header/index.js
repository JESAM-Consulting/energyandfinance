import React, { useState } from "react";
import "./header.scss";
import Logo from "../../../assets/logo/logo.webp";
import ContactModal from "../../ContactModal";
import { NavLink } from "react-router-dom";
import SecModal from "../../secModal";
export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div>
        <div className="energy-header">
          <div className="new-container">
            <div className="new-header-alignment">
              <div className="logo">
                <img src={Logo} alt="Logo"/>
              </div>
              <div className="button">
              
                <button onClick={() => setModalOpen(!modalOpen)}>Jetzt bewerben
                <span>(ohne Lebenslauf in 30 Sek.)</span>
                </button>
             
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

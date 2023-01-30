import React, { useState } from "react";
import "./header.scss";
import Logo from "../../../assets/logo/logo.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div>
      {/* <div className="header-design">
        <div className="container-lg">
          <div className="mobile-first-text-show">
            <p>
              Ihr Vermögen <span>braucht</span> Sicherheit.
            </p>
          </div>
          <div className="header-alignment">
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <p>
                Ihr Vermögen <span>braucht</span> Sicherheit.
              </p>
            </div>
            <div className="button">
              <button onClick={() => setModalOpen(!modalOpen)}>Jetzt kostenfreie Beratung anfordern</button>
            </div>
          </div>
        </div> */}
        <div className="energy-header">
          <div className="new-container">
            <div className="new-header-alignment">
              <div className="logo">
                <img src={Logo} alt="Logo"/>
              </div>
              <div className="button">
                <button>Jetzt bewerben</button>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
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

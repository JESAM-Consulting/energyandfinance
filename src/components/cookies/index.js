import React from "react";
import "./cookies.scss";
export default function Cookies({onClose}) {
  return (
    <div>
      <div className="cookie-bottom-alignment">
        <div className="cookie-grid">
          <div className="cookie-grid-items">
            <p>
              Dise Seite verwendet Cookies und Facebook Pixel für die Analyse
              und Statistik. Wir nutzen Cookies zu unterschiedlichen Zwecken,
              unter anderem zur Analyse und für personalisierte
              Marketing-Mitteilungen. Durch die weitere Nutzung der Website
              stimmen Sie der Verwendung zu.
            </p>
          </div>
          <div className="cookie-grid-items">
            <button  onClick={onClose} >OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

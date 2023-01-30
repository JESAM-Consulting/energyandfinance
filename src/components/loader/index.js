import React from "react";
import "./loader.scss";
import { motion } from "framer-motion";
import FEConstruction from "../../assets/logo/white-logo.svg";

// import Logo from "../../assets/logo/fe-logo.svg";
export default function Loader() {
  return (
    <div>
      <motion.div
        className="custom-loader-design"
        initial={{ y: "100vh" }}
        animate={{ y: "0" }}
        transition={{
          duration: 1,
        }}
      >
        <div>
          <div className="logo-center-alignment">
            <img src={FEConstruction} alt="FEConstruction" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

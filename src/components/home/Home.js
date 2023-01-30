import React, { useEffect, useState } from "react";
import CommonSection from "../commonSection";
import "../home/home.scss";
import Loader from "../loader";
import SecModal from "../secModal";
import ClientSection from "./clientSection";
import DerFinance from "./derFinance";
import { motion } from "framer-motion";
import FinacialGuide from "./finacialGuide";
import Footer from "./footer";
import Header from "./header";
import HeroBanner from "./heroBanner";
import TextSection from "./textSection";
import WirSection from "./wirSection";
import NewClientSection from "./newClientSection";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      <HeroBanner />
      <CommonSection />
      {/* <FinacialGuide /> */}
      <ClientSection />
      {/* <DerFinance /> */}
      <TextSection />
      <NewClientSection/>
      <WirSection />
    </div>
  );
}

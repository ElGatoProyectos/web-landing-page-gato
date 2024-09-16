"use client";
import NavBar from "./components/navbar";
import Banner from "./components/banner";
import Benefits from "./components/benefits";
import CatFloat from "./components/catFloat";
import WsFloat from "./components/wsFloat";
import Plans from "./components/plans";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import PopUp from "./components/popUp";
import axios from "axios";

const index = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);
  const [dataWeb, setDataWeb] = useState<any[]>([]);

  const fetchDataWeb = async () => {
    try {
      const response = await axios.get(
        "https://azure-pheasant-355159.hostingersite.com/wp-json/wp/v2/plan?slug=planes-de-disenio-web"
      );
      setDataWeb(response.data[0].acf.plans);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataWeb();
  }, []);
  return (
    <>
      <NavBar openPopup={openPopup} />
      <main className="top-[60px] md:top-[80px] relative">
        <Banner openPopup={openPopup} />
        <Benefits openPopup={openPopup} />
        <Plans color="#0BC2E1" data={dataWeb} openPopup={openPopup} />
        <Contact />
        <Footer />
      </main>
      <CatFloat openPopup={openPopup} />
      <WsFloat />
      <PopUp isVisible={isPopupVisible} closePopUp={closePopup} />
    </>
  );
};
export default index;

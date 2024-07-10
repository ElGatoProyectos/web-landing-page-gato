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
        "https://raw.githubusercontent.com/Desarrollo2Gato/gato/main/planes/dataweb.json"
      );
      console.log(response.data)
      setDataWeb(response.data);
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
        <Plans color="#007cf8" data={dataWeb} openPopup={openPopup} />
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

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
import ContactServices from "./components/contact-service";
import { dataService } from "./interface/IServices";
import SubServices from "./components/body/subServices";
import Gallery from "./components/body/gallery";

const index = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  const [disenoWebData, setDisenoWebData] = useState<dataService>();
  const [loading, setLoading] = useState<boolean>(true);
  const [planWeb, setPlanWeb] = useState<any[]>([]);

  useEffect(() => {
    getDataService();
    fetchDataWeb();
  }, []);

  async function getDataService() {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://azure-pheasant-355159.hostingersite.com/wp-json/wp/v2/servicio`,
        {
          params: {
            slug: "diseno-web",
            acf_format: "standard",
          },
        }
      );
      setDisenoWebData(res.data[0]);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }
  const fetchDataWeb = async () => {
    try {
      const response = await axios.get(
        "https://azure-pheasant-355159.hostingersite.com/wp-json/wp/v2/plan?slug=planes-de-disenio-web"
      );
      setPlanWeb(response.data[0].acf.plans);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar openPopup={openPopup} />
      <main className="top-[60px] md:top-[80px] relative">
        <Banner openPopup={openPopup} />
        <Benefits openPopup={openPopup} />
        <SubServices
          loading={loading}
          subservices={
            disenoWebData?.acf?.service_detail?.section_subservices || null
          }
          description={
            "Desarrollamos una identidad de marca única y coherente, creando experiencias visuales que conectan emocionalmente con tu audiencia y fortalecen tu presencia en el mercado."
          }
        />
        <Plans color="#4608AD" data={planWeb} openPopup={openPopup} />
        <Gallery
          loading={loading}
          gallery={disenoWebData?.acf.service_detail.gallery || null}
          description={
            "Algunos de nuestros diseños web que combinan estética y funcionalidad."
          }
        />
        <ContactServices openPopup={openPopup} />
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

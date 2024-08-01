"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import PopUp from "../components/popUp";
import WsFloat from "../components/wsFloat";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const Content = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);
  return (
    <>
      <Navbar openPopup={openPopup} />
      <main className="top-[60px] md:top-[80px] relative ">
        <section className=" max-w-[1440px] mx-auto justify-center items-center flex flex-col md:min-h-[calc(100vh-152px)] gap-8 ">
          <Image
            height={184}
            width={257}
            src={"/gatosend.png"}
            alt="Imagen de un gato para la vista Gracias"
            className="max-w-[180px] object-contain"
            title="Imagen de un gato para la vista Gracias"
          />
          <h2 className="text-center font-bold text-5xl text-[#444]">
            ¡Gracias por tu interés en nuestro servicio!
          </h2>
          <p className="md:max-w-[800px] mx-auto text-center font-semibold text-xl text-[#999]">
            Tu información ha sido recibida correctamente. Nuestro equipo te
            contactará en breve para discutir cómo podemos asistirte. ¡Estamos
            encantados de ayudarte!
          </p>
          <Link
            title="Agencia Gato"
            href={"https://gato.pe/"}
            target="_blank"
            className="bg-[#0BC2E1] font-semibold text-xl text-white rounded-full px-6 py-2"
          >
            Visita nuestra web
          </Link>
        </section>
        <Footer />
      </main>
      <WsFloat />
      <PopUp isVisible={isPopupVisible} closePopUp={closePopup} />
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
        gtag('event', 'conversion', {'send_to': 'AW-16593859821/T_L3CPiurMcZEO3pyOg9'});
      `}
      </Script>
    </>
  );
};

export default Content;

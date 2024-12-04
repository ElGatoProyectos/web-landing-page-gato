"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import PopUp from "../components/popUp";
import WsFloat from "../components/wsFloat";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);
  return (
    <>
      <Navbar openPopup={openPopup} />
      <main className="top-[60px] md:top-[80px] relative ">
        <section className=" max-w-[1440px] mx-auto justify-center items-center flex flex-col md:min-h-[calc(100vh-152px)] gap-8 p-8 md:p-16 xl:px-24">
          <Image
            height={360}
            width={490}
            src={"/thanks.webp"}
            alt="Imagen de un gato para la vista Gracias"
            className="max-w-[250px] object-contain"
            title="Imagen de un gato para la vista Gracias"
          />
          <h2 className="text-center font-bold text-5xl text-stone-800">
            ¡Gracias por tu interés en nuestro servicio!
          </h2>
          <p className="md:max-w-[800px] mx-auto text-center font-semibold text-xl text-[#999]">
            Tu información ha sido recibida correctamente. Nuestro equipo te
            contactará en breve para discutir cómo podemos asistirte. ¡Estamos
            encantados de ayudarte!
          </p>
          <Link
            title="Sitio web de Agencia Gato"
            href={"https://gato.pe/"}
            target="_blank"
            className="bg-[#4608AD] font-semibold text-xl text-white rounded-full px-6 py-2"
          >
            Visita nuestra web
          </Link>
        </section>
        <Footer />
      </main>
      <WsFloat />
      <PopUp isVisible={isPopupVisible} closePopUp={closePopup} />
    </>
  );
};

export default Content;

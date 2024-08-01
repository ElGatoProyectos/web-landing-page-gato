"use client";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import CatFloat from "./components/catFloat";
import PopUp from "./components/popUp";
import WsFloat from "./components/wsFloat";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  return (
    <>
      <Navbar openPopup={openPopup} />
      <main className="top-[60px] md:top-[80px] relative min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-80px)] min-w-screen">
        <section className="p-8 lg:p-16 2xl:px:24">
          <div className="w-full flex flex-col h-full justify-between  ">
            <div className="w-full flex flex-col gap-4 md:gap-10 items-center justify-center ">
              <h2 className="text-[3rem] text-[#3D3D3D] font-bold">
                ¡Oops! Página no encontrada
              </h2>
              <p className="text-xl text-[#666666]">
                Lo sentimos, pero la página que estas buscando no existe.
              </p>
              <Link
                href={"/"}
                title="GATO"
                className="text-[#0BC2E1] font-bold hover:scale-105 transition-all duration-300"
              >
                Visitar la web
              </Link>
            </div>
            <div>
              <Image
                height={500}
                width={500}
                className=" max-h-[450px] w-auto object-contain mx-auto"
                src="/gato404.png"
                alt="Gato con un cartel de error"
                title="Gato 404"
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
      <CatFloat openPopup={openPopup} />
      <WsFloat />
      <PopUp isVisible={isPopupVisible} closePopUp={closePopup} />
    </>
  );
}

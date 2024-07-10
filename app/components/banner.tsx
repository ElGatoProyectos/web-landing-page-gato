"use client";
import React from "react";
import Logos from "./logos";
import Form from "./form";
interface Props {
  openPopup: () => void;
}

const banner: React.FC<Props> = ({ openPopup }) => {
  return (
    <div className="w-full h-auto">
      <div className="w-full bg-gradient-to-b from-[#D8F9FF] h-auto">
        <div className="relative h-auto flex flex-col lg:flex-row items-center justify-between lg:min-h-[800px] lg:px-16 px-8 py-16 max-w-[1440px] mx-auto md:content-end gap-8 md:gap-12">
          <div className="w-full">
            <div className=" mb-12 md:mb-0 flex flex-col items-center justify-center">
              <h3 className="text-[#1C2952] text-5xl md:text-5xl llg:text-[3rem] mb-3 drop-shadow-lg text-center">
                POSICIONA TU
              </h3>
              <h2 className="text-[#0BC2E1] text-5xl md:text-6xl lg:text-[3.4rem] mb-4 font-bold drop-shadow-lg text-center">
                MARCA EN LÍNEA
              </h2>
              <p className="text-[#1C2952] text-xl md:text-2xl drop-shadow-lg text-center mb-4">
                Soluciones Web a Medida{" "}
              </p>
              <button
                onClick={openPopup}
                className="bg-[#0BC2E1] font-semibold text-white px-6 py-3  rounded-full"
              >
                ¡Cotiza con nosotros!
              </button>
            </div>
            <div className="relative w-full mt-8">
              <img className=" relative w-full mx-auto h-auto object-contain" src="/banner/pages.png" alt="desarrollo banner" />
              <img className="xl:hidden absolute bottom-0 object-fill w-full h-14 sm:h-20   md:h-36 lg:h-24 left-0" src="/banner/arco.png" alt="arco" />
            </div>
            <img className="hidden xl:block absolute bottom-0 w-[calc(100%-455px)] max-h-40 object-fill h-auto left-0" src="/banner/arco.png" alt="arco" />
          </div>
          <div className="relative w-full h-full md:max-w-[430px] md:mx-auto">
            <div className="h-full relative z-[1]">
              <Form />
            </div>
          </div>

        </div>
      </div>
      <Logos />
    </div>
  );
};

export default banner;

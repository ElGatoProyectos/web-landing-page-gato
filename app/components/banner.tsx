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
      <div className="w-full bg-gradient-to-b from-[#F4F5FF] h-auto">
        <div className="relative h-auto flex flex-col lg:flex-row items-center justify-between lg:min-h-[800px] lg:px-16 px-8 py-16 max-w-[1440px] mx-auto md:content-end gap-8 md:gap-12">
          <div className="w-full">
            <div className=" mb-12 md:mb-0 flex flex-col items-center justify-center">
              <h2 className="text-center">
                <span className="block text-stone-800 text-5xl md:text-5xl llg:text-[3rem] mb-3 drop-shadow-lg text-center">
                  POSICIONA TU
                </span>
                <span className="block text-[#4608AD] text-5xl md:text-6xl lg:text-[3.4rem] mb-4 font-bold drop-shadow-lg text-center">
                  MARCA EN LÍNEA
                </span>
                <span className="block text-stone-800 text-xl md:text-2xl drop-shadow-lg text-center mb-4">
                  Soluciones Web a Medida{" "}
                </span>
              </h2>

              <button
                onClick={openPopup}
                className="bg-[#4608AD] font-semibold text-white px-6 py-3  rounded-full"
              >
                ¡Cotiza con nosotros!
              </button>
            </div>
            <div className="relative w-full mt-8">
              <img
                className=" relative w-full mx-auto h-auto object-contain"
                src="/banner/pages.png"
                alt="Imágenes de diseños de páginas web elaboradas por Agencia Gato, apiladas "
                title="Imágenes de diseños de páginas web elaboradas por Agencia Gato, apiladas "
              />
              <svg
                className=" absolute bottom-0 object-contain w-full h-auto left-0"
                width="1079"
                height="156"
                viewBox="0 0 1079 156"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1078.54 156C931.568 55.8621 739.394 1.12608e-05 539.5 0C339.606 -1.12608e-05 147.431 55.862 0.461914 156H1078.54Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1046 156C903.769 69.0842 724.957 21 539.5 21C354.044 21 175.231 69.0842 33 156H1046Z"
                  fill="#4608AD"
                />
              </svg>

              {/* <img
                className="xl:hidden absolute bottom-0 object-fill w-full h-14 sm:h-20   md:h-36 lg:h-24 left-0"
                src="/banner/arco.png"
                alt="Figura de decoración: medio circulo"
                title="Figura de decoración: medio circulo"
              /> */}
            </div>
            {/* <svg
              className="hidden xl:block absolute bottom-0 w-[calc(100%-455px)] max-h-40 object-contain h-auto left-0"
              width="1079"
              height="156"
              viewBox="0 0 1079 156"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1078.54 156C931.568 55.8621 739.394 1.12608e-05 539.5 0C339.606 -1.12608e-05 147.431 55.862 0.461914 156H1078.54Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1046 156C903.769 69.0842 724.957 21 539.5 21C354.044 21 175.231 69.0842 33 156H1046Z"
                fill="#3A0C87"
              />
            </svg> */}
            {/* <img
              className="hidden xl:block absolute bottom-0 w-[calc(100%-455px)] max-h-40 object-fill h-auto left-0"
              src="/banner/arco.png"
              alt="Figura de decoración: medio circulo"
              title="Figura de decoración: medio circulo"
            /> */}
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

"use client";
import SliderPlans from "./slider";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IPlan } from "../interface/iPlan";
type Props = {
  color: string;
  data: IPlan[];
  openPopup: () => void;
};

const plans = (prop: Props) => {
  const [selectedPlan, setSelectedPlan] = useState<IPlan | null>(null);
  const planDetailRef = useRef<HTMLDivElement>(null);

  const handleViewPlan = (plan: any) => {
    setSelectedPlan(null);
    setSelectedPlan(plan);
  };
  useEffect(() => {
    if (selectedPlan && planDetailRef.current) {
      planDetailRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedPlan]);
  const closePopup = () => {
    setSelectedPlan(null);
  };
  return (
    <div className="w-full bg-[#F3FAFB]" id="planes">
      <div className="w-full lg:px-16 px-8  max-w-[1440px] mx-auto py-16 md:py-20 ">
        <h2 className="text-[#444] text-4xl md:text-6xl font-semibold mb-5 text-center">
          Conoce nuestros <span className="text-[#0BC2E1]">paquetes</span> para
          emprendedores
        </h2>
        <p className="text-center text-[#666] mb-4 lg:mb-14">
          Escoge el paquete que mejor se adapte a tus necesidades
        </p>
        <div className="px-6 w-full mb-14 text-center">
          <SliderPlans
            color={"#0BC2E1"}
            data={prop.data}
            handleViewPlan={handleViewPlan}
            openPopup={prop.openPopup}
          />
          <p className="text-center mt-2 lg:mt-7 text-[#666]">
            Personaliza tu plan con nosotros.{" "}
            <button
              onClick={prop.openPopup}
              className="text-[#0BC2E1] font-semibold"
            >
              ¡Diseñemos tu estrategia perfecta!
            </button>
          </p>
        </div>

        {selectedPlan && (
          <div
            id="planContainer"
            ref={planDetailRef}
            className="relative bg-white p-8 md:p-16  w-full rounded-xl shadow-lg "
          >
            <button
              className="absolute top-4 right-4 text-2xl font-bold"
              onClick={closePopup}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.8162 6.83117C40.3779 5.2694 40.3779 2.73309 38.8162 1.17133C37.2544 -0.390442 34.7181 -0.390442 33.1563 1.17133L20 14.3402L6.83117 1.18382C5.2694 -0.377948 2.73309 -0.377948 1.17133 1.18382C-0.390442 2.74559 -0.390442 5.2819 1.17133 6.84367L14.3402 20L1.18382 33.1688C-0.377948 34.7306 -0.377948 37.2669 1.18382 38.8287C2.74559 40.3904 5.2819 40.3904 6.84367 38.8287L20 25.6598L33.1688 38.8162C34.7306 40.3779 37.2669 40.3779 38.8287 38.8162C40.3904 37.2544 40.3904 34.7181 38.8287 33.1563L25.6598 20L38.8162 6.83117Z"
                  fill={"#0BC2E1"}
                />
              </svg>
            </button>
            <h2 className="text-[#666] text-center text-4xl mb-7 font-bold capitalize">
              {selectedPlan.plan_name}
            </h2>
            <div className="flex flex-col md:flex-row gap-20 lg:gap-28 justify-between">
              <div className="md:w-1/2 2xl:w-2/4 2xl:pr-10">
                <div className="text-[#0BC2E1] font-bold text-xl mb-7">
                  <p>
                    {selectedPlan.short_description}: S/. {selectedPlan.price}
                    .00
                  </p>
                </div>
                <p className="text-[#666] text-center w-full ">
                  {selectedPlan.long_description}
                </p>

                <h3 className={`text-xl font-bold mb-2 text-[#0BC2E1]`}>
                  Incluye
                </h3>
                <ul className="pl-5 list-none text-[1rem] md:max-h-[400px] md:overflow-y-auto mt-7">
                  {selectedPlan.items.length > 0 &&
                    selectedPlan.items[0].sub_items &&
                    selectedPlan.items[0].sub_items.map(
                      (detail: any, index: number) => (
                        <li
                          key={index}
                          className={`flex justify-start items-start text-[#666] mb-3`}
                        >
                          <div>
                            <svg
                              className="w-5 h-5 object-contain drop-shadow-xl"
                              width="100%"
                              height="100%"
                              viewBox="0 0 100 100"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M50 2.5C23.7664 2.5 2.5 23.7664 2.5 50C2.5 76.2336 23.7664 97.5 50 97.5C76.2336 97.5 97.5 76.2336 97.5 50C97.5 23.7664 76.2336 2.5 50 2.5ZM79.4718 40.4561C69.1786 50.7223 58.9049 61.0089 48.6247 71.2881C47.6257 72.2871 46.6363 73.297 45.6232 74.282C43.7603 76.0941 41.147 76.0908 39.3111 74.2592C33.2206 68.1839 27.1355 62.1031 21.058 56.0148C19.1215 54.0751 18.4069 51.7656 19.2513 49.1177C20.1195 46.3974 22.0776 44.8599 24.8747 44.4804C27.1161 44.1766 29.0103 45.0372 30.5781 46.6006C34.0218 50.0324 37.4071 53.5248 40.8821 56.923C42.8532 58.8498 42.2444 58.7687 44.0566 56.963C52.729 48.3176 61.3885 39.6582 70.0349 30.9857C71.7995 29.2169 73.8906 28.5497 76.3071 28.9941C79.4286 29.5682 81.618 32.3016 81.631 36.2069C81.6137 37.4687 80.859 39.0732 79.4718 40.4561Z"
                                fill="#0BC2E1"
                              />
                            </svg>
                          </div>
                          <span className="ml-3 ">{detail.name_sub_item}</span>
                        </li>
                      )
                    )}
                </ul>
              </div>

              <div className="relative md:w-1/2 2xl:w-2/5 bg-[#F3FAFB] px-8 pt-8 rounded-lg shadow-lg flex flex-col justify-between lg:justify-start items-center lg:items-start">
                <h3 className="text-[#0BC2E1] font-medium text-3xl ">
                  <span className="text-[#666] block">
                    ¿Listo para empezar?
                  </span>{" "}
                  Haz realidad tu idea con nosotros.
                </h3>
                <button
                  onClick={prop.openPopup}
                  className="border border-[#0BC2E1] bg-transparent text-[#0BC2E1] rounded-full text-xl font-medium px-4 py-2 mt-7 hover:bg-[#0BC2E1] hover:text-white transition-all duration-300"
                >
                  Cotizar
                </button>
                <img
                  src="/mujer.webp"
                  alt="chica"
                  loading="lazy"
                  className="mt-4 lg:absolute relative max-h-60 object-contain w-auto float-end bottom-0 right-4 lg:mt-auto "
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default plans;

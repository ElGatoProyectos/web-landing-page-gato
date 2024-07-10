"use client";
import React, { MouseEventHandler, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IPlan } from "@/app/interface/iPlan";
import ActionBtn from "./actionBtn";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

type SliderPlansProps = {
  color: string;
  data: IPlan[];
  handleViewPlan: (plan: IPlan) => void;
  openPopup: () => void;
};

const slider = ({
  color,
  data,
  handleViewPlan,
  openPopup,
}: SliderPlansProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainColor = color;

  function SampleNextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      >
        <svg
          className="h-10 -translate-y-full"
          width="100%"
          height="100%"
          viewBox="0 0 33 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.7917 46.2361C33.4028 43.8931 33.4028 40.0881 31.7917 37.7452L7.04657 1.75723C5.43556 -0.585747 2.81927 -0.585747 1.20826 1.75723C-0.402756 4.10019 -0.402756 7.90517 1.20826 10.2481L23.0407 42L1.22115 73.7519C-0.38987 76.0948 -0.38987 79.8998 1.22115 82.2428C2.83216 84.5857 5.44845 84.5857 7.05946 82.2428L31.8046 46.2548L31.7917 46.2361Z"
            fill={mainColor}
          />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <svg
          className="rotate-180 h-10 -translate-y-full"
          width="100%"
          height="100%"
          viewBox="0 0 33 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.7917 46.2361C33.4028 43.8931 33.4028 40.0881 31.7917 37.7452L7.04657 1.75723C5.43556 -0.585747 2.81927 -0.585747 1.20826 1.75723C-0.402756 4.10019 -0.402756 7.90517 1.20826 10.2481L23.0407 42L1.22115 73.7519C-0.38987 76.0948 -0.38987 79.8998 1.22115 82.2428C2.83216 84.5857 5.44845 84.5857 7.05946 82.2428L31.8046 46.2548L31.7917 46.2361Z"
            fill={mainColor}
          />
        </svg>
      </div>
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (current: any, next: any) => setCurrentSlide(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container w-full">
      <Slider {...settings} className="">
        {data.map((item, index) => (
          <div
            key={index}
            className="max-w-[350px] w-full h-[570px]  rounded-2xl bg-white shadow-lg py-6 mx-auto"
          >
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="">
                <h3 className="px-6 text-[#666] font-medium text-2xl text-left mb-1 capitalize">
                  {item.name.toLocaleLowerCase()}
                </h3>
                <div className="relative w-[90%] bg-[#0BC2E1] py-4 text-white rounded-r-full font-extrabold text-4xl mb-4">
                  S./{item.price}
                  <span className="relative text-xl">.00 <span className="absolute bottom-0 right-0 translate-y-full text-xs font-semibold">
                    + IGV
                  </span></span>
                </div>
                <p className="px-6 text-center text-[#888] ">
                  {item.descriptionCorta}
                </p>
              </div>
              <div className="px-6 h-full flex flex-col justify-between">
                <ul className="">
                  {item.details.slice(0, 6).map((detail, index) => (
                    <li
                      key={index}
                      className="flex justify-start items-start text-[#666] mb-3 "
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
                      <span className="ml-3 text-base truncate lg:space-x-2">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleViewPlan(item)}
                  className="text-sm text-[#ddd] text-center mb-4 block mx-auto"
                >
                  Ver más
                </button>
                <div>
                  <ActionBtn name="Empezar ahora" onAction={openPopup} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default slider;

import React, { useEffect, useState } from "react";

interface Props {
  openPopup: () => void;
}

const CatFloat: React.FC<Props> = ({ openPopup }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setIsVisible((prev) => !prev);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isHovered) {
      setIsVisible(true);
    }
  }, [isHovered]);

  return (
    <div
      className={`fixed z-10 lg:top-1/3 left-0 transform transition-transform duration-500 ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={openPopup}
        className={`cursor-pointer absolute -top-2 left-14 md:top-[15px] md:left-[92px] whitespace-nowrap shadow-xl bg-white rounded-t-full rounded-bl-full text-[#444] px-4 py-1 transition-opacity duration-700 text-sm md:text-base z-10 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        ¡Haz realidad tu visión!
      </div>
      <img
        onClick={openPopup}
        src="/gatofloat.png"
        alt="gato"
        className={`cursor-pointer h-[70px] md:h-[100px] drop-shadow-xl transition-transform duration-500 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default CatFloat;

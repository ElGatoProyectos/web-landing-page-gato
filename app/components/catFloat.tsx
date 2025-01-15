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
      className={`fixed z-10 top-1/2 right-0 transform transition-transform duration-500 drop-shadow-xl group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={openPopup}
        className={`cursor-pointer absolute -top-2 left-0 md:top-[15px] -translate-x-[95%] whitespace-nowrap drop-shadow-xl bg-white rounded-t-full rounded-bl-full text-[#444] px-4 py-1 text-sm md:text-base z-10 group-hover:bg-[#4608AD] group-hover:text-white duration-700 transition-all`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Contáctanos aquí
      </div>
      <img
        onClick={openPopup}
        src="/gatofloat.png"
        alt="Gato negro saludando"
        title="Gato negro saludando"
        className={`cursor-pointer h-[70px] md:h-[100px] drop-shadow-xl transition-transform duration-500`}
        style={{ transform: "rotateY(180deg)" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default CatFloat;

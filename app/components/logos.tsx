import React from "react";
import Marquee from "react-marquee-slider";

const logos = () => {
  const srcLogos = [
    { src: "/clientLogos/ambar.png", alt: "Cliente AMBAR PADDLE" },
    { src: "/clientLogos/bcf.png", alt: "Cliente BCF" },
    { src: "/clientLogos/caprepar.png", alt: "Cliente CAPREPAR" },
    { src: "/clientLogos/embalaje.png", alt: "Cliente EMBALAJE COMPANY" },
    { src: "/clientLogos/enmat.png", alt: "Cliente ENMAT" },
    { src: "/clientLogos/hogardia.png", alt: "Cliente HOGARDIA" },
    { src: "/clientLogos/jorcamgames.png", alt: "Cliente JORCAMGAMES" },
    { src: "/clientLogos/naturmed.png", alt: "Cliente NATURMED" },
    { src: "/clientLogos/nutrisalud.png", alt: "Cliente NUTRISALUD" },
    { src: "/clientLogos/socialcommerce.png", alt: "Cliente SocialCommerce" },
    { src: "/clientLogos/todonegocios.png", alt: "Cliente TODONEGOCIO" },
    { src: "/clientLogos/hierrolate.png", alt: "Cliente HIERROLATE" },
  ];
  return (
    <div className="w-full bg-[#0BC2E1] h-[100px] py-5   ">
      <div className="w-full h-full   overflow-hidden ">
        <Marquee
          velocity={15}
          scatterRandomly={false}
          resetAfterTries={200}
          direction={"rtl"}
          onInit={() => console.log("Marquee initialized")}
          onFinish={() => console.log("Marquee finished")}
        >
          {srcLogos.map((logo, index) => (
              <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-[60px] object-contain xl:mx-12 mx-8"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default logos;

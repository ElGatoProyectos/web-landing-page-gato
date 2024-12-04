import Slider from "react-slick";

const logos = () => {
  const srcLogos = [
    { src: "/clientLogos/ambar.png", name: "Cliente AMBAR PADDLE" },
    { src: "/clientLogos/bcf.webp", name: "Cliente BCF" },
    { src: "/clientLogos/caprepar.webp", name: "Cliente CAPREPAR" },
    { src: "/clientLogos/embalaje.png", name: "Cliente EMBALAJE COMPANY" },
    { src: "/clientLogos/enmat.png", name: "Cliente ENMAT" },
    { src: "/clientLogos/hogardia.png", name: "Cliente HOGARDIA" },
    { src: "/clientLogos/jorcamgames.png", name: "Cliente JORCAMGAMES" },
    { src: "/clientLogos/naturmed.png", name: "Cliente NATURMED" },
    { src: "/clientLogos/nutrisalud.png", name: "Cliente NUTRISALUD" },
    { src: "/clientLogos/socialcommerce.png", name: "Cliente SocialCommerce" },
    { src: "/clientLogos/todonegocios.png", name: "Cliente TODONEGOCIO" },
    { src: "/clientLogos/hierrolate.png", name: "Cliente HIERROLATE" },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };
  return (
    <div className="w-full bg-[#4608AD] h-[100px] overflow-hidden">
      <Slider {...settings}>
        {srcLogos.map((logo, index) => (
          <div key={index} className="h-[100px] w-full content-center">
            <img
              src={logo.src}
              alt={'Logo de nuestro cliente: ' + logo.name}
              title={'Logo de nuestro cliente: ' + logo.name}
              loading="lazy"
              className="h-[60px] object-contain mx-auto"
            />
          </div>
        ))}
      </Slider>
     {/*  <div className="w-full h-full   overflow-hidden ">
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
      </div> */}
    </div>
  );
};

export default logos;

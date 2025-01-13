import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper/modules";

import Link from "next/link";
import { useState } from "react";
import ModalImg from "@/app/components/modalImg";
import { CardSkeleton } from "../skeleton";
import { IImage } from "@/app/interface/IServices";

type GalleryProps = {
  gallery: IImage[] | null;
  description: string;
  loading: boolean;
};
const Gallery: React.FC<GalleryProps> = ({ gallery, description, loading }) => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<IImage | null>(null);

  const handleImageClick = (image: IImage) => {
    setSelectedImg(image);
    setOpen(true);
  };

  return (
    <section id="galeria" className="bg-[#F4F5FF] text-stone-800">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 pt-16 pb-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="xl:text-[2.5rem] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-2 md:mb-4">
            Galeria de{" "}
            <span style={{ color: "#4608AD" }} className={``}>
              fotos
            </span>
          </h2>
          <p className="text-stone-500 lg:text-lg xl:text-xl">{description}</p>
        </div>
        {/* carrusel */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <CardSkeleton className=" aspect-square w-full h-full" />
            <div className="hidden sm:block">
              <CardSkeleton className=" aspect-square w-full h-full" />
            </div>
            <div className="hidden md:block">
              <CardSkeleton className=" aspect-square w-full h-full" />
            </div>
            <div className="hidden md:block">
              <CardSkeleton className=" aspect-square w-full h-full" />
            </div>
            <div className="hidden md:block">
              <CardSkeleton className=" aspect-square w-full h-full" />
            </div>
            <div className="hidden md:block">
              <CardSkeleton className=" aspect-square w-full h-full" />
            </div>
            <div className="hidden lg:block">
              <CardSkeleton className=" aspect-square w-full h-full" />
            </div>
            <div className="hidden lg:block">
              <CardSkeleton className=" aspect-square w-full h-full" />
            </div>

            <div className="hidden lg:block">
              <CardSkeleton className=" aspect-square w-full h-full" />
            </div>
          </div>
        ) : gallery ? (
          <Swiper
            modules={[Navigation, Pagination, Grid]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1, grid: { rows: 1, fill: "row" } },
              600: { slidesPerView: 2, grid: { rows: 1, fill: "row" } },
              780: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
              1280: { slidesPerView: 4, grid: { rows: 2, fill: "row" } },
            }}
          >
            {gallery.length > 0 ? (
              gallery.map((image) => (
                <SwiperSlide key={image.id}>
                  <div
                    className="w-full aspect-square rounded-lg shadow-sm overflow-hidden"
                    onClick={() => handleImageClick(image)}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      title={image.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div className="text-stone-600 text-center">
                <p>
                  No se encontraron imágenes disponibles.{" "}
                  <a
                    href="/portafolio"
                    className="text-[#4608AD] underline underline-offset-1 font-semibold"
                  >
                    Visita nuestro portafolio
                  </a>
                </p>
              </div>
            )}
          </Swiper>
        ) : (
          <span>Imagenes no disponibles</span>
        )}
      </div>
      {selectedImg && (
        <ModalImg
          open={open}
          setOpen={setOpen}
          url={selectedImg.url}
          alt={selectedImg.alt ? selectedImg.alt : "imagen"}
          title={selectedImg.title ? selectedImg.title : "imagen"}
          height={selectedImg.height}
          width={selectedImg.width}
        />
      )}
    </section>
  );
};

type SocialLinkProps = {
  href: string;
  color: string;
  children: React.ReactNode;
  textColor: string;
};
const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  color = "#4608AD",
  children,
  textColor = "#ffffff",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{
        backgroundColor: color,
        color: isHovered ? color : textColor,
      }}
      target="_blank"
      className={`aspect-square overflow-hidden rounded-full flex items-center justify-center text-[1.2rem] w-10 h-10 transition-all duration-500 relative group hover:shadow-md `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{ backgroundColor: textColor }}
        className="absolute w-full h-full top-0 left-0  opacity-0 group-hover:opacity-100 group-hover:w-full -translate-x-full group-hover:translate-x-0 transition-all duration-500 rounded-full transform"
      />
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default Gallery;

import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

import { FaTiktok } from "react-icons/fa";

const footer = () => {
  return (
    <div className="w-full bg-[#4608AD]">
      <div className="w-full max-w-[1440px] mx-auto lg:px-16 md:px-8 p-6 flex flex-col-reverse md:flex-row gap-4 justify-between items-center">
        <small className="text-white text-center text-sm ">
        © <strong>Agencia GATO</strong> 2024. Todos los derechos reservados.
        </small>
        <div className="flex gap-4 items-center">
          <Link
            href={"https://www.facebook.com/agenciagatope"}
            target="blank"
            className="hover: scale-105 transition-all duration-300"
          >
            <FaFacebookF className="text-white text-2xl" />
          </Link>
          <Link
            target="_blank"
            href={
              "https://www.instagram.com/agenciagato.pe?igsh=bmZib2MxdDVxeXNu"
            }
            className="hover: scale-105 transition-all duration-300"
          >
            <BsInstagram className="text-white text-2xl" />
          </Link>
          <Link
            target="blank"
            href={"https://www.linkedin.com/company/agenciagato"}
            className="hover: scale-105 transition-all duration-300"
          >
            <FaLinkedinIn className="text-white text-2xl" />
          </Link>
          <Link
            target="blank"
            href={"https://www.tiktok.com/@agenciagato?_t=8nidJWZNVaP&_r=1"}
            className="hover:scale-105 transition-all duration-300"
          >
            <FaTiktok className="text-white text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default footer;

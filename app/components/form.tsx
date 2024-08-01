"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendFormSchema } from "@/app/schemas/sendForm";
import ConfirmationModal from "./modal";
import CountrySelect from "./countrySelect";
import { useRouter } from 'next/navigation';
import { Router } from "next/router";
type Inputs = {
  fullname: string;
  company: string;
  email: string;
  phone: string;
  ideaDescription: string;
  country_code: string;
};

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(sendFormSchema),
  });

  async function captureTokenDynamic() {
    console.log(
      "Capturing token with:",
      process.env.NEXT_PUBLIC_EMAIL,
      process.env.NEXT_PUBLIC_PASSWORD
    );
    try {
      const response: any = await axios.post(
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/jwt-auth/v1/token",
        {
          username: process.env.NEXT_PUBLIC_EMAIL,
          password: process.env.NEXT_PUBLIC_PASSWORD,
        }
      );
      console.log("Token captured:", response.data.token);
      return response.data.token;
    } catch (error) {
      console.error("Error capturing token:", error);
      setModalMessage("Error.");
      setModalMessage("Error al capturar el token.");
      setIsModalOpen(true);
      throw error;
    }
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setIsSubmitting(true);
    

    try {
      /* const token = await captureTokenDynamic();
      await axios.post(
        "https://palegreen-anteater-636608.hostingersite.com/wp-json/api/v1/send-mail/",
        {
          name: data.fullname,
          company: data.company,
          email: data.email,
          phone: `(${data.country_code}) ${data.phone}`,
          service: "Diseño Web",
          message: data.ideaDescription,
          origin: "Landing Page Diseño Web",
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      ); */
      const newPath = "/registro";
      window.history.replaceState(null, "", newPath);
      reset();
      setIsSubmitting(false);
      setModalTitle("¡Hemos Recibido Tu Solicitud!");
      setModalMessage(
        `¡Tu camino hacia el éxito ha comenzado! Un
              especialista se comunicará contigo en breve para discutir cómo
              podemos llevar tu visión al siguiente nivel. ¡Nos emociona
              trabajar contigo!`
      );
      setIsModalOpen(true);
      router.push('/gracias');
    } catch (error) {
      console.error("Error sending data:", error);
      setIsSubmitting(false);
      setModalTitle("Error");
      setModalMessage(
        "Error al enviar el mensaje. Por favor, inténtelo de nuevo o contáctenos"
      );
      setIsModalOpen(true);
    }
    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-[430px] bg-white h-full rounded-3xl border border-[#0BC2E1] p-8 shadow-lg"
      >
        <div className="flex flex-col h-full justify-center overflow-y-auto">
          <div className="text-center mb-5">
            <h2 className="text-[#0BC2E1] text-2xl md:text-3xl font-semibold mb-3">
              ¡Diseñemos Tu Sitio Web Juntos!
            </h2>
            <p className="text-[#888]">
              Transforma tus ideas en un sitio web que refleje tu marca.
              Completa el formulario y comenzaremos a crear tu estrategia de
              diseño web.
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Nombre"
              id="fullname"
              className=" bg-transparent w-full border rounded-lg px-4 py-2 placeholder:text-[#bbb] text-[#888] mb-3 outline-none focus:border-[#0BC2E1]"
              {...register("fullname")}
            />
            {errors.fullname && (
              <p className="text-red-500 text-xs mb-2">
                {errors.fullname?.message}
              </p>
            )}
            <input
              type="text"
              placeholder="Empresa"
              id="company"
              className="bg-transparent w-full border rounded-lg px-4 py-2 placeholder:text-[#bbb] text-[#888] mb-3 outline-none  focus:border-[#0BC2E1]"
              {...register("company")}
            />
            {errors.company && (
              <p className="text-red-500 text-xs mb-2">
                {errors.company?.message}
              </p>
            )}
            <div className="w-full flex gap-4">
              <div className="w-1/2">
                <CountrySelect
                  id="country_code"
                  register={register("country_code")}
                />
                {errors.country_code && (
                  <p className="text-red-500 text-xs mb-2">
                    {errors.country_code?.message}
                  </p>
                )}
              </div>

              <div className="">
                <input
                  type="text"
                  placeholder="Número celular "
                  id="phone"
                  className="bg-transparent w-full border rounded-lg px-4 py-2 placeholder:text-[#bbb] text-[#888] mb-3 outline-none  focus:border-[#0BC2E1]"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mb-2">
                    {errors.phone?.message}
                  </p>
                )}
              </div>
            </div>

            <input
              type="email"
              placeholder="Email"
              id="email"
              className="bg-transparent w-full border rounded-lg px-4 py-2 placeholder:text-[#bbb] text-[#888] mb-3 outline-none focus:border-[#0BC2E1]"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mb-2">
                {errors.email?.message}
              </p>
            )}
            <textarea
              rows={3}
              placeholder="cuéntanos tu idea"
              id="ideaDescription"
              className=" resize-none bg-transparent w-full border rounded-lg px-4 py-2 placeholder:text-[#bbb] text-[#888] mb-3 outline-none focus:border-[#0BC2E1]"
              {...register("ideaDescription")}
            ></textarea>
            {errors.ideaDescription && (
              <p className="text-red-500 text-xs mb-2">
                {errors.ideaDescription?.message}
              </p>
            )}
          </div>
          <div className="mx-auto w-fit">
            <button
              type="submit"
              className="bg-[#0BC2E1] text-white font-bold px-6 py-3 rounded-full hover:bg-[#87D5E2] transition-all duration-300"
            >
              {loading ? "Enviando..." : "Empezar ahora"}
            </button>
          </div>
        </div>
      </form>
      <ConfirmationModal
        isOpen={isModalOpen}
        message={modalMessage}
        title={modalTitle}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Form;

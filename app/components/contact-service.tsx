import Image from "next/image";
import ActionBtn from "./actionBtn";

const ContactServices = ({ openPopup }: { openPopup: () => void }) => {
  return (
    <section className="bg-[#F4F5FF] w-full">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 pt-16 pb-16 flex flex-col md:flex-row gap-8">
        <div className="bg-white rounded-xl p-4 md:p-6 flex flex-row shadow-md lg:w-1/2 justify-between items-center gap-2">
          <Image
            src={"/img/cats/gato_corbata_morado_foco.png"}
            width={340}
            height={385}
            alt="Gato negro sentado con cobata morada, al lado un foco amarillo"
            title="Gato negro sentado con cobata morada, al lado un foco amarillo"
            className="max-h-[200px] max-w-1/3 aspect-auto object-contain "
          />

          <div className="w-full flex flex-col justify-start items-start gap-4">
            <p className="text-xl">
              ¿Eres un <span className="text-[#4608AD]">emprendedor</span> con
              grandes ideas y ganas de hacerlas realidad?
            </p>
            <ActionBtn name="Impulsa tu idea" onAction={openPopup} />

            {/* <ButtonGato
              bgColor="#ffffff"
              bgHover="#4608AD"
              textColor="#4608AD"
              textHover="#ffffff"
              text="Impulsa tu idea"
              type="secondary"
              url="#contactanos"
            /> */}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 md:p-6 flex flex-row justify-between items-center shadow-md lg:w-1/2 gap-2">
          <Image
            src={"/img/cats/gato_maletin_marron_foco.png"}
            width={294}
            height={397}
            alt="Gato negro con cobata y un maletin, al lado un foco amarillo"
            title="Gato negro con cobata y un maletin, al lado un foco amarillo"
            className="max-h-[200px] max-w-1/3 aspect-auto object-contain"
          />
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <p className="text-xl">
              ¿Eres una <span className="text-[#4608AD]">empresa</span> que
              busca soluciones efectivas y creativas en marketing digital?
            </p>
            <ActionBtn name="Potencia tu empresa" onAction={openPopup} />
            {/* <ButtonGato
              textColor="#4608AD"
              textHover="#ffffff"
              bgColor="#ffffff"
              bgHover="#4608AD"
              type="secondary"
              text="Potencia tu empresa"
              url="#contactanos"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactServices;

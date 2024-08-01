import { FaWhatsapp } from "react-icons/fa";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}
function redirect() {
  window.open("https://wa.me/+51946380310", "_blank");
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  message,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed h-screen w-full top-0 left-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <div className=" rounded-2xl max-w-[90%] w-full md:max-w-[600px]  ">
        <div className="p-4 text-center text-white font-medium text-xl bg-[#0BC2E1] rounded-t-2xl">
          <h2>{title}</h2>
        </div>
        <div className="flex p-8 bg-white rounded-b-2xl gap-8  justify-center">
          <img src="/gatosend.png" alt="gato para envíos" className="h-40" />
          <div>
            <p className="text-[#666]">
              {message} 
            </p>
            <div className="flex justify-end mt-8 items-center gap-8">
              <button
                onClick={redirect}
                className=" bg-green-500 flex flex-wrap gap text-white px-4 py-2 rounded-md hover:bg-green-400 transition-all duration-300 "
              >
                {" "}
                <FaWhatsapp className="text-2xl"/>
                <span className="font-medium">WhatsApp</span>
              </button>
              <button
                className="bg-[#0BC2E1] text-white px-4 py-2 rounded transition-all duration-300 hover:bg-[#87D5E2] font-medium"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

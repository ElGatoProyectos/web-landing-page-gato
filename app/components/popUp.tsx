"use client";
import Form from "./form";

interface PopUpProps {
  closePopUp: () => void;
  isVisible: boolean;
}

const PopUp: React.FC<PopUpProps> = ({ closePopUp, isVisible }) => {
  if (!isVisible) return null;
  return (
    <div className='w-screen h-full max-h-[100vh] fixed z-50 top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto p-4'>
      <div className='bg-white rounded-3xl relative max-h-[90%] w-fit'>
        <button
          className="absolute top-4 right-4 text-2xl font-bold"
          onClick={closePopUp}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.8162 6.83117C40.3779 5.2694 40.3779 2.73309 38.8162 1.17133C37.2544 -0.390442 34.7181 -0.390442 33.1563 1.17133L20 14.3402L6.83117 1.18382C5.2694 -0.377948 2.73309 -0.377948 1.17133 1.18382C-0.390442 2.74559 -0.390442 5.2819 1.17133 6.84367L14.3402 20L1.18382 33.1688C-0.377948 34.7306 -0.377948 37.2669 1.18382 38.8287C2.74559 40.3904 5.2819 40.3904 6.84367 38.8287L20 25.6598L33.1688 38.8162C34.7306 40.3779 37.2669 40.3779 38.8287 38.8162C40.3904 37.2544 40.3904 34.7181 38.8287 33.1563L25.6598 20L38.8162 6.83117Z"
              fill={"#0BC2E1"}
            />
          </svg>
        </button>
        <Form />
      </div>
    </div>
  );
};

export default PopUp;

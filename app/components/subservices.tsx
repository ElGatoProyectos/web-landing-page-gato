import Image from "next/image";
import { ReactNode, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IImage } from "../interface/iPlan";

type Tsubservices = {
  id: string;
  title: ReactNode;
  name: string;
  description: string;
  items: string[];
  process?: string[];
  img: IImage;
};

type subServicesProps = {
  subservices: Tsubservices[];
  description: string;
  img: IImage;
};
const SubServices: React.FC<subServicesProps> = ({
  subservices,
  description,
  img,
}) => {
  const [selectedSubserviceId, setSelectedSubserviceId] = useState<string>(
    subservices[0].id
  );

  const [selectedSubservice, setSelectedSubservice] = useState<Tsubservices>(
    subservices[0]
  );

  const handleSubService = (id: string) => {
    setSelectedSubserviceId(id);
    const infoSubService = subservices.find((item) => item.id === id);
    if (infoSubService) {
      setSelectedSubservice(infoSubService);
    }
  };

  return (
    <section className="bg-[#F4F5FF] w-full">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 py-16 ">
        <div className="text-center mb-8 ">
          <h2 className="text-stone-800 text-4xl md:text-6xl font-semibold mb-5 text-center">
            ¿Qué te <span className="text-[#4608AD]">ofrecemos</span> ?
          </h2>
          <p className="text-center text-stone-600 mb-4 lg:mb-14">
            {description}
          </p>
        </div>
        {/* subservices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {subservices.map((item, index) => (
            <div
              role="button"
              onClick={() => handleSubService(item.id)}
              key={index}
              className={`flex gap-2 border-2 ${
                item.id === selectedSubserviceId
                  ? "border-[#4608AD]"
                  : "border-white"
              }  bg-white rounded-full hover:shadow-lg shadow-md px-6 py-3 items-center transition-all duration-500 `}
            >
              <span>
                <IoMdCheckmarkCircleOutline
                  className={"text-[#4608AD] lg:text-xl xl:text-2xl"}
                />
              </span>
              <span
                className={`${
                  item.id === selectedSubserviceId
                    ? "text-[#4608AD]"
                    : "text-stone-500"
                } font-medium capitalize lg:text-lg `}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="h-0.5 w-full bg-zinc-200 mb-8 mt-10" />
        <div className="">
          {selectedSubservice && (
            <>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 xl:w-[60%]">
                  <div className="text-center mb-8 ">
                    <h2 className="xl:text-[2.5rem] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-2 md:mb-6 text-left text-stone-800">
                      {selectedSubservice.title}
                    </h2>
                    <p className="text-stone-500 text-left lg:text-lg xl:text-xl">
                      {selectedSubservice.description}
                    </p>
                  </div>
                  <ul className="">
                    {selectedSubservice.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-2 flex-row items-start text-[#4608AD] mb-2"
                      >
                        <span>
                          <IoMdCheckmarkCircleOutline className="text-[#4608AD]  mt-1 text-lg lg:text-xl" />
                        </span>
                        <span className="text-stone-500 lg:text-lg xl:text-xl">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 xl:w-[40%] flex items-center justify-center ">
                  <Image
                    className="aspect-auto object-contain  max-h-[360px] md:max-h-[350px] xl:max-h-[400px] w-auto max-w-full"
                    src={selectedSubservice.img.url}
                    width={selectedSubservice.img.width}
                    height={selectedSubservice.img.height}
                    alt={selectedSubservice.img.alt}
                    title={selectedSubservice.img.title}
                  />
                </div>
              </div>
              {selectedSubservice.process &&
                selectedSubservice.process.length > 0 && (
                  <div>
                    <h3 className="font-bold text-stone-500 mb-4">
                      ¿Cómo lo hacemos?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedSubservice.process.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-full flex items-center  shadow-md h-auto"
                        >
                          <span className="flex justify-center items-center h-full w-auto  text-center text-white bg-[#4608AD] p-4 text-xl  font-semibold rounded-l-full">
                            0{index + 1}
                          </span>
                          <p className="px-2 md:px-4 py-2">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default SubServices;

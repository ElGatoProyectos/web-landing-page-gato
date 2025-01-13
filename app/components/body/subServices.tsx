import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TSubservice } from "@/app/interface/IServices";
import { CardSkeleton, SkeletonText } from "../skeleton";

type subServicesProps = {
  subservices: TSubservice[] | null;
  description: string;
  loading: boolean;
};
const SubServices: React.FC<subServicesProps> = ({
  subservices,
  description,
  loading,
}) => {
  const [selectedSubserviceId, setSelectedSubserviceId] = useState<string>("");

  const [selectedSubservice, setSelectedSubservice] = useState<TSubservice>();

  useEffect(() => {
    if (subservices && subservices?.length > 0) {
      setSelectedSubserviceId(subservices[0].name);
      setSelectedSubservice(subservices[0]);
    }
  }, [subservices]);

  const handleSubService = (id: string) => {
    setSelectedSubserviceId(id);
    if (subservices) {
      const infoSubService = subservices.find((item) => item.name === id);
      if (infoSubService) {
        setSelectedSubservice(infoSubService);
      }
    }
  };

  return (
    <section className="bg-[#F4F5FF] w-full" id="servicios">
      <div className="w-full max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 py-16 ">
        <div className="text-center mb-8 ">
          <h2 className="xl:text-[2.5rem] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-2 md:mb-6">
            ¿Qué te <span className="text-[#4608AD]">ofrecemos</span>?
          </h2>
          {loading ? (
            <SkeletonText lines={2} height={20} width="100%" />
          ) : description ? (
            <p className="text-stone-600 lg:text-lg xl:text-xl">
              {description}
            </p>
          ) : (
            <p className="text-stone-600 lg:text-lg xl:text-xl">
              Texto no disponible
            </p>
          )}
        </div>
        {/* subservices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {loading ? (
            <>
              <CardSkeleton className="w-full h-20 rounded-full bg-stone-100 overflow-hidden" />
              <CardSkeleton className="w-full h-20 rounded-full bg-stone-100 overflow-hidden" />
              <CardSkeleton className="w-full h-20 rounded-full bg-stone-100 overflow-hidden" />
            </>
          ) : subservices ? (
            subservices.length > 0 ? (
              subservices.map((item, index) => (
                <div
                  role="button"
                  onClick={() => handleSubService(item.name)}
                  key={index}
                  className={`flex gap-2 border-2 ${
                    item.name === selectedSubserviceId
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
                      item.name === selectedSubserviceId
                        ? "text-[#4608AD]"
                        : "text-stone-500"
                    } font-medium capitalize lg:text-lg `}
                  >
                    {item.name}
                  </span>
                </div>
              ))
            ) : (
              <>No se encontro registro</>
            )
          ) : (
            <p>no disponible</p>
          )}
        </div>
        <div className="h-0.5 w-full bg-zinc-200 mb-8 mt-10" />
        <div className="">
          {loading ? (
            <>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 xl:w-[60%]">
                  <div className="text-center mb-8 ">
                    <SkeletonText width="100%" lines={1} height={32} />
                    <SkeletonText width="100%" lines={3} height={20} />
                  </div>
                  <SkeletonText width="100%" lines={1} height={20} />
                  <SkeletonText width="100%" lines={1} height={20} />
                  <SkeletonText width="100%" lines={1} height={20} />
                </div>
                <div className="w-full lg:w-1/2 xl:w-[40%] flex items-center justify-center ">
                  <CardSkeleton className=" h-[360px] w-full max-h-[360px] md:max-h-[350px] xl:max-h-[400px] max-w-full" />
                </div>
              </div>
            </>
          ) : selectedSubservice ? (
            <>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 xl:w-[60%]">
                  <div className="text-center mb-8 ">
                    <h2 className="xl:text-[2.5rem] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold mb-2 md:mb-6 text-left text-stone-800">
                      {selectedSubservice.name}
                    </h2>
                    <p className="text-stone-500 text-left lg:text-lg xl:text-xl">
                      {selectedSubservice.description}
                    </p>
                  </div>
                  <ul className="">
                    {selectedSubservice &&
                      selectedSubservice.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex gap-2 flex-row items-start text-[#4608AD] mb-2"
                        >
                          <span>
                            <IoMdCheckmarkCircleOutline className="text-[#4608AD]  mt-1 text-lg lg:text-xl" />
                          </span>
                          <span className="text-stone-500 lg:text-lg xl:text-xl">
                            {item.description}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 xl:w-[40%] flex items-center justify-center ">
                  {selectedSubservice.img ? (
                    <Image
                      className="aspect-auto object-contain  max-h-[360px] md:max-h-[350px] xl:max-h-[400px] w-auto max-w-full"
                      src={selectedSubservice.img.url}
                      width={selectedSubservice.img.width}
                      height={selectedSubservice.img.height}
                      alt={selectedSubservice.img.alt}
                      title={selectedSubservice.img.title}
                    />
                  ) : (
                    <div className="aspect-square w-full  max-h-[360px] md:max-h-[350px] xl:max-h-[400px] max-w-full bg-stone-100" />
                  )}
                </div>
              </div>
              {selectedSubservice.proceso &&
                selectedSubservice.proceso.length > 0 && (
                  <div>
                    <h3 className="font-bold text-stone-500 mb-4">
                      ¿Cómo lo hacemos?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedSubservice.proceso.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-full flex items-center  shadow-md h-auto"
                        >
                          <span className="flex justify-center items-center h-full w-auto  text-center text-white bg-[#4608AD] p-4 text-xl  font-semibold rounded-l-full">
                            0{index + 1}
                          </span>
                          <p className="px-2 md:px-4 py-2">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </>
          ) : (
            <p>no disponible</p>
          )}
        </div>
      </div>
    </section>
  );
};
export default SubServices;

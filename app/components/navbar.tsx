"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const sections = [
  {
    id: "beneficios",
    name: "Beneficios",
  },
  {
    id: "planes",
    name: "Planes",
  },
];
interface Props {
  openPopup: () => void;
}

const Navbar:React.FC<Props> = ({openPopup}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [popUpOpen, setPopUpOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );
      const contactElement = document.getElementById("contactanos");

      let currentSectionId = sections[0].id;

      for (let sectionElement of sectionElements) {
        if (
          sectionElement &&
          sectionElement.getBoundingClientRect().top <= 10
        ) {
          currentSectionId = sectionElement.id;
        }
      }
      setActiveSection(currentSectionId);
      if (contactElement && contactElement.getBoundingClientRect().top <= 10) {
        currentSectionId = 'contactanos';
      }
      if (currentSectionId !== activeSection) {
        setActiveSection(currentSectionId);
        const newPath = `#${currentSectionId}`;
        window.history.replaceState(null, "", newPath);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="z-20 fixed w-full bg-white h-[60px] md:h-[80px] shadow-lg">
      <div className="w-full max-w-[1440px] mx-auto lg:px-16 px-8 py-1 md:py-3 content-center h-full flex justify-between items-center">
        <Link href={"/"} className="h-full flex items-center gap-4">
          
            <img
              src="/gato-icon.png"
              alt="Agencia GATO"
              className="h-full w-auto object-contain"
            />
            <h1 className="hidden md:block h-full text-[#4608AD] font-bold text-5xl">
              GATO <span className="text-sm text-stone-600 block font-normal relative -top-2 ">Marketing y Software</span>
          </h1>
        </Link>

        <div>
          <div className="flex justify-center items-center gap-4 md:hidden">
            <button
              onClick={openPopup}
              className="bg-[#4608AD] text-white px-4 py-1 rounded-full"
            >
              Contáctenos
            </button>
            <button onClick={() => toggleMenu()}>
              <svg
                className="w-6 h-6"
                width="100%"
                height="100%"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 15.5H1.25001C0.559623 15.5 0 14.9403 0 14.25C0 13.5597 0.559623 13 1.25001 13H18.75C19.4404 13 20 13.5597 20 14.25C20 14.9403 19.4404 15.5 18.75 15.5Z"
                  fill="#4608AD"
                />
                <path
                  d="M18.75 9.24997H1.25001C0.559623 9.24997 0 8.69035 0 8.00001C0 7.30967 0.559623 6.75 1.25001 6.75H18.75C19.4404 6.75 20 7.30962 20 8.00001C20 8.69039 19.4404 9.24997 18.75 9.24997Z"
                  fill="#4608AD"
                />
                <path
                  d="M18.75 3.00002H1.25001C0.559623 3.00002 0 2.44039 0 1.75001C0 1.05962 0.559623 0.5 1.25001 0.5H18.75C19.4404 0.5 20 1.05962 20 1.75001C20 2.44039 19.4404 3.00002 18.75 3.00002Z"
                  fill="#4608AD"
                />
              </svg>
            </button>
          </div>

          <nav
            className={`md:relative fixed top-[60px] left-0 w-full md:top-0  bg-white h-screen md:h-full z-50 md:z-0 ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="flex flex-col md:flex-row md:items-center justify-start p-4 md:p-0 gap-6 text-stone-600 font-semibold ">
              {sections.map((section, index) => (
                <li key={index}>
                  <Link
                    href={`#${section.id}`}
                    className={`transition-all duration-300 ${
                      activeSection === section.id
                        ? "text-[#4608AD]"
                        : "hover:text-[#4608AD]"
                    }`}
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
              <li className="hidden md:block">
                <button
                  onClick={openPopup}
                  className="bg-[#4608AD] text-white px-7 py-2 rounded-full"
                >
                  Contáctenos
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar ;
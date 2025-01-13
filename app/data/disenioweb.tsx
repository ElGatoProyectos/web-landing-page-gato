// import { FaCog, FaMobileAlt, FaPaintBrush, FaSearch } from "react-icons/fa";
// import { FaBolt } from "react-icons/fa6";
// import { IoIosCompass } from "react-icons/io";
// import { dataService } from "../interface/IServices";
// export const InfoDisenioWeb: dataService = {
//   title: (
//     <>
//       Impulsa tu negocio con
//       <span className="text-[#4608AD]"> Diseño web profesional</span>
//     </>
//   ),
//   img: {
//     id: 1,
//     url: "/img/cats/gato_lupa.png",
//     width: 433,
//     height: 500,
//     alt: "gato negro con una lupa buscando la imagen",
//     title: "Gato negro con una lupa",
//   },
//   description:
//     "Desarrollamos páginas web modernas y atractivas, diseñadas a medida para reflejar la identidad de tu marca, optimizar la experiencia del usuario y potenciar tu presencia digital.",
//   subservices: [
//     {
//       name: "Desarrollo web",
//       id: "desarrollo-web",
//       img: {
//         id: 1,
//         url: "/img/cats/gato_lupa.png",
//         width: 433,
//         height: 500,
//         alt: "gato negro con una lupa buscando la imagen",
//         title: "Gato negro con una lupa",
//       },
//       title: (
//         <>
//           Desarrollo <span className="text-[#4608AD]">web</span>
//         </>
//       ),
//       description:
//         "Llevamos tus ideas a la realidad con un desarrollo web a medida. Creamos sitios funcionales, atractivos y optimizados, adaptados a tus necesidades y orientados a ofrecer una experiencia excepcional para tus usuarios.",
//       items: [
//         "Codificación moderna: Usamos tecnologías actualizadas y estándares de calidad.",
//         "Diseño funcional: Interfaces intuitivas y atractivas.",
//         "Funcionalidades personalizadas: Ajustadas a tus objetivos.",
//         "Optimización total: Sitios rápidos y responsivos.",
//         "Pruebas completas: Garantizamos compatibilidad y rendimiento.",
//       ],
//     },
//     {
//       name: "Diseño Web con WordPress",
//       id: "disenio-web-wp",
//       img: {
//         id: 1,
//         url: "/img/cats/gato_lupa.png",
//         width: 433,
//         height: 500,
//         alt: "gato negro con una lupa buscando la imagen",
//         title: "Gato negro con una lupa",
//       },
//       title: (
//         <>
//           Diseño Web con <span className="text-[#4608AD]">WordPress</span>
//         </>
//       ),
//       description:
//         "Desarrollamos sitios web con WordPress, combinando flexibilidad, diseño atractivo y facilidad de gestión, adaptados a tus necesidades y optimizados para una gran experiencia de usuario.",
//       items: [
//         "Diseño personalizado: Creamos sitios web únicos con un diseño visual atractivo y acorde a tu marca",
//         "Instalación y configuración: Instalamos y configuramos WordPress para que empieces rápidamente.",
//         "Funcionalidades avanzadas: Integramos plugins y características personalizadas que mejoran la funcionalidad del sitio.",
//         "Optimización de rendimiento: Mejoramos la velocidad y la experiencia de navegación en dispositivos móviles.",
//         "Mantenimiento fácil: Te enseñamos a gestionar y actualizar el contenido de tu sitio de manera sencilla.",
//       ],
//     },
//     {
//       name: "Optimización SEO",
//       id: "optimizacion-seo",
//       img: {
//         id: 1,
//         url: "/img/cats/gato_lupa.png",
//         width: 433,
//         height: 500,
//         alt: "gato negro con una lupa buscando la imagen",
//         title: "Gato negro con una lupa",
//       },
//       title: (
//         <>
//           Optimización
//           <span className="text-[#4608AD]">SEO</span>
//         </>
//       ),
//       description:
//         "Mejora tu visibilidad en línea y atrae más clientes con nuestro servicio de SEO. Posicionamos tu sitio web entre los primeros resultados de búsqueda para asegurar que tu marca llegue a la audiencia correcta",
//       items: [
//         "Análisis y estrategia: Evaluamos tu web y creamos un plan SEO personalizado.",
//         "Optimización de contenido: Mejoramos palabras clave y estructura de contenido.",
//         "Técnicas SEO: Ajustamos metaetiquetas, enlaces internos y velocidad de carga.",
//         "Monitoreo continuo: Seguimos el rendimiento y ajustamos las estrategias.",
//       ],
//     },
//     {
//       name: "Prototipado Web en FIGMA",
//       id: "prototipado-figma",
//       img: {
//         id: 1,
//         url: "/img/cats/gato_lupa.png",
//         width: 433,
//         height: 500,
//         alt: "gato negro con una lupa buscando la imagen",
//         title: "Gato negro con una lupa",
//       },
//       title: (
//         <>
//           Prototipado web en <span className="text-[#4608AD]">FIGMA</span>
//         </>
//       ),
//       description:
//         "Transforma tus ideas en maquetas interactivas con nuestro servicio de prototipado web en Figma, creando la base perfecta para tu sitio web.",
//       items: [
//         "Prototipado interactivo: Diseñamos maquetas de alta fidelidad para visualizar la estructura y estética de tu web.",
//         "Revisión y ajustes: Recibimos tu feedback para hacer mejoras antes del desarrollo.",
//         "Colaboración continua: Facilitamos la comunicación para asegurar que el diseño se ajuste a tus expectativas.",
//       ],
//     },
//     {
//       name: "Empaquetado HTML",
//       id: "empaquetado-html",
//       img: {
//         id: 1,
//         url: "/img/cats/gato_lupa.png",
//         width: 433,
//         height: 500,
//         alt: "gato negro con una lupa buscando la imagen",
//         title: "Gato negro con una lupa",
//       },
//       title: (
//         <>
//           Manejo de <span className="text-[#4608AD]">crisis</span>
//         </>
//       ),
//       description:
//         "Transforma tus diseños en código HTML limpio y estructurado, listo para ser implementado por tu equipo de desarrollo.",
//       items: [
//         "Código limpio y modular: Convertimos tus diseños en HTML bien organizado y fácil de trabajar.",
//         "Optimización para distintos dispositivos: Nos aseguramos de que el código funcione perfectamente en todos los navegadores y dispositivos.",
//         "Listo para la implementación: Proporcionamos un código que tu equipo puede integrar rápidamente en el proyecto sin complicaciones.",
//       ],
//     },
//     {
//       name: "Diseño Responsivo",
//       id: "diseno-responsivo",
//       img: {
//         id: 1,
//         url: "/img/cats/gato_lupa.png",
//         width: 433,
//         height: 500,
//         alt: "gato negro con una lupa buscando la imagen",
//         title: "Gato negro con una lupa",
//       },
//       title: (
//         <>
//           Diseño <span className="text-[#4608AD]">Responsivo</span>
//         </>
//       ),
//       description:
//         "Ofrecemos un diseño web responsive que garantiza una experiencia fluida y adaptada a cualquier dispositivo, desde móviles hasta computadoras.",
//       items: [
//         "Adaptabilidad total: Tu sitio se ajusta perfectamente a móviles, tablets y computadoras.",
//         " Pruebas exhaustivas: Verificamos el rendimiento en diferentes dispositivos y tamaños de pantalla.",
//         "Experiencia fluida: Aseguramos una navegación consistente y optimizada para todos los usuarios.",
//       ],
//     },
//     {
//       name: "Mantenimiento y Soporte",
//       id: "mantenimiento-soporte",
//       img: {
//         id: 1,
//         url: "/img/cats/gato_lupa.png",
//         width: 433,
//         height: 500,
//         alt: "gato negro con una lupa buscando la imagen",
//         title: "Gato negro con una lupa",
//       },
//       title: (
//         <>
//           Mantenimiento y <span className="text-[#4608AD]">Soporte</span>
//         </>
//       ),
//       description:
//         "Con nuestro servicio de mantenimiento y soporte, garantizamos que tu sitio web se mantenga actualizado y funcionando sin problemas.",
//       items: [
//         "Actualizaciones continuas: Mantenemos tu web actualizada con las últimas versiones y parches de seguridad.",
//         "Optimización y corrección: Automatizamos tareas para mejorar el rendimiento y corregimos errores rápidamente.",
//         "Soporte personalizado: Estamos disponibles para resolver dudas y brindar asistencia técnica en todo momento.",
//       ],
//     },
//     {
//       name: "Configuración de Correos",
//       id: "configuracion-correos",
//       img: {
//         id: 1,
//         url: "/img/cats/gato_lupa.png",
//         width: 433,
//         height: 500,
//         alt: "gato negro con una lupa buscando la imagen",
//         title: "Gato negro con una lupa",
//       },
//       title: (
//         <>
//           Configuración de <span className="text-[#4608AD]">Correos</span>
//         </>
//       ),
//       description:
//         "Mejora la imagen de tu empresa con correos corporativos personalizados. Te ayudamos a configurar y optimizar tu sistema de emails.",
//       items: [
//         "Cuentas personalizadas: Configuramos correos vinculados a tu dominio para mayor profesionalismo.",
//         "Sincronización en todos los dispositivos: Aseguramos que tus correos funcionen perfectamente en móviles, tablets y computadoras.",
//         "Soporte continuo: Brindamos asistencia técnica para resolver cualquier problema de configuración.",
//       ],
//     },
//     {
//       name: "Migración de Dominios",
//       id: "migracion de dominios",
//       img: {
//         id: 1,
//         url: "/img/cats/gato_lupa.png",
//         width: 433,
//         height: 500,
//         alt: "gato negro con una lupa buscando la imagen",
//         title: "Gato negro con una lupa",
//       },
//       title: (
//         <>
//           Migración de <span className="text-[#4608AD]">Dominios</span>
//         </>
//       ),
//       description:
//         "Cambia de dominio sin preocupaciones. Nos encargamos de la migración completa para que tu web siga funcionando sin interrupciones.",
//       items: [
//         "Migración segura: Planificamos y ejecutamos el proceso para evitar cualquier interrupción en tu sitio.",
//         "Transferencia de contenido: Movemos todo el contenido sin pérdida de datos ni errores.",
//         "Verificación post-migración: Comprobamos que todos los enlaces y servicios estén funcionando correctamente después de la migración.",
//       ],
//     },
//     {
//       name: "Diseño UX ",
//       id: "diseno-ux",
//       img: {
//         id: 1,
//         url: "/img/cats/gato_lupa.png",
//         width: 433,
//         height: 500,
//         alt: "gato negro con una lupa buscando la imagen",
//         title: "Gato negro con una lupa",
//       },
//       title: (
//         <>
//           Diseño <span className="text-[#4608AD]">UX</span>
//         </>
//       ),
//       description:
//         "Mejoramos la experiencia de tus usuarios con un diseño UX centrado en la facilidad de uso y la satisfacción, asegurando que tu web sea intuitiva y atractiva.",
//       items: [
//         "Wireframes y prototipos: Creamos estructuras de navegación y prototipos interactivos para una experiencia fluida.",
//         "Pruebas de usabilidad: Validamos el diseño con pruebas para garantizar una interacción intuitiva.",
//         "Optimización continua: Mejoramos la experiencia del usuario asegurando que cada elemento de la web cumpla con sus expectativas.",
//       ],
//     },
//   ],
//   benefits: {
//     img: {
//       id: 2,
//       url: "/img/services/benefits_web.png",
//       width: 348,
//       height: 600,
//       alt: "Monitor en vertical mostrar página web de HierroLate, servicio de diseño web",
//       title: "Servicio de diseño web, Agencia gato",
//     },
//     title: (
//       <>
//         <span className="text-[#4608AD]">Beneficios </span>de trabajar con
//         nosotros{" "}
//       </>
//     ),
//     description:
//       "Descubre cómo nuestros servicios pueden transformar tu marca, mejorar tu presencia digital y generar resultados efectivos",
//     benefitsItems: [
//       {
//         icon: <FaMobileAlt />,
//         title: "Diseño Responsivo",
//         description:
//           "Creamos sitios web que se adaptan a cualquier dispositivo, ofreciendo una excelente experiencia de usuario.",
//       },
//       {
//         icon: <FaSearch />,
//         title: "Optimización SEO",
//         description:
//           "Implementamos prácticas SEO para mejorar tu posicionamiento en los motores de búsqueda.",
//       },
//       {
//         icon: <FaPaintBrush />,
//         title: "Diseño Atractivo",
//         description:
//           "Desarrollamos diseños visualmente atractivos que capturan la atención de tus visitantes.",
//       },
//       {
//         icon: <IoIosCompass />,
//         title: "Navegación Intuitiva",
//         description:
//           "Diseñamos interfaces fáciles de navegar que mejoran la experiencia del usuario.",
//       },
//       {
//         icon: <FaBolt />,
//         title: "Velocidad de Carga",
//         description:
//           "Optimizamos tu sitio para que cargue rápidamente, reduciendo la tasa de abandono.",
//       },
//       {
//         icon: <FaCog />,
//         title: "Funcionalidades Avanzadas",
//         description:
//           "Incorporamos funcionalidades avanzadas según las necesidades de tu negocio, mejorando la interacción del usuario.",
//       },
//     ],
//   },
//   gallery: [],
// };

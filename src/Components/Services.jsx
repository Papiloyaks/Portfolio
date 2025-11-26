import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Import icons/images
import gram from "../images/gram.png";
import respon from "../images/respon.png";
import web from "../images/web.png";
import design from "../images/design.png";
import apps from "../images/apps.png";
import bug from "../images/bug.png";

// Reusable ServiceCard
const ServiceCard = ({ title, description, img, aos }) => {
  return (
    <div
      className="bg-white dark:bg-slate-800 border rounded-lg p-6 flex flex-col items-center text-center shadow-md"
      data-aos={aos}
    >
      <img src={img} alt={title} className="w-12 h-12 mb-3" />
      <h3 className="text-xl font-medium text-slate-800 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const services = [
    {
      title: "Web Designing",
      description:
        "Cater to clients looking for nostalgic or web design styles that evoke the aesthetics of past internet eras.",
      img: gram,
      aos: "flip-up",
    },
    {
      title: "Progressive Web Application",
      description:
        "Create web applications that function like native apps, offering features like offline access, push notifications, and fast loading times.",
      img: respon,
      aos: "flip-down",
    },
    {
      title: "Interactive Websites",
      description:
        "Craft interactive storytelling experiences that blend text, images, animations, and user interactions to engage and captivate visitors.",
      img: web,
      aos: "fade-up",
    },
    {
      title: "Web Design",
      description:
        "Web design is the digital choreography of visual and interactive elements, a harmonious symphony of colors, typography, shapes, and functionality that transforms the blank canvas of a webpage into an immersive, navigable experience.",
      img: design,
      aos: "fade-down",
    },
    {
      title: "Web App Development",
      description:
        "Web app development is the artful fusion of technology and user-centric creativity, turning lines of code into dynamic portals that help individuals engage with services, data, and experiences.",
      img: apps,
      aos: "flip-up",
    },
    {
      title: "Bug Fixing",
      description:
        "Bug fixing is the digital detective work of identifying, isolating, and mending glitches that disrupt the seamless functionality of software.",
      img: bug,
      aos: "flip-down",
    },
  ];

  return (
    <section id="service" className="px-6 lg:px-20 py-16 bg-slate-200 dark:bg-slate-900">
      <h1 className="text-amber-500 font-mono text-3xl font-medium text-center mb-12">
        Services
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;

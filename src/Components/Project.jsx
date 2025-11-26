import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Import images
import ailf from "../images/ailf.jpg";
import corporate from "../images/corporate.png";
import jumy from "../images/jumy.png";
import add from "../images/add.png";
import movie from "../images/movie.png";
import shot from "../images/shot.png";
import screen from "../images/screen.png";
import caf from "../images/caf.png";

// Reusable ProjectCard
const ProjectCard = ({ title, description, tech, link, img, aos }) => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 p-6 bg-slate-800 rounded-xl my-6" data-aos={aos}>
      <div className="text-white">
        <h1 className="text-2xl font-medium mb-2">{title}</h1>
        <p className="font-light mb-2">{description}</p>
        <p className="font-medium text-amber-200 mb-2">{tech}</p>
        <a
          className="border bg-black text-sm rounded-xl hover:bg-transparent p-2 text-amber-200"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check here
        </a>
      </div>
      <div className="flex justify-center items-center">
        <img src={img} alt={title} className="max-w-[300px] sm:max-w-[200px]" />
      </div>
    </div>
  );
};

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const projects = [
    {
      title: "Humanitarian Website",
      description:
        "Ailuckyfoundation is an organization that helps with the solution of poverty. Together, we’re saving lives—before, during and after disaster strikes.",
      tech: "HTML, CSS, Javascript, Bootstrap",
      link: "https://papiloyaks.github.io/A.I-Lucky-Foundation/",
      img: ailf,
      aos: "flip-right",
    },
    {
      title: "Salesforce",
      description: "A clone of Salesforce webapp",
      tech: "HTML, CSS, Bootstrap",
      link: "https://papiloyaks.github.io/Salesforce-Project/",
      img: corporate,
      aos: "flip-left",
    },
    {
      title: "E-commerce",
      description:
        "This is an e-commerce app. It enables users to select different items and add to cart. The idea is from Jumia e-commerce app",
      tech: "HTML, CSS, Bootstrap, Javascript",
      link: "https://papiloyaks.github.io/Level-2-Project/",
      img: jumy,
      aos: "fade-up",
    },
    {
      title: "Advise Generator",
      description: "Generates quotes to keep you motivated",
      tech: "React, Tailwind",
      link: "https://advise-app.vercel.app/",
      img: add,
      aos: "fade-down",
    },
    {
      title: "Entertainment Movie App",
      description: "App fetching latest movies, series, and TV shows using API",
      tech: "React, Tailwind",
      link: "https://entertainment-app-mu.vercel.app/",
      img: movie,
      aos: "flip-right",
    },
    {
      title: "Mini-Mart",
      description:
        "Browse products, add to cart, checkout seamlessly. Hassle-free shopping delivered to your doorstep.",
      tech: "React, Bootstrap, Javascript",
      link: "https://shop-mart-six.vercel.app/",
      img: shot,
      aos: "flip-left",
    },
    {
      title: "PiggyVest Clone",
      description: "Responsive PiggyVest clone with amazing interface",
      tech: "React, Bootstrap, CSS3",
      link: "https://piggevest-clone.vercel.app/",
      img: screen,
      aos: "fade-up",
    },
    {
      title: "Online Coffee Shop",
      description:
        "Order your favorite coffee from home and let our baristas craft it with care.",
      tech: "React, Tailwind",
      link: "https://coffena-shop.vercel.app/",
      img: caf,
      aos: "fade-down",
    },
  ];

  return (
    <section id="portfolio" className="px-6 lg:px-20 py-10">
      <h1 className="text-amber-200 font-mono text-3xl font-medium mb-10 text-center">My Projects</h1>
      {projects.map((proj, index) => (
        <ProjectCard key={index} {...proj} />
      ))}
    </section>
  );
};

export default Project;

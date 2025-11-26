import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Icons
import { BiLogoGit, BiLogoReact, BiLogoNodejs } from "react-icons/bi";
import { SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa6";

// Reusable SkillCard
const SkillCard = ({ title, icon }) => (
  <div className="text-3xl rounded-xl bg-slate-800 dark:bg-slate-700 flex flex-col justify-center items-center p-6 hover:bg-slate-400 dark:hover:bg-slate-600 transition-colors duration-300">
    <div className="text-white mb-2">{icon}</div>
    <p className="text-white text-lg font-semibold">{title}</p>
  </div>
);

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const skills = [
    { title: "Git", icon: <BiLogoGit /> },
    { title: "HTML 5", icon: <SiHtml5 /> },
    { title: "CSS 3", icon: <SiCss3 /> },
    { title: "Bootstrap", icon: <SiBootstrap /> },
    { title: "Tailwind", icon: <SiTailwindcss /> },
    { title: "JavaScript", icon: <SiJavascript /> },
    { title: "React", icon: <BiLogoReact /> },
    { title: "Github", icon: <AiFillGithub /> },
    { title: "WordPress", icon: <FaWordpress /> },
    { title: "Firebase", icon: <IoLogoFirebase /> },
    // Backend skills
    { title: "Node.js", icon: <BiLogoNodejs /> },
    { title: "Express.js", icon: <SiExpress /> },
    { title: "MongoDB", icon: <SiMongodb /> },
  ];

  return (
    <section id="skills" className="px-6 lg:px-20 py-16 bg-slate-900 dark:bg-slate-800">
      <h1 className="text-amber-200 font-mono text-3xl font-medium mb-12 text-center" data-aos="fade-down">
        Skills & Tools
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} data-aos="flip-left">
            <SkillCard {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

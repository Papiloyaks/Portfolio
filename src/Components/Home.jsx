import React, { useEffect } from "react";
import pana from "../images/pana.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Adjusted for smoother animation
    });
  }, []);

  return (
    <>
      <div data-aos="zoom-in-left" id="about">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:px-20 lg:gap-60 p-10">
          {/* Text Section */}
          <div>
            <h1 className="text-slate-50 text-3xl mt-9">
              Hi, I'm{" "}
              <span className="text-amber-200 font-serif">
                Yaks
                <br />
                <span className="text-white text-2xl">A</span>
                <span className="ml-2 text-amber-200">Frontend Developer.</span>
              </span>
            </h1>

            <h2 className="text-xl mt-2 text-amber-200 font-light font-san">
              An expert in{" "}
              <TypeAnimation
                sequence={[
                  "Javascript",
                  500,
                  "React",
                  500,
                  "CSS",
                  500,
                  "HTML",
                  500,
                  "Tailwind Css",
                  500,
                  "Bootstrap",
                  500,
                  "Git",
                  500,
                  "Version Control",
                  500,
                  "API Development",
                  500,
                  "RESTful Services",
                  500,
                  "Backend Development",
                  500,
                  "Database Management",
                  500,
                  "Cloud Computing",
                  500,
                ]}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
              />
            </h2>

            <h6 className="mt-3 ms-10 text-xl">
              <span className="text-slate-50">-------</span>
              <span className="ml-2 text-amber-200 font-medium font-mono">About Me</span> :
            </h6>

            <p className="text-slate-50 mt-2 font-light">
              I am a passionate Frontend developer with a strong background in creating both dynamic and
              non-dynamic websites using advanced HTML, CSS, Javascript, and React. With a relentless
              commitment to excellence, I do not give up when tackling challenges and finding innovative
              solutions. My skill set, joined with a love for continuous learning, allows me to triumph in
              dynamic environments and contribute to meaningful projects.
            </p>
              <p className="text-gray-300 leading-relaxed mt-2">
            I also have experience in <span className="text-amber-200 font-semibold">backend development</span> using Node.js, Express.js, and MongoDB. 
            My goal is to create applications that not only look great but are also functional, scalable, and user-friendly.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I enjoy learning new technologies, tackling challenges, and continuously improving my skills to deliver
            top-quality projects.
          </p>

            <div className="mt-5 flex gap-4">
              <Link
                to="portfolio"
                className="hover:bg-transparent hover:text-amber-200 me-6 border p-2 rounded bg-slate-800 text-sm text-white sans-serif font-medium cursor-pointer"
              >
                See my Work
              </Link>
              <a
                className="hover:bg-transparent hover:text-amber-200 border p-2 rounded bg-slate-800 text-sm text-white sans-serif font-medium "
                href="https://docs.google.com/document/d/1-JqI5WG179XB0RgAgiHpWwoNzqVDNTk7by9mKbrrxg4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download my CV
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="sm:py-10 flex justify-center items-center">
            <img src={pana} width={400} alt="illustration" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;

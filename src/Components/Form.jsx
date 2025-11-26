import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const API_URL = import.meta.env.VITE_API_URL; 

    const res = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      }),
    });

    if (!res.ok) {
      toast.error("❌ Server error. Route not found.");
      return;
    }

    const data = await res.json();

    if (data.status) {
      toast.success("🎉 Message sent successfully!");
      setFormData({ name: "", email: "", company: "", message: "" });
    } else {
      toast.error("❌ Something went wrong. Try again.");
    }
  } catch (error) {
    toast.error("⚠️ Failed to reach backend. Check your server or internet.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div id="contact" className="bg-slate-900 py-12 px-5">
      {/* Toast Notification */}
      <Toaster position="top-center" reverseOrder={false} />

      <div
        data-aos="flip-left"
        className="grid lg:grid-cols-2 max-w-5xl mx-auto shadow-xl rounded-2xl overflow-hidden"
      >
        {/* Contact Form Section */}
        <div className="p-6 bg-slate-800">
          <h1 className="text-2xl font-semibold text-amber-300 pb-5">
            Contact Me
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-medium text-white">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-10 mt-1 rounded px-3 outline-none bg-slate-700 text-white focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div>
              <label className="font-medium text-white">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-10 mt-1 rounded px-3 outline-none bg-slate-700 text-white focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div>
              <label className="font-medium text-white">Company:</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full h-10 mt-1 rounded px-3 outline-none bg-slate-700 text-white focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div>
              <label className="font-medium text-white">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-40 mt-1 rounded px-3 py-2 resize-none outline-none bg-slate-700 text-white focus:ring-2 focus:ring-amber-300"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full h-10 rounded-md text-white font-semibold transition-all ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Social Links Section */}
        <div className="bg-slate-800 flex flex-col justify-center items-center text-5xl gap-6 text-red-500 py-10">
          <a
            href="https://github.com/Papiloyaks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/papiloyaks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform"
          >
            <RiTwitterXFill />
          </a>
          <a
            href="https://www.linkedin.com/in/yakub-yusuf-618334265/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;

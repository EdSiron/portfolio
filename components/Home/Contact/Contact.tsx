"use client";
import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Email Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="pt-16 pb-16 bg-[#120718] overflow-hidden">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Schedule a call with me to see if{" "}
            <span className="bg-linear-to-r from-[#7849d5] to-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(120,73,213,0.3)]">
              I can help
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out today! Whether you have a specific project in mind or just
            want to say hi, my inbox is always open.
          </p>

          <div className="mt-10 space-y-8">
            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-[#2d165f]/30 p-4 rounded-xl border border-[#7849d5]/20">
                <FaEnvelope className="text-[#7849d5] text-xl" />
              </div>
              <div>
                <p className="text-white font-semibold">Email me</p>
                <p className="text-gray-400">edmarkangelo.siron@gmail.com</p>
              </div>
            </div>

            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-[#2d165f]/30 p-4 rounded-xl border border-[#7849d5]/20">
                <FaPhoneAlt className="text-[#7849d5] text-xl" />
              </div>
              <div>
                <p className="text-white font-semibold">Call me</p>
                <p className="text-gray-400">+63 930 479 6128</p>
              </div>
            </div>

            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="bg-[#2d165f]/30 p-4 rounded-xl border border-[#7849d5]/20">
                <FaMapMarkerAlt className="text-[#7849d5] text-xl" />
              </div>
              <div>
                <p className="text-white font-semibold">Location</p>
                <p className="text-gray-400">Remote / Philippines</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[#140b1c] p-8 rounded-3xl shadow-2xl border border-[#2d165f]/50 h-full relative overflow-hidden"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#120718] text-white px-5 py-4 rounded-xl border border-[#2d165f] focus:outline-none focus:border-[#7849d5] focus:ring-1 focus:ring-[#7849d5] transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#120718] text-white px-5 py-4 rounded-xl border border-[#2d165f] focus:outline-none focus:border-[#7849d5] focus:ring-1 focus:ring-[#7849d5] transition-all"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#120718] text-white px-5 py-4 rounded-xl border border-[#2d165f] focus:outline-none focus:border-[#7849d5] focus:ring-1 focus:ring-[#7849d5] transition-all"
            />

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#120718] text-white px-5 py-4 rounded-xl border border-[#2d165f] focus:outline-none focus:border-[#7849d5] focus:ring-1 focus:ring-[#7849d5] transition-all resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className={`w-full font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 group 
                ${
                  status === "success"
                    ? "bg-green-600 cursor-default"
                    : "bg-[#7849d5] hover:bg-[#2d165f] text-white"
                }
                ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {status === "idle" && (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-sm" />
                </>
              )}
              {status === "sending" && (
                <>
                  <span>Sending...</span>
                  <FaSpinner className="animate-spin text-lg" />
                </>
              )}
              {status === "success" && (
                <>
                  <span>Message Sent!</span>
                  <FaCheckCircle className="text-lg" />
                </>
              )}
              {status === "error" && <span>Failed to send. Try again?</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

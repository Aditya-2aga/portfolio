"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);

    // Using the original Web3Forms access key
    formData.append("access_key", "f15d7471-0c02-449a-b09a-296666ad3150");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      (event.target as HTMLFormElement).reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="relative bg-[#fcfcfc] py-32 text-slate-900 overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-indigo-500 block"></span>
            <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase font-geist">Contact</span>
            <span className="w-8 h-[1px] bg-indigo-500 block"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-geist tracking-tight mb-8">
           Connect with <span className="text-indigo-600">me</span>
          </h2>
          <p className="text-slate-600 font-inter text-lg md:text-xl font-light">
            Seeking early-stage product, growth, or AI-native PM roles. Reach out below to discuss how I can drive 0→1 success for your team.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-6"
          >
            <a href="mailto:aditya.2aga@gmail.com" className="flex items-center gap-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-indigo-200 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold font-geist text-lg mb-1 text-slate-900 group-hover:text-indigo-600 transition-colors">Email</h3>
                <p className="text-slate-500 font-inter text-sm break-all">aditya.2aga@gmail.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/aditya-modanwal-2aga" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-indigo-200 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div>
                <h3 className="font-bold font-geist text-lg mb-1 text-slate-900 group-hover:text-[#0077b5] transition-colors">LinkedIn</h3>
                <p className="text-slate-500 font-inter text-sm">Aditya Modanwal</p>
              </div>
            </a>

            <div className="flex items-center gap-6 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-indigo-200 hover:shadow-md transition-all group cursor-pointer">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold font-geist text-lg mb-1 text-slate-900 group-hover:text-indigo-600 transition-colors">Phone</h3>
                <p className="text-slate-500 font-inter text-sm">+91 8115773284</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
              <form className="relative z-10 flex flex-col gap-6" onSubmit={onSubmit}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label className="text-xs font-bold uppercase tracking-widest font-geist text-slate-500 mb-2 block ml-1">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="John Doe" 
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-inter"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-bold uppercase tracking-widest font-geist text-slate-500 mb-2 block ml-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="john@example.com" 
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-inter"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest font-geist text-slate-500 mb-2 block ml-1">Message</label>
                  <textarea 
                    placeholder="How can I help you?" 
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none font-inter"
                  ></textarea>
                </div>
                
                <div className="flex items-start gap-3 mt-2">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    name="privacy_consent"
                    required 
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-600 font-inter">
                    I consent to the collection and processing of my data in accordance with the DPDP Act for the purpose of this inquiry.
                  </label>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 px-10 rounded-full transition-all shadow-md active:scale-[0.98] font-inter text-sm"
                  >
                    Send Message
                  </button>
                  {result && (
                    <span className={`text-sm font-medium font-inter ${result.includes('success') ? 'text-green-600' : 'text-indigo-600'}`}>
                      {result}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

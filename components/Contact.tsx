"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    // Using the original Web3Forms access key
    formData.append("access_key", "f15d7471-0c02-449a-b09a-296666ad3150");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      (event.target as HTMLFormElement).reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="relative bg-slate-50 py-32 text-slate-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
            Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">impactful</span>.
          </h2>
          <p className="text-slate-600 font-ovo text-lg max-w-2xl mx-auto">
            Seeking early-stage product, growth, or AI-native PM roles. Reach out below to discuss how I can drive 0→1 success for your team.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <a href="mailto:aditya.2aga@gmail.com" className="flex flex-col items-center justify-center p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold font-outfit text-lg mb-1">Email</h3>
            <p className="text-slate-500 text-sm">aditya.2aga@gmail.com</p>
          </a>

          <a href="https://linkedin.com/in/aditya-modanwal-2aga" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
            <h3 className="font-bold font-outfit text-lg mb-1">LinkedIn</h3>
            <p className="text-slate-500 text-sm">Aditya Modanwal</p>
          </a>

          <div className="flex flex-col items-center justify-center p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold font-outfit text-lg mb-1">Phone</h3>
            <p className="text-slate-500 text-sm">+91 8115773284</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={onSubmit}>
              <div className="flex flex-col md:flex-row gap-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required
                  className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-ovo"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  required
                  className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-ovo"
                />
              </div>
              <textarea 
                placeholder="Message" 
                name="message"
                rows={5}
                required
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-ovo"
              ></textarea>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">
                <button 
                  type="submit" 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] font-outfit text-lg tracking-wide"
                >
                  Send Message
                </button>
                {result && <span className="text-slate-600 font-medium font-ovo">{result}</span>}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

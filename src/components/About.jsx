// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-slate-900 text-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-6">
          About
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="max-w-3xl text-slate-200/90 leading-relaxed">
          I am a final-year Information Science Engineering student with a strong foundation in programming and full-stack development. Skilled in Java, SQL, web development technologies, and cloud concepts — I’ve built responsive web applications and mobile solutions, led small teams, and participated in national-level competitions. My mission is to build impactful digital products and startup solutions that solve real-world problems.
        </motion.p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg ring-1 ring-white/6">
            <h3 className="font-semibold mb-2">Education</h3>
            <p className="text-sm text-slate-200/90"><strong>Visvesvaraya Technological University</strong> — B.E. Information Science (Expected 2026)</p>
            <p className="text-sm text-slate-200/80 mt-2">Relevant coursework: Data Structures, DBMS, Software Engineering, Computer Networks</p>

            <div className="mt-4 border-t border-white/8 pt-4 text-sm text-slate-200/90">
              <strong>Diploma:</strong> BVVS Polytechnic, Bagalkot — Diploma in Computer Science Engineering (2020–2023)
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg ring-1 ring-white/6">
            <h3 className="font-semibold mb-2">Experience & Highlights</h3>
            <p className="text-sm text-slate-200/90"><strong>Winsoft Solutions</strong> — Web Development Intern (Feb 2023 – Mar 2023)</p>
            <ul className="mt-2 text-sm text-slate-200/80 list-disc list-inside">
              <li>Built responsive web apps with HTML, CSS, PHP & MySQL and collaborated in Agile SDLC.</li>
              <li>Led small team efforts, produced documentation, and improved project reliability.</li>
              <li>3rd Prize — Organico (WisoTech-2k23); 1st Prize — Poster Presentation: AI defense vs deepfake (BEC 2023).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

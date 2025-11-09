// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * 2x2 Projects Grid — clean, minimal, and animated.
 * - No images
 * - Spotify Clone has GitHub link only
 * - Rest: No links, just hover animations
 */

const projects = [
  {
    title: "Spotify Clone 🎵",
    desc: "A modern music streaming interface built with React, implementing playlists, responsive UI, and real API data handling.",
    tech: "HTML • Tailwind CSS • API Integration • JavaScript ",
    github: "https://github.com/your-github-username/spotify-clone", // replace later
  },
  {
    title: "Organico 🌿",
    desc: "A multilingual organic farming awareness platform with sustainability blogs, community sharing, and local language support.",
    tech: "HTML • CSS • PHP • MySQL • JavaScript • XAMPP",
  },
  {
    title: "Placement Prep App 💼",
    desc: "A mobile-first Flutter app for students to practice coding, take quizzes, and track progress — designed for placement readiness.",
    tech: "Flutter • Firebase",
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 lg:px-16 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 text-white"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-14 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        💡 Featured Projects
      </motion.h2>

      {/* Grid of Projects */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ delay: index * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500 backdrop-blur-xl group"
          >
            {/* Animated shimmer overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition duration-700"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />

            {/* Project Details */}
            <div className="relative z-10 p-6">
              <motion.h3
                className="text-xl font-semibold text-white mb-2"
                whileHover={{ color: "#a78bfa" }}
              >
                {p.title}
              </motion.h3>

              <p className="text-sm text-white/80 leading-relaxed mb-3">
                {p.desc}
              </p>

              <p className="text-xs text-white/60 italic">{p.tech}</p>

              {/* GitHub button (Spotify only) */}
              {p.github && (
                <div className="mt-5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-full border border-white/40 text-white text-sm hover:bg-white/20 hover:text-slate-100 transition-all duration-300"
                  >
                    GitHub →
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

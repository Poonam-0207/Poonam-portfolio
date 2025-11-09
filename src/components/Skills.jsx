import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-pink-500 to-purple-500",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    color: "from-indigo-500 to-sky-500",
    skills: ["Node.js", "Express.js", "Firebase", "MongoDB", "SQL"],
  },
  {
    title: "Tools & Platforms",
    color: "from-cyan-400 to-green-400",
    skills: ["Git & GitHub", "VS Code", "Postman", "Netlify", "Figma"],
  },
  {
    title: "Core Concepts",
    color: "from-violet-500 to-blue-500",
    skills: [
      "SDLC",
      "REST APIs",
      "Database Design",
      "UI/UX Design",
      "Problem Solving",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 lg:px-16 bg-gradient-to-b from-slate-900 via-indigo-900/30 to-slate-900 text-white"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        ⚡ Skills & Expertise
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}
            >
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1.5 bg-white/10 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300 shadow-inner"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

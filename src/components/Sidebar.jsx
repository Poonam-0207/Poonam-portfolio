// src/components/Sidebar.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Code2,
  Briefcase,
  Phone,
  Sun,
  Moon,
} from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(true);
  const sections = ["home", "about", "skills", "projects", "contact"];

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 100 <= scrollY) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Persist theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    } else {
      document.body.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const links = [
    { id: "home", name: "Home", icon: <Home size={20} /> },
    { id: "about", name: "About", icon: <User size={20} /> },
    { id: "skills", name: "Skills", icon: <Code2 size={20} /> },
    { id: "projects", name: "Projects", icon: <Briefcase size={20} /> },
    { id: "contact", name: "Contact", icon: <Phone size={20} /> },
  ];

  return (
    <motion.aside
      initial={{ x: -120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="fixed left-0 top-0 h-screen w-64 backdrop-blur-2xl bg-white/5 border-r border-white/10 text-white flex flex-col justify-between z-50 overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-10 -left-10 w-52 h-52 bg-purple-500/20 blur-3xl rounded-full"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-56 h-56 bg-cyan-400/20 blur-3xl rounded-full"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <div className="py-8 px-4 text-center">
        <motion.h1
          className="text-xl font-bold text-white drop-shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          🔮 Poonam Chavan
        </motion.h1>
        <p className="text-xs text-white/70 mt-1">
          Web Developer | UI Designer
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 mt-4">
        <ul className="space-y-3">
          {links.map((link) => (
            <motion.li
              key={link.id}
              whileHover={{ scale: 1.05, x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={`#${link.id}`}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                  active === link.id
                    ? "bg-gradient-to-r from-purple-500/50 to-cyan-400/40 text-white shadow-lg"
                    : "hover:bg-white/10 text-white/80"
                }`}
              >
                <span className="text-cyan-300">{link.icon}</span>
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-5 mb-6">
        <motion.button
          onClick={toggleMode}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 text-sm px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          {darkMode ? (
            <>
              <Moon size={18} /> Dark
            </>
          ) : (
            <>
              <Sun size={18} /> Light
            </>
          )}
        </motion.button>

        <p className="text-[10px] text-white/50 text-center">
          © {new Date().getFullYear()} Poonam Chavan
        </p>
      </div>
    </motion.aside>
  );
}

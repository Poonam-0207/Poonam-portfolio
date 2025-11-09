// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png"; // ensure this exists

// small typing hook (types & deletes)
function useTyping(phrases = [], typingSpeed = 90, pause = 1100) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let t;
    const phrase = phrases[index % phrases.length] || "";

    if (typing) {
      if (display.length < phrase.length) {
        t = setTimeout(() => setDisplay(phrase.slice(0, display.length + 1)), typingSpeed);
      } else {
        t = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (display.length > 0) {
        t = setTimeout(() => setDisplay(display.slice(0, -1)), Math.round(typingSpeed / 2));
      } else {
        setTyping(true);
        setIndex((i) => i + 1);
      }
    }

    return () => clearTimeout(t);
  }, [display, typing, index, phrases, typingSpeed, pause]);

  return display;
}

export default function Home() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const typingText = useTyping(
    ["Full Stack Developer", "UI Designer", "Startup Founder"],
    90,
    1100
  );

  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-slate-900 text-slate-100">
      {/* animated gradient background (subtle drift) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, rgba(147,51,234,0.86) 0%, rgba(59,130,246,0.86) 100%)",
          backgroundSize: "200% 200%",
          animation: "bgShift 18s ease infinite",
        }}
      />

      {/* live time (top-right) */}
      <div className="absolute top-6 right-6 z-30 text-right text-sm text-slate-100/80">
        <div>{now.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}</div>
        <div className="font-mono text-xs mt-0.5">{now.toLocaleTimeString()}</div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-12 min-h-screen flex items-center">
        <motion.div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
          {/* Left: text */}
          <motion.div variants={fadeUp} className="lg:col-span-7 col-span-1">
            <span className="inline-flex items-center gap-2 bg-white/6 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-slate-100/95 ring-1 ring-white/8">
              Hello, I’m Poonam
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-100 font-poppins">
              Poonam Chavan
            </h1>

            <div className="mt-4 flex items-center gap-3 text-xl sm:text-2xl text-slate-200/90">
              <div className="font-semibold">{typingText}</div>
              <div className="h-6 w-1 bg-slate-100/80 animate-pulse" aria-hidden="true" />
            </div>

            <p className="mt-6 text-slate-200/80 max-w-xl leading-relaxed">
              Building creative digital experiences and real-world startup projects. I’m a passionate Full Stack Developer currently pursuing B.E., building innovative web & mobile solutions and helping startups bring ideas to life.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center">
                <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-cyan-400 text-slate-900 shadow-lg">
                  View My Work
                </motion.span>
              </a>

              <a href="/resume.pdf" download className="inline-flex items-center">
                <motion.span whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ring-1 ring-white/8 bg-white/6 backdrop-blur-sm">
                  Download Resume
                </motion.span>
              </a>
            </div>

            {/* Skills mini card */}
            <div className="mt-8 inline-flex gap-3 flex-wrap items-center">
              <div className="bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-slate-100/90 ring-1 ring-white/6">
                <strong className="mr-2">Key:</strong> Java · SQL · HTML · CSS · PHP · MySQL · React · Flutter
              </div>
            </div>
          </motion.div>

          {/* Right: circular profile photo (from src/assets/profile.png) */}
          <motion.div variants={fadeUp} className="lg:col-span-5 col-span-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-1 ring-white/8 bg-white/4 shadow-2xl">
              {/* glowing border layer */}
              <div className="absolute -inset-0.5 rounded-full" style={{ background: "linear-gradient(135deg, rgba(147,51,234,0.22), rgba(59,130,246,0.18))", zIndex: 1 }} />
              <img src={profileImg} alt="Poonam Chavan" className="relative w-full h-full object-cover rounded-full z-10" />
              {/* floating decorative accent */}
              <motion.div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full opacity-30" animate={{ y: [-6, 6, -6] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ background: "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.18), transparent 25%), radial-gradient(circle at 70% 70%, rgba(147,51,234,0.12), transparent 30%)" }} aria-hidden="true" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* small scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-200/80">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center">
            <div className="w-1 h-2 bg-white/80 rounded animate-bounce" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bgShift {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </section>
  );
}

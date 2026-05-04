import { motion } from "motion/react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "MANIFESTO", href: "#manifesto" },
  { name: "PROJECTS", href: "#projects" },
  { name: "MOTORSPORTS", href: "#motorsports" },
  { name: "STACK", href: "#stack" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-[20px] px-8 py-4 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col"
      >
        <span className="text-xl font-bold tracking-[0.3em] text-white">TERMINAL_V1.0</span>
        <span className="text-[10px] font-mono text-white/40 tracking-[0.2em] mt-1">
          SYS_TIME: {formattedTime}
        </span>
      </motion.div>
      
      <div className="hidden lg:flex items-center gap-12">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, color: "#fff" }}
            className={`text-label-mono transition-all duration-300 relative group py-2 ${
              i === 0 ? "text-white" : "text-[#A1A1AA]"
            }`}
          >
            {link.name}
            <span className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 ${
              i === 0 ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </motion.a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex flex-col items-end mr-4">
          <span className="text-[9px] text-[#A1A1AA] uppercase tracking-[0.3em] font-bold">Latency</span>
          <span className="text-[10px] font-mono text-green-500">12MS // STABLE</span>
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff", borderColor: "#fff" }}
          whileTap={{ scale: 0.95 }}
          className="text-label-mono bg-white text-surface-dim px-6 py-2.5 border border-transparent transition-all font-black"
          onClick={() => window.location.href = 'mailto:sahilmohammed7474@gmail.com'}
        >
          CONNECT
        </motion.button>
      </div>
    </nav>
  );
}

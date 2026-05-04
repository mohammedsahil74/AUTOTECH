import { motion } from "motion/react";
import { Layers, Cpu, Gamepad2 } from "lucide-react";

const skills = [
  {
    version: "V1.0",
    title: "PROGRAMMING_CORE",
    description: "Expertise in low-level systems programming, algorithm optimization, and building robust software solutions designed for high-performance computing environments.",
    icon: Layers
  },
  {
    version: "V1.1",
    title: "VEHICLE_DIAGNOSTICS",
    description: "Specialized skills in ECU remapping, CANBUS protocol analysis, and hardware-level performance tuning for performance vehicles.",
    icon: Cpu
  },
  {
    version: "V1.2",
    title: "GAME_LOGIC",
    description: "Development of a browser-based racing engine, focusing on deterministic physics, low-latency rendering, and WebGL optimization.",
    icon: Gamepad2
  }
];

export default function Competencies() {
  return (
    <section id="competencies" className="flex flex-col gap-10 relative">
      <div className="bg-index">02</div>
      
      <div className="flex items-center gap-4">
        <h2 className="text-headline-lg text-white">CORE_COMPETENCIES_</h2>
        <div className="h-[1px] bg-white/10 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter bg-white/10 p-gutter">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-surface p-12 flex flex-col gap-8 group hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 relative"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/0 group-hover:bg-white/40 transition-all duration-700" />
            <div className="flex justify-between items-start">
              <span className="text-label-mono text-[#A1A1AA] font-bold">SKILLSET // {skill.version}</span>
              <skill.icon size={18} className="text-white group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-headline-md text-white font-black uppercase mb-4">{skill.title}</h3>
              <p className="text-body-md text-[#A1A1AA] leading-relaxed uppercase tracking-widest text-xs">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Activity, Gamepad2, Database } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-10 relative">
      <div className="bg-index">03</div>
      
      <div className="flex items-center gap-4">
        <h2 className="text-headline-lg text-white">PROJECTS_</h2>
        <div className="h-[1px] bg-white/10 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter bg-white/10 p-gutter">
        {/* Large Telemetry Project */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 md:row-span-2 bg-surface p-12 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent z-0 group-hover:from-white/[0.04] transition-all duration-700" />
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"
          />
          
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <span className="text-label-mono block mb-2 text-[#A1A1AA] font-bold">TELEMETRY // V2.4</span>
              <h3 className="text-display-xl text-white font-black leading-none group-hover:scale-[1.02] transition-transform origin-left">Next-Gen Dashboard</h3>
            </div>
            <Activity className="text-white opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="relative z-10 space-y-6 mt-12">
            <p className="text-body-md text-[#A1A1AA] max-w-xl uppercase tracking-widest leading-relaxed">
              Real-time CANBUS data processing and visualization system. 
              Engineered with Rust for high-performance telemetry analysis.
            </p>
            <div className="flex gap-4">
              {["RUST", "REACT", "WEBGL"].map(tag => (
                <span key={tag} className="text-[10px] bg-white text-black px-3 py-1 font-black">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Medium Gaming Project */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 md:row-span-1 bg-surface p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors group"
        >
          <div className="flex justify-between items-start">
            <span className="text-label-mono text-[#A1A1AA] font-bold">GAME // SHIFT</span>
            <Gamepad2 className="text-white opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <h3 className="text-headline-md text-white font-black uppercase">Shift: Velocity</h3>
            <p className="text-caption mt-2 text-[#D4D4D8] uppercase tracking-tighter">Browser-based physics engine and racing simulator.</p>
          </div>
        </motion.div>

        {/* Medium API Project */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 md:row-span-1 bg-surface p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors group"
        >
          <div className="flex justify-between items-start">
            <span className="text-label-mono text-[#A1A1AA] font-bold">API // GATEWAY</span>
            <Database className="text-white opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <h3 className="text-headline-md text-white font-black uppercase">Kinesis API</h3>
            <p className="text-caption mt-2 text-[#D4D4D8] uppercase tracking-tighter">High-throughput microservices for data streaming.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

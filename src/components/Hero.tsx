import { motion } from "motion/react";
import { Terminal, Shield, Activity, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section id="manifesto" className="min-h-[90vh] flex flex-col justify-center relative py-20 overflow-hidden">
      {/* Background Index */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-index top-20"
      >
        01
      </motion.div>

      {/* Scanning Line Effect */}
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[1px] bg-white/5 z-0 pointer-events-none"
      />

      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 text-[#A1A1AA] mb-16"
        >
          <div className="p-2 border border-white/20 glass-panel">
            <Terminal size={14} className="text-white" />
          </div>
          <span className="text-label-mono font-bold tracking-[0.4em] text-white">SYS.INIT // USER.GUEST // AUTH.VARIFIED</span>
          <div className="h-[px] w-24 bg-white/10 min-h-[1px]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <div className="relative group">
              <motion.h1 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: [0, 1, 0.8, 1, 0.9, 1] }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  opacity: { duration: 0.5, times: [0, 0.1, 0.2, 0.3, 0.4, 1] } 
                }}
                className="text-[clamp(60px,15vw,180px)] font-black leading-[0.8] tracking-tighter text-white"
              >
                ARCHITECTING<br />
                <span className="text-outline-thin group-hover:text-white/20 transition-all duration-700">PERFORMANCE</span>
              </motion.h1>
              
              {/* Absolute high-tech callouts */}
              <div className="absolute -right-4 top-0 hidden xl:block">
                <div className="flex flex-col gap-1 items-end">
                  <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">Core_Temp: 34°C</span>
                  <div className="w-16 h-1 bg-white/10">
                    <div className="w-2/3 h-full bg-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 pb-4">
            <div className="flex flex-col gap-6 border-l border-white/10 pl-8">
              <div className="flex items-center gap-3">
                <Shield size={16} className="text-white/40" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#A1A1AA]">SECURED_STORAGE</span>
              </div>
              <div className="flex items-center gap-3">
                <Activity size={16} className="text-white/40" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#A1A1AA]">REALTIME_FEED</span>
              </div>
              <div className="flex items-center gap-3">
                <Cpu size={16} className="text-white/40" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#A1A1AA]">HPC_ENABLED</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-stretch gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <div className="w-1 bg-white h-24" />
            <span className="text-[10px] text-white/20 rotate-90 origin-left mt-8 font-mono">CODE: 0X4F9D</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl relative"
          >
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6 text-white leading-none">
              Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Digital Edge</span>
            </h2>
            <p className="text-[#A1A1AA] text-body-md leading-relaxed uppercase tracking-widest font-medium opacity-80">
              Developing high-performance architectures where precision is non-negotiable. 
              Bridging the gap between software development and low-level engine telemetry with sub-millisecond accuracy.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-12">
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/5 border border-white/20 text-white text-label-mono px-12 py-5 transition-all font-black glass-panel relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  INITIATE_CORE_SEQUENCE 
                  <span className="text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">{" >> "}</span>
                </span>
              </motion.button>
              
              <button className="text-white/40 hover:text-white transition-all text-label-mono flex items-center gap-2 group">
                <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 transition-all group-hover:bg-white" />
                VIEW_ARCHIVES
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-white/5 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-px bg-white/5 pointer-events-none" />
    </section>
  );
}

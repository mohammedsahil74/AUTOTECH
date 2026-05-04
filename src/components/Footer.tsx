export default function Footer() {
  const links = ["GITHUB", "SOURCE", "DIAGNOSTICS", "TELEMETRY"];
  
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] tracking-[0.2em] uppercase font-black opacity-60">
          ©2024 SYSTEM_ARCHITECT // PRECISION_ENGINEERING
        </div>
        
        <div className="flex gap-6">
          <a 
            key="GITHUB" 
            href="https://github.com/mohammedsahil74" 
            target="_blank"
            rel="noreferrer"
            className="text-[10px] tracking-[0.2em] font-bold text-white opacity-100 hover:text-white transition-opacity border-white/20 pb-0.5 border-b hover:border-white"
          >
            GITHUB
          </a>
          <a 
            key="SOURCE" 
            href="https://github.com/mohammedsahil74?tab=repositories" 
            target="_blank"
            rel="noreferrer"
            className="text-[10px] tracking-[0.2em] font-bold text-[#A1A1AA] opacity-80 hover:text-white transition-opacity border-white/20 pb-0.5 border-b hover:border-white"
          >
            SOURCE
          </a>
          <a 
            key="CONTACT" 
            href="mailto:sahilmohammed7474@gmail.com" 
            className="text-[10px] tracking-[0.2em] font-bold text-[#A1A1AA] opacity-80 hover:text-white transition-opacity border-white/20 pb-0.5 border-b hover:border-white"
          >
            CONTACT
          </a>
        </div>
      </div>
    </footer>
  );
}

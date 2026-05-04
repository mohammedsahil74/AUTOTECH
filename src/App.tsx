/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Competencies from "./components/Competencies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="fixed -right-24 -top-24 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] -z-0 pointer-events-none" />
      <div className="fixed -left-24 bottom-24 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] -z-0 pointer-events-none" />
      
      <Navbar />

      <div className="sidebar-rail">
        <div className="h-32 w-px bg-white/10" />
        <span className="rotate-90 text-[10px] uppercase tracking-[0.5em] font-bold text-[#A1A1AA] origin-center whitespace-nowrap">
          TERMINAL // REV_2024
        </span>
        <div className="h-32 w-px bg-white/10" />
      </div>
      
      <main className="pt-32 px-8 max-w-7xl mx-auto flex flex-col gap-48 pb-32">
        <Hero />
        <Competencies />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Users, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#020202] text-white overflow-hidden">
      
      {/* Background Glows (Glassmorphism Base) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-28 text-center">
        
        {/* Badge / Announcement */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full bg-white/5 border-white/10 backdrop-blur-md"
        >
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-gray-400">Admission Open for 2026</span>
        </motion.div>

        {/* The Main Title (Fluid Sizing prevents collision) */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ 
            fontSize: 'clamp(2rem, 10vw, 5rem)', 
            lineHeight: '1.05',
            fontWeight: '800'
          }}
          className="max-w-4xl mx-auto tracking-tighter uppercase"
        >
          Sena Public <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700">
            School & College
          </span>
        </motion.h1>

        {/* Motto */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl mt-8 text-base leading-relaxed text-gray-400 md:text-lg font-light"
        >
          "Honesty, Knowledge, Patriotism — Nurturing future leaders with precision and moral integrity."
        </motion.p>

        {/* FIXED BUTTONS: Now using <Link> to navigate to your other pages */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col w-full gap-4 mt-12 sm:flex-row sm:w-auto z-20"
        >
          <Link 
            to="/admission"
            className="flex items-center justify-center gap-2 px-8 py-4 font-bold tracking-tighter text-black uppercase transition-all bg-yellow-500 rounded-xl hover:bg-yellow-400 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] active:scale-95"
          >
            Apply Now <ArrowRight size={20} />
          </Link>
          
          <Link 
            to="/about"
            className="flex items-center justify-center px-8 py-4 font-bold tracking-tighter uppercase transition-all border rounded-xl border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 active:scale-95 text-white"
          >
            Explore Campus
          </Link>
        </motion.div>

        {/* Quick Stats (Glassmorphism Cards) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 gap-4 mt-24 sm:grid-cols-3 w-full max-w-4xl"
        >
          {[
            { icon: <GraduationCap className="text-yellow-500" />, label: "Academic Brilliance" },
            { icon: <Users className="text-cyan-500" />, label: "Expert Faculty" },
            { icon: <BookOpen className="text-purple-500" />, label: "Modern Curriculum" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 border rounded-2xl bg-white/5 border-white/10 backdrop-blur-xl">
              {item.icon}
              <span className="text-sm font-semibold tracking-wide text-gray-300 uppercase">{item.label}</span>
            </div>
          ))}
        </motion.div>

      </section>

      {/* Animated Scroll Indicator */}
      <div className="absolute flex flex-col items-center gap-2 bottom-8 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>

    </div>
  );
};

export default Home;

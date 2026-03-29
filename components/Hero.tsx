
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative px-4 pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center mb-12"
        >
          {/* Main Brand Logo from file */}
          <Logo className="w-64 md:w-80 mb-12" variant="dark" />
          
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            href="https://menu.bistro-central.ru/"
            className="inline-block px-8 py-3 rounded-full border border-amber-200 bg-[#fffaf2]/95 text-amber-900 text-sm font-bold tracking-[0.2em] uppercase mb-8 transition-colors duration-200 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 shadow-[9px_9px_22px_rgba(184,158,126,0.34),-8px_-8px_20px_rgba(255,255,255,0.92)]"
          >
            МЕНЮ
          </motion.a>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl text-slate-800 tracking-wide mb-4"
          >
            Бистро • Пекарня • Кондитерская
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 font-light max-w-xl mx-auto leading-relaxed"
          >
            Место встреч, простоты и уюта в самом центре Сочи
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative inline-block px-12 py-10 rounded-[2.5rem] bg-[#fffaf4]/90 border border-[#efe2cf] backdrop-blur-xl shadow-[12px_12px_30px_rgba(178,152,121,0.34),-12px_-12px_30px_rgba(255,255,255,0.95),inset_2px_2px_8px_rgba(255,255,255,0.6)] overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/35 via-transparent to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <p className="text-sm md:text-base text-slate-700 uppercase tracking-[0.3em] font-semibold">Ежедневно с 8:00 до 0:00</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

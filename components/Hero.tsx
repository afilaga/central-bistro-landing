
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
            href="https://bistro-central.ru/printmenu"
            className="inline-block px-5 py-2 rounded-full border border-amber-500/20 bg-amber-50/30 text-amber-800 text-xs font-bold tracking-[0.2em] uppercase mb-8 transition-colors duration-300 hover:bg-amber-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
          >
            МЕНЮ
          </motion.a>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl font-serif text-slate-700 tracking-wide mb-4 italic"
          >
            Бистро • Пекарня • Кондитерская
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-500 font-light max-w-xl mx-auto leading-relaxed"
          >
            Место встреч, простоты и уюта в самом центре Сочи
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative inline-block px-12 py-10 rounded-[2.5rem] bg-white/40 border border-white/60 backdrop-blur-xl shadow-2xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 font-bold">Мы открылись!</h2>
            <div className="h-0.5 w-16 bg-amber-400 mx-auto my-4 opacity-60"></div>
            <p className="text-sm md:text-base text-slate-600 uppercase tracking-[0.3em] font-semibold">Ежедневно с 8:00 до 0:00</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

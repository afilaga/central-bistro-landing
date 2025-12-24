
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Wallet, Star } from 'lucide-react';
import Logo from './Logo';

const LoyaltySection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section className="px-4 py-24 md:py-32 bg-slate-100/30 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <Star size={14} /> Привилегии
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 leading-tight">
            Станьте частью нашей <br />
            <span className="italic font-light">семьи Central Bistro</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-md">
            Регистрируйтесь в нашей системе лояльности и получайте свежую информацию об эксклюзивных предложениях, гастрономических ужинах и копите баллы.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white shadow-sm text-amber-600">
                <Wallet size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Кешбэк до 10%</h4>
                <p className="text-sm text-slate-500">Возвращайте часть стоимости каждого заказа бонусами на счет.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white shadow-sm text-amber-600">
                <Gift size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Оплата до 50%</h4>
                <p className="text-sm text-slate-500">Оплачивайте до половины счета накопленными бонусами.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center"
        >
          {/* Visual card representation with effects */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02, rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 w-full aspect-[1.586/1] max-w-md mx-auto rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-10 shadow-2xl transform md:rotate-3 group overflow-hidden cursor-pointer"
          >
            {/* Animated gradient overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.2),transparent)] pointer-events-none" />

            {/* Shine effect that follows mouse */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, rgba(251,191,36,0.3), transparent 50%)`,
              }}
            />

            {/* Animated light beam */}
            <motion.div
              animate={{
                x: ['-100%', '200%'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
            />

            {/* Glowing border on hover */}
            <div className={`absolute inset-0 rounded-[2.5rem] transition-all duration-500 ${isHovered ? 'shadow-[0_0_40px_rgba(251,191,36,0.3)]' : ''}`} />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="flex flex-col items-start">
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-3">Loyalty Member</span>
                  {/* Bigger logo with glow */}
                  <motion.div
                    animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Logo variant="white" className="h-20 md:h-24 w-auto drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]" />
                  </motion.div>
                </div>
                <div className="w-12 h-8 md:w-14 md:h-10 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                  <motion.div
                    className="w-6 h-4 md:w-8 md:h-5 bg-amber-400/50 rounded-sm"
                    animate={isHovered ? { opacity: [0.5, 1, 0.5] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              <div className="mb-6 md:mb-8">
                <div className="text-white/40 text-[9px] uppercase tracking-[0.4em] mb-2 font-medium">Exclusive Privileges</div>
                <div className="flex gap-2 md:gap-4 flex-wrap">
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 text-white/90 text-[9px] md:text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm border border-white/10"
                  >
                    CASHBACK 10%
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 text-white/90 text-[9px] md:text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm border border-white/10"
                  >
                    VIP STATUS
                  </motion.div>
                </div>
              </div>

              {/* Bottom info - European Bistro removed */}
              <div className="flex justify-between items-end border-t border-white/5 pt-4 md:pt-6">
                <div className="text-white/30 font-mono tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]">2025 • CENTRAL • SOCHI</div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-amber-500/80 text-2xl md:text-3xl"
                >
                  ★
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced glow behind the card */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-500/20 blur-[120px] pointer-events-none"
          />

          {/* Button moved below the card */}
          <div className="mt-8 md:mt-10">
            <a
              href="https://form.p-h.app/3b4ab0b7a86caeeb780d9386f45f43fa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all hover:scale-105 shadow-lg shadow-slate-200 hover:shadow-amber-500/20"
            >
              Зарегистрироваться
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoyaltySection;

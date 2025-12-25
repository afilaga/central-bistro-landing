
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, MessageCircle, MapPin } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 px-3 py-2 md:px-6 md:py-3"
    >
      <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/70 border border-white/40 rounded-2xl md:rounded-full px-3 py-2 md:px-5 md:py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center group cursor-pointer">
          <Logo variant="dark" className="h-5 md:h-7 w-auto" />
        </div>

        <div className="flex items-center gap-2 md:gap-5">
          {/* Mobile: compact address and phone */}
          <div className="flex md:hidden items-center gap-2 text-[#1a3d2f]/80">
            <a href="https://yandex.ru/maps/-/CLHuIG~8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[9px] font-medium">
              <MapPin size={10} className="text-amber-500" /> Воровского, 35А
            </a>
            <a href="tel:+79882866699" className="flex items-center gap-1 text-[9px] font-bold">
              <Phone size={10} className="text-amber-500" />
            </a>
          </div>

          {/* Desktop: full address and phone */}
          <div className="hidden md:flex items-center gap-5 text-[#1a3d2f]/80">
            <a href="https://yandex.ru/maps/-/CLHuIG~8" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors flex items-center gap-1.5 text-[11px] font-medium tracking-wide">
              <MapPin size={12} className="text-amber-500" /> Сочи, Воровского, 35А
            </a>
            <a href="tel:+79882866699" className="hover:text-amber-600 transition-colors flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase">
              <Phone size={12} className="text-amber-500" /> +7 (988) 286-66-99
            </a>
          </div>

          {/* Messengers only (no Instagram) */}
          <div className="flex items-center gap-2">
            <a
              href="https://bistro-central.ru/printmenu"
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-50/40 text-amber-800 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-amber-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
            >
              Меню
            </a>
            <a href="https://wa.me/+79882866699" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-amber-50 transition-colors text-slate-600" title="WhatsApp">
              <MessageCircle size={16} />
            </a>
            <a href="https://t.me/+79882866699" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-amber-50 transition-colors text-slate-600" title="Telegram">
              <Send size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

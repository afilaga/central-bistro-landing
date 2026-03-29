
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
      className="sticky top-0 z-50 px-3 pt-3 pb-2 md:px-6 md:pt-4 md:pb-3"
    >
      <div className="max-w-6xl mx-auto backdrop-blur-xl bg-[#fcf8f1]/85 border border-[#ebdecb] rounded-3xl md:rounded-full px-3 py-2 md:px-5 md:py-2 flex items-center justify-between shadow-[10px_10px_24px_rgba(186,164,136,0.32),-8px_-8px_20px_rgba(255,255,255,0.9)]">
        <div className="flex items-center group cursor-pointer">
          <Logo variant="dark" className="h-5 md:h-7 w-auto" />
        </div>

        <div className="flex items-center gap-2 md:gap-5">
          {/* Mobile: compact address and phone */}
          <div className="flex md:hidden items-center gap-2 text-slate-800/80">
            <a href="https://yandex.ru/maps/-/CLHuIG~8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[9px] font-semibold">
              <MapPin size={10} className="text-amber-600" /> Воровского, 35А
            </a>
            <a href="tel:+79882866699" className="flex items-center gap-1 text-[9px] font-bold rounded-full px-2 py-1 bg-white/80 border border-amber-100 shadow-[inset_2px_2px_6px_rgba(178,151,116,0.2)]">
              <Phone size={10} className="text-amber-700" />
            </a>
          </div>

          {/* Desktop: full address and phone */}
          <div className="hidden md:flex items-center gap-5 text-slate-800/80">
            <a href="https://yandex.ru/maps/-/CLHuIG~8" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors flex items-center gap-1.5 text-[11px] font-semibold tracking-wide">
              <MapPin size={12} className="text-amber-600" /> Сочи, Воровского, 35А
            </a>
            <a href="tel:+79882866699" className="hover:text-amber-700 transition-colors flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase">
              <Phone size={12} className="text-amber-600" /> +7 (988) 286-66-99
            </a>
          </div>

          {/* Messengers only (no Instagram) */}
          <div className="flex items-center gap-2">
            <a
              href="https://menu.bistro-central.ru/"
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-full border border-amber-200 bg-[#fffaf2] text-amber-900 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-200 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 shadow-[inset_2px_2px_5px_rgba(187,156,119,0.2)]"
            >
              Меню
            </a>
            <a href="https://wa.me/+79882866699" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-amber-50 transition-colors duration-200 text-slate-600 cursor-pointer border border-transparent hover:border-amber-100" title="WhatsApp">
              <MessageCircle size={16} />
            </a>
            <a href="https://t.me/+79882866699" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-amber-50 transition-colors duration-200 text-slate-600 cursor-pointer border border-transparent hover:border-amber-100" title="Telegram">
              <Send size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

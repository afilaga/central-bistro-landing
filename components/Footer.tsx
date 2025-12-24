
import React from 'react';
import { Mail, MapPin, Phone, Globe, MessageCircle, Send, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001a11] text-slate-400 py-20 px-4 md:px-8 mt-auto border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8 lg:col-span-1">
            {/* White variant logo for the dark footer */}
            <Logo variant="white" className="w-48 md:w-56" />

            <p className="text-sm leading-relaxed max-w-xs text-slate-500 font-light">
              Ваш уютный уголок в самом центре Сочи.
              Пекарня, кондитерская и авторская кухня с европейским духом.
            </p>
            <div className="mt-6">
              <iframe
                src="https://yandex.ru/sprav/widget/rating-badge/55148589245?type=rating&theme=dark"
                width="150"
                height="50"
                frameBorder="0"
                className="rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-[10px] opacity-40">Связаться</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+79882866699" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                  <Phone size={14} className="text-amber-500" /> +7 (988) 286-66-99
                </a>
              </li>
              <li>
                <a href="mailto:centralbistro@yandex.ru" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                  <Mail size={14} className="text-amber-500" /> centralbistro@yandex.ru
                </a>
              </li>
              <li>
                <a href="https://bistro-central.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                  <Globe size={14} className="text-amber-500" /> bistro-central.ru
                </a>
              </li>
              <li className="flex items-center gap-4 pt-4">
                <a href="https://wa.me/+79882866699" target="_blank" className="p-2.5 bg-white/5 rounded-full hover:bg-amber-500/20 hover:text-white transition-all"><MessageCircle size={18} /></a>
                <a href="https://t.me/+79882866699" target="_blank" className="p-2.5 bg-white/5 rounded-full hover:bg-amber-500/20 hover:text-white transition-all"><Send size={18} /></a>
                <a href="https://www.instagram.com/central.bistro.sochi/" target="_blank" className="p-2.5 bg-white/5 rounded-full hover:bg-amber-500/20 hover:text-white transition-all"><Instagram size={18} /></a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-[10px] opacity-40">Локация</h4>
            <div className="space-y-4 text-sm">
              <a
                href="https://yandex.ru/maps/-/CLHuIG~8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-amber-400 transition-colors leading-relaxed group"
              >
                <MapPin size={18} className="text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-light">
                  Воровского, 35А<br />
                  Сочи, Краснодарский край,<br />
                  354000
                </span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-[10px] opacity-40">Реквизиты</h4>
            <div className="text-[11px] space-y-3 font-mono text-slate-500 uppercase tracking-wider">
              <p className="text-white/80">ООО «Центральное Бистро»</p>
              <p>ОГРН: 1252300042818</p>
              <p>ИНН: 2366055372</p>
              <p>КПП: 236601001</p>
              <p className="pt-4 text-[10px] opacity-30">© 2025 Все права защищены</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-700 uppercase tracking-[0.3em]">
          <p className="font-medium">Central Bistro • Sochi</p>
          <a href="https://bistro-central.ru/privacy" className="hover:text-amber-500 transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

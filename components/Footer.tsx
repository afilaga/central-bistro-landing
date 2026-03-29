
import React from 'react';
import { Mail, MapPin, Phone, Globe, MessageCircle, Send } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2a241f] via-[#201d1c] to-[#171617] text-slate-300 py-14 px-4 md:px-8 mt-auto border-t border-amber-100/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div className="space-y-6 lg:col-span-1">
            {/* White variant logo for the dark footer */}
            <Logo variant="white" className="w-48 md:w-56" />

            <p className="text-sm leading-relaxed max-w-xs text-slate-300/75 font-light">
              Ваш уютный уголок в самом центре Сочи.
              Пекарня, кондитерская и авторская кухня с европейским духом.
            </p>
            <div>
              <iframe
                src="https://yandex.ru/sprav/widget/rating-badge/55148589245?type=award"
                width="150"
                height="50"
                frameBorder="0"
                title="Рейтинг Central Bistro в Яндекс"
                className="rounded-lg overflow-hidden opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-[10px] opacity-60">Связаться</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+79882866699" className="flex items-center gap-3 hover:text-amber-200 transition-colors duration-200">
                  <Phone size={14} className="text-amber-300" /> +7 (988) 286-66-99
                </a>
              </li>
              <li>
                <a href="mailto:centralbistro@yandex.ru" className="flex items-center gap-3 hover:text-amber-200 transition-colors duration-200">
                  <Mail size={14} className="text-amber-300" /> centralbistro@yandex.ru
                </a>
              </li>
              <li>
                <a href="https://bistro-central.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-200 transition-colors duration-200">
                  <Globe size={14} className="text-amber-300" /> bistro-central.ru
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a href="https://wa.me/+79882866699" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 rounded-full hover:bg-amber-400/20 hover:text-white transition-all duration-200 border border-white/10 cursor-pointer"><MessageCircle size={18} /></a>
                <a href="https://t.me/+79882866699" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 rounded-full hover:bg-amber-400/20 hover:text-white transition-all duration-200 border border-white/10 cursor-pointer"><Send size={18} /></a>

              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-[10px] opacity-60">Локация</h4>
            <div className="space-y-4 text-sm">
              <a
                href="https://yandex.ru/maps/-/CLHuIG~8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-amber-200 transition-colors duration-200 leading-relaxed group"
              >
                <MapPin size={18} className="text-amber-300 shrink-0" />
                <span className="font-light">
                  Воровского, 35А<br />
                  Сочи, Краснодарский край,<br />
                  354000
                </span>
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-[10px] opacity-60">Реквизиты</h4>
            <div className="text-[11px] space-y-3 font-mono text-slate-300/65 uppercase tracking-wider">
              <p className="text-white/80">ООО «Центральное Бистро»</p>
              <p>ОГРН: 1252300042818</p>
              <p>ИНН: 2366055372</p>
              <p>КПП: 236601001</p>
              <p className="pt-4 text-[10px] opacity-40">© 2026 Все права защищены</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-5 text-[10px] text-slate-300/70 uppercase tracking-[0.3em]">
          <p className="font-medium">Central Bistro • Sochi</p>
          <a href="https://bistro-central.ru/privacy" className="hover:text-amber-200 transition-colors duration-200">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, MapPin, Star } from 'lucide-react';

const FeedbackSection: React.FC = () => {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl text-slate-800">
            Мы стараемся быть лучше каждый день!
          </h2>
          <p className="text-slate-600 text-lg font-light">
            Ваше мнение очень важно для нас. Пожалуйста, оставьте отзыв <br className="hidden md:block" /> на любом удобном сервисе.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <motion.a 
            href="https://ya.cc/t/59BI2R2U8LbGQQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-8 rounded-3xl bg-[#fffaf4]/90 border border-[#ebddca] shadow-[10px_10px_24px_rgba(182,158,127,0.3),-9px_-9px_22px_rgba(255,255,255,0.9)] hover:border-amber-200 hover:shadow-[12px_12px_30px_rgba(174,151,121,0.38),-10px_-10px_24px_rgba(255,255,255,0.95)] transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-[#fdf1df] text-amber-700 border border-amber-100 shadow-[inset_2px_2px_6px_rgba(172,146,114,0.22)] transition-colors duration-200">
                <MapPin size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-slate-800">Яндекс Карты</h3>
                <div className="flex text-orange-400 gap-0.5 mt-1">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="text-amber-300 group-hover:text-amber-600 transition-colors duration-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.a>
          
          <motion.a 
            href="https://2gis.ru/reviews/70000001104625701/addReview?utm_source=lk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-8 rounded-3xl bg-[#fffaf4]/90 border border-[#ebddca] shadow-[10px_10px_24px_rgba(182,158,127,0.3),-9px_-9px_22px_rgba(255,255,255,0.9)] hover:border-amber-200 hover:shadow-[12px_12px_30px_rgba(174,151,121,0.38),-10px_-10px_24px_rgba(255,255,255,0.95)] transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-[#fdf1df] text-amber-700 border border-amber-100 shadow-[inset_2px_2px_6px_rgba(172,146,114,0.22)] transition-colors duration-200">
                <MessageSquare size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-slate-800">2 ГИС</h3>
                <div className="flex text-orange-400 gap-0.5 mt-1">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="text-amber-300 group-hover:text-amber-600 transition-colors duration-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;

"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, ArrowLeft, Copy, Check, MessageCircle, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Background = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#f8fafc]">
    <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] top-0 right-0" />
    <div className="absolute w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] bottom-0 left-0" />
  </div>
);

// Определяем тип языка
type Language = "en" | "ru";

const translations = {
  en: {
    back: "Home",
    title: "Support Center",
    subtitle: "Encountered a problem or have a suggestion? We are always in touch and ready to help.",
    emailTitle: "Email Us",
    emailDesc: "For technical questions, bug reports, and business proposals.",
    sendEmail: "Send Email",
    instaTitle: "Instagram",
    instaDesc: "Follow updates, news, and DM us for quick contact.",
    profileBtn: "Go to Profile",
    footer: "We usually reply within 24 hours."
  },
  ru: {
    back: "Главная",
    title: "Центр Поддержки",
    subtitle: "Столкнулись с проблемой или есть предложение? Мы всегда на связи и готовы помочь.",
    emailTitle: "Напишите нам",
    emailDesc: "Для технических вопросов, отчетов об ошибках и деловых предложений.",
    sendEmail: "Отправить письмо",
    instaTitle: "Instagram",
    instaDesc: "Следите за обновлениями, новостями и пишите в Direct для быстрой связи.",
    profileBtn: "Перейти в профиль",
    footer: "Мы обычно отвечаем в течение 24 часов."
  }
};

export default function SupportPage() {
  const [copied, setCopied] = useState(false);
  // Явно указываем тип состояния
  const [lang, setLang] = useState<Language>("en");

  const t = translations[lang];

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ru" : "en"));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("danik269@vk.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen font-nunito flex flex-col items-center justify-center p-4 relative">
      <Background />
      
      <div className="absolute top-8 left-8 z-20">
         <Link href="/" className="inline-flex items-center gap-2 text-slate-600 font-bold hover:text-indigo-600 transition-colors bg-white/50 px-4 py-2 rounded-full border border-white/60 backdrop-blur-sm">
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">{t.back}</span>
         </Link>
      </div>

      <div className="absolute top-8 right-8 z-20">
         <button 
            onClick={toggleLang}
            className="inline-flex items-center gap-2 text-slate-600 font-bold hover:text-indigo-600 transition-colors bg-white/50 px-4 py-2 rounded-full border border-white/60 backdrop-blur-sm"
         >
            <Globe size={18} />
            <span>{lang.toUpperCase()}</span>
         </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl w-full text-center space-y-12 mt-12 sm:mt-0"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg shadow-indigo-500/10 mb-4 text-indigo-600">
            <MessageCircle size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900">
            {t.title}
          </h1>
          <p className="text-xl text-slate-500 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-xl border border-slate-200 p-8 rounded-3xl shadow-sm text-left relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-32 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100" />
            
            <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Mail size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{t.emailTitle}</h3>
                <p className="text-slate-500 mb-6 text-sm">
                    {t.emailDesc}
                </p>
                
                <div className="flex items-center gap-2">
                    <a 
                        href="mailto:danik269@vk.com" 
                        className="flex-1 bg-slate-900 text-white font-bold py-3 px-4 rounded-xl text-center hover:bg-slate-800 transition-colors"
                    >
                        {t.sendEmail}
                    </a>
                    <button 
                        onClick={handleCopyEmail}
                        className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors border border-slate-200"
                        title="Copy email"
                    >
                        {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                    </button>
                </div>
                <div className="mt-3 text-xs text-center text-slate-400 font-mono">
                    danik269@vk.com
                </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-xl border border-slate-200 p-8 rounded-3xl shadow-sm text-left relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-32 bg-pink-50 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100" />
            
            <div className="relative z-10">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <Instagram size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{t.instaTitle}</h3>
                <p className="text-slate-500 mb-6 text-sm">
                    {t.instaDesc}
                </p>
                
                <a 
                    href="https://instagram.com/yatogorot_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-xl text-center hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                >
                    {t.profileBtn}
                </a>
                <div className="mt-3 text-xs text-center text-slate-400 font-mono">
                    @yatogorot_
                </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-slate-200/60">
            <p className="text-slate-400 text-sm">
                {t.footer}
            </p>
        </div>
      </motion.div>
    </main>
  );
}
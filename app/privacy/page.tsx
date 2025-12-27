"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Eye, FileText, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Background = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#f8fafc]">
    <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -top-20 -left-20" />
    <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] bottom-0 right-0" />
  </div>
);

type Language = "en" | "ru";
const translations = {
  en: {
    back: "Back to Home",
    title: "Privacy Policy",
    lastUpdated: "Last updated:",
    p1_title: "1. General Provisions",
    p1_desc1: "This Privacy Policy describes how the Service handles your information. Our Service is designed to prioritize your privacy.",
    p1_desc2: "We operate on a \"Local-First\" basis, meaning your data is processed and stored locally on your device.",
    
    p2_title: "2. Data Collection and Usage",
    p2_desc: "We do not collect, store, or transmit your personal data to our servers. All processing happens directly in your browser.",
    p2_list: [
      { b: "Personal Data:", t: "We do not collect your name, email, or usage patterns. If you contact us via email, we only use your address to reply to you." },
      { b: "Local Storage:", t: "We use your browser's local storage (chrome.storage) only to save your preferences and settings locally." },
      { b: "No Tracking:", t: "We do not use third-party analytics or tracking cookies." }
    ],

    p3_title: "3. Data Security",
    p3_desc: "Since we do not collect your data, there is no risk of your data being breached from our servers. Your data remains solely on your device and is protected by your browser's security protocols.",

    p4_title: "4. Third-Party Services",
    p4_desc: "The Service does not share any data with third parties. No data is sent to external APIs unless explicitly initiated by you (e.g., clicking a link).",
    rights: [
      { title: "Complete Control", desc: "You have full control over your data since it is stored on your device." },
      { title: "Data Removal", desc: "You can delete all data simply by uninstalling the extension or clearing your browser storage." },
      { title: "No Hidden Processing", desc: "We do not process your data in the background for advertising purposes." },
      { title: "Offline Capable", desc: "The core features of the extension work without an internet connection." }
    ],

    p5_title: "5. Contact Us",
    p5_desc: "If you have questions regarding this Privacy Policy, you can contact us:",
  },
  ru: {
    back: "Вернуться на главную",
    title: "Политика конфиденциальности",
    lastUpdated: "Последнее обновление:",
    p1_title: "1. Общие положения",
    p1_desc1: "Настоящая Политика описывает принципы работы нашего Сервиса. Мы ставим вашу приватность на первое место.",
    p1_desc2: "Мы работаем по принципу «Local-First»: все ваши данные обрабатываются и хранятся исключительно локально на вашем устройстве.",
    
    p2_title: "2. Сбор и использование данных",
    p2_desc: "Мы не собираем, не храним и не передаем ваши личные данные на наши серверы. Вся работа происходит внутри вашего браузера.",
    p2_list: [
      { b: "Персональные данные:", t: "Мы не собираем ваше имя, email или историю действий. Если вы пишете нам в поддержку, email используется только для ответа." },
      { b: "Локальное хранилище:", t: "Мы используем локальную память браузера (chrome.storage) исключительно для сохранения ваших настроек." },
      { b: "Отсутствие слежки:", t: "Мы не используем стороннюю аналитику или трекинговые cookie-файлы." }
    ],

    p3_title: "3. Безопасность данных",
    p3_desc: "Поскольку мы не собираем ваши данные, риск их утечки с наших серверов исключен. Ваши данные находятся только на вашем устройстве и защищены протоколами безопасности браузера.",

    p4_title: "4. Сторонние сервисы",
    p4_desc: "Сервис не передает данные третьим лицам. Никакая информация не отправляется во внешние API, если вы сами этого не инициируете.",
    rights: [
      { title: "Полный контроль", desc: "Вы полностью контролируете свои данные, так как они хранятся у вас." },
      { title: "Удаление данных", desc: "Вы можете удалить все данные, просто удалив расширение или очистив кеш браузера." },
      { title: "Без скрытой обработки", desc: "Мы не обрабатываем ваши данные в фоновом режиме для рекламы." },
      { title: "Работа оффлайн", desc: "Основные функции расширения работают без подключения к интернету." }
    ],

    p5_title: "5. Контакты",
    p5_desc: "Если у вас есть вопросы относительно этой Политики конфиденциальности, вы можете связаться с нами:",
  }
};

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];
  
  const currentDate = new Date().toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US');

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ru" : "en"));
  };

  return (
    <main className="min-h-screen font-nunito text-slate-700 relative py-12 px-4 md:px-8">
      <Background />
      
      <div className="absolute top-8 right-8 z-20">
         <button 
            onClick={toggleLang}
            className="inline-flex items-center gap-2 text-slate-600 font-bold hover:text-indigo-600 transition-colors bg-white/50 px-4 py-2 rounded-full border border-white/60 backdrop-blur-sm"
         >
            <Globe size={18} />
            <span>{lang.toUpperCase()}</span>
         </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-6 hover:text-indigo-700 transition-colors">
            <ArrowLeft size={20} />
            {t.back}
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            {t.title}
          </h1>
          <p className="text-slate-500">
            {t.lastUpdated} {currentDate}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 backdrop-blur-xl border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm space-y-8"
        >
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="text-indigo-500" /> {t.p1_title}
            </h2>
            <p>{t.p1_desc1}</p>
            <p>{t.p1_desc2}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Eye className="text-indigo-500" /> {t.p2_title}
            </h2>
            <p>{t.p2_desc}</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-indigo-500">
                {t.p2_list.map((item, index) => (
                    <li key={index}><strong>{item.b}</strong> {item.t}</li>
                ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="text-indigo-500" /> {t.p3_title}
            </h2>
            <p>{t.p3_desc}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="text-indigo-500" /> {t.p4_title}
            </h2>
            <p>{t.p4_desc}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
                {t.rights.map((right, index) => (
                    <div key={index} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-1">{right.title}</h3>
                        <p className="text-sm">{right.desc}</p>
                    </div>
                ))}
            </div>
          </section>

          <section className="space-y-4 border-t border-slate-100 pt-8">
            <h2 className="text-2xl font-bold text-slate-900">{t.p5_title}</h2>
            <p>{t.p5_desc}</p>
            <ul className="space-y-1 font-medium">
              <li>Email: <a href="mailto:danik269@vk.com" className="text-indigo-600 hover:underline">danik269@vk.com</a></li>
            </ul>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
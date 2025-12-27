"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Volume2, Globe, Sparkles, Check, Zap, BookOpen, Headphones, Plus, Minus, Languages } from "lucide-react";
import Link from "next/link"
type Lang = 'en' | 'ru';

const content = {
  en: {
    hero: {
      badge: "LingoShift",
      title: (
        <>
          Learn a Language<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-x">
            just by browsing
          </span>
        </>
      ),
      subtitle: "LingoShift turns any website into a lesson. Passive learning without cramming or extra apps.",
      ctaDownload: "Download for Chrome",
      ctaDemo: "Watch Demo"
    },
    demo: {
      url: "techcrunch.com/future-of-ai-learning",
      tag: "Technology",
      title: "The future of ",
      titleWord: { base: "technology", trans: "tecnología" }, // Learning Spanish from English
      titleEnd: " and education",
      p1: {
        start: "Do you spend ",
        w1: { base: "hours", trans: "horas" },
        mid: " online every day? Let this ",
        w2: { base: "time", trans: "tiempo" },
        end: " work for you! Modern tools allow us to learn without stopping our daily routine."
      },
      p2: {
        start: "Imagine: you are reading ",
        w1: { base: "news", trans: "noticias" },
        mid: " or scrolling your feed, and your brain passively memorizes new ",
        w2: { base: "words", trans: "palabras" },
        end: ". This is the next generation of learning."
      },
      tipTitle: "Pro Tip",
      tipText: "Don't try to learn everything at once. Consistency beats intensity.",
      popup: {
        status: "Active",
        intensity: "Intensity",
        level: "High",
        btn: "Apply Settings"
      },
      timeline: [
        "1. You simply browse your favorite sites",
        "2. LingoShift subtly translates words",
        "3. Hover to learn pronunciation",
        "4. Adjust the difficulty level"
      ],
      tooltip: {
        originalLabel: "Original",
        targetLabel: "Spanish", // Target language for EN users
        flagOriginal: "🇺🇸",
        flagTarget: "🇪🇸",
        listen: "Listen"
      }
    },
    features: {
      title: "Why it works?",
      subtitle: "We combined cognitive psychology with modern web technologies.",
      items: [
        { title: "25th Frame Effect", desc: "You don't study words on purpose. They stick while you read news or blogs." },
        { title: "Context is King", desc: "Memorizing lists is useless. LingoShift shows how words work in real sentences." },
        { title: "Perfect Accent", desc: "Click any word to hear how native speakers pronounce it." }
      ]
    },
    faq: {
      title: "Common Questions",
      subtitle: "Everything you wanted to know before installing",
      items: [
        { q: "Is it free?", a: "Yes, the extension is completely free and does not charge any fees for any features." },
        { q: "What languages are supported?", a: "We currently support English ↔ Russian pairs. Spanish and French are in development." },
        { q: "Does this work everywhere?", a: "Yes! LingoShift works everywhere, replacing individual words in real time." },
        { q: "Can I disable it on specific sites?", a: "There is a 'Whitelist' in the extension. Just click the icon and select 'Do not translate this site'." }
      ]
    },
    footer: {
      title: "Ready to level up?",
      subtitle: "Join 10,000+ users who are already learning languages on autopilot.",
      cta: "Install for Free",
      note: "Works on Chrome"
    }
  },
  ru: {
    hero: {
      badge: "LingoShift",
      title: (
        <>
          Учи Английский<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-x">
             просто листая сайты
          </span>
        </>
      ),
      subtitle: "LingoShift превращает любой сайт в урок. Пассивное обучение без зубрежки и лишних приложений.",
      ctaDownload: "Скачать для Chrome",
      ctaDemo: "Смотреть демо"
    },
    demo: {
      url: "techcrunch.com/future-of-ai-learning",
      tag: "Технологии",
      title: "Будущее ",
      titleWord: { base: "технологий", trans: "technology" }, // Learning English from Russian
      titleEnd: " и образования",
      p1: {
        start: "Вы тратите ",
        w1: { base: "часы", trans: "hours" },
        mid: " в интернете каждый день? Пусть это ",
        w2: { base: "время", trans: "time" },
        end: " работает на вас! Современные инструменты позволяют нам учиться без отрыва от привычных дел."
      },
      p2: {
        start: "Представьте: вы читаете ",
        w1: { base: "новости", trans: "news" },
        mid: " или листаете ленту, а мозг пассивно запоминает новые ",
        w2: { base: "слова", trans: "words" },
        end: ". Это и есть обучение нового поколения."
      },
      tipTitle: "Совет профи",
      tipText: "Не пытайтесь выучить всё сразу. Регулярность бьет интенсивность.",
      popup: {
        status: "Активно",
        intensity: "Интенсивность",
        level: "Высокая",
        btn: "Применить настройки"
      },
      timeline: [
        "1. Вы просто листаете любимые сайты",
        "2. LingoShift незаметно переводит слова",
        "3. Наведите, чтобы выучить произношение",
        "4. Настраивайте уровень сложности"
      ],
      tooltip: {
        originalLabel: "Оригинал (RU)",
        targetLabel: "English",
        flagOriginal: "🇷🇺",
        flagTarget: "🇺🇸",
        listen: "Слушать"
      }
    },
    features: {
      title: "Почему это работает?",
      subtitle: "Мы объединили когнитивную психологию и современные веб-технологии.",
      items: [
        { title: "Эффект 25-го кадра", desc: "Вы не учите слова специально. Они запоминаются сами, пока вы читаете новости или блоги." },
        { title: "Контекст — король", desc: "Зубрежка списков бесполезна. LingoShift показывает, как слова работают в реальных предложениях." },
        { title: "Идеальный акцент", desc: "Нажмите на любое слово, чтобы услышать, как его произносят носители языка (US/UK)." }
      ]
    },
    faq: {
      title: "Частые вопросы",
      subtitle: "Всё, что вы хотели узнать перед установкой",
      items: [
        { q: "Это бесплатно?", a: "Да, полностью расширение бесплатное и не берет никакую оплату за какие либо функции." },
        { q: "Какие языки поддерживаются?", a: "На данный момент мы поддерживаем пары Английский ↔ Русский.  Испанский, Французский в разработке." },
        { q: "Работает ли это на везде?", a: "Да! LingoShift работает везде, заменяя отдельные слова в реальном времени." },
        { q: "Как отключить на определенных сайтах?", a: "В расширении есть 'Белый список'. Просто нажмите на иконку расширения и выберите 'Не переводить этот сайт'." }
      ]
    },
    footer: {
      title: "Готовы прокачать язык?",
      subtitle: "Присоединяйтесь к 10,000+ пользователей, которые уже учат язык на автомате.",
      cta: "Установить бесплатно",
      note: "Работает в Chrome"
    }
  }
};

// --- UI COMPONENTS ---

const LanguageSwitcher = ({ current, setLang }: { current: Lang, setLang: (l: Lang) => void }) => (
  <div className="fixed top-5 right-5 z-50">
    <button 
      onClick={() => setLang(current === 'en' ? 'ru' : 'en')}
      className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-sm font-bold text-slate-700"
    >
      <Languages size={16} />
      <span>{current === 'en' ? 'EN' : 'RU'}</span>
    </button>
  </div>
);

const BackgroundBlobs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#f8fafc]">
    <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] -top-20 -left-20 blob-anim mix-blend-multiply" />
    <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] bottom-0 right-0 blob-anim mix-blend-multiply" style={{ animationDelay: "-5s" }} />
    <div className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
  </div>
);
const ExtensionPopup = ({ t }: { t: any }) => (
  <motion.div 
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="w-[280px] bg-white/90 backdrop-blur-xl rounded-[20px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white/60 p-4 flex flex-col gap-3 ring-1 ring-black/5"
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center shadow-sm overflow-hidden border border-indigo-50">
          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-lg shadow-sm">🌍</div>
        </div>
        <div>
          <div className="flex items-center gap-1.5">

             <h2 className="text-sm font-bold text-slate-800 leading-none">LingoShift</h2>
          </div>
          <span className="text-[10px] text-slate-500 font-medium">{t.status}</span>
        </div>
      </div>

      <div className="w-9 h-5 bg-indigo-500 rounded-full p-0.5 cursor-pointer relative transition-colors shadow-inner">
        <motion.div layout className="bg-white w-4 h-4 rounded-full shadow-sm absolute right-0.5" />
      </div>
    </div>

    <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
      <div className="flex justify-between items-center mb-2">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
          <Sparkles size={10} /> {t.intensity}
        </label>
        <span className="bg-white text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-indigo-100 shadow-sm">
          {t.level}
        </span>
      </div>
      <div className="relative h-1.5 bg-slate-200 rounded-full mb-1 overflow-hidden">
        <motion.div 
          className="absolute h-full bg-gradient-to-r from-indigo-500 to-purple-500" 
          initial={{ width: 0 }}
          animate={{ width: "75%" }}
          transition={{ duration: 1.5, ease: "circOut" }}
        />
      </div>
    </div>
    
    <button className="w-full py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:scale-[1.02] hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2">
      <Check size={12} /> {t.btn}
    </button>
  </motion.div>
);
const LingoTooltip = ({ original, translation, labels }: { original: string; translation: string; labels: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 15, scale: 0.9, rotateX: 15 }}
    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
    exit={{ opacity: 0, y: 10, scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    className="absolute z-50 w-[220px] bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-indigo-100 p-3 -top-[160px] -left-[70px]"
    style={{ transformOrigin: "bottom center" }}
  >
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-b border-r border-indigo-100 shadow-[2px_2px_2px_-1px_rgba(0,0,0,0.05)]"></div>
    <div className="flex flex-col gap-1 mb-2">
        <span className="text-[9px] uppercase text-slate-400 font-bold tracking-wider">{labels.originalLabel}</span>
        <div className="flex items-baseline justify-between">
            <h3 className="text-base font-bold text-slate-700 leading-tight">{original}</h3>
            <span className="text-xs opacity-50 grayscale">{labels.flagOriginal}</span>
        </div>
    </div>
    <div className="bg-indigo-50/80 p-2 rounded-lg border border-indigo-100/50 mb-2 relative overflow-hidden group">
        <div className="absolute inset-0 bg-indigo-100/50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
        <span className="text-[9px] uppercase text-indigo-400 font-bold tracking-wider block mb-0.5">{labels.targetLabel}</span>
        <div className="flex items-baseline justify-between relative z-10">
            <span className="text-lg font-extrabold text-indigo-600 tracking-tight">{translation}</span>
            <span className="text-xs">{labels.flagTarget}</span>
        </div>
    </div>
    <button className="w-full py-1.5 bg-slate-900 text-white font-semibold rounded-md flex items-center justify-center gap-2 text-[10px] hover:bg-slate-800 transition-colors">
      <Volume2 size={12} /> {labels.listen}
    </button>
  </motion.div>
);

const MagicWord = ({ 
  base, 
  trans, 
  progress, 
  labels,
  showMenu = false 
}: { 
  base: string; 
  trans: string; 
  progress: number;
  labels: any;
  showMenu?: boolean;
}) => {
  const isTranslated = progress > 0.4; 
  const showTooltip = showMenu && progress > 0.7 && progress < 0.95;

  return (
    <span className="relative inline-block align-baseline mx-1 group">
      <AnimatePresence>
        {showTooltip && (
            <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-0 h-0 flex items-end justify-center">
                 <LingoTooltip original={base} translation={trans} labels={labels} />
            </div>
        )}
      </AnimatePresence>
      
      <span className="relative inline-block">
        <span 
            className={`absolute inset-0 -mx-1 rounded bg-indigo-100/50 transition-opacity duration-700 ${isTranslated ? 'opacity-100' : 'opacity-0'}`} 
        />
        <span 
          className={`
            relative z-10 transition-all duration-700 ease-out inline-block
            ${isTranslated 
              ? "text-indigo-600 font-bold" 
              : "text-slate-700"}
          `}
        >
            {isTranslated ? trans : base}
        </span>
      </span>
    </span>
  );
};

const FeaturesSection = ({ t }: { t: any }) => {
  const icons = [
    <Zap key="1" size={24} className="text-amber-500" />,
    <BookOpen key="2" size={24} className="text-blue-500" />,
    <Headphones key="3" size={24} className="text-pink-500" />
  ];

  const backgrounds = ["bg-amber-50", "bg-blue-50", "bg-pink-50"];

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">{t.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((f: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/60 backdrop-blur-lg border border-white/60 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${backgrounds[i]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {icons[i]}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className="border border-slate-200 bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:border-indigo-200 transition-colors"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
      >
        <span className="font-bold text-slate-800 text-lg">{question}</span>
        <span className={`p-2 rounded-full ${isOpen ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100/50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = ({ t }: { t: any }) => {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{t.title}</h2>
          <p className="text-slate-500">{t.subtitle}</p>
        </div>
        <div className="space-y-4">
          {t.items.map((faq: any, i: number) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [lang, setLang] = useState<Lang>('en'); // Default to English
  const t = content[lang];
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Animations
  const scaleBrowser = useTransform(smoothProgress, [0, 0.2], [0.9, 1]);
  const browserOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const browserY = useTransform(smoothProgress, [0, 0.2], [100, 0]);
  const translationState = useTransform(smoothProgress, [0.25, 0.65], [0, 1]);
  const popupY = useTransform(smoothProgress, [0.8, 0.9], [40, 0]);
  const popupOpacity = useTransform(smoothProgress, [0.8, 0.88], [0, 1]);

  const [transProgress, setTransProgress] = useState(0);
  useEffect(() => {
    return translationState.onChange(v => setTransProgress(v));
  }, [translationState]);

  return (
    <main className="relative min-h-screen font-nunito selection:bg-indigo-200 selection:text-indigo-900">
      <BackgroundBlobs />
      <LanguageSwitcher current={lang} setLang={setLang} />

      {/* --- HERO SECTION --- */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
        <motion.div 
          key={lang} // Trigger re-animation on lang change
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/40 pl-3 pr-5 py-2 rounded-full shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">{t.hero.badge}</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.9]">
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-[0_20px_40px_-15px_rgba(30,27,75,0.4)] hover:-translate-y-1 hover:shadow-[0_25px_50px_-15px_rgba(30,27,75,0.5)] transition-all flex items-center justify-center gap-3">
              <span>{t.hero.ctaDownload}</span>
              <div className="bg-white/20 p-1 rounded-md"><Globe size={18}/></div>
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- SCROLLYTELLING DEMO --- */}
      <div ref={containerRef} className="h-[800vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          
          {/* Browser Mockup */}
          <motion.div 
            style={{ scale: scaleBrowser, opacity: browserOpacity, y: browserY }}
            className="relative w-[90%] max-w-5xl h-[70vh] bg-white rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-200/60 overflow-hidden flex flex-col ring-8 ring-white/30 backdrop-blur-sm"
          >
            {/* Browser Header */}
            <div className="h-12 bg-slate-50/80 backdrop-blur-md border-b border-slate-200 flex items-center px-4 gap-3 z-20 shrink-0">
              <div className="flex gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm border border-[#E0443E]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm border border-[#D89E24]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm border border-[#1AAB29]" />
              </div>
              
              <div className="flex-1 max-w-xl mx-auto">
                 <div className="bg-white h-8 rounded-lg border border-slate-200 shadow-sm flex items-center px-3 text-[10px] md:text-xs text-slate-400 gap-2 hover:border-indigo-200 transition-colors">
                    <div className="text-slate-300"><Globe size={12} /></div>
                    <span>{t.demo.url}</span>
                 </div>
              </div>

              <motion.div 
                style={{ opacity: translationState, scale: translationState }}
                className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm"
              >
                <div className="font-bold text-[10px]">
          <img 
            src="/logo16.png" 
            alt="Logo" 
            className="w-full h-full object-cover" 
          /></div>
              </motion.div>
            </div>

            {/* Browser Content */}
            <div className="flex-1 overflow-y-auto relative bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              <div className="max-w-3xl mx-auto p-8 md:p-12 space-y-8">
                
                <div className="w-full h-[220px] bg-slate-100 rounded-xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10" />
                    <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur px-2.5 py-0.5 rounded-full text-[10px] font-bold text-slate-500">
                        {t.demo.tag}
                    </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                  {t.demo.title} 
                  <MagicWord 
                    base={t.demo.titleWord.base} 
                    trans={t.demo.titleWord.trans} 
                    progress={transProgress} 
                    labels={t.demo.tooltip}
                    showMenu={true} 
                  /> 
                  {t.demo.titleEnd}
                </h1>
                
                <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6 font-serif">
                  <div className="mb-4">
                    {t.demo.p1.start}
                    <MagicWord 
                        base={t.demo.p1.w1.base} 
                        trans={t.demo.p1.w1.trans} 
                        progress={transProgress}
                        labels={t.demo.tooltip}
                    /> 
                    {t.demo.p1.mid}
                    <MagicWord 
                        base={t.demo.p1.w2.base} 
                        trans={t.demo.p1.w2.trans} 
                        progress={transProgress}
                        labels={t.demo.tooltip}
                    /> 
                    {t.demo.p1.end}
                  </div>

                  <div className="mb-4">
                    {t.demo.p2.start}
                    <MagicWord 
                        base={t.demo.p2.w1.base} 
                        trans={t.demo.p2.w1.trans} 
                        progress={transProgress}
                        labels={t.demo.tooltip}
                    /> 
                    {t.demo.p2.mid}
                    <MagicWord 
                        base={t.demo.p2.w2.base} 
                        trans={t.demo.p2.w2.trans} 
                        progress={transProgress}
                        labels={t.demo.tooltip}
                    />
                    {t.demo.p2.end}
                  </div>
                  
                  <div className="p-6 bg-indigo-50/50 rounded-xl border border-indigo-100 flex gap-3 items-start">
                    <span className="text-2xl">💡</span>
                    <div>
                        <h4 className="font-bold text-indigo-900 mb-0.5 text-base">{t.demo.tipTitle}</h4>
                        <p className="text-sm text-indigo-800/80">
                           {t.demo.tipText}
                        </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popup Overlay */}
              <motion.div 
                style={{ y: popupY, opacity: popupOpacity }}
                className="absolute top-4 right-4 z-50 origin-top-right"
              >
                <ExtensionPopup t={t.demo.popup} />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Timeline Captions */}
          <div className="absolute bottom-8 left-0 right-0 pointer-events-none flex justify-center">
             <div className="bg-black/80 backdrop-blur-md text-white px-5 py-2.5 rounded-xl shadow-2xl border border-white/10 transition-all duration-500 text-sm">
                {transProgress < 0.25 && t.demo.timeline[0]}
                {transProgress >= 0.25 && transProgress < 0.65 && t.demo.timeline[1]}
                {transProgress >= 0.65 && transProgress < 0.8 && t.demo.timeline[2]}
                {transProgress >= 0.8 && t.demo.timeline[3]}
             </div>
          </div>
        </div>
      </div>
      <FeaturesSection t={t.features} />
      <FAQSection t={t.faq} />
      <section className="py-32 px-4 text-center relative z-10 bg-gradient-to-b from-transparent to-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">{t.footer.title}</h2>
          <p className="text-xl text-slate-500">{t.footer.subtitle}</p>
          
          <div className="flex flex-col items-center gap-4">
            <button className="px-12 py-6 bg-indigo-600 text-white rounded-2xl font-bold text-xl shadow-xl shadow-indigo-500/30 hover:bg-indigo-700 hover:scale-105 transition-all w-full md:w-auto">
                {t.footer.cta}
            </button>
            <p className="text-xs text-slate-400">{t.footer.note}</p>
          </div>

          <div className="pt-20 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-4">
             <div>© 2025 LingoShift</div>
             <div className="flex gap-6">
<Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy</Link>
<Link href="/support" className="hover:text-slate-600 transition-colors">Support</Link>
                {/* <a href="#" className="hover:text-slate-600 transition-colors">Twitter</a> */}
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
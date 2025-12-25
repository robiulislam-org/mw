import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown, Sparkles } from 'lucide-react';

export default function RobiulIslamWebsite() {
  const [selectedLang, setSelectedLang] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  ];

  const translations = {
    en: {
      name: 'Robiul Islam',
      q1: 'Why am I here?',
      q2: 'What is the meaning of this life?',
      q3: 'Who sent me into this world?',
      q4: 'Where am I heading after this life?',
      q5: 'Who is my true companion?',
      q6: 'How should I shape my life?',
    },
    es: {
      name: 'Robiul Islam',
      q1: '¿Por qué estoy aquí?',
      q2: '¿Cuál es el significado de esta vida?',
      q3: '¿Quién me envió a este mundo?',
      q4: '¿Hacia dónde voy después de esta vida?',
      q5: '¿Quién es mi verdadero compañero?',
      q6: '¿Cómo debería moldear mi vida?',
    },
    ar: {
      name: 'روبيول إسلام',
      q1: 'لماذا أنا هنا؟',
      q2: 'ما معنى هذه الحياة؟',
      q3: 'من الذي أرسلني إلى هذا العالم؟',
      q4: 'إلى أين أتجه بعد هذه الحياة؟',
      q5: 'من هو رفيقي الحقيقي؟',
      q6: 'كيف يجب أن أشكل حياتي؟',
    },
    fr: {
      name: 'Robiul Islam',
      q1: 'Pourquoi suis-je ici?',
      q2: 'Quel est le sens de cette vie?',
      q3: 'Qui m\'a envoyé dans ce monde?',
      q4: 'Où vais-je après cette vie?',
      q5: 'Qui est mon vrai compagnon?',
      q6: 'Comment dois-je façonner ma vie?',
    },
    de: {
      name: 'Robiul Islam',
      q1: 'Warum bin ich hier?',
      q2: 'Was ist der Sinn dieses Lebens?',
      q3: 'Wer hat mich in diese Welt geschickt?',
      q4: 'Wohin gehe ich nach diesem Leben?',
      q5: 'Wer ist mein wahrer Begleiter?',
      q6: 'Wie sollte ich mein Leben gestalten?',
    },
    pt: {
      name: 'Robiul Islam',
      q1: 'Por que estou aqui?',
      q2: 'Qual é o significado desta vida?',
      q3: 'Quem me mandou para este mundo?',
      q4: 'Para onde vou após esta vida?',
      q5: 'Quem é meu verdadeiro companheiro?',
      q6: 'Como devo moldar minha vida?',
    },
    it: {
      name: 'Robiul Islam',
      q1: 'Perché sono qui?',
      q2: 'Qual è il significato di questa vita?',
      q3: 'Chi mi ha mandato in questo mondo?',
      q4: 'Dove vado dopo questa vita?',
      q5: 'Chi è il mio vero compagno?',
      q6: 'Come dovrei plasmare la mia vita?',
    },
    ru: {
      name: 'Робиул Ислам',
      q1: 'Почему я здесь?',
      q2: 'В чём смысл этой жизни?',
      q3: 'Кто отправил меня в этот мир?',
      q4: 'Куда я направляюсь после этой жизни?',
      q5: 'Кто мой истинный спутник?',
      q6: 'Как мне формировать свою жизнь?',
    },
    ja: {
      name: 'ロビウル・イスラム',
      q1: '私はなぜここにいるのか？',
      q2: 'この人生の意味は何か？',
      q3: '誰が私をこの世に送ったのか？',
      q4: 'この人生の後、どこへ向かうのか？',
      q5: '誰が私の真の伴侶なのか？',
      q6: '私は人生をどう形作るべきか？',
    },
    zh: {
      name: '罗比乌尔·伊斯兰',
      q1: '我为什么在这里？',
      q2: '这个生命的意义是什么？',
      q3: '谁把我送入这个世界？',
      q4: '这个生命结束后我要去哪里？',
      q5: '谁是我真正的伴侣？',
      q6: '我应该如何塑造我的生活？',
    },
    ko: {
      name: '로비울 이슬람',
      q1: '나는 왜 여기에 있는가?',
      q2: '이 삶의 의미는 무엇인가?',
      q3: '누가 나를 이 세상에 보냈는가?',
      q4: '이 삶 이후 나는 어디로 가는가?',
      q5: '나의 참된 동반자는 누구인가?',
      q6: '나는 어떻게 삶을 형성해야 하는가?',
    },
    tr: {
      name: 'Robiul Islam',
      q1: 'Neden buradayım?',
      q2: 'Bu hayatın anlamı nedir?',
      q3: 'Beni bu dünyaya kim gönderdi?',
      q4: 'Bu hayattan sonra nereye gidiyorum?',
      q5: 'Gerçek yoldaşım kim?',
      q6: 'Hayatımı nasıl şekillendirmeliyim?',
    },
    hi: {
      name: 'रोबिउल इस्लाम',
      q1: 'मैं यहाँ क्यों हूँ?',
      q2: 'इस जीवन का अर्थ क्या है?',
      q3: 'किसने मुझे इस दुनिया में भेजा?',
      q4: 'इस जीवन के बाद मैं कहाँ जाऊँ?',
      q5: 'मेरा सच्चा साथी कौन है?',
      q6: 'मुझे अपना जीवन कैसे गढ़ना चाहिए?',
    },
    bn: {
      name: 'রোবিউল ইসলাম',
      q1: 'আমি কেন এখানে আছি?',
      q2: 'এই জীবনের অর্থ কী?',
      q3: 'কে আমাকে এই পৃথিবীতে পাঠিয়েছে?',
      q4: 'এই জীবনের পরে আমি কোথায় যাচ্ছি?',
      q5: 'আমার সত্যিকারের সঙ্গী কে?',
      q6: 'আমি কীভাবে আমার জীবন গড়ব?',
    },
    id: {
      name: 'Robiul Islam',
      q1: 'Mengapa saya di sini?',
      q2: 'Apa arti kehidupan ini?',
      q3: 'Siapa yang mengirim saya ke dunia ini?',
      q4: 'Ke mana saya pergi setelah kehidupan ini?',
      q5: 'Siapa pendamping sejati saya?',
      q6: 'Bagaimana saya harus membentuk hidup saya?',
    },
  };

  const t = translations[selectedLang];
  const questions = [t.q1, t.q2, t.q3, t.q4, t.q5, t.q6];

  return (
    <div className={`min-h-screen overflow-hidden ${selectedLang === 'ar' ? 'direction-rtl' : ''}`} dir={selectedLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'backdrop-blur-lg bg-slate-900/80 border-b border-white/10 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-400" />
            <h1 className="text-xl font-light tracking-wider text-white">{t.name}</h1>
          </div>
          
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-300 backdrop-blur border border-white/20 hover:border-white/40">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Languages</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <div className="absolute right-0 mt-0 w-64 bg-slate-900/95 backdrop-blur border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right group-hover:scale-100 scale-95 p-4">
              <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                {allLanguages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLang(lang.code)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                      selectedLang === lang.code
                        ? 'bg-purple-600 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center py-20">
          <div className="mb-8 inline-block">
            <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
          </div>
          
          <h2 className="text-5xl sm:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Fundamental
            </span>
            <br />
            <span className="text-white">Questions</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed font-light">
            Life's deepest inquiries. Answered within yourself.
          </p>
          
          <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/50 text-sm font-light">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="relative z-10 py-20 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {questions.map((question, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur border border-white/20 group-hover:border-purple-400/50 transition-all duration-500 shadow-2xl"></div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 -z-10"></div>
                
                {/* Content */}
                <div className="relative p-8 sm:p-10 h-full flex flex-col justify-center">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{idx + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-light text-white leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                    {question}
                  </h3>
                  
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Message */}
      <section className="relative z-10 py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-2xl sm:text-4xl font-light text-white/80 leading-relaxed">
            People ultimately find what they truly seek.
          </p>
          <div className="mt-12 h-1 w-16 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 text-center">
          <p className="text-sm text-white/50">
            © 2025 Robiul Islam. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
      `}</style>
    </div>
  );
}
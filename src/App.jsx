import React, { useState } from 'react';
import { ALL_COURSES } from './data/courses';
import {
  BookOpen,
  Brain,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Lock,
  LogOut,
  Menu,
  Mic,
  Play,
  RotateCcw,
  User,
  Volume2,
  X,
  Printer,
  Award,
  Star,
  Home,
  Briefcase
} from 'lucide-react';

// --- MOCK DATABASE (MODULAR FILE STRUCTURE) ---

const USERS_FILE = [
  { username: 'demo', password: 'demo', name: 'Học Viên Demo' },
  { username: 'admin', password: 'admin', name: 'Quản Trị Viên' }
];

const MINDSET_TEST_DATA = [
  // Module 1: Morphology
  { id: 1, context: "Ich macha (Tôi làm) | Du machst (Bạn làm)", q: "Với động từ 'Lernen' (Học), dạng 'Tôi học' viết là gì?", opts: ["Lernst", "Lerna", "Lernen", "Lern"], ans: "Lerna" },
  { id: 2, context: "Ich geha (Tôi đi) | Du gehst (Bạn đi) | Er geht (Anh ấy đi)", q: "Với động từ 'Kommen' (Đến), dạng 'Anh ấy đến' viết là gì?", opts: ["Komma", "Kommst", "Kommt", "Kommen"], ans: "Kommt" },
  { id: 3, context: "Trina (Uống - Tôi) | Trinst (Uống - Bạn) | Trint (Uống - Anh ấy)", q: "Nếu 'Saga' là 'Tôi nói', thì 'Bạn nói' là gì?", opts: ["Sago", "Sagst", "Saget", "Sag"], ans: "Sagst" },
  { id: 4, context: "Wohnen (Sống) -> Ich wohna", q: "Động từ nguyên thể của 'Ich kaufa' (Tôi mua) là gì?", opts: ["Kauf", "Kaufen", "Kaufst", "Kaufer"], ans: "Kaufen" },
  { id: 5, context: "Ich bin (Tôi là) | Du bist (Bạn là)", q: "Điền vào chỗ trống: 'Du ______ gut'", opts: ["bin", "bist", "bint", "ban"], ans: "bist" },
  // Module 2: Pluralization
  { id: 6, context: "Lamp (Đèn) -> Lampen", q: "Tasche (Túi) -> Số nhiều là gì?", opts: ["Tascher", "Taschen", "Tasches", "Tasche"], ans: "Taschen" },
  { id: 7, context: "Mann -> Männer", q: "Wald (Rừng) -> Số nhiều là gì? (Áp dụng quy luật thêm 'er' và biến đổi nguyên âm a->ä)", opts: ["Walder", "Wälder", "Walden", "Wäld"], ans: "Wälder" },
  { id: 8, context: "Auto -> Autos", q: "Kino -> Số nhiều là gì?", opts: ["Kinos", "Kinoen", "Kinoer", "Kinose"], ans: "Kinos" },
  { id: 9, context: "Ein Tisch -> Zwei Tische", q: "Ein Fisch -> Ba cái ______?", opts: ["Fischa", "Fische", "Fischer", "Fischs"], ans: "Fische" },
  { id: 10, context: "Lehrer -> Lehrer (không đổi)", q: "Schüler -> Số nhiều là gì?", opts: ["Schüleren", "Schülers", "Schüler", "Schülera"], ans: "Schüler" },
  // Module 3: Compound Nouns
  { id: 11, context: "Hand + Schuh = Handschuh", q: "Haus + Tier = ? (Thú cưng)", opts: ["Tierhaus", "Haustier", "Hausuntier", "Tierundhaus"], ans: "Haustier" },
  { id: 12, context: "Krank (Bệnh) + Wagen (Xe)", q: "Từ nào có nghĩa là 'Xe cứu thương'?", opts: ["Wagenkrank", "Krankwagen", "Krankewagen", "Kranken"], ans: "Krankwagen" },
  { id: 13, context: "Wasser + Fall", q: "Wasserfall nghĩa là gì?", opts: ["Mưa", "Thác nước", "Vòi nước", "Nước mắt"], ans: "Thác nước" },
  { id: 14, context: "Glüh (Phát sáng) + Birne (Quả lê)", q: "Glühbirne nghĩa là vật dụng gì?", opts: ["Ngọn nến", "Đèn lồng", "Bóng đèn dây tóc", "Mặt trăng"], ans: "Bóng đèn dây tóc" },
  { id: 15, context: "Zahn + Arzt", q: "Bác sĩ nha khoa viết là gì?", opts: ["Arztzahn", "Zahnarzt", "Zahnarztin", "ArztvonZahn"], ans: "Zahnarzt" },
  // Module 4: Syntax
  { id: 16, context: "Ich mache Sport -> Heute mache ich Sport", q: "Quy luật vị trí của từ 'mache' là gì?", opts: ["Luôn đứng đầu", "Luôn đứng thứ 2", "Luôn đứng cuối", "Đứng sau chủ ngữ"], ans: "Luôn đứng thứ 2" },
  { id: 17, context: "Ich esse Brot", q: "Chuyển câu sang dạng bắt đầu bằng 'Morgen'", opts: ["Morgen ich esse Brot", "Morgen esse ich Brot", "Morgen Brot ich esse", "Ich esse Morgen Brot"], ans: "Morgen esse ich Brot" },
  { id: 18, context: "Trinkst du Wasser?", q: "Đặt câu hỏi Yes/No cho câu: 'Du lernst Deutsch'", opts: ["Lernst du Deutsch?", "Du lernst Deutsch?", "Deutsch lernst du?", "Lernst Deutsch du?"], ans: "Lernst du Deutsch?" },
  { id: 19, context: "Ich kann schwimmen", q: "Sắp xếp câu: Ich / muss / lernen", opts: ["Ich lernen muss", "Ich muss lernen", "Muss ich lernen", "Lernen ich muss"], ans: "Ich muss lernen" },
  { id: 20, context: "Weil ich krank bin", q: "Hoàn thành câu: 'Weil es regnet...'", opts: ["... ich bleibe hier", "... bleibe ich hier", "... ich hier bleibe", "... bleibe hier ich"], ans: "... ich hier bleibe" },
  // Module 5: Gender & Case
  { id: 21, context: "Der Mann -> den Mann", q: "Ich habe ___ Ball (Der Ball)", opts: ["der Ball", "den Ball", "das Ball", "die Ball"], ans: "den Ball" },
  { id: 22, context: "Die Frau -> die Frau", q: "Ich kaufe ___ Blume (Die Blume)", opts: ["den Blume", "die Blume", "der Blume", "das Blume"], ans: "die Blume" },
  { id: 23, context: "Das Kind -> das Kind", q: "Loại giống nào bị biến đổi khi làm tân ngữ?", opts: ["Chỉ có Der", "Chỉ có Die", "Chỉ có Das", "Cả 3 đều đổi"], ans: "Chỉ có Der" },
  { id: 24, context: "Ein Mann -> einen Mann", q: "Ich esse ___ Apfel (Ein Apfel - Giống đực)", opts: ["ein Apfel", "einen Apfel", "eine Apfel", "eines Apfel"], ans: "einen Apfel" },
  { id: 25, context: "Er -> ihn", q: "Tôi yêu anh ấy (Ich liebe...)", opts: ["er", "ihn", "ihm", "es"], ans: "ihn" },
  // Module 6: Advanced Logic
  { id: 26, context: "Un- = Không (Glück -> Unglück)", q: "Möglich (Có thể) -> Không thể là?", opts: ["Nichtmöglich", "Unmöglich", "Keinmöglich", "Möglichlos"], ans: "Unmöglich" },
  { id: 27, context: "Hậu tố -in chỉ nữ giới", q: "Arzt (Nam) -> Bác sĩ nữ là?", opts: ["Ärztin", "Arzterin", "Arztfrau", "Die Arzt"], ans: "Ärztin" },
  { id: 28, context: "Klein -> Kleiner", q: "Schnell -> Nhanh hơn là?", opts: ["Schneller", "Mehr schnell", "Schnellst", "Schnelle"], ans: "Schneller" },
  { id: 29, context: "4=Vier, 14=Vierzehn", q: "6=Sechs -> 16 là?", opts: ["Sechszehn", "Sechzehn", "Zehnsechs", "Sechszig"], ans: "Sechszehn" },
  { id: 30, context: "Den Mann beißt der Hund (Der=Chủ ngữ, Den=Tân ngữ)", q: "Ai đang cắn ai?", opts: ["Người đàn ông cắn con chó", "Con chó cắn người đàn ông", "Hai bên cắn nhau", "Không xác định được"], ans: "Con chó cắn người đàn ông" }
];

const LEVEL_TEST_DATA = [
  // --- PART 1: A1 (Basic) ---
  { id: 1, level: "A1", q: "Hallo, ich ______ Nam. Und wer ______ du?", opts: ["bin - bist", "bist - bin", "ist - bist", "bin - ist"], ans: "bin - bist" },
  { id: 2, level: "A1", q: "Woher ______ Sie? – Ich ______ aus Vietnam.", opts: ["komme - kommen", "kommen - komme", "kommst - kommt", "kommt - kommen"], ans: "kommen - komme" },
  { id: 3, level: "A1", q: "Das ist ______ Tisch. Der Tisch ist neu.", opts: ["eine", "ein", "einen", "der"], ans: "ein" },
  { id: 4, level: "A1", q: "Entschuldigung, wie ______ das auf Deutsch?", opts: ["heißt", "heißen", "heisst", "hießt"], ans: "heißt" },
  { id: 5, level: "A1", q: "______ du Kaffee? – Nein, ich trinke lieber Tee.", opts: ["Möchtest", "Willst", "Magst", "Kannst"], ans: "Magst" },
  { id: 6, level: "A1", q: "Ich habe ______ Zeit. Ich muss arbeiten.", opts: ["nicht", "kein", "keine", "nein"], ans: "keine" },
  { id: 7, level: "A1", q: "Was ______ du am Wochenende ______?", opts: ["hast - gemacht", "hast - machen", "bist - gemacht", "habe - gemacht"], ans: "hast - gemacht" },
  { id: 8, level: "A1", q: "Mein Bruder ______ sehr gut Fußball spielen.", opts: ["könnt", "kann", "kannst", "können"], ans: "kann" },
  { id: 9, level: "A1", q: "Um wie viel Uhr ______ der Film ______?", opts: ["fangt ... an", "fängt ... an", "fangen ... an", "fängt ... auf"], ans: "fängt ... an" },
  { id: 10, level: "A1", q: "Ich suche ______ Schlüssel (Nam). Wo ist er?", opts: ["mein", "meinem", "meinen", "meiner"], ans: "meinen" },
  { id: 11, level: "A1", q: "Am Samstag gehe ich ______ Kino.", opts: ["ins", "im", "in", "zu"], ans: "ins" },
  { id: 12, level: "A1", q: "Wie spät ist es? – Es ist ______ (10:15).", opts: ["Viertel vor zehn", "Viertel nach zehn", "zehn Uhr fünfzehn", "B & C richtig"], ans: "B & C richtig" },
  { id: 13, level: "A1", q: "______ Vater ist Arzt.", opts: ["Dein", "Deine", "Deinen", "Deinem"], ans: "Dein" },
  { id: 14, level: "A1", q: "Was ist dein Hobby? – Ich ______ gern Musik.", opts: ["höre", "hore", "hören", "hörst"], ans: "höre" },
  { id: 15, level: "A1", q: "Gehen wir heute Abend essen? – Ja, ______ Idee!", opts: ["gute", "eine gute", "einen gute", "gut"], ans: "eine gute" },

  // --- PART 2: A2 (Elementary) ---
  { id: 16, level: "A2", q: "Letztes Jahr ______ wir nach Deutschland geflogen.", opts: ["haben", "sind", "werden", "sein"], ans: "sind" },
  { id: 17, level: "A2", q: "Ich fahre ______ dem Bus zur Arbeit.", opts: ["mit", "bei", "von", "zu"], ans: "mit" },
  { id: 18, level: "A2", q: "Kannst du ______ helfen?", opts: ["mich", "mein", "mir", "ich"], ans: "mir" },
  { id: 19, level: "A2", q: "Er lernt Deutsch, ______ er in Berlin studieren möchte.", opts: ["denn", "oder", "aber", "weil"], ans: "weil" },
  { id: 20, level: "A2", q: "Ich weiß, ______ Berlin die Hauptstadt von Deutschland ist.", opts: ["dass", "weil", "wenn", "ob"], ans: "dass" },
  { id: 21, level: "A2", q: "Hast du Lust, ______ mir ins Kino zu gehen?", opts: ["bei", "zu", "mit", "für"], ans: "mit" },
  { id: 22, level: "A2", q: "Wo ist die Katze? – Sie liegt ______ dem Sofa.", opts: ["auf", "an", "in", "über"], ans: "auf" },
  { id: 23, level: "A2", q: "Gestern ______ ich krank. Ich konnte nicht kommen.", opts: ["bin", "war", "habe", "hatte"], ans: "war" },
  { id: 24, level: "A2", q: "Dieser Computer ist ______ als der alte.", opts: ["gut", "besser", "am besten", "gute"], ans: "besser" },
  { id: 25, level: "A2", q: "Ich interessiere ______ sehr für Sport.", opts: ["dich", "sich", "mich", "uns"], ans: "mich" },
  { id: 26, level: "A2", q: "Wenn ich Zeit ______, besuche ich dich.", opts: ["habe", "hatte", "hätte", "haben"], ans: "habe" },
  { id: 27, level: "A2", q: "Der Mann, ______ dort steht, ist mein Lehrer.", opts: ["der", "den", "dem", "das"], ans: "der" },
  { id: 28, level: "A2", q: "Hast du das Buch schon gelesen? – Ja, ich habe ______ schon gelesen.", opts: ["ihn", "es", "sie", "das"], ans: "es" },
  { id: 29, level: "A2", q: "Bitte ______ Sie das Fenster ______! Es ist kalt.", opts: ["machen ... auf", "machen ... zu", "stehen ... auf", "sitzen ... an"], ans: "machen ... zu" },
  { id: 30, level: "A2", q: "Wir schenken ______ (Mutter) eine Blume.", opts: ["unsere Mutter", "unserer Mutter", "unseren Mutter", "unser Mutter"], ans: "unserer Mutter" },

  // --- PART 3: B1 (Intermediate) ---
  { id: 31, level: "B1", q: "Das Auto ______ in Deutschland produziert.", opts: ["wird", "wurdet", "hat", "ist"], ans: "wird" },
  { id: 32, level: "B1", q: "Ich warte ______ den Bus.", opts: ["über", "auf", "an", "mit"], ans: "auf" },
  { id: 33, level: "B1", q: "______ des schlechten Wetters bleiben wir zu Hause.", opts: ["Wegen", "Trotz", "Weil", "Deshalb"], ans: "Wegen" },
  { id: 34, level: "B1", q: "Es ist wichtig, jeden Tag Vokabeln ______.", opts: ["lernen", "zu lernen", "gelernt", "lernt"], ans: "zu lernen" },
  { id: 35, level: "B1", q: "Das ist der Student, ______ ich das Buch gegeben habe.", opts: ["den", "der", "dem", "dessen"], ans: "dem" },
  { id: 36, level: "B1", q: "Wenn ich reich ______, würde ich eine Weltreise machen.", opts: ["bin", "war", "wäre", "sei"], ans: "wäre" },
  { id: 37, level: "B1", q: "Er arbeitet viel, ______ verdient er wenig Geld.", opts: ["obwohl", "trotzdem", "deshalb", "weil"], ans: "trotzdem" },
  { id: 38, level: "B1", q: "Sie geht früh schlafen, ______ morgen fit zu sein.", opts: ["damit", "um", "für", "dass"], ans: "um" },
  { id: 39, level: "B1", q: "Hast du dich schon ______ die Prüfung vorbereitet?", opts: ["auf", "für", "über", "an"], ans: "auf" },
  { id: 40, level: "B1", q: "Ich lasse mein Auto ______.", opts: ["reparieren", "repariert", "zu reparieren", "repariere"], ans: "reparieren" },
  { id: 41, level: "B1", q: "______ er krank war, ging er zur Arbeit.", opts: ["Obwohl", "Trotzdem", "Weil", "Als"], ans: "Obwohl" },
  { id: 42, level: "B1", q: "Das ist Herr Müller, ______ Frau auch Deutsch lernt.", opts: ["der", "seine", "dessen", "deren"], ans: "dessen" },
  { id: 43, level: "B1", q: "Als ich Kind war, ______ ich oft Fußball.", opts: ["spielte", "habe gespielt", "spielen", "spiele"], ans: "spielte" },
  { id: 44, level: "B1", q: "Man ______ hier nicht rauchen. Das ist verboten!", opts: ["darf", "muss", "kann", "soll"], ans: "darf" },
  { id: 45, level: "B1", q: "Berlin ist eine Stadt, ______ viele Touristen besuchen.", opts: ["die", "der", "wo", "in der"], ans: "die" },

  // --- PART 4: B1+ (Advanced) ---
  { id: 46, level: "B1+", q: "Ich helfe ______ Studenten (N-Deklination).", opts: ["dem Student", "dem Studenten", "den Student", "des Studenten"], ans: "dem Studenten" },
  { id: 47, level: "B1+", q: "'Ich verstehe nur Bahnhof'. Was bedeutet das?", opts: ["Ich muss zum Bahnhof", "Ich verstehe nichts", "Der Zug kommt spät", "Ich mag Bahnhöfe"], ans: "Ich verstehe nichts" },
  { id: 48, level: "B1+", q: "Je mehr man lernt, ______ klüger wird man.", opts: ["desto", "umso", "besser", "A & B richtig"], ans: "A & B richtig" },
  { id: 49, level: "B1+", q: "Es freut mich, Ihre Bekanntschaft ______.", opts: ["zu machen", "machen", "gemacht zu haben", "zu tun"], ans: "zu machen" },
  { id: 50, level: "B1+", q: "Der Brief, ______ gestern angekommen ist, liegt auf dem Tisch.", opts: ["der", "den", "dem", "welcher"], ans: "der" }
];

// MASTER COURSE INDEX (MAPPED FROM ALL_COURSES)
const COURSE_INDEX = {
  'Trình độ A1': [
    ...ALL_COURSES.A1.vocabulary.map(m => ({ ...m, type: 'Vocabulary' })),
    ...ALL_COURSES.A1.grammar.map(m => ({ ...m, type: 'Grammar' }))
  ],
  'Trình độ A2': [
    ...ALL_COURSES.A2.vocabulary.map(m => ({ ...m, type: 'Vocabulary' })),
    ...ALL_COURSES.A2.grammar.map(m => ({ ...m, type: 'Grammar' }))
  ],
  'Trình độ B1': [
    ...ALL_COURSES.B1.vocabulary.map(m => ({ ...m, type: 'Vocabulary' })),
    ...ALL_COURSES.B1.grammar.map(m => ({ ...m, type: 'Grammar' }))
  ],
  'Ôn tập B1': [
    ...ALL_COURSES.ReviewB1.practice.map(m => ({ ...m, type: 'Practice' })),
    ...ALL_COURSES.ReviewB1.memory.map(m => ({ ...m, type: 'Vocabulary' }))
  ],
  'Thực chiến': [
    ...ALL_COURSES.Practical.scenarios.map(m => ({ ...m, type: 'Practical' }))
  ]
};

// --- HELPER FUNCTIONS ---



const speak = (text) => {
  if (!('speechSynthesis' in window)) {
    alert("Trình duyệt của bạn không hỗ trợ đọc văn bản.");
    return;
  }

  const play = () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';

    // Try to find a German voice
    const voices = window.speechSynthesis.getVoices();
    const germanVoice = voices.find(v => v.lang.includes('de'));
    if (germanVoice) {
      utterance.voice = germanVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = play;
  } else {
    play();
  }
};

// --- UI COMPONENTS ---

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 font-bold uppercase tracking-wider transition-all duration-200 transform active:scale-95 flex items-center justify-center gap-2 rounded-sm";
  const variants = {
    primary: "bg-amber-500 text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] border-2 border-slate-900",
    secondary: "bg-white text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] border-2 border-slate-900",
    danger: "bg-red-500 text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] border-2 border-slate-900",
    ghost: "bg-transparent text-slate-900 hover:bg-slate-100"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, title, className = '', theme = 'default', ...props }) => {
  const themes = {
    default: "bg-white border-slate-900",
    vocab: "bg-indigo-50 border-indigo-200",
    grammar: "bg-emerald-50 border-emerald-200",
    practical: "bg-rose-50 border-rose-200"
  };

  return (
    <div className={`border-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,0.1)] p-6 ${themes[theme] || themes.default} ${className}`} {...props}>
      {title && <h3 className="text-xl font-bold mb-4 border-b-2 border-slate-900/10 pb-2 text-slate-800 uppercase tracking-wide">{title}</h3>}
      {children}
    </div>
  );
};

const Input = ({ label, type = "text", value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-3 border-2 border-slate-300 focus:border-slate-900 focus:outline-none transition-colors bg-slate-50 font-medium rounded-sm"
    />
  </div>
);

// --- FEATURE COMPONENTS ---

const LandingPage = ({ onNavigate }) => (
  <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
    <div className="flex-1 flex flex-col justify-center items-center p-12 border-b-2 md:border-b-0 md:border-r-2 border-slate-200 hover:bg-slate-100 transition-colors group cursor-pointer" onClick={() => onNavigate('testing')}>
      <div className="mb-6 p-6 bg-white rounded-full border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] group-hover:scale-110 transition-transform">
        <Brain size={64} className="text-slate-900" />
      </div>
      <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">KIỂM TRA</h2>
      <p className="text-slate-500 text-lg text-center max-w-md">Trung Tâm Khảo Thí</p>
      <p className="mt-4 text-slate-600 font-medium">Đánh giá tư duy & trình độ</p>
    </div>

    <div className="flex-1 flex flex-col justify-center items-center p-12 hover:bg-amber-50 transition-colors group cursor-pointer" onClick={() => onNavigate('login')}>
      <div className="mb-6 p-6 bg-amber-500 rounded-full border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] group-hover:scale-110 transition-transform">
        <GraduationCap size={64} className="text-slate-900" />
      </div>
      <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">BÀI HỌC</h2>
      <p className="text-slate-500 text-lg text-center max-w-md">Hệ Thống Học Tập</p>
      <p className="mt-4 text-slate-600 font-medium">Đăng nhập để bắt đầu học</p>
    </div>
  </div>
);

const Certificate = ({ title, score, ranking, advice, date }) => (
  <div id="certificate-area" className="hidden print:flex flex-col items-center justify-center border-[20px] border-double border-slate-900 p-20 text-center bg-white h-screen">
    <style>{`
      @media print {
        @page { size: landscape; margin: 0; }
        body * { visibility: hidden; }
        #certificate-area, #certificate-area * { visibility: visible; }
        #certificate-area { position: absolute; left: 0; top: 0; width: 100%; height: 100%; }
      }
    `}</style>
    <Award size={120} className="text-amber-500 mb-8" />
    <h1 className="text-6xl font-black mb-4 uppercase tracking-widest">Urkunde</h1>
    <h2 className="text-4xl font-bold text-slate-600 mb-12">Certificate of Completion</h2>

    <p className="text-2xl mb-4">Chứng nhận học viên</p>
    <p className="text-4xl font-bold border-b-4 border-slate-900 pb-2 mb-12 px-12">Học Viên Demo</p>

    <p className="text-2xl mb-4">Đã hoàn thành bài kiểm tra</p>
    <h3 className="text-5xl font-black text-amber-600 mb-8">{title}</h3>

    {ranking && <div className="text-3xl font-bold text-slate-800 mb-8 uppercase tracking-wider border-2 border-slate-900 px-8 py-4 inline-block">{ranking}</div>}

    {advice && <p className="text-xl text-slate-600 italic max-w-4xl mb-12">"{advice}"</p>}

    <div className="flex gap-20 mt-8">
      <div className="text-center">
        <p className="text-xl font-bold mb-2">Điểm Số</p>
        <p className="text-3xl font-mono">{score}</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold mb-2">Ngày</p>
        <p className="text-3xl font-mono">{date}</p>
      </div>
    </div>
  </div>
);

const MindsetTest = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setTimeout(() => {
      if (option === MINDSET_TEST_DATA[currentQuestion].ans) {
        setScore(s => s + 1);
      }

      if (currentQuestion < MINDSET_TEST_DATA.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelectedOption(null);
      } else {
        setFinished(true);
      }
    }, 500);
  };

  const getRanking = (score) => {
    if (score <= 10) return { rank: "Sơ cấp (Cần hỗ trợ)", advice: "Tư duy ngôn ngữ chưa linh hoạt, bị ảnh hưởng bởi tiếng Việt. Cần giáo viên kèm cặp kỹ." };
    if (score <= 19) return { rank: "Trung bình (Tiềm năng)", advice: "Có khả năng nhận diện quy luật nhưng chưa thạo. Cần làm nhiều bài tập ngữ pháp." };
    if (score <= 25) return { rank: "Khá (Tư duy tốt)", advice: "Nhạy bén với quy tắc. Phù hợp học thuật, có thể đẩy nhanh tiến độ." };
    return { rank: "Xuất sắc (Tài năng)", advice: "Tư duy phân tích cực tốt. Nên đặt mục tiêu du học hoặc thi C1/C2." };
  };

  if (finished) {
    const { rank, advice } = getRanking(score);
    return (
      <>
        <Certificate
          title="Kiểm Tra Tư Duy Ngôn Ngữ"
          score={`${score}/30`}
          ranking={rank}
          advice={advice}
          date={new Date().toLocaleDateString()}
        />
        <Card className="text-center py-12 max-w-xl mx-auto">
          <Award size={64} className="mx-auto mb-6 text-amber-500" />
          <h3 className="text-2xl font-bold mb-4">Kết Quả Đánh Giá</h3>
          <div className="text-6xl font-black text-slate-900 mb-2">{score}/30</div>
          <div className="text-2xl font-bold text-amber-600 mb-6">{rank}</div>
          <p className="text-slate-600 mb-8 px-8">{advice}</p>
          <div className="flex flex-col gap-4">
            <Button onClick={() => window.print()} variant="primary" className="w-full">
              <Printer size={20} /> Tải Kết Quả (PDF)
            </Button>
            <Button onClick={onClose} variant="ghost">Quay lại</Button>
          </div>
        </Card>
      </>
    );
  }

  const q = MINDSET_TEST_DATA[currentQuestion];

  if (!q) return <div>Đang tải dữ liệu...</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Kiểm Tra Tư Duy</h2>
        <div className="text-lg font-mono font-bold bg-slate-200 px-4 py-1 rounded-full">Câu {currentQuestion + 1}/30</div>
      </div>

      <div className="bg-amber-50 border-2 border-amber-200 p-6 mb-6 rounded-sm relative">
        <div className="absolute -top-3 left-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 uppercase tracking-widest">DỮ LIỆU / QUY LUẬT</div>
        <p className="text-lg font-medium text-slate-800">{q.context}</p>
      </div>

      <Card className="mb-6">
        <h3 className="text-xl font-bold mb-6">{q.q}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {q.opts.map(opt => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              disabled={selectedOption !== null}
              className={`p-4 text-left font-bold border-2 rounded-sm transition-all ${selectedOption === opt
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white border-slate-200 hover:border-amber-500 hover:bg-amber-50 text-slate-700'
                }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
};

const LevelTest = ({ onClose }) => {
  const [answers, setAnswers] = useState({});
  const [activeTab, setActiveTab] = useState('A1');
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const tabs = [
    { id: 'A1', label: 'Phần 1: A1 (Cơ bản)', range: [0, 15] },
    { id: 'A2', label: 'Phần 2: A2 (Sơ cấp)', range: [15, 30] },
    { id: 'B1', label: 'Phần 3: B1 (Trung cấp)', range: [30, 45] },
    { id: 'B1+', label: 'Phần 4: Nâng cao', range: [45, 50] }
  ];

  const handleSelect = (qId, option) => {
    setAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const calculateResult = () => {
    let correctCount = 0;
    LEVEL_TEST_DATA.forEach(q => {
      if (answers[q.id] === q.ans) correctCount++;
    });
    setScore(correctCount);
    setFinished(true);
  };

  const getEvaluation = (score) => {
    if (score <= 15) return { level: "Dưới A1", advice: "Nên học lại từ đầu (Lớp A1.1)." };
    if (score <= 25) return { level: "A1 Tốt", advice: "Có thể bắt đầu học lên A2." };
    if (score <= 35) return { level: "A2 Tốt", advice: "Nắm chắc cơ bản, có thể bắt đầu học B1." };
    if (score <= 44) return { level: "B1 Khá", advice: "Có thể ôn thi B1 hoặc học B2 nhẹ nhàng." };
    return { level: "B1 Xuất sắc", advice: "Nền tảng vững, đủ khả năng học B2 ngay." };
  };

  const getScoreBreakdown = () => {
    const breakdown = { A1: 0, A2: 0, B1: 0, 'B1+': 0 };
    LEVEL_TEST_DATA.forEach(q => {
      if (answers[q.id] === q.ans) breakdown[q.level]++;
    });
    return breakdown;
  };

  if (finished) {
    const { level, advice } = getEvaluation(score);
    const breakdown = getScoreBreakdown();
    const breakdownText = `A1: ${breakdown.A1}/15 | A2: ${breakdown.A2}/15 | B1: ${breakdown.B1}/15 | B1+: ${breakdown['B1+']}/5`;

    return (
      <>
        <Certificate
          title="KẾT QUẢ KIỂM TRA TRÌNH ĐỘ TIẾNG ĐỨC"
          score={`${score}/50`}
          ranking={`Trình độ: ${level}`}
          advice={`${advice} (${breakdownText})`}
          date={new Date().toLocaleDateString()}
        />
        <Card className="text-center py-12 max-w-2xl mx-auto">
          <Award size={64} className="mx-auto mb-6 text-amber-500" />
          <h3 className="text-3xl font-bold mb-4">Kết Quả Của Bạn</h3>
          <div className="text-7xl font-black text-slate-900 mb-6">{score}/50</div>
          <div className="text-3xl font-bold text-amber-600 mb-4">{level}</div>
          <p className="text-slate-600 mb-8 px-8 text-lg">{advice}</p>

          <div className="grid grid-cols-4 gap-2 mb-8 text-sm font-mono bg-slate-100 p-4 rounded-sm">
            <div>A1: {breakdown.A1}/15</div>
            <div>A2: {breakdown.A2}/15</div>
            <div>B1: {breakdown.B1}/15</div>
            <div>B1+: {breakdown['B1+']}/5</div>
          </div>

          <div className="flex flex-col gap-4">
            <Button onClick={() => window.print()} variant="primary" className="w-full">
              <Printer size={20} /> Tải Kết Quả (PDF)
            </Button>
            <Button onClick={onClose} variant="ghost">Quay lại</Button>
          </div>
        </Card>
      </>
    );
  }

  const currentQuestions = LEVEL_TEST_DATA.slice(
    tabs.find(t => t.id === activeTab).range[0],
    tabs.find(t => t.id === activeTab).range[1]
  );

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">KIỂM TRA TRÌNH ĐỘ</h2>
        <div className="text-sm font-bold text-slate-500">Đã làm: {Object.keys(answers).length}/50</div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-bold whitespace-nowrap rounded-sm transition-colors border-b-4 ${activeTab === tab.id
              ? 'bg-slate-900 text-white border-amber-500'
              : 'bg-white text-slate-500 border-transparent hover:bg-slate-100'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {currentQuestions.map((q) => (
          <Card key={q.id} className={`transition-colors ${answers[q.id] ? 'border-l-8 border-l-amber-500' : ''}`}>
            <div className="flex gap-4">
              <div className="font-mono font-bold text-slate-400 pt-1">#{q.id}</div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-4 text-slate-800">{q.q}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {q.opts.map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(q.id, opt)}
                      className={`p-3 text-left border-2 rounded-sm transition-all font-medium ${answers[q.id] === opt
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white border-slate-200 hover:border-amber-400 hover:bg-amber-50'
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-slate-200 p-4 shadow-lg z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-slate-500 text-sm hidden md:block">
            Bạn có thể nộp bài bất cứ lúc nào. Các câu chưa làm sẽ tính là sai.
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Button variant="ghost" onClick={onClose} className="flex-1 md:flex-none">Hủy</Button>
            <Button onClick={calculateResult} className="flex-1 md:flex-none">NỘP BÀI ({Object.keys(answers).length}/50)</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestingCenter = ({ onBack }) => {
  const [activeTest, setActiveTest] = useState(null); // 'mindset' | 'level' | null

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <Button variant="ghost" onClick={onBack} className="mb-8"><RotateCcw size={16} /> Quay lại</Button>

      {!activeTest && (
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <Card className="text-center py-12 hover:border-amber-500 transition-colors cursor-pointer group" onClick={() => setActiveTest('mindset')}>
            <Brain size={48} className="mx-auto mb-4 text-slate-700 group-hover:text-amber-500 transition-colors" />
            <h3 className="text-2xl font-bold mb-2">Kiểm tra Tư duy Ngôn ngữ</h3>
            <p className="text-slate-500">Đánh giá khả năng tư duy logic tiếng Đức</p>
          </Card>
          <Card className="text-center py-12 hover:border-amber-500 transition-colors cursor-pointer group" onClick={() => setActiveTest('level')}>
            <FileText size={48} className="mx-auto mb-4 text-slate-700 group-hover:text-amber-500 transition-colors" />
            <h3 className="text-2xl font-bold mb-2">Kiểm tra Trình độ</h3>
            <p className="text-slate-500">Kiểm tra kiến thức A1-B1</p>
          </Card>
        </div>
      )}

      {activeTest === 'mindset' && <MindsetTest onClose={() => setActiveTest(null)} />}
      {activeTest === 'level' && <LevelTest onClose={() => setActiveTest(null)} />}
    </div>
  );
};

const LoginForm = ({ onLogin, onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const user = USERS_FILE.find(u => u.username === username && u.password === password);
    if (user) {
      onLogin(user);
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Button variant="ghost" onClick={onBack} className="mb-8"><RotateCcw size={16} /> Quay lại</Button>
        <div className="flex justify-center mb-8">
          <img src="https://raw.githubusercontent.com/duongcanhquan/image/main/logo%20vietmy.webp" alt="Logo" className="h-32 object-contain" />
        </div>
        <Card title="ĐĂNG NHẬP HỆ THỐNG">
          <Input label="Tên đăng nhập" value={username} onChange={e => setUsername(e.target.value)} />
          <Input label="Mật khẩu" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          {error && <p className="text-red-500 text-sm font-bold mb-4">{error}</p>}
          <Button onClick={handleSubmit} className="w-full">Đăng nhập</Button>
          <div className="mt-4 text-center text-xs text-slate-400">
            Gợi ý: demo / demo
          </div>
        </Card>
      </div>
    </div>
  );
};

const Dashboard = ({ user, onLogout }) => {
  const [activeLevel, setActiveLevel] = useState(null);
  const [activeMode, setActiveMode] = useState(null); // 'vocabulary' | 'grammar'
  const [activeLesson, setActiveLesson] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Reset to Welcome Screen
  const goHome = () => {
    setActiveLevel(null);
    setActiveMode(null);
    setActiveLesson(null);
  };

  const WelcomeScreen = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 animate-fade-in">
      <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Xin chào, {user.name}!</h1>
      <p className="text-xl text-slate-500 max-w-2xl mb-12">
        "Wer fremde Sprachen nicht kennt, weiß nichts von seiner eigenen." <br />
        <span className="text-sm font-bold mt-2 block">- Johann Wolfgang von Goethe</span>
      </p>
      <div className="w-full max-w-3xl h-64 flex items-center justify-center rounded-lg overflow-hidden mb-8">
        <img src="https://raw.githubusercontent.com/duongcanhquan/image/main/logo%20vietmy.webp" alt="Banner" className="w-full h-full object-contain" />
      </div>
      <p className="mt-8 text-slate-600">Chọn một cấp độ từ menu bên trái để bắt đầu.</p>
    </div>
  );

  const LevelGrid = ({ levelName, lessons }) => (
    <div className="p-8 animate-fade-in">
      <h2 className="text-4xl font-black text-slate-900 mb-2 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent inline-block">
        {levelName}
      </h2>
      <p className="text-slate-500 mb-12 text-lg">Chọn bài học để tiếp tục</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map(lesson => (
          <div
            key={lesson.id}
            onClick={() => setActiveLesson(lesson)}
            className="bg-white border-2 border-slate-200 hover:border-amber-500 hover:shadow-lg hover:scale-105 transition-all cursor-pointer rounded-sm group overflow-hidden"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${lesson.gradient || (lesson.type === 'Vocabulary' ? 'from-indigo-400 to-blue-500' :
              lesson.type === 'Grammar' ? 'from-emerald-400 to-green-500' :
                lesson.type === 'Practical' ? 'from-slate-700 to-slate-900' :
                  'from-rose-400 to-red-500')
              }`}></div>
            <div className="p-8">
              <div className="mb-4 p-4 bg-slate-50 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                {lesson.type === 'Vocabulary' ? <BookOpen className="text-slate-700 group-hover:text-amber-600" /> :
                  lesson.type === 'Grammar' ? <Brain className="text-slate-700 group-hover:text-amber-600" /> :
                    lesson.type === 'Practical' ? <Briefcase className="text-slate-700 group-hover:text-amber-600" /> :
                      <Star className="text-slate-700 group-hover:text-amber-600" />}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{lesson.title}</h3>
              <p className="text-slate-500 text-sm">{lesson.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const VocabView = ({ data }) => {
    const [mode, setMode] = useState('list');
    const [flipped, setFlipped] = useState(false);
    const [currentCard, setCurrentCard] = useState(0);
    const [reviewInput, setReviewInput] = useState('');
    const [reviewFeedback, setReviewFeedback] = useState(null);

    return (
      <div>
        <div className="flex gap-4 mb-8 border-b-2 border-slate-200 pb-4 overflow-x-auto">
          {['list', 'flashcards', 'review'].map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-2 font-bold uppercase text-sm whitespace-nowrap rounded-sm transition-colors ${mode === m ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              {m === 'list' ? 'Danh sách' : m === 'flashcards' ? 'Flashcards' : 'Ôn tập'}
            </button>
          ))}
        </div>

        {mode === 'list' && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.map(word => (
              <Card key={word.id} theme="vocab" className="flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="font-bold text-2xl text-slate-900 mb-1">{word.de || word.german}</div>
                  <div className="text-slate-500 text-sm font-mono mb-4">{word.ipa}</div>
                </div>
                <div className="flex items-end justify-between mt-4 border-t border-indigo-200 pt-4">
                  <div className="font-medium text-slate-700">{word.vi || word.vietnamese}</div>
                  <button
                    onClick={() => speak(word.de || word.german)}
                    className="p-2 bg-white rounded-full hover:bg-indigo-500 hover:text-white transition-colors border border-indigo-100 shadow-sm"
                  >
                    <Volume2 size={20} />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {mode === 'flashcards' && data.length > 0 && (
          <div className="flex flex-col items-center py-12">
            <div
              onClick={() => setFlipped(!flipped)}
              className="w-full max-w-md h-80 perspective-1000 cursor-pointer group"
            >
              <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                {/* Front */}
                <div className="absolute w-full h-full bg-white border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col items-center justify-center backface-hidden rounded-sm">
                  <h3 className="text-5xl font-bold text-slate-900 mb-4">{data[currentCard].de || data[currentCard].german}</h3>
                  <button
                    onClick={(e) => { e.stopPropagation(); speak(data[currentCard].de || data[currentCard].german); }}
                    className="p-3 bg-slate-100 rounded-full hover:bg-amber-500 hover:text-white transition-colors mb-4"
                  >
                    <Volume2 size={24} />
                  </button>
                  <div className="absolute bottom-4 text-slate-400 text-sm uppercase tracking-widest">Click để lật</div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full bg-amber-500 border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col items-center justify-center backface-hidden rotate-y-180 rounded-sm" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
                  <h3 className="text-4xl font-bold text-white mb-2">{data[currentCard].vi || data[currentCard].vietnamese}</h3>
                  <p className="font-mono text-slate-900 opacity-75 text-xl">{data[currentCard].ipa}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-12">
              <Button onClick={() => { setFlipped(false); setCurrentCard(c => c > 0 ? c - 1 : data.length - 1); }}>Trước</Button>
              <span className="font-bold py-3 text-xl">{currentCard + 1} / {data.length}</span>
              <Button onClick={() => { setFlipped(false); setCurrentCard(c => c < data.length - 1 ? c + 1 : 0); }}>Sau</Button>
            </div>
          </div>
        )}

        {mode === 'review' && (
          <div className="max-w-md mx-auto py-12">
            <Card title="Thử thách" theme="vocab">
              <p className="mb-4 text-lg">Dịch sang tiếng Đức: <span className="font-bold text-indigo-600 text-2xl block mt-2">{data[currentCard].vi || data[currentCard].vietnamese}</span></p>
              <Input
                value={reviewInput}
                onChange={e => setReviewInput(e.target.value)}
                placeholder="Nhập từ tiếng Đức..."
              />
              <Button onClick={() => {
                const germanWord = data[currentCard].de || data[currentCard].german;
                if (reviewInput.toLowerCase() === germanWord.toLowerCase()) {
                  setReviewFeedback('correct');
                  speak(germanWord);
                } else {
                  setReviewFeedback('wrong');
                }
              }} className="w-full mb-4">Kiểm tra</Button>

              {reviewFeedback === 'correct' && <div className="p-4 bg-green-100 text-green-800 font-bold border border-green-300 flex items-center gap-2 rounded-sm"><CheckCircle size={20} /> Chính xác!</div>}
              {reviewFeedback === 'wrong' && <div className="p-4 bg-red-100 text-red-800 font-bold border border-red-300 rounded-sm">Sai rồi. Đáp án: {data[currentCard].de || data[currentCard].german}</div>}

              <div className="mt-8 flex justify-end">
                <button onClick={() => { setCurrentCard(c => (c + 1) % data.length); setReviewInput(''); setReviewFeedback(null); }} className="text-slate-500 hover:text-slate-900 font-bold text-sm flex items-center gap-1">Từ tiếp theo <ChevronRight size={16} /></button>
              </div>
            </Card>
          </div>
        )}
      </div>
    );
  };

  const GrammarView = ({ data }) => {
    const [answers, setAnswers] = useState({});

    const checkAnswer = (idx, opt) => {
      setAnswers(prev => ({ ...prev, [idx]: opt }));
    };

    return (
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-emerald-700"><BookOpen className="text-emerald-500" /> Lý thuyết</h3>
          <div className="space-y-6">
            {data.theory?.map((item, idx) => (
              <Card key={idx} title={item.title} theme="grammar">
                <p className="text-slate-700 leading-relaxed text-lg mb-4">{item.text || item.content}</p>
                {item.example && <div className="bg-emerald-50 p-3 rounded-sm border-l-4 border-emerald-500 italic text-slate-600 mb-4">{item.example}</div>}
                {item.table && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-600">
                      <thead className="text-xs text-slate-700 uppercase bg-emerald-100">
                        <tr>
                          {Object.keys(item.table[0]).map(k => <th key={k} className="px-4 py-2">{k}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {item.table.map((row, rIdx) => (
                          <tr key={rIdx} className="bg-white border-b hover:bg-emerald-50">
                            {Object.values(row).map((val, cIdx) => <td key={cIdx} className="px-4 py-2 font-medium">{val}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>
            ))}
            {!data.theory && <p className="text-slate-500 italic">Không có lý thuyết cho phần này.</p>}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-emerald-700"><Brain className="text-emerald-500" /> Bài tập</h3>
          <div className="space-y-6">
            {(data.exercises || data.practice)?.map((item, idx) => (
              <Card key={idx} theme="grammar">
                <p className="font-bold mb-4 text-lg">{item.q || item.question || item.german}</p>
                {item.options ? (
                  <div className="grid grid-cols-3 gap-2">
                    {item.options.map(opt => (
                      <button
                        key={opt}
                        onClick={() => checkAnswer(idx, opt)}
                        className={`p-3 border transition-all text-sm font-bold rounded-sm shadow-sm ${answers[idx] === opt
                          ? (opt === item.correct ? 'bg-green-500 text-white border-green-600' : 'bg-red-500 text-white border-red-600')
                          : 'bg-white border-emerald-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-600'
                          }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-white border border-emerald-100 text-emerald-800 italic">
                    {item.vietnamese}
                  </div>
                )}
                {answers[idx] && (
                  <div className={`mt-4 text-sm font-bold ${answers[idx] === item.correct ? 'text-green-600' : 'text-red-600'}`}>
                    {answers[idx] === item.correct ? 'Chính xác!' : `Sai rồi. Đáp án đúng: ${item.correct}`}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const PracticalView = ({ data }) => {
    const [recording, setRecording] = useState(false);
    const [score, setScore] = useState(null);
    const [activeGroup, setActiveGroup] = useState(null);

    const handleRecord = () => {
      setRecording(true);
      setTimeout(() => {
        setRecording(false);
        setScore(Math.floor(Math.random() * 20) + 80);
      }, 2000);
    };

    // New Accordion Layout for Grouped Data (e.g. Nail Beauty)
    if (data.groups) {
      return (
        <div className="space-y-6">
          {data.groups.map(group => (
            <div key={group.id} className="border-2 border-slate-200 rounded-sm bg-white overflow-hidden">
              <div
                onClick={() => setActiveGroup(activeGroup === group.id ? null : group.id)}
                className={`p-4 flex justify-between items-center cursor-pointer transition-colors ${activeGroup === group.id ? 'bg-slate-900 text-white' : 'hover:bg-slate-50'}`}
              >
                <h3 className="font-bold text-lg">{group.title}</h3>
                <ChevronDown size={20} className={`transition-transform ${activeGroup === group.id ? 'rotate-180' : ''}`} />
              </div>

              {activeGroup === group.id && (
                <div className="p-4 bg-slate-50 border-t-2 border-slate-200 animate-fade-in">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map(item => (
                      <Card key={item.id} theme="practical" className="flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                          <div className="font-bold text-xl text-slate-900 mb-1">{item.de || item.german}</div>
                          {item.ipa && <div className="text-slate-500 text-sm font-mono mb-2">{item.ipa}</div>}
                          {item.gender && <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{item.gender}</div>}
                        </div>
                        <div className="flex items-end justify-between mt-4 border-t border-rose-200 pt-4">
                          <div className="font-medium text-slate-700">{item.vi || item.vietnamese}</div>
                          <button
                            onClick={() => speak(item.de || item.german)}
                            className="p-2 bg-white rounded-full hover:bg-rose-500 hover:text-white transition-colors border border-rose-100 shadow-sm"
                          >
                            <Volume2 size={18} />
                          </button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    // Default Layout (Restaurant etc.)
    return (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card title="Từ vựng chủ đề" theme="practical">
            <ul className="space-y-3">
              {data.vocabulary.map(v => (
                <li key={v.id} className="flex justify-between items-center border-b border-rose-200 pb-2 last:border-0">
                  <div>
                    <span className="font-bold text-lg block">{v.german}</span>
                    <span className="text-rose-800 text-sm">{v.vietnamese}</span>
                  </div>
                  <button onClick={() => speak(v.german)} className="text-rose-400 hover:text-rose-700"><Volume2 size={18} /></button>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Mẫu câu thông dụng" theme="practical">
            <ul className="space-y-4">
              {data.patterns.map((p, idx) => (
                <li key={idx} className="bg-white p-4 border-l-4 border-rose-500 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div className="font-bold text-slate-900 text-lg mb-1">{p.german}</div>
                    <button onClick={() => speak(p.german)} className="text-slate-400 hover:text-rose-600"><Volume2 size={18} /></button>
                  </div>
                  <div className="text-sm text-slate-500 italic">{p.vietnamese}</div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card title="Luyện phát âm" className="text-center py-12" theme="practical">
          <div className="mb-8">
            <div className="text-3xl font-bold mb-2 text-slate-800">"Ich möchte bitte bestellen"</div>
            <div className="text-slate-500">Hãy đọc to câu trên</div>
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={handleRecord}
              className={`w-24 h-24 rounded-full flex items-center justify-center transition-all shadow-lg ${recording ? 'bg-rose-500 animate-pulse scale-110' : 'bg-slate-900 hover:bg-slate-800 hover:scale-105'}`}
            >
              <Mic className="text-white" size={40} />
            </button>
          </div>

          {score && (
            <div className="animate-bounce">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Điểm số của bạn</div>
              <div className="text-5xl font-black text-green-500">{score}/100</div>
            </div>
          )}
        </Card>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Desktop & Mobile */}
      <>
        {/* Overlay for mobile */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        <div className={`
          fixed md:static inset-y-0 left-0 w-72 bg-white border-r-2 border-slate-200 flex flex-col shrink-0 z-40 transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="p-6 border-b-2 border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => { goHome(); setMobileMenuOpen(false); }}>
            <h1 className="text-3xl font-black tracking-tighter text-slate-900">DEUTSCH<span className="text-amber-500">v1</span></h1>
            <div className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">Hệ Thống Học Tập</div>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            {Object.keys(COURSE_INDEX).map(level => (
              <div key={level} className="mb-2">
                <div
                  onClick={() => {
                    setActiveLevel(level);
                    setActiveLesson(null);
                    setActiveMode(level === 'Thực chiến' ? 'practical' : null);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-6 py-4 font-bold cursor-pointer flex justify-between items-center hover:bg-slate-50 transition-colors border-l-4 ${activeLevel === level ? 'border-amber-500 text-slate-900 bg-amber-50' : 'border-transparent text-slate-500'}`}
                >
                  {level}
                  <ChevronRight size={16} className={`transition-transform ${activeLevel === level ? 'rotate-90' : ''}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t-2 border-slate-200 bg-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 shadow-sm">
                {user.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-sm text-slate-900">{user.name}</div>
                <div className="text-xs text-slate-500">Học Viên</div>
              </div>
            </div>
            <Button variant="secondary" onClick={onLogout} className="w-full text-xs py-2">
              <LogOut size={14} /> Đăng xuất
            </Button>
          </div>
        </div>
      </>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-50 px-4 py-3 flex justify-between items-center shadow-sm">
        <h1 className="text-xl font-black text-slate-900" onClick={goHome}>DEUTSCH<span className="text-amber-500">v1</span></h1>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><Menu /></button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 md:p-12 overflow-y-auto mt-16 md:mt-0 bg-slate-50">
        {!activeLevel && <WelcomeScreen />}

        {activeLevel && !activeMode && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-black text-slate-900 mb-8 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent inline-block">
              {activeLevel}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <div
                onClick={() => setActiveMode('vocabulary')}
                className="bg-white p-8 rounded-sm border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg cursor-pointer transition-all group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Từ Vựng (Vocabulary)</h3>
                <p className="text-slate-500">Học từ mới theo chủ đề với Flashcards và bài tập.</p>
              </div>

              <div
                onClick={() => setActiveMode('grammar')}
                className="bg-white p-8 rounded-sm border-2 border-slate-200 hover:border-emerald-500 hover:shadow-lg cursor-pointer transition-all group"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Ngữ Pháp (Grammar)</h3>
                <p className="text-slate-500">Nắm vững cấu trúc câu và quy tắc chia động từ.</p>
              </div>
            </div>
          </div>
        )}

        {activeLevel && activeMode && !activeLesson && (
          <LevelGrid
            levelName={activeLevel === 'Thực chiến' ? 'Chủ đề Thực chiến' : `${activeLevel} - ${activeMode === 'vocabulary' ? 'Từ Vựng' : 'Ngữ Pháp'}`}
            lessons={COURSE_INDEX[activeLevel].filter(l => activeLevel === 'Thực chiến' ? true : l.type === (activeMode === 'vocabulary' ? 'Vocabulary' : 'Grammar'))}
          />
        )}

        {activeLevel && activeLesson && (
          <>
            <header className="mb-12">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                <span className="cursor-pointer hover:text-slate-900" onClick={() => setActiveLevel(null)}><Home size={14} className="inline mb-1" /></span>
                <ChevronRight size={14} />
                <span className="cursor-pointer hover:text-slate-900" onClick={() => { setActiveMode(null); setActiveLesson(null); }}>{activeLevel}</span>
                <ChevronRight size={14} />
                {activeMode !== 'practical' && (
                  <>
                    <span className="cursor-pointer hover:text-slate-900" onClick={() => setActiveLesson(null)}>{activeMode === 'vocabulary' ? 'Từ Vựng' : 'Ngữ Pháp'}</span>
                    <ChevronRight size={14} />
                  </>
                )}
                <span className="text-amber-500">{activeLesson.title}</span>
              </div>
              <h2 className="text-5xl font-black text-slate-900 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent inline-block pb-2">
                {activeLesson.title}
              </h2>
              <p className="text-xl text-slate-500 mt-2">{activeLesson.description}</p>
            </header>

            {activeLesson.type === 'Vocabulary' && <VocabView data={activeLesson.words || activeLesson.content} />}
            {(activeLesson.type === 'Grammar' || activeLesson.type === 'Practice') && <GrammarView data={activeLesson.content} />}
            {activeLesson.type === 'Practical' && <PracticalView data={activeLesson} />}
          </>
        )}
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

function App() {
  const [view, setView] = useState('landing'); // landing, testing, login, dashboard
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setView('landing');
  };

  return (
    <div className="font-sans text-slate-900 antialiased selection:bg-amber-200 selection:text-amber-900">
      {view === 'landing' && <LandingPage onNavigate={setView} />}
      {view === 'testing' && <TestingCenter onBack={() => setView('landing')} />}
      {view === 'login' && <LoginForm onLogin={handleLogin} onBack={() => setView('landing')} />}
      {view === 'dashboard' && user && <Dashboard user={user} onLogout={handleLogout} />}
    </div>
  );
}

export default App;

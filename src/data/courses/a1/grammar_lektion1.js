export const GRAMMAR_A1_L1 = {
    id: "a1-gram-l1",
    title: "Lektion 1: Chia động từ (Konjugation)",
    description: "Quy tắc chia đuôi động từ thường ở thì hiện tại.",
    gradient: "from-emerald-400 to-teal-500",
    content: {
        theory: [
            {
                title: "1. Quy tắc chia đuôi (Endungen)",
                text: "Động từ tiếng Đức gồm: Gốc (Stamm) + Đuôi (Endung). Đuôi thay đổi theo ngôi.",
                example: "Ví dụ: lern-en (học)",
                table: [
                    { subject: "ich (tôi)", ending: "-e", ex: "lern-e" },
                    { subject: "du (bạn)", ending: "-st", ex: "lern-st" },
                    { subject: "er/sie/es (anh/cô ấy)", ending: "-t", ex: "lern-t" },
                    { subject: "wir (chúng ta)", ending: "-en", ex: "lern-en" },
                    { subject: "ihr (các bạn)", ending: "-t", ex: "lern-t" },
                    { subject: "sie/Sie (họ/Ngài)", ending: "-en", ex: "lern-en" }
                ]
            },
            {
                title: "2. Động từ đặc biệt: Sein (Là)",
                text: "Động từ 'sein' là bất quy tắc, phải học thuộc lòng.",
                table: [
                    { subject: "ich", ex: "bin" },
                    { subject: "du", ex: "bist" },
                    { subject: "er/sie/es", ex: "ist" },
                    { subject: "wir", ex: "sind" },
                    { subject: "ihr", ex: "seid" },
                    { subject: "sie/Sie", ex: "sind" }
                ]
            }
        ],
        exercises: [
            { q: "Ich ______ Deutsch. (lernen)", options: ["lerne", "lernst", "lernt"], correct: "lerne" },
            { q: "Du ______ in Passau. (wohnen)", options: ["wohnst", "wohnt", "wohnen"], correct: "wohnst" },
            { q: "Er ______ aus Italien. (kommen)", options: ["kommst", "kommen", "kommt"], correct: "kommt" },
            { q: "Wir ______ Saft. (trinken)", options: ["trinkt", "trinken", "trinkst"], correct: "trinken" },
            { q: "Das ______ Maria. (sein)", options: ["bist", "ist", "sind"], correct: "ist" },
            { q: "Wir ______ in Deutschland. (wohnen)", options: ["wohnen", "wohnst", "wohnt"], correct: "wohnen" },
            { q: "Ihr ______ Deutsch. (lernen)", options: ["lernt", "lernen", "lernst"], correct: "lernt" },
            { q: "Maria ______ aus Spanien. (kommen)", options: ["kommt", "kommen", "kommst"], correct: "kommt" },
            { q: "Ich ______ Peter. (heißen)", options: ["heiße", "heißt", "heißen"], correct: "heiße" },
            { q: "Du ______ Musik. (hören)", options: ["hörst", "hört", "höre"], correct: "hörst" },
            { q: "______ Sie Frau Müller? (sein)", options: ["Sind", "Ist", "Seid"], correct: "Sind" },
            { q: "Wir ______ Studenten. (sein)", options: ["sind", "seid", "ist"], correct: "sind" }
        ]
    }
};

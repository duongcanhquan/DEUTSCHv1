export const GRAMMAR_A1_L2 = {
    id: "a1-gram-l2",
    title: "Lektion 2: Giống & Mạo từ (Nominativ)",
    description: "Phân biệt giống Đực, Cái, Trung và cách phủ định.",
    gradient: "from-green-500 to-emerald-600",
    content: {
        theory: [
            {
                title: "1. Ba giống của danh từ",
                text: "Danh từ tiếng Đức luôn viết hoa và có 3 giống.",
                table: [
                    { type: "Giống Đực (Maskulin)", art: "der", ex: "der Mann (người nam)" },
                    { type: "Giống Cái (Feminin)", art: "die", ex: "die Frau (người nữ)" },
                    { type: "Giống Trung (Neutral)", art: "das", ex: "das Kind (đứa trẻ)" },
                    { type: "Số nhiều (Plural)", art: "die", ex: "die Kinder" }
                ]
            },
            {
                title: "2. Mạo từ không xác định & Phủ định",
                text: "Dùng 'ein' (một) và 'kein' (không có).",
                table: [
                    { gender: "Maskulin", pos: "ein Tisch", neg: "kein Tisch" },
                    { gender: "Feminin", pos: "eine Lampe", neg: "keine Lampe" },
                    { gender: "Neutral", pos: "ein Buch", neg: "kein Buch" }
                ]
            }
        ],
        exercises: [
            { q: "Das ist ______ Vater. (der)", options: ["ein", "eine", "einen"], correct: "ein" },
            { q: "Ist das eine Banane? - Nein, das ist ______ Banane.", options: ["nicht", "kein", "keine"], correct: "keine" },
            { q: "Das ist ______ Buch. (das)", options: ["eine", "ein", "einen"], correct: "ein" },
            { q: "Das ist ______ (ein) Tisch.", options: ["ein", "eine", "einen"], correct: "ein" },
            { q: "Ist das eine Lampe? - Nein, das ist ______ Lampe.", options: ["keine", "kein", "nicht"], correct: "keine" },
            { q: "Das sind ______ (Plural) Bücher.", options: ["Bücher", "ein Bücher", "eine Bücher"], correct: "Bücher" },
            { q: "______ (Der) Lehrer kommt.", options: ["Der", "Das", "Die"], correct: "Der" },
            { q: "______ (Die) Frau wohnt hier.", options: ["Die", "Der", "Das"], correct: "Die" },
            { q: "Ist das Wasser? - Nein, das ist ______ Wasser.", options: ["kein", "keine", "nicht"], correct: "kein" },
            { q: "Sind das Äpfel? - Nein, das sind ______ Äpfel.", options: ["keine", "kein", "nicht"], correct: "keine" }
        ]
    }
};

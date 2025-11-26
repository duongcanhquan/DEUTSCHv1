export const GRAMMAR_A1_L6 = {
    id: "a1-gram-l6",
    title: "Lektion 6: Cách Dativ (Gián tiếp)",
    description: "Biến đổi mạo từ khi dùng với 'tặng cho ai', 'giúp đỡ ai'.",
    gradient: "from-cyan-600 to-blue-600",
    content: {
        theory: [
            {
                title: "1. Quy tắc biến đổi Dativ",
                text: "Dativ trả lời cho câu hỏi 'Wem?' (Cho ai?). Thường dùng với các động từ như: helfen (giúp), danken (cảm ơn), gefallen (thích), gehören (thuộc về).",
                table: [
                    { gender: "Maskulin", nom: "der", dat: "DEM (einem)" },
                    { gender: "Feminin", nom: "die", dat: "DER (einer)" },
                    { gender: "Neutral", nom: "das", dat: "DEM (einem)" },
                    { gender: "Plural", nom: "die", dat: "DEN ...n" }
                ]
            }
        ],
        exercises: [
            { q: "Das Auto gehört ______ (der) Vater.", options: ["dem", "den", "der"], correct: "dem" },
            { q: "Ich helfe ______ (die) Mutter.", options: ["der", "die", "dem"], correct: "der" },
            { q: "Wir danken ______ (die - Plural) Lehrern.", options: ["den", "dem", "die"], correct: "den" },
            { q: "Das Eis schmeckt ______ (das) Kind.", options: ["dem", "den", "das"], correct: "dem" },
            { q: "Das Haus gehört ______ (der) Onkel.", options: ["dem", "den", "der"], correct: "dem" },
            { q: "Die Jacke passt ______ (das) Kind.", options: ["dem", "den", "das"], correct: "dem" },
            { q: "Ich antworte ______ (die) Lehrerin.", options: ["der", "die", "dem"], correct: "der" },
            { q: "Wir danken ______ (der) Vater.", options: ["dem", "den", "der"], correct: "dem" },
            { q: "Gefällt dir ______ (der) Film?", options: ["der", "den", "dem"], correct: "der" },
            { q: "Schmeckt ______ (du) die Suppe?", options: ["dir", "dich", "du"], correct: "dir" },
            { q: "Ich glaube ______ (er) nicht.", options: ["ihm", "ihn", "er"], correct: "ihm" }
        ]
    }
};

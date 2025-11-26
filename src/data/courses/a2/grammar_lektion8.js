export const GRAMMAR_A2_L8 = {
    id: "a2-gram-l8",
    title: "Lektion 8: Tương lai & Đại từ chỉ định",
    description: "Thì tương lai (Futur I) và cách dùng 'dieser/welcher'.",
    gradient: "from-green-500 to-emerald-600",
    content: {
        theory: [
            {
                title: "1. Thì tương lai (Futur I)",
                text: "Dùng để nói về dự định hoặc phỏng đoán.",
                example: "werden + Infinitiv (cuối câu). Ich werde Arzt."
            },
            {
                title: "2. Đại từ chỉ định (Demonstrativ)",
                text: "Welcher (Cái nào?) - Dieser (Cái này). Chia đuôi giống hệt mạo từ xác định (der/die/das).",
                table: [
                    { gender: "Maskulin", nom: "welcher/dieser", akk: "welchen/diesen" },
                    { gender: "Feminin", nom: "welche/diese", akk: "welche/diese" },
                    { gender: "Neutral", nom: "welches/dieses", akk: "welches/dieses" }
                ]
            }
        ],
        exercises: [
            // Futur I (werden + Infinitiv)
            { q: "Ich ______ morgen nach Berlin fahren.", options: ["werde", "wird", "wirst"], correct: "werde" },
            { q: "Du ______ bald Deutsch sprechen.", options: ["wirst", "werdet", "wird"], correct: "wirst" },
            { q: "Es ______ morgen regnen.", options: ["wird", "werde", "wirst"], correct: "wird" },
            { q: "Wir ______ das schaffen!", options: ["werden", "wird", "werdet"], correct: "werden" },
            // Demonstrativ (Dieser/Welcher)
            { q: "______ (Which) Rock gefällt dir?", options: ["Welcher", "Welchen", "Welches"], correct: "Welcher" },
            { q: "______ (This) Rock ist schön.", options: ["Dieser", "Diesen", "Dieses"], correct: "Dieser" },
            { q: "______ (Which) Tasche kaufst du?", options: ["Welche", "Welcher", "Welchen"], correct: "Welche" },
            { q: "Ich nehme ______ (this) Tasche.", options: ["diese", "dieser", "dieses"], correct: "diese" },
            { q: "Mit ______ (this - Dat) Mann habe ich gesprochen.", options: ["diesem", "diesen", "dieser"], correct: "diesem" },
            { q: "Für ______ (which - Akk) Kurs hast du dich angemeldet?", options: ["welchen", "welcher", "welche"], correct: "welchen" }
        ]
    }
};

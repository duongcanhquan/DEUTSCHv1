export const GRAMMAR_A1_L5 = {
    id: "a1-gram-l5",
    title: "Lektion 5: Sở hữu & Quá khứ đơn",
    description: "Cách dùng 'Của tôi/bạn' và thì quá khứ của Sein/Haben.",
    gradient: "from-purple-500 to-indigo-500",
    content: {
        theory: [
            {
                title: "1. Quán từ sở hữu (Possessivartikel)",
                text: "Dùng để chỉ sự sở hữu.",
                table: [
                    { pers: "ich", art: "mein (của tôi)" },
                    { pers: "du", art: "dein (của bạn)" },
                    { pers: "er/es", art: "sein (của anh ấy/nó)" },
                    { pers: "sie", art: "ihr (của cô ấy)" },
                    { pers: "wir", art: "unser (của chúng ta)" },
                    { pers: "ihr", art: "euer (của các bạn)" }
                ]
            },
            {
                title: "2. Präteritum (Haben & Sein)",
                text: "Quá khứ đơn thường chỉ dùng với 2 động từ này ở A1.",
                table: [
                    { verb: "sein (là/ở)", past: "war (đã là/ở)" },
                    { verb: "haben (có)", past: "hatte (đã có)" }
                ]
            }
        ],
        exercises: [
            { q: "Das ist ______ (ich) Vater.", options: ["mein", "dein", "sein"], correct: "mein" },
            { q: "Ist das ______ (du) Tasche?", options: ["deine", "dein", "meine"], correct: "deine" },
            { q: "Wir besuchen ______ (wir) Oma.", options: ["unsere", "unser", "eure"], correct: "unsere" },
            { q: "Peter sucht ______ (er) Brille.", options: ["seine", "ihre", "deine"], correct: "seine" },
            { q: "Das Kind sucht ______ (es) Mutter.", options: ["seine", "ihre", "deine"], correct: "seine" },
            { q: "Gestern ______ ich krank. (sein)", options: ["war", "bin", "hatte"], correct: "war" },
            { q: "______ du im Kino. (sein)", options: ["Warst", "Bist", "Hattest"], correct: "Warst" },
            { q: "Wir ______ keine Zeit. (haben - Präteritum)", options: ["hatten", "haben", "waren"], correct: "hatten" },
            { q: "Er ______ viel Arbeit. (haben - Präteritum)", options: ["hatte", "hat", "war"], correct: "hatte" },
            { q: "Früher ______ ich in Berlin. (sein)", options: ["war", "bin", "habe"], correct: "war" },
            { q: "Trinkst du Kaffee? - Nein, ______ (never).", options: ["nie", "immer", "oft"], correct: "nie" },
            { q: "Spielst du Fußball? - Ja, ______ (often).", options: ["oft", "nie", "kaum"], correct: "oft" }
        ]
    }
};

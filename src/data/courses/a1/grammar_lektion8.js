export const GRAMMAR_A1_L8 = {
    id: "a1-gram-l8",
    title: "Lektion 8: Thì Perfekt & Giới từ Akkusativ",
    description: "Thì quá khứ hoàn thành (đã làm gì) và Giới từ đi với Akkusativ.",
    gradient: "from-cyan-500 to-blue-500",
    content: {
        theory: [
            {
                title: "1. Thì Perfekt (Quá khứ)",
                text: "Công thức: Haben/Sein (chia) + ... + Partizip II (cuối câu).",
                example: "Ich HABE ein Eis GEKAUFT."
            },
            {
                title: "2. Giới từ luôn đi với Akkusativ",
                text: "Sau các từ này, mạo từ chuyển sang Akkusativ (den/die/das/die).",
                list: "für, ohne, gegen, um, durch"
            }
        ],
        exercises: [
            { q: "Ich habe ein Auto ______. (kaufen)", options: ["gekauft", "kaufen", "kauft"], correct: "gekauft" },
            { q: "Er hat Musik ______. (hören)", options: ["gehört", "hören", "gehoren"], correct: "gehört" },
            { q: "Bist du nach Hause ______? (gehen)", options: ["gegangen", "ging", "geht"], correct: "gegangen" },
            { q: "Wir haben Deutsch ______. (lernen)", options: ["gelernt", "lernen", "gelern"], correct: "gelernt" },
            { q: "Das Geschenk ist ______ dich. (für)", options: ["für", "ohne", "gegen"], correct: "für" },
            { q: "Er kommt ______ seine Frau. (ohne)", options: ["ohne", "mit", "bei"], correct: "ohne" },
            { q: "Der Hund läuft ______ den Baum. (um)", options: ["um", "für", "gegen"], correct: "um" },
            { q: "Wir fahren ______ den Tunnel. (durch)", options: ["durch", "um", "für"], correct: "durch" },
            { q: "Das Auto fährt ______ den Baum. (gegen - va vào)", options: ["gegen", "um", "ohne"], correct: "gegen" },
            { q: "Ich ______ Pizza gegessen. (haben)", options: ["habe", "bin", "hat"], correct: "habe" },
            { q: "Er ______ nach Berlin gefahren. (sein)", options: ["ist", "hat", "war"], correct: "ist" },
            { q: "Was ______ du gemacht?", options: ["hast", "bist", "habe"], correct: "hast" }
        ]
    }
};

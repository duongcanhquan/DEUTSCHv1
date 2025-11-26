export const GRAMMAR_A2_L4 = {
    id: "a2-gram-l4",
    title: "Lektion 4: Giới từ theo động từ & Câu điều kiện",
    description: "Động từ đi kèm giới từ bắt buộc và câu điều kiện 'Wenn'.",
    gradient: "from-pink-500 to-rose-500",
    content: {
        theory: [
            {
                title: "1. Động từ đi với giới từ (Verben mit Präpositionen)",
                text: "Nhiều động từ đi kèm giới từ cố định. Cần học thuộc.",
                example: "warten auf (đợi), träumen von (mơ về)."
            },
            {
                title: "2. Pronominaladverbien (Wo- / Da-)",
                text: "Thay thế cho vật/sự việc.",
                list: [
                    "Hỏi: Wo + r + giới từ (Wofür? Worauf?)",
                    "Trả lời: Da + r + giới từ (Dafür, Darauf)"
                ]
            },
            {
                title: "3. Câu điều kiện (Konditionalsätze)",
                text: "Bắt đầu bằng 'Wenn' (Nếu/Khi), động từ đẩy xuống cuối câu.",
                example: "Wenn ich Zeit habe, komme ich."
            }
        ],
        exercises: [
            // Verben mit Präpositionen
            { q: "Ich warte ______ den Bus. (Akk)", options: ["auf", "über", "an"], correct: "auf" },
            { q: "Er träumt ______ einem Haus. (Dat)", options: ["von", "über", "auf"], correct: "von" },
            { q: "Wir sprechen ______ das Wetter.", options: ["über", "von", "mit"], correct: "über" },
            { q: "Sie interessiert sich ______ Mode.", options: ["für", "über", "an"], correct: "für" },
            { q: "Ich denke oft ______ dich.", options: ["an", "über", "auf"], correct: "an" },
            { q: "Er kümmert sich ______ die Kinder.", options: ["um", "für", "über"], correct: "um" },
            { q: "Wir freuen uns ______ das Geschenk.", options: ["über", "auf", "an"], correct: "über" },
            // Pronominaladverbien (Wo- / Da-)
            { q: "Wartest du auf den Bus? - Ja, ich warte ______.", options: ["darauf", "auf ihn", "damit"], correct: "darauf" },
            { q: "Wartest du auf Paul? - Ja, ich warte ______.", options: ["auf ihn", "darauf", "davon"], correct: "auf ihn" },
            { q: "______ interessierst du dich? - Für Sport.", options: ["Wofür", "Für was", "Womit"], correct: "Wofür" },
            { q: "______ hast du Angst? - Vor Spinnen.", options: ["Wovor", "Vor was", "Womit"], correct: "Wovor" },
            // Konditional (Wenn)
            { q: "______ ich Zeit habe, komme ich.", options: ["Wenn", "Wann", "Als"], correct: "Wenn" },
            { q: "Wenn es regnet, ______ wir zu Hause.", options: ["bleiben", "wir bleiben", "bleiben wir"], correct: "bleiben" },
            { q: "Ich gehe zum Arzt, ______ ich krank bin.", options: ["wenn", "wann", "ob"], correct: "wenn" },
            { q: "Wenn du müde bist, ______ du schlafen.", options: ["sollst", "solltest", "sollen"], correct: "sollst" }
        ]
    }
};

export const GRAMMAR_A2_L5 = {
    id: "a2-gram-l5",
    title: "Lektion 5: Konjunktiv II & Giới từ 2 chiều",
    description: "Lời yêu cầu lịch sự, khuyên bảo và giới từ chỉ vị trí/hướng.",
    gradient: "from-red-500 to-orange-500",
    content: {
        theory: [
            {
                title: "1. Konjunktiv II (Lịch sự & Giả định)",
                text: "Dùng để yêu cầu lịch sự hoặc nói điều không có thật.",
                table: [
                    { type: "Yêu cầu", ex: "Könnten Sie...? Würden Sie...?" },
                    { type: "Mong ước", ex: "Ich hätte gern... (Tôi muốn có...)" },
                    { type: "Lời khuyên", ex: "Du solltest... (Bạn nên...)" }
                ]
            },
            {
                title: "2. Giới từ 2 chiều (Wechselpräpositionen)",
                text: "in, an, auf, neben, zwischen, unter, über, vor, hinter.",
                list: [
                    "Wohin? (Chuyển động) -> Akkusativ",
                    "Wo? (Đứng yên) -> Dativ"
                ]
            }
        ],
        exercises: [
            // Konjunktiv II
            { q: "______ Sie mir bitte helfen? (Polite)", options: ["Könnten", "Können", "Konnten"], correct: "Könnten" },
            { q: "Ich ______ gern einen Kaffee. (Wish)", options: ["hätte", "habe", "hatte"], correct: "hätte" },
            { q: "______ du mir das Brot geben?", options: ["Würdest", "Wirst", "Wurdest"], correct: "Würdest" },
            { q: "Wenn ich Zeit ______, würde ich kommen.", options: ["hätte", "habe", "hatte"], correct: "hätte" },
            { q: "An deiner Stelle ______ ich mehr lernen.", options: ["würde", "werde", "wurde"], correct: "würde" },
            // Wechselpräpositionen (Wo = Dat, Wohin = Akk)
            { q: "Das Buch liegt auf ______ Tisch. (Wo?)", options: ["dem", "den", "der"], correct: "dem" },
            { q: "Ich lege das Buch auf ______ Tisch. (Wohin?)", options: ["den", "dem", "der"], correct: "den" },
            { q: "Wir gehen in ______ Kino. (Wohin?)", options: ["das (ins)", "dem (im)", "den"], correct: "das (ins)" },
            { q: "Wir sind in ______ Kino. (Wo?)", options: ["dem (im)", "das (ins)", "den"], correct: "dem (im)" },
            { q: "Das Bild hängt an ______ Wand. (Wo?)", options: ["der", "die", "dem"], correct: "der" },
            { q: "Ich hänge das Bild an ______ Wand. (Wohin?)", options: ["die", "der", "den"], correct: "die" },
            { q: "Der Stuhl steht neben ______ Sofa. (Wo?)", options: ["dem", "das", "den"], correct: "dem" },
            { q: "Die Katze läuft unter ______ Bett. (Wohin?)", options: ["das", "dem", "den"], correct: "das" }
        ]
    }
};

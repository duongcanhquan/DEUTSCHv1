export const GRAMMAR_A2_L1 = {
    id: "a2-gram-l1",
    title: "Lektion 1: Nguyên nhân, Tân ngữ & QK Động từ khuyết thiếu",
    description: "Câu phụ với 'weil', Trật tự tân ngữ và Quá khứ của Modalverben.",
    gradient: "from-blue-500 to-indigo-500",
    content: {
        theory: [
            {
                title: "1. Câu nguyên nhân (Kausalsätze)",
                text: "Dùng để giải thích lý do.",
                table: [
                    { conj: "denn", pos: "Vị trí 0 (Verb ở vị trí 2)", ex: "Ich bleibe zu Hause, denn ich bin krank." },
                    { conj: "weil", pos: "Đẩy động từ xuống cuối câu", ex: "Ich bleibe zu Hause, weil ich krank bin." }
                ]
            },
            {
                title: "2. Trật tự tân ngữ (Objekte)",
                text: "Khi câu có cả Dativ (người) và Akkusativ (vật):",
                list: [
                    "Dativ đứng trước Akkusativ (nếu cả 2 là danh từ): Ich gebe dem Mann das Buch.",
                    "Đại từ đứng trước Danh từ: Ich gebe es dem Mann.",
                    "Akkusativ đứng trước Dativ (nếu cả 2 là đại từ): Ich gebe es ihm."
                ]
            },
            {
                title: "3. Präteritum Modalverben",
                text: "Quá khứ của động từ khuyết thiếu.",
                table: [
                    { verb: "können", past: "konnte" },
                    { verb: "müssen", past: "musste" },
                    { verb: "wollen", past: "wollte" },
                    { verb: "dürfen", past: "durfte" },
                    { verb: "sollen", past: "sollte" }
                ]
            }
        ],
        exercises: [
            // Causal Clauses (Weil/Denn)
            { q: "Er kommt nicht, ______ er krank ist. (Verb am Ende)", options: ["weil", "denn", "aber"], correct: "weil" },
            { q: "Sie ist müde, ______ sie hat viel gearbeitet. (Verb Position 2)", options: ["denn", "weil", "deshalb"], correct: "denn" },
            { q: "Ich lerne Deutsch, weil ich in Deutschland ______.", options: ["arbeiten möchte", "möchte arbeiten", "arbeite möchte"], correct: "arbeiten möchte" },
            { q: "Wir bleiben zu Hause, ______ es regnet.", options: ["weil", "denn", "oder"], correct: "weil" },
            { q: "Max ist glücklich, ______ er hat den Test bestanden.", options: ["denn", "weil", "dass"], correct: "denn" },
            // Dativ + Akkusativ Objects
            { q: "Ich schenke ______ (der Mann) ein Buch.", options: ["dem Mann", "den Mann", "der Mann"], correct: "dem Mann" },
            { q: "Er gibt ______ (die Frau) die Blumen.", options: ["der Frau", "die Frau", "dem Frau"], correct: "der Frau" },
            { q: "Wir schicken ______ (das Kind) ein Paket.", options: ["dem Kind", "das Kind", "des Kindes"], correct: "dem Kind" },
            { q: "Kannst du ______ (ich) den Stift geben?", options: ["mir", "mich", "ich"], correct: "mir" },
            { q: "Zeigst du ______ (wir) das Foto?", options: ["uns", "wir", "unser"], correct: "uns" },
            // Präteritum Modalverben
            { q: "Früher ______ ich gut Fußball spielen. (können)", options: ["konnte", "könnte", "kann"], correct: "konnte" },
            { q: "Gestern ______ wir lange arbeiten. (müssen)", options: ["mussten", "müssten", "muss"], correct: "mussten" },
            { q: "Er ______ Arzt werden. (wollen)", options: ["wollte", "willte", "wolltet"], correct: "wollte" },
            { q: "______ du als Kind viel fernsehen? (dürfen)", options: ["Durftest", "Darfst", "Durftet"], correct: "Durftest" },
            { q: "Ich ______ die Hausaufgabe machen. (sollen)", options: ["sollte", "solle", "soll"], correct: "sollte" }
        ]
    }
};

export const GRAMMAR_A2_L3 = {
    id: "a2-gram-l3",
    title: "Lektion 3: Câu Dass, So sánh & Phản thân",
    description: "Mệnh đề 'dass', So sánh hơn/nhất và Động từ phản thân.",
    gradient: "from-purple-600 to-pink-500",
    content: {
        theory: [
            {
                title: "1. Mệnh đề 'dass'",
                text: "Dùng để nối câu, động từ ở mệnh đề 'dass' luôn đứng cuối câu.",
                example: "Ich weiß, dass du kommst."
            },
            {
                title: "2. So sánh (Komparation)",
                text: "So sánh hơn: adj + er + als. So sánh nhất: am + adj + sten.",
                table: [
                    { type: "Hơn", ex: "schneller als (nhanh hơn)" },
                    { type: "Nhất", ex: "am schnellsten (nhanh nhất)" },
                    { type: "Bất quy tắc", ex: "gut -> besser -> am besten" }
                ]
            },
            {
                title: "3. Động từ phản thân (Reflexive Verben)",
                text: "Đi kèm đại từ phản thân (mich, dich, sich, uns, euch, sich).",
                example: "Ich freue mich."
            }
        ],
        exercises: [
            // Dass-Sätze
            { q: "Ich weiß, ______ du kommst.", options: ["dass", "das", "weil"], correct: "dass" },
            { q: "Er sagt, dass er keine Zeit ______.", options: ["hat", "habe", "haben"], correct: "hat" },
            { q: "Ich hoffe, dass es dir gut ______.", options: ["geht", "gehen", "gehst"], correct: "geht" },
            // Comparison
            { q: "Dein Koffer ist ______ (schwer) als meiner.", options: ["schwerer", "schwer", "am schwersten"], correct: "schwerer" },
            { q: "Maria ist ______ (groß) als Eva.", options: ["größer", "großer", "groß"], correct: "größer" },
            { q: "Der Zug ist ______ (schnell) als das Rad.", options: ["schneller", "schnell", "am schnellsten"], correct: "schneller" },
            { q: "Wer ist ______ (gut) in der Klasse?", options: ["am besten", "besser", "gutest"], correct: "am besten" },
            { q: "Dieser Film ist ______ (interessant) als das Buch.", options: ["interessanter", "interessant", "am interessantesten"], correct: "interessanter" },
            // Reflexive Verben
            { q: "Ich freue ______ auf den Urlaub.", options: ["mich", "mir", "sich"], correct: "mich" },
            { q: "Du ärgerst ______ über den Bus.", options: ["dich", "dir", "sich"], correct: "dich" },
            { q: "Wir treffen ______ morgen.", options: ["uns", "euch", "sich"], correct: "uns" },
            { q: "Er interessiert ______ für Musik.", options: ["sich", "ihn", "es"], correct: "sich" }
        ]
    }
};

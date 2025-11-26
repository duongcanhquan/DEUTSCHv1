export const GRAMMAR_A1_L7 = {
    id: "a1-gram-l7",
    title: "Lektion 7: Động từ khuyết thiếu & Giới từ Dativ",
    description: "Cách dùng Modalverben (Muốn/Phải/Có thể) và Giới từ đi với Dativ.",
    gradient: "from-yellow-500 to-amber-600",
    content: {
        theory: [
            {
                title: "1. Động từ khuyết thiếu (Modalverben)",
                text: "Động từ chính đứng cuối câu ở dạng nguyên thể.",
                table: [
                    { verb: "können", mean: "có thể (khả năng)" },
                    { verb: "müssen", mean: "phải (bắt buộc)" },
                    { verb: "wollen", mean: "muốn (dự định)" },
                    { verb: "dürfen", mean: "được phép" },
                    { verb: "sollen", mean: "nên (lời khuyên)" },
                    { verb: "mögen", mean: "thích" }
                ]
            },
            {
                title: "2. Giới từ luôn đi với Dativ",
                text: "Sau các từ này, mạo từ phải chuyển sang Dativ (dem/der/dem/den).",
                list: "aus, bei, mit, nach, seit, von, zu"
            }
        ],
        exercises: [
            { q: "Ich ______ gut schwimmen. (können)", options: ["kann", "können", "kanst"], correct: "kann" },
            { q: "Du ______ Hausaufgaben machen. (müssen)", options: ["musst", "muss", "müssen"], correct: "musst" },
            { q: "Wir ______ nach Hause gehen. (wollen)", options: ["wollen", "will", "wollt"], correct: "wollen" },
            { q: "Hier ______ man nicht rauchen. (dürfen)", options: ["darf", "durft", "darfst"], correct: "darf" },
            { q: "Ich fahre ______ dem Bus. (mit)", options: ["mit", "bei", "zu"], correct: "mit" },
            { q: "Er kommt ______ der Schule. (aus)", options: ["aus", "von", "seit"], correct: "aus" },
            { q: "Wir wohnen ______ den Eltern. (bei)", options: ["bei", "mit", "zu"], correct: "bei" },
            { q: "Ich fahre ______ Berlin. (nach)", options: ["nach", "zu", "in"], correct: "nach" },
            { q: "Sie geht ______ Arzt. (zu dem)", options: ["zum", "zur", "zu"], correct: "zum" },
            { q: "Das ist ______ (von dem) Vater. (von)", options: ["vom", "von", "aus"], correct: "vom" },
            { q: "Ich lerne ______ einem Jahr Deutsch. (seit)", options: ["seit", "für", "um"], correct: "seit" },
            { q: "Gehst du ______ (to the) Bahnhof?", options: ["zum", "zur", "nach"], correct: "zum" }
        ]
    }
};

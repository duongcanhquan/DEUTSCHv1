export const GRAMMAR_A2_L6 = {
    id: "a2-gram-l6",
    title: "Lektion 6: Quá khứ đơn & Mệnh đề quan hệ",
    description: "Thì quá khứ trong văn viết và câu mệnh đề quan hệ.",
    gradient: "from-orange-500 to-amber-500",
    content: {
        theory: [
            {
                title: "1. Präteritum (Quá khứ đơn)",
                text: "Thường dùng trong văn viết, kể chuyện.",
                table: [
                    { type: "Có quy tắc", ex: "kaufen -> kaufte, machen -> machte" },
                    { type: "Bất quy tắc", ex: "gehen -> ging, kommen -> kam, essen -> aß" }
                ]
            },
            {
                title: "2. Mệnh đề quan hệ (Relativsätze)",
                text: "Bổ sung ý nghĩa cho danh từ đứng trước. Đại từ quan hệ phụ thuộc vào Giống/Số của danh từ đó và Cách (Kasus) trong mệnh đề phụ.",
                example: "Der Mann, der hier wohnt, ist nett."
            }
        ],
        exercises: [
            // Präteritum
            { q: "Gestern ______ ich im Kino. (sein)", options: ["war", "bin", "wäre"], correct: "war" },
            { q: "Er ______ eine Pizza. (kaufen)", options: ["kaufte", "kauft", "gekauft"], correct: "kaufte" },
            { q: "Wir ______ nach Hause. (gehen - strong)", options: ["gingen", "gehten", "gegangen"], correct: "gingen" },
            { q: "Sie ______ viel Wasser. (trinken - strong)", options: ["trank", "trinkte", "getrunken"], correct: "trank" },
            { q: "Es ______ gestern. (regnen)", options: ["regnete", "regnet", "geregnet"], correct: "regnete" },
            // Relativsätze
            { q: "Das ist der Mann, ______ hier wohnt.", options: ["der", "den", "dem"], correct: "der" },
            { q: "Kennst du die Frau, ______ dort steht?", options: ["die", "der", "das"], correct: "die" },
            { q: "Das ist das Buch, ______ ich suche.", options: ["das", "die", "der"], correct: "das" },
            { q: "Das sind die Kinder, ______ im Garten spielen.", options: ["die", "denen", "der"], correct: "die" },
            { q: "Ist das der Lehrer, ______ du kennst? (Akk)", options: ["den", "der", "dem"], correct: "den" },
            { q: "Das ist die Tasche, ______ mir gefällt.", options: ["die", "der", "das"], correct: "die" },
            { q: "Wo ist der Computer, ______ ich gekauft habe?", options: ["den", "der", "dem"], correct: "den" }
        ]
    }
};

export const GRAMMAR_A1_L3 = {
    id: "a1-gram-l3",
    title: "Lektion 3: Giống danh từ & Tính từ",
    description: "Quy tắc xác định giống (Der/Die/Das), danh từ ghép và tính từ trái nghĩa.",
    gradient: "from-orange-400 to-red-500",
    content: {
        theory: [
            {
                title: "1. Quy tắc nhận biết Giống (Genus)",
                text: "Nhìn đuôi của danh từ để đoán giống:",
                table: [
                    { gender: "Der (Maskulin)", endings: "-er (Lehrer), -or (Motor), Tage (Montag), Monate (Mai)" },
                    { gender: "Die (Feminin)", endings: "-in (Ärztin), -ung (Zeitung), -heit (Krankheit), -keit, -ei (Bäckerei)" },
                    { gender: "Das (Neutral)", endings: "-chen (Mädchen), -lein, -um (Zentrum), -ment (Instrument)" }
                ]
            },
            {
                title: "2. Danh từ ghép (Komposita)",
                text: "Giống của danh từ ghép phụ thuộc vào **từ cuối cùng** (Grundwort).",
                example: "die Orange + der Saft = DER Orangensaft"
            }
        ],
        exercises: [
            { q: "Das ist eine Zeit______ (die).", options: ["-ung", "-er", "-chen"], correct: "-ung" },
            { q: "Das Mäd______ spielt. (das)", options: ["-chen", "-keit", "-or"], correct: "-chen" },
            { q: "Der Mot______ ist laut. (der)", options: ["-or", "-ung", "-in"], correct: "-or" },
            { q: "Die Bäck______ hat offen. (die)", options: ["-erei", "-er", "-ment"], correct: "-erei" },
            { q: "Das Kind______ (nhà trẻ) ist groß. (der)", options: ["-ergarten", "-erhaus", "-erschule"], correct: "-ergarten" },
            { q: "Kaffee + Maschine = ______ Kaffeemaschine.", options: ["Die", "Der", "Das"], correct: "Die" },
            { q: "Haus + Tür = ______ Haustür.", options: ["Die", "Der", "Das"], correct: "Die" },
            { q: "Der Tisch ist nicht groß, er ist ______.", options: ["klein", "hoch", "lang"], correct: "klein" },
            { q: "Das Auto ist nicht neu, es ist ______.", options: ["alt", "schnell", "teuer"], correct: "alt" },
            { q: "Der Kaffee ist heiß, das Eis ist ______.", options: ["kalt", "warm", "süß"], correct: "kalt" },
            { q: "Die Aufgabe ist nicht leicht, sie ist ______.", options: ["schwer", "falsch", "kurz"], correct: "schwer" },
            { q: "Ist der Film spannend? - Nein, er ist ______.", options: ["langweilig", "interessant", "gut"], correct: "langweilig" }
        ]
    }
};

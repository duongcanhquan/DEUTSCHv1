export const GRAMMAR_A1_L4 = {
    id: "a1-gram-l4",
    title: "Lektion 4: Cách Akkusativ (Tân ngữ)",
    description: "Sự biến đổi mạo từ khi danh từ làm tân ngữ trực tiếp.",
    gradient: "from-teal-500 to-cyan-600",
    content: {
        theory: [
            {
                title: "1. Khi nào dùng Akkusativ?",
                text: "Khi hành động tác động trực tiếp lên người/vật (Ví dụ: Tôi mua *cái gì*? Tôi tìm *ai*?).",
                important: "LƯU Ý: Chỉ có giống ĐỰC (Der) bị biến đổi. Các giống khác giữ nguyên.",
                table: [
                    { case: "Nominativ (Chủ ngữ)", m: "der / ein", f: "die / eine", n: "das / ein" },
                    { case: "Akkusativ (Tân ngữ)", m: "DEN / EINEN", f: "die / eine", n: "das / ein" }
                ]
            },
            {
                title: "2. Động từ đi với Akkusativ",
                text: "Hầu hết các động từ: haben (có), brauchen (cần), suchen (tìm), essen (ăn), trinken (uống)..."
            }
        ],
        exercises: [
            { q: "Ich habe ______ (der) Schlüssel.", options: ["der", "den", "das"], correct: "den" },
            { q: "Er isst ______ (der) Apfel.", options: ["einen", "ein", "eine"], correct: "einen" },
            { q: "Wir kaufen ______ (das) Brot.", options: ["das", "den", "die"], correct: "das" },
            { q: "Ich suche ______ (der) Vater.", options: ["den", "dem", "der"], correct: "den" },
            { q: "Ich trinke ______ (der) Kaffee.", options: ["den", "der", "dem"], correct: "den" },
            { q: "Du isst ______ (der) Salat.", options: ["einen", "ein", "eine"], correct: "einen" },
            { q: "Wir haben ______ (kein) Zeit.", options: ["keine", "kein", "keinen"], correct: "keine" },
            { q: "Er liest ______ (das) Buch.", options: ["das", "den", "die"], correct: "das" },
            { q: "Sie kauft ______ (die) Tasche.", options: ["die", "den", "der"], correct: "die" },
            { q: "Ich suche ______ (der) Bahnhof.", options: ["den", "der", "dem"], correct: "den" },
            { q: "Hast du ______ (ein) Stift?", options: ["einen", "ein", "eine"], correct: "einen" }
        ]
    }
};

export const GRAMMAR_A2_L2 = {
    id: "a2-gram-l2",
    title: "Lektion 2: Chia đuôi tính từ & Cách Genitiv",
    description: "Quy tắc thêm đuôi tính từ và sở hữu cách (Genitiv).",
    gradient: "from-indigo-500 to-purple-600",
    content: {
        theory: [
            {
                title: "1. Chia đuôi tính từ (Adjektivdeklination)",
                text: "Tính từ đứng trước danh từ phải chia đuôi.",
                table: [
                    { type: "Sau der/die/das", nom: "-e (Pl: -en)", akk: "-en (Mask), -e (Fem/Neu)", dat: "-en (All)" },
                    { type: "Sau ein/eine", nom: "-er (M), -e (F), -es (N)", akk: "-en (M), -e (F), -es (N)", dat: "-en (All)" }
                ]
            },
            {
                title: "2. Cách Genitiv (Sở hữu cách)",
                text: "Dùng để chỉ sự sở hữu (Của...).",
                table: [
                    { gender: "Maskulin/Neutral", end: "des ...s (des Vaters)" },
                    { gender: "Feminin/Plural", end: "der ... (der Frau)" }
                ]
            }
        ],
        exercises: [
            // Adjective after Definite Article (der/die/das)
            { q: "Der ______ (neu) Wagen ist teuer.", options: ["neue", "neuer", "neuen"], correct: "neue" },
            { q: "Ich kaufe den ______ (blau) Pullover. (Akk)", options: ["blauen", "blaue", "blauem"], correct: "blauen" },
            { q: "Mit der ______ (nett) Frau. (Dat)", options: ["netten", "nette", "netter"], correct: "netten" },
            { q: "Die ______ (klein) Kinder spielen. (Plural)", options: ["kleinen", "kleine", "kleiner"], correct: "kleinen" },
            // Adjective after Indefinite Article (ein/eine)
            { q: "Das ist ein ______ (schnell) Auto.", options: ["schnelles", "schneller", "schnelle"], correct: "schnelles" },
            { q: "Er hat einen ______ (gut) Job.", options: ["guten", "gute", "guter"], correct: "guten" },
            { q: "Sie trägt eine ______ (schön) Bluse.", options: ["schöne", "schönen", "schönes"], correct: "schöne" },
            { q: "Wir wohnen in einem ______ (alt) Haus.", options: ["alten", "altem", "altes"], correct: "alten" },
            // Genitiv
            { q: "Das ist das Auto ______ (der Vater).", options: ["des Vaters", "dem Vater", "der Vater"], correct: "des Vaters" },
            { q: "Die Tasche ______ (die Frau) ist weg.", options: ["der Frau", "des Frau", "die Frau"], correct: "der Frau" },
            { q: "Das Spielzeug ______ (das Kind) liegt hier.", options: ["des Kindes", "des Kinds", "dem Kind"], correct: "des Kindes" },
            // N-Deklination (Special case)
            { q: "Ich kenne den ______ (Student).", options: ["Studenten", "Student", "Students"], correct: "Studenten" },
            { q: "Wir helfen dem ______ (Junge).", options: ["Jungen", "Junge", "Junges"], correct: "Jungen" },
            { q: "Der Name des ______ (Polizist) ist Müller.", options: ["Polizisten", "Polizist", "Polizistes"], correct: "Polizisten" },
            { q: "Ich spreche mit dem ______ (Kunde).", options: ["Kunden", "Kunde", "Kund"], correct: "Kunden" }
        ]
    }
};

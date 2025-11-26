export const GRAMMAR_A2_L7 = {
    id: "a2-gram-l7",
    title: "Lektion 7: Chỉ mục đích, Đại từ & Câu hỏi gián tiếp",
    description: "Cấu trúc 'damit', đại từ bất định và câu hỏi gián tiếp.",
    gradient: "from-yellow-500 to-lime-600",
    content: {
        theory: [
            {
                title: "1. Chỉ mục đích (Finalsätze)",
                text: "Để làm gì?",
                table: [
                    { type: "um... zu", desc: "Cùng chủ ngữ (động từ nguyên thể cuối câu)", ex: "Ich lerne, um fit zu bleiben." },
                    { type: "damit", desc: "Khác chủ ngữ (động từ chia cuối câu)", ex: "Ich lerne, damit meine Eltern stolz sind." }
                ]
            },
            {
                title: "2. Đại từ bất định (Indefinitpronomen)",
                text: "einer (một cái), keins (không cái nào), niemand (không ai), jemand (ai đó).",
                example: "Hast du einen Stift? - Ja, hier ist einer."
            },
            {
                title: "3. Câu hỏi gián tiếp (Indirekte Fragen)",
                text: "Lịch sự hơn. Động từ đẩy xuống cuối.",
                list: [
                    "Câu hỏi Yes/No -> dùng 'ob'",
                    "Câu hỏi W-Fragen -> giữ nguyên từ để hỏi (wann, wo, wie...)"
                ]
            }
        ],
        exercises: [
            // Damit / Um...zu
            { q: "Ich lerne Deutsch, ______ ich in Deutschland arbeiten kann.", options: ["damit", "um", "dass"], correct: "damit" },
            { q: "Er spart Geld, ______ ein Auto zu kaufen.", options: ["um", "damit", "für"], correct: "um" },
            { q: "Sie macht Sport, ______ fit zu bleiben.", options: ["um", "damit", "weil"], correct: "um" },
            // Indefinitpronomen
            { q: "Hast du einen Stift? - Ja, hier ist ______.", options: ["einer", "ein", "eins"], correct: "einer" },
            { q: "Hast du Feuer? - Nein, ich habe ______.", options: ["keins", "kein", "keiner"], correct: "keins" },
            { q: "Ist hier jemand? - Nein, hier ist ______.", options: ["niemand", "keiner", "jemand"], correct: "niemand" },
            // Indirekte Fragen
            { q: "Können Sie mir sagen, wie spät es ______?", options: ["ist", "sein", "wäre"], correct: "ist" },
            { q: "Ich weiß nicht, ______ er kommt. (Yes/No question)", options: ["ob", "wenn", "dass"], correct: "ob" },
            { q: "Weißt du, ______ das ist?", options: ["wer", "wo", "dass"], correct: "wer" },
            { q: "Er fragt, ______ der Zug abfährt.", options: ["wann", "ob", "dass"], correct: "wann" }
        ]
    }
};

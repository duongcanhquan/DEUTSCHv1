export const DATA_PRACTICAL_NAIL = {
    id: "prac-nail",
    title: "Chuyên ngành Nail & Beauty (Nâng cao)",
    description: "Từ vựng kỹ thuật, xử lý sự cố và giao tiếp chuyên nghiệp trong tiệm Nail.",
    gradient: "from-pink-600 to-rose-600", // Deeper, more professional color
    // NEW: Motivational Introduction
    introduction: {
        title: "Cơ hội việc làm & Tip khủng",
        text: "Nghề Nail tại Đức đang cực kỳ khát nhân lực. Một thợ Nail giỏi không chỉ cần tay nghề cao mà còn phải biết 'buôn chuyện' (Smalltalk) để giữ khách. Bộ từ vựng này sẽ giúp bạn hiểu rõ các thuật ngữ 'Lifting', 'Refill' để tư vấn chuyên nghiệp, đồng thời dạy bạn những câu giao tiếp khéo léo để khách hàng vui vẻ 'móc ví' Tip thêm cho bạn. Đừng chỉ làm thợ, hãy là một nghệ sĩ biết giao tiếp!",
        icon: "Sparkles"
    },

    groups: [
        {
            id: "g1",
            title: "1. Werkzeuge & Arbeitsplatz (Dụng cụ & Chỗ làm)",
            items: [
                { id: "n-01", de: "der Fräser", vi: "Máy mài (quan trọng nhất)", ipa: "/ˈfʁɛːzɐ/", gender: "der", type: "noun" },
                { id: "n-02", de: "die Bits / Aufsätze", vi: "Đầu mài (các loại đầu lắp vào máy)", ipa: "/bɪts/", gender: "die", type: "noun" },
                { id: "n-03", de: "die Nagelhautzange", vi: "Kìm cắt da", ipa: "/ˈnaːɡl̩ˌhaʊ̯tˌt͡saŋə/", gender: "die", type: "noun" },
                { id: "n-04", de: "der Pusher / Pro-Pusher", vi: "Cây đẩy da (sắt)", ipa: "/ˈpʊʃɐ/", gender: "der", type: "noun" },
                { id: "n-05", de: "die Zelletten", vi: "Giấy lau gel (loại không có xơ)", ipa: "/t͡sɛˈlɛtn̩/", gender: "die", type: "noun" },
                { id: "n-06", de: "der Staubpinsel", vi: "Chổi phủi bụi", ipa: "/ˈʃtaʊ̯pˌpɪnzl̩/", gender: "der", type: "noun" },
                { id: "n-07", de: "die Staubabsaugung", vi: "Máy hút bụi (đặt dưới tay)", ipa: "/ˈʃtaʊ̯pˌʔapzaʊ̯ɡʊŋ/", gender: "die", type: "noun" },
                { id: "n-08", de: "die Arbeitsleuchte", vi: "Đèn bàn làm việc", ipa: "/ˈaʁbaɪ̯t͡sˌlɔʏ̯çtə/", gender: "die", type: "noun" },
                { id: "n-09", de: "der Mundschutz", vi: "Khẩu trang", ipa: "/ˈmʊntˌʃʊt͡s/", gender: "der", type: "noun" },
                { id: "n-10", de: "Einmalhandschuhe", vi: "Găng tay dùng một lần", ipa: "/ˈaɪ̯nmaːlˌhantʃuːə/", gender: "die", type: "noun" }
            ]
        },
        {
            id: "g2",
            title: "2. Materialien & Chemie (Hóa chất & Sản phẩm)",
            items: [
                { id: "m-01", de: "der Primer / Haftvermittler", vi: "Kiềm dầu / Liên kết (bước 1)", ipa: "/ˈpʁaɪ̯mɐ/", gender: "der", type: "noun" },
                { id: "m-02", de: "das Aufbaugel", vi: "Gel đắp (tạo cầu móng, dày)", ipa: "/ˈaʊ̯fbaʊ̯ˌɡeːl/", gender: "das", type: "noun" },
                { id: "m-03", de: "das Versiegelungsgel", vi: "Gel bóng / Top coat (bước cuối)", ipa: "/fɛɐ̯ˈziːɡəlʊŋsˌɡeːl/", gender: "das", type: "noun" },
                { id: "m-04", de: "der Cleaner", vi: "Nước lau gel (lau chất dính)", ipa: "/ˈkliːnɐ/", gender: "der", type: "noun" },
                { id: "m-05", de: "das Nagelöl", vi: "Dầu dưỡng viền móng", ipa: "/ˈnaːɡl̩ˌʔøːl/", gender: "das", type: "noun" },
                { id: "m-06", de: "das Acrylpulver", vi: "Bột Acryl", ipa: "/aˈkʁyːlˌpʊlvɐ/", gender: "das", type: "noun" },
                { id: "m-07", de: "das Liquid", vi: "Nước lưu huỳnh (để đắp bột)", ipa: "/ˈlɪkwɪt/", gender: "das", type: "noun" },
                { id: "m-08", de: "der Tipkleber", vi: "Keo dán móng giả", ipa: "/tɪpˌkleːbɐ/", gender: "der", type: "noun" },
                { id: "m-09", de: "das Desinfektionsmittel", vi: "Cồn/Nước khử trùng", ipa: "/dɛsʔɪnfɛkˈt͡si̯oːnsˌmɪtl̩/", gender: "das", type: "noun" },
                { id: "m-10", de: "Wattepads", vi: "Bông tẩy trang", ipa: "/ˈvatəˌpɛds/", gender: "die", type: "noun" }
            ]
        },
        {
            id: "g3",
            title: "3. Fachbegriffe & Probleme (Thuật ngữ chuyên sâu)",
            items: [
                { id: "t-01", de: "das Lifting", vi: "Vết hở / Không ăn gel (Gel bị bong chân)", ipa: "/ˈlɪftɪŋ/", gender: "das", type: "noun" },
                { id: "t-02", de: "abgebrochen", vi: "móng bị gãy", ipa: "/ˈapɡəˌbʁɔxn̩/", type: "adjective" },
                { id: "t-03", de: "einreißen", vi: "bị xước / rách (móng thật)", ipa: "/ˈaɪ̯nˌʁaɪ̯sn̩/", type: "verb" },
                { id: "t-04", de: "rausgewachsen", vi: "mọc dài ra (chân móng bị hở)", ipa: "/ˈʁaʊ̯sɡəˌvaksn̩/", type: "adjective" },
                { id: "t-05", de: "die Modellage", vi: "Bộ móng đắp (tổng thể)", ipa: "/modɛˈlaːʒə/", gender: "die", type: "noun" },
                { id: "t-06", de: "die Schwitzschicht", vi: "Lớp dính (xuất hiện sau khi hơ đèn)", ipa: "/ˈʃvɪt͡sˌʃɪçt/", gender: "die", type: "noun" },
                { id: "t-07", de: "mattieren", vi: "làm nhám bề mặt (bằng buffer)", ipa: "/maˈtiːʁən/", type: "verb" },
                { id: "t-08", de: "verblenden", vi: "mài dũa cho tệp vào móng thật (mối nối)", ipa: "/fɛɐ̯ˈblɛndn̩/", type: "verb" },
                { id: "t-09", de: "Hitzeentwicklung", vi: "Sinh nhiệt (bị nóng rát khi hơ đèn)", ipa: "/ˈhɪt͡sə/", gender: "die", type: "noun" },
                { id: "t-10", de: "die Naturnagelverstärkung", vi: "Phủ gel trên móng thật (không nối)", ipa: "/.../", gender: "die", type: "noun" }
            ]
        },
        {
            id: "g4",
            title: "4. Design & Formen (Kiểu dáng & Màu sắc)",
            items: [
                { id: "d-01", de: "Babyboomer", vi: "Kiểu loang trắng hồng (Rất phổ biến ở Đức)", ipa: "/beɪbi buːmɐ/", gender: "der", type: "noun" },
                { id: "d-02", de: "French Nails", vi: "Sơn đầu móng trắng", ipa: "", gender: "die (pl)", type: "noun" },
                { id: "d-03", de: "Fullcover", vi: "Sơn full móng (một màu)", ipa: "", gender: "das", type: "noun" },
                { id: "d-04", de: "Mandelform", vi: "Form hạnh nhân (bầu nhọn)", ipa: "", gender: "die", type: "noun" },
                { id: "d-05", de: "Ballerina", vi: "Form thang (như giày múa)", ipa: "", gender: "die", type: "noun" },
                { id: "d-06", de: "Stiletto", vi: "Form nhọn hoắt", ipa: "", gender: "die", type: "noun" },
                { id: "d-07", de: "Farbverlauf / Ombre", vi: "Hiệu ứng loang màu", ipa: "/fɛɐ̯ˈlaʊ̯f/", gender: "der", type: "noun" },
                { id: "d-08", de: "Strasssteine", vi: "Đá đính móng", ipa: "/ˈʃtʁasˌʃtaɪ̯nə/", gender: "die (pl)", type: "noun" }
            ]
        },
        {
            id: "g5",
            title: "5. Kommunikation & Sätze (Giao tiếp thực tế)",
            items: [
                { id: "p-01", de: "Hallo, was machen wir heute?", vi: "Chào chị, hôm nay mình làm gì? (Làm mới/Refill?)", type: "phrase" },
                { id: "p-02", de: "Möchten Sie kürzer oder die Länge lassen?", vi: "Chị muốn cắt ngắn bớt hay giữ nguyên độ dài?", type: "phrase" },
                { id: "p-03", de: "Bitte locker lassen, nicht gegenhalten.", vi: "Thả lỏng tay giúp em, đừng gồng lại (Rất quan trọng).", type: "phrase" },
                { id: "p-04", de: "Wird es heiß in der Lampe?", vi: "Chị có thấy nóng trong đèn không?", type: "phrase" },
                { id: "p-05", de: "Wenn es brennt, bitte Hand rausnehmen.", vi: "Nếu thấy rát quá thì rút tay ra ngay nhé.", type: "phrase" },
                { id: "p-06", de: "Schauen Sie mal, ist die Form okay so?", vi: "Chị ngắm thử xem, form thế này ok chưa?", type: "phrase" },
                { id: "p-07", de: "Haben Sie sich eine Farbe ausgesucht?", vi: "Chị đã chọn được màu nào chưa?", type: "phrase" },
                { id: "p-08", de: "Möchten Sie ein Muster oder Steinchen?", vi: "Chị có muốn vẽ mẫu hay đính đá không?", type: "phrase" },
                { id: "p-09", de: "Bitte Hände waschen, aber ohne Seife.", vi: "Mời rửa tay, nhưng đừng dùng xà phòng nhé (để gel bám tốt).", type: "phrase" },
                { id: "p-10", de: "Sind Sie zufrieden?", vi: "Chị có hài lòng không ạ?", type: "phrase" },
                { id: "p-11", de: "Das macht dann 45 Euro, bitte.", vi: "Tổng cộng hết 45 Euro ạ.", type: "phrase" },
                { id: "p-12", de: "Möchten Sie einen neuen Termin?", vi: "Chị có muốn đặt luôn lịch hẹn lần sau không?", type: "phrase" }
            ]
        }
    ]
};

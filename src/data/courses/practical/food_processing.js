export const DATA_PRACTICAL_FOOD = {
    id: "prac-food",
    title: "Chế biến Thực phẩm & Nhà máy (Nâng cao)",
    // NEW: Motivational Introduction
    introduction: {
        title: "Kỷ luật thép & Thu nhập cao",
        text: "Làm việc trong nhà máy (Fabrik) tại Đức là cơ hội kiếm tiền nhanh nhất cho sinh viên nhờ các khoản phụ cấp (Zuschläge) làm đêm, làm chủ nhật. Tuy nhiên, môi trường này đòi hỏi tính kỷ luật cực cao về vệ sinh và an toàn. Bạn phải hiểu ngay lập tức khi ai đó hét lên 'Achtung!' (Cẩn thận!) hay biết cách báo cáo máy hỏng 'Maschine kaputt'. Bộ từ vựng này sẽ là 'bùa hộ mệnh' giúp bạn làm việc an toàn và hiệu quả.",
        icon: "HardHat"
    },
    description: "Từ vựng chuyên sâu về quy trình vệ sinh, vận hành máy móc, kho vận và giao tiếp với quản lý.",
    gradient: "from-slate-600 to-zinc-700", // Industrial theme

    groups: [
        {
            id: "g1",
            title: "1. Hygiene & Schutzkleidung (Vệ sinh & Bảo hộ)",
            items: [
                { id: "h-01", de: "die Hygieneschleuse", vi: "Cửa khử trùng (phải rửa tay máy mới mở)", ipa: "/hyˈɡi̯eːnəˌʃlɔʏ̯zə/", gender: "die", type: "noun" },
                { id: "h-02", de: "das Haarnetz", vi: "Mũ trùm tóc (bắt buộc phải trùm kín tai)", ipa: "/ˈhaːɐ̯ˌnɛt͡s/", gender: "das", type: "noun" },
                { id: "h-03", de: "der Kittel / Arbeitsmantel", vi: "Áo choàng bảo hộ (trắng)", ipa: "/ˈkɪtl̩/", gender: "der", type: "noun" },
                { id: "h-04", de: "die Gummistiefel", vi: "Ủng cao su (chống nước/trượt)", ipa: "/ˈɡʊmiˌʃtiːfl̩/", gender: "die (pl)", type: "noun" },
                { id: "h-05", de: "der Bartschutz", vi: "Khẩu trang che râu (bắt buộc cho nam)", ipa: "/ˈbaːɐ̯tˌʃʊt͡s/", gender: "der", type: "noun" },
                { id: "h-06", de: "die Sicherheitsschuhe", vi: "Giày bảo hộ mũi sắt (Stahlkappen)", ipa: "/ˈzɪçɐhaɪ̯t͡sˌʃuːə/", gender: "die (pl)", type: "noun" },
                { id: "h-07", de: "der Gehörschutz", vi: "Bịt tai chống ồn", ipa: "/ɡəˈhøːɐ̯ˌʃʊt͡s/", gender: "der", type: "noun" },
                { id: "h-08", de: "die Einweghandschuhe", vi: "Găng tay dùng một lần (Nitrile)", ipa: "/ˈaɪ̯nveːkˌhantʃuːə/", gender: "die (pl)", type: "noun" },
                { id: "h-09", de: "Schmuck ablegen", vi: "Tháo bỏ trang sức (nhẫn, đồng hồ - Cấm kỵ)", type: "phrase" },
                { id: "h-10", de: "Hände desinfizieren", vi: "Khử trùng tay (bước quan trọng nhất)", type: "phrase" }
            ]
        },
        {
            id: "g2",
            title: "2. Am Fließband (Tại dây chuyền sản xuất)",
            items: [
                { id: "p-01", de: "das Fließband", vi: "Băng chuyền", ipa: "/ˈfliːsˌbant/", gender: "das", type: "noun" },
                { id: "p-02", de: "das Tempo", vi: "Tốc độ làm việc", ipa: "/ˈtɛmpo/", gender: "das", type: "noun" },
                { id: "p-03", de: "die Akkordarbeit", vi: "Làm khoán / Làm theo sản phẩm (áp lực cao)", ipa: "/aˈkɔʁtˌʔaʁbaɪ̯t/", gender: "die", type: "noun" },
                { id: "p-04", de: "der Ausschuss", vi: "Hàng lỗi / Phế phẩm (phải loại ra)", ipa: "/ˈaʊ̯sˌʃʊs/", gender: "der", type: "noun" },
                { id: "p-05", de: "aussortieren", vi: "nhặt ra / loại bỏ hàng hỏng", ipa: "/ˈaʊ̯szoʁˌtiːʁən/", type: "verb" },
                { id: "p-06", de: "nachfüllen", vi: "châm thêm nguyên liệu", ipa: "/ˈnaːxˌfʏlən/", type: "verb" },
                { id: "p-07", de: "verpacken", vi: "đóng gói vào bao bì", ipa: "/fɛɐ̯ˈpakn̩/", type: "verb" },
                { id: "p-08", de: "etikettieren", vi: "dán tem nhãn", ipa: "/etikɛˈtiːʁən/", type: "verb" },
                { id: "p-09", de: "wiegen", vi: "cân trọng lượng", ipa: "/ˈviːɡn̩/", type: "verb" },
                { id: "p-10", de: "die Qualitätskontrolle", vi: "Kiểm tra chất lượng (QC)", ipa: "/kvaliˈtɛːt͡skɔnˌtʁɔlə/", gender: "die", type: "noun" }
            ]
        },
        {
            id: "g3",
            title: "3. Maschinen & Technik (Máy móc & Kỹ thuật)",
            items: [
                { id: "m-01", de: "der Not-Aus-Schalter", vi: "Nút dừng khẩn cấp (Màu đỏ to - Phải biết!)", ipa: "/noːt aʊ̯s/", gender: "der", type: "noun" },
                { id: "m-02", de: "die Waage", vi: "Cái cân điện tử", ipa: "/ˈvaːɡə/", gender: "die", type: "noun" },
                { id: "m-03", de: "der Hubwagen", vi: "Xe nâng tay (kéo Pallet)", ipa: "/ˈhuːpˌvaːɡn̩/", gender: "der", type: "noun" },
                { id: "m-04", de: "die Ameise", vi: "Xe nâng điện (tên lóng hay dùng)", ipa: "/ˈaːmaɪ̯zə/", gender: "die", type: "noun" },
                { id: "m-05", de: "die Folie", vi: "Màng bọc thực phẩm/Pallet", ipa: "/ˈfoːli̯ə/", gender: "die", type: "noun" },
                { id: "m-06", de: "das Messer", vi: "Dao (trong lò mổ rất sắc)", ipa: "/ˈmɛsɐ/", gender: "das", type: "noun" },
                { id: "m-07", de: "die Kiste / der Kasten", vi: "Két nhựa / Thùng chứa", ipa: "/ˈkɪstə/", gender: "die", type: "noun" },
                { id: "m-08", de: "einschalten / ausschalten", vi: "bật máy / tắt máy", type: "verb" },
                { id: "m-09", de: "reinigen", vi: "vệ sinh máy (thường làm cuối ca)", ipa: "/ˈʁaɪ̯nɪɡn̩/", type: "verb" },
                { id: "m-10", de: "die Störung", vi: "Sự cố / Máy bị lỗi", ipa: "/ˈʃtøːʁʊŋ/", gender: "die", type: "noun" }
            ]
        },
        {
            id: "g4",
            title: "4. Warnungen & Sicherheit (Cảnh báo & An toàn)",
            items: [
                { id: "w-01", de: "Achtung!", vi: "Chú ý! Cẩn thận!", type: "phrase" },
                { id: "w-02", de: "Vorsicht, heiß!", vi: "Cẩn thận, nóng đấy!", type: "phrase" },
                { id: "w-03", de: "Vorsicht, Stapler!", vi: "Cẩn thận, xe nâng đang tới!", type: "phrase" },
                { id: "w-04", de: "Rutschgefahr!", vi: "Coi chừng trơn trượt (sàn ướt)!", type: "phrase" },
                { id: "w-05", de: "Nicht anfassen!", vi: "Cấm sờ vào!", type: "phrase" },
                { id: "w-06", de: "Helm tragen!", vi: "Phải đội mũ bảo hiểm!", type: "phrase" },
                { id: "w-07", de: "Rauchen verboten!", vi: "Cấm hút thuốc!", type: "phrase" },
                { id: "w-08", de: "Finger weg!", vi: "Bỏ tay ra! (Rất nguy hiểm)", type: "phrase" },
                { id: "w-09", de: "Weg da!", vi: "Tránh ra! (Khi xe hàng đang lao tới)", type: "phrase" },
                { id: "w-10", de: "Stopp!", vi: "Dừng lại ngay!", type: "phrase" }
            ]
        },
        {
            id: "g5",
            title: "5. Probleme melden (Báo cáo sự cố)",
            items: [
                { id: "x-01", de: "Die Maschine steht.", vi: "Máy bị đứng rồi / không chạy.", type: "phrase" },
                { id: "x-02", de: "Es gibt einen Stau.", vi: "Băng chuyền bị kẹt / Ùn tắc hàng.", type: "phrase" },
                { id: "x-03", de: "Das Etikett fehlt.", vi: "Sản phẩm này thiếu tem.", type: "phrase" },
                { id: "x-04", de: "Die Verpackung ist kaputt.", vi: "Bao bì bị rách/hỏng.", type: "phrase" },
                { id: "x-05", de: "Wir haben kein Material mehr.", vi: "Hết nguyên liệu rồi.", type: "phrase" },
                { id: "x-06", de: "Das Band ist zu schnell.", vi: "Băng chuyền chạy nhanh quá (làm không kịp).", type: "phrase" },
                { id: "x-07", de: "Da ist Glas/Plastik im Essen.", vi: "Có mảnh kính/nhựa lẫn trong thực phẩm (Báo động đỏ!).", type: "phrase" }
            ]
        },
        {
            id: "g6",
            title: "6. Kommunikation mit dem Vorarbeiter (Giao tiếp với Tổ trưởng)",
            items: [
                { id: "k-01", de: "Was soll ich machen?", vi: "Tôi phải làm gì bây giờ?", type: "phrase" },
                { id: "k-02", de: "Wo soll ich das hinstellen?", vi: "Tôi để cái này ở đâu?", type: "phrase" },
                { id: "k-03", de: "Darf ich kurz auf Toilette?", vi: "Tôi đi vệ sinh một lát được không? (Phải xin phép để có người thay thế)", type: "phrase" },
                { id: "k-04", de: "Wann ist Pause?", vi: "Khi nào thì được nghỉ giải lao?", type: "phrase" },
                { id: "k-05", de: "Mir ist schwindelig / schlecht.", vi: "Tôi thấy chóng mặt / buồn nôn (Say nóng/lạnh).", type: "phrase" },
                { id: "k-06", de: "Ich habe mich geschnitten.", vi: "Tôi bị đứt tay rồi.", type: "phrase" },
                { id: "k-07", de: "Kann mir jemand helfen?", vi: "Có ai giúp tôi một tay không?", type: "phrase" },
                { id: "k-08", de: "Ich bin fertig.", vi: "Tôi làm xong rồi.", type: "phrase" }
            ]
        },
        {
            id: "g7",
            title: "7. Lager & Kühlhaus (Kho & Kho lạnh)",
            items: [
                { id: "l-01", de: "das Kühlhaus", vi: "Kho lạnh (Thường 0-4 độ)", ipa: "/ˈkyːlˌhaʊ̯s/", gender: "das", type: "noun" },
                { id: "l-02", de: "der Tiefkühler (TK)", vi: "Kho đông lạnh (Âm 18 độ - Cực lạnh)", ipa: "", gender: "der", type: "noun" },
                { id: "l-03", de: "die Palette stapeln", vi: "Xếp chồng pallet lên nhau", type: "phrase" },
                { id: "l-04", de: "einstretchen", vi: "quấn màng co (để giữ cố định hàng trên pallet)", ipa: "/.../", type: "verb" },
                { id: "l-05", de: "der Lieferschein", vi: "Phiếu giao hàng", ipa: "/ˈliːfɐˌʃaɪ̯n/", gender: "der", type: "noun" },
                { id: "l-06", de: "das Lager", vi: "Kho chứa", ipa: "/ˈlaːɡɐ/", gender: "das", type: "noun" },
                { id: "l-07", de: "vorsichtig", vi: "cẩn thận (hàng dễ vỡ)", ipa: "/ˈfoːɐ̯ˌzɪçtɪç/", type: "adjective" },
                { id: "l-08", de: "schwer", vi: "nặng", ipa: "/ʃveːɐ̯/", type: "adjective" }
            ]
        },
        {
            id: "g8",
            title: "8. Arbeitszeit & Schicht (Giờ giấc & Ca kíp)",
            items: [
                { id: "z-01", de: "die Frühschicht", vi: "Ca sáng (thường bắt đầu 5-6h)", ipa: "", gender: "die", type: "noun" },
                { id: "z-02", de: "die Spätschicht", vi: "Ca chiều (thường đến 22h)", ipa: "", gender: "die", type: "noun" },
                { id: "z-03", de: "die Nachtschicht", vi: "Ca đêm (Lương cao nhất)", ipa: "", gender: "die", type: "noun" },
                { id: "z-04", de: "einstempeln", vi: "bấm thẻ vào làm", ipa: "/ˈaɪ̯nˌʃtɛmpl̩n/", type: "verb" },
                { id: "z-05", de: "ausstempeln", vi: "bấm thẻ ra về", ipa: "/ˈaʊ̯sˌʃtɛmpl̩n/", type: "verb" },
                { id: "z-06", de: "Überstunden", vi: "Làm thêm giờ", ipa: "/ˈyːbɐˌʃtʊndn̩/", gender: "die (pl)", type: "noun" },
                { id: "z-07", de: "der Zuschlag", vi: "Tiền phụ cấp (đêm/CN)", ipa: "/ˈt͡suːˌʃlaːk/", gender: "der", type: "noun" },
                { id: "z-08", de: "pünktlich", vi: "đúng giờ (Rất quan trọng ở Đức)", ipa: "/ˈpʏŋktlɪç/", type: "adjective" }
            ]
        }
    ]
};

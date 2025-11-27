export const DATA_PRACTICAL_HANDWERK = {
    id: "prac-handwerk",
    title: "Thợ Điện - Nước (Handwerk & Technik)",
    introduction: {
        title: "Nghề 'Vàng' tại Đức",
        text: "Người Đức có câu: 'Handwerk hat goldenen Boden' (Nghề thợ có nền tảng bằng vàng). Thợ điện nước (SHK & Elektro) là những người được săn đón nhất với mức lương rất cao. Tuy nhiên, tiêu chuẩn kỹ thuật Đức cực kỳ khắt khe (DIN-Normen). Bạn cần biết chính xác tên dụng cụ như 'Zollstock', 'Wasserwaage', và cách giao tiếp lịch sự khi vào nhà khách hàng (Kundendienst). Bộ từ vựng này là hành trang để bạn trở thành một 'Meister' trong tương lai.",
        icon: "Wrench" // Icon representing tools/repair
    },
    description: "Từ vựng chuyên ngành về dụng cụ, vật liệu điện/nước, an toàn lao động và giao tiếp với chủ nhà.",
    gradient: "from-blue-600 to-cyan-700", // Technical/Blue collar theme

    groups: [
        {
            id: "g1",
            title: "1. Werkzeugkiste (Hộp dụng cụ cơ bản)",
            items: [
                { id: "t-01", de: "der Zollstock", vi: "Thước gấp (Vật bất ly thân của thợ Đức)", ipa: "/ˈt͡sɔlˌʃtɔk/", gender: "der", type: "noun" },
                { id: "t-02", de: "die Wasserwaage", vi: "Thước thủy (để đo cân bằng)", ipa: "/ˈvasɐˌvaːɡə/", gender: "die", type: "noun" },
                { id: "t-03", de: "der Akkuschrauber", vi: "Máy bắt vít dùng pin", ipa: "/ˈakuˌʃʁaʊ̯bɐ/", gender: "der", type: "noun" },
                { id: "t-04", de: "die Bohrmaschine", vi: "Máy khoan", ipa: "/ˈboːɐ̯maˌʃiːnə/", gender: "die", type: "noun" },
                { id: "t-05", de: "der Schraubenzieher", vi: "Tua vít", ipa: "/ˈʃʁaʊ̯bn̩ˌt͡siːɐ/", gender: "der", type: "noun" },
                { id: "t-06", de: "die Zange / Rohrzange", vi: "Kìm / Kìm nước", ipa: "/ˈt͡saŋə/", gender: "die", type: "noun" },
                { id: "t-07", de: "der Hammer", vi: "Cái búa", ipa: "/ˈhamɐ/", gender: "der", type: "noun" },
                { id: "t-08", de: "der Seitenschneider", vi: "Kìm cắt dây điện", ipa: "/ˈzaɪ̯tn̩ˌʃnaɪ̯dɐ/", gender: "der", type: "noun" },
                { id: "t-09", de: "der Spannungsprüfer", vi: "Bút thử điện / Thiết bị đo điện", ipa: "/ˈʃpanʊŋsˌpʁyːfɐ/", gender: "der", type: "noun" },
                { id: "t-10", de: "die Leiter", vi: "Cái thang", ipa: "/ˈlaɪ̯tɐ/", gender: "die", type: "noun" }
            ]
        },
        {
            id: "g2",
            title: "2. Sanitär & Wasser (Hệ thống Nước)",
            items: [
                { id: "s-01", de: "der Wasserhahn", vi: "Vòi nước", ipa: "/ˈvasɐˌhaːn/", gender: "der", type: "noun" },
                { id: "s-02", de: "der Abfluss", vi: "Lỗ thoát nước / Cống", ipa: "/ˈapˌflʊs/", gender: "der", type: "noun" },
                { id: "s-03", de: "das Rohr", vi: "Đường ống", ipa: "/ʁoːɐ̯/", gender: "das", type: "noun" },
                { id: "s-04", de: "die Dichtung", vi: "Gioăng cao su / Vòng đệm", ipa: "/ˈdɪçtʊŋ/", gender: "die", type: "noun" },
                { id: "s-05", de: "verstopft", vi: "bị tắc nghẽn", ipa: "/fɛɐ̯ˈʃtɔp͡ft/", type: "adjective" },
                { id: "s-06", de: "undicht", vi: "bị rò rỉ / hở", ipa: "/ˈʊnˌdɪçt/", type: "adjective" },
                { id: "s-07", de: "tropfen", vi: "nhỏ giọt (vòi nước bị rỉ)", ipa: "/ˈtʁɔp͡fn̩/", type: "verb" },
                { id: "s-08", de: "das Waschbecken", vi: "Bồn rửa mặt", ipa: "/ˈvaʃˌbɛkn̩/", gender: "das", type: "noun" },
                { id: "s-09", de: "die Heizung", vi: "Lò sưởi (Thợ nước thường sửa cả sưởi)", ipa: "/ˈhaɪ̯t͡sʊŋ/", gender: "die", type: "noun" },
                { id: "s-10", de: "der Haupthahn", vi: "Van nước tổng (Cần khóa trước khi sửa)", ipa: "/ˈhaʊ̯ptˌhaːn/", gender: "der", type: "noun" }
            ]
        },
        {
            id: "g3",
            title: "3. Elektro & Strom (Hệ thống Điện)",
            items: [
                { id: "e-01", de: "die Steckdose", vi: "Ổ cắm điện", ipa: "/ˈʃtɛkˌdoːzə/", gender: "die", type: "noun" },
                { id: "e-02", de: "der Schalter / Lichtschalter", vi: "Công tắc đèn", ipa: "/ˈʃaltɐ/", gender: "der", type: "noun" },
                { id: "e-03", de: "die Sicherung", vi: "Cầu chì / Aptomat", ipa: "/ˈzɪçəʁʊŋ/", gender: "die", type: "noun" },
                { id: "e-04", de: "das Kabel", vi: "Dây cáp điện", ipa: "/ˈkaːbl̩/", gender: "das", type: "noun" },
                { id: "e-05", de: "der Stromausfall", vi: "Mất điện", ipa: "/ˈʃtʁoːmˌʔaʊ̯sfal/", gender: "der", type: "noun" },
                { id: "e-06", de: "anschließen", vi: "đấu nối / kết nối (thiết bị)", ipa: "/ˈanˌʃliːsn̩/", type: "verb" },
                { id: "e-07", de: "der Kurzschluss", vi: "Chập mạch / Đoản mạch", ipa: "/ˈkʊʁt͡sˌʃlʊs/", gender: "der", type: "noun" },
                { id: "e-08", de: "die Glühbirne", vi: "Bóng đèn dây tóc", ipa: "/ˈɡlyːˌbɪʁnə/", gender: "die", type: "noun" },
                { id: "e-09", de: "die Leitung", vi: "Đường dây dẫn", ipa: "/ˈlaɪ̯tʊŋ/", gender: "die", type: "noun" },
                { id: "e-10", de: "isolieren", vi: "cách điện / bọc dây", ipa: "/izoˈliːʁən/", type: "verb" }
            ]
        },
        {
            id: "g4",
            title: "4. Tätigkeiten (Thao tác kỹ thuật)",
            items: [
                { id: "v-01", de: "bohren", vi: "khoan tường", ipa: "/ˈboːʁən/", type: "verb" },
                { id: "v-02", de: "schrauben", vi: "vặn vít", ipa: "/ˈʃʁaʊ̯bn̩/", type: "verb" },
                { id: "v-03", de: "messen", vi: "đo đạc", ipa: "/ˈmɛsn̩/", type: "verb" },
                { id: "v-04", de: "reparieren", vi: "sửa chữa", ipa: "/ʁepaˈʁiːʁən/", type: "verb" },
                { id: "v-05", de: "installieren", vi: "lắp đặt", ipa: "/ɪnstaˈliːʁən/", type: "verb" },
                { id: "v-06", de: "austauschen", vi: "thay thế (linh kiện hỏng)", ipa: "/ˈaʊ̯sˌtaʊ̯ʃn̩/", type: "verb" },
                { id: "v-07", de: "abdichten", vi: "làm kín / trét keo silicon", ipa: "/ˈapˌdɪçtn̩/", type: "verb" },
                { id: "v-08", de: "löten", vi: "hàn (ống đồng/mạch điện)", ipa: "/ˈløːtn̩/", type: "verb" },
                { id: "v-09", de: "stemmen", vi: "đục tường (để đi dây/ống)", ipa: "/ˈʃtɛmən/", type: "verb" },
                { id: "v-10", de: "montieren", vi: "lắp ráp", ipa: "/mɔnˈtiːʁən/", type: "verb" }
            ]
        },
        {
            id: "g5",
            title: "5. Sicherheit (An toàn lao động)",
            items: [
                { id: "w-01", de: "Strom abschalten", vi: "Ngắt điện (Bước 1 quan trọng nhất)", type: "phrase" },
                { id: "w-02", de: "Sicherung raus!", vi: "Tháo cầu chì ra!", type: "phrase" },
                { id: "w-03", de: "Haupthahn zudrehen", vi: "Khóa van nước tổng", type: "phrase" },
                { id: "w-04", de: "Vorsicht, Spannung!", vi: "Cẩn thận, có điện cao thế!", type: "phrase" },
                { id: "w-05", de: "Schutzbrille tragen", vi: "Đeo kính bảo hộ (khi khoan)", type: "phrase" },
                { id: "w-06", de: "Nicht anfassen!", vi: "Cấm sờ vào!", type: "phrase" },
                { id: "w-07", de: "Erdung prüfen", vi: "Kiểm tra tiếp địa", type: "phrase" },
                { id: "w-08", de: "Gefahr!", vi: "Nguy hiểm!", type: "phrase" }
            ]
        },
        {
            id: "g6",
            title: "6. Beim Kunden (Giao tiếp tại nhà khách)",
            items: [
                { id: "c-01", de: "Guten Tag, Handwerker!", vi: "Chào bác, thợ sửa chữa đến đây ạ! (Câu chào cửa miệng)", type: "phrase" },
                { id: "c-02", de: "Wo ist das Problem?", vi: "Vấn đề nằm ở đâu ạ?", type: "phrase" },
                { id: "c-03", de: "Ich muss kurz in den Keller.", vi: "Cháu cần xuống tầng hầm một chút.", type: "phrase" },
                { id: "c-04", de: "Wo ist der Sicherungskasten?", vi: "Hộp cầu chì nằm ở đâu ạ?", type: "phrase" },
                { id: "c-05", de: "Wir müssen das Wasser abstellen.", vi: "Chúng tôi phải cắt nước tạm thời.", type: "phrase" },
                { id: "c-06", de: "Das dauert ca. eine Stunde.", vi: "Sẽ mất khoảng 1 tiếng ạ.", type: "phrase" },
                { id: "c-07", de: "Haben Sie einen Staubsauger?", vi: "Bác có máy hút bụi không? (Để dọn bụi khoan)", type: "phrase" },
                { id: "c-08", de: "Hier bitte unterschreiben.", vi: "Mời bác ký xác nhận vào đây.", type: "phrase" },
                { id: "c-09", de: "Wir schicken die Rechnung.", vi: "Chúng tôi sẽ gửi hóa đơn sau.", type: "phrase" },
                { id: "c-10", de: "Alles erledigt.", vi: "Mọi việc xong xuôi rồi ạ.", type: "phrase" }
            ]
        }
    ]
};

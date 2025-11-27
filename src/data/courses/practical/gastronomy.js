export const DATA_PRACTICAL_GASTRO = {
    id: "prac-gastro",
    title: "Chuyên ngành Nhà hàng & Phục vụ ",
    // NEW: Motivational Introduction
    introduction: {
        title: "Tại sao bài học này quan trọng?",
        text: "Trong ngành nhà hàng Đức, 'Trinkgeld' (Tiền Tip) có thể chiếm tới 30-50% thu nhập của bạn. Khách hàng Đức rất hào phóng nhưng cũng khó tính. Nếu bạn hiểu rõ 'Getrennt zahlen' (trả riêng), biết hỏi độ chín của Bít tết, hay đơn giản là biết nói 'Darf ich abräumen?' (Tôi dọn đĩa được chưa?) thay vì lẳng lặng lấy đĩa đi, bạn sẽ được đánh giá là chuyên nghiệp. Vốn từ vựng này chính là chìa khóa để bạn không chỉ 'làm được việc' mà còn 'làm giàu' từ nghề tay trái này!",
        icon: "Banknote" // Icon name for UI
    },
    description: "Từ vựng chuyên sâu về đồ uống, món ăn, dụng cụ và kỹ năng xử lý tình huống khó.",
    gradient: "from-orange-500 to-amber-600",

    groups: [
        {
            id: "g1",
            title: "1. Werkzeuge & Tischkultur (Dụng cụ & Bàn ăn)",
            items: [
                { id: "g-01", de: "das Tablett", vi: "Cái khay bưng đồ (kỹ năng cân bằng là bắt buộc)", ipa: "/taˈblɛt/", gender: "das", type: "noun" },
                { id: "g-02", de: "der Kellnerblock", vi: "Sổ ghi order", ipa: "/ˈkɛlnɐˌblɔk/", gender: "der", type: "noun" },
                { id: "g-03", de: "der Geldbeutel", vi: "Ví tiền phục vụ (to, nhiều ngăn)", ipa: "/ˈɡɛltˌbɔʏ̯tl̩/", gender: "der", type: "noun" },
                { id: "g-04", de: "der Korkenzieher", vi: "Đồ khui rượu vang", ipa: "/ˈkɔʁkn̩ˌt͡siːɐ/", gender: "der", type: "noun" },
                { id: "g-05", de: "der Flaschenöffner", vi: "Đồ khui bia", ipa: "/ˈflaʃn̩ˌʔœfnɐ/", gender: "der", type: "noun" },
                { id: "g-06", de: "das Besteck", vi: "Bộ dao dĩa thìa", ipa: "/bəˈʃtɛk/", gender: "das", type: "noun" },
                { id: "g-07", de: "die Serviette", vi: "Khăn ăn", ipa: "/zɛʁˈvi̯ɛtə/", gender: "die", type: "noun" },
                { id: "g-08", de: "der Aschenbecher", vi: "Gạt tàn thuốc", ipa: "/ˈaʃn̩ˌbɛçɐ/", gender: "der", type: "noun" },
                { id: "g-09", de: "der Bierdeckel", vi: "Lót ly bia (bằng giấy)", ipa: "/ˈbiːɐ̯ˌdɛkl̩/", gender: "der", type: "noun" },
                { id: "g-10", de: "das Geschirrtuch", vi: "Khăn lau ly/bát đĩa", ipa: "/ɡəˈʃɪʁˌtuːx/", gender: "das", type: "noun" },
                { id: "g-11", de: "die Schürze", vi: "Tạp dề", ipa: "/ˈʃʏʁt͡sə/", gender: "die", type: "noun" },
                { id: "g-12", de: "der Zapfhahn", vi: "Vòi rót bia", ipa: "/ˈt͡sapfˌhaːn/", gender: "der", type: "noun" }
            ]
        },
        {
            id: "g2",
            title: "2. Getränke & Bar (Đồ uống & Quầy Bar)",
            items: [
                { id: "b-01", de: "Vom Fass", vi: "Bia tươi (rót từ vòi)", ipa: "/fɔm fas/", type: "phrase" },
                { id: "b-02", de: "das Weizenbier / Weißbier", vi: "Bia lúa mì (đặc sản miền Nam)", ipa: "/ˈvaɪ̯t͡sn̩ˌbiːɐ̯/", gender: "das", type: "noun" },
                { id: "b-03", de: "das Pils", vi: "Bia Pilsner (đắng nhẹ, phổ biến)", ipa: "/pɪls/", gender: "das", type: "noun" },
                { id: "b-04", de: "das Radler", vi: "Bia pha nước chanh", ipa: "/ˈʁaːdlɐ/", gender: "das", type: "noun" },
                { id: "b-05", de: "die Schorle", vi: "Nước trái cây pha soda (Apfelschorle)", ipa: "/ˈʃɔʁlə/", gender: "die", type: "noun" },
                { id: "b-06", de: "Spezi / Cola-Mix", vi: "Cola pha nước cam", ipa: "/ˈʃpeːt͡si/", gender: "die", type: "noun" },
                { id: "b-07", de: "Stilles Wasser", vi: "Nước lọc không ga", ipa: "", gender: "das", type: "noun" },
                { id: "b-08", de: "Wasser mit Sprudel / Spritzig", vi: "Nước khoáng có ga (Classic)", ipa: "", gender: "das", type: "noun" },
                { id: "b-09", de: "Leitungswasser", vi: "Nước máy (Thường miễn phí nhưng ít phục vụ)", ipa: "", gender: "das", type: "noun" },
                { id: "b-10", de: "der Espresso", vi: "Cà phê đậm đặc", ipa: "/ɛsˈpʁɛso/", gender: "der", type: "noun" },
                { id: "b-11", de: "der Cappuccino", vi: "Cà phê sữa bọt", ipa: "/kapʊˈtʃiːno/", gender: "der", type: "noun" },
                { id: "b-12", de: "trockener Wein", vi: "Rượu vang chát (không ngọt)", ipa: "", gender: "der", type: "noun" }
            ]
        },
        {
            id: "g3",
            title: "3. Speisekarte & Küche (Thực đơn & Bếp)",
            items: [
                { id: "f-01", de: "die Vorspeise", vi: "Món khai vị", ipa: "/ˈfoːɐ̯ˌʃpaɪ̯zə/", gender: "die", type: "noun" },
                { id: "f-02", de: "der Hauptgang", vi: "Món chính", ipa: "/ˈhaʊ̯ptˌɡaŋ/", gender: "der", type: "noun" },
                { id: "f-03", de: "das Dessert / der Nachtisch", vi: "Món tráng miệng", ipa: "/dɛˈseːɐ̯/", gender: "das", type: "noun" },
                { id: "f-04", de: "die Beilage", vi: "Món ăn kèm (Khoai, Salad...)", ipa: "/ˈbaɪ̯ˌlaːɡə/", gender: "die", type: "noun" },
                { id: "f-05", de: "das Schnitzel", vi: "Thịt tẩm bột chiên (Món quốc dân)", ipa: "/ˈʃnɪt͡sl̩/", gender: "das", type: "noun" },
                { id: "f-06", de: "die Bratwurst", vi: "Xúc xích nướng", ipa: "/ˈbʁaːtˌvʊʁst/", gender: "die", type: "noun" },
                { id: "f-07", de: "Pommes frites", vi: "Khoai tây chiên", ipa: "/ˈpɔməs/", gender: "die (pl)", type: "noun" },
                { id: "f-08", de: "vegan / vegetarisch", vi: "Thuần chay / Ăn chay", ipa: "", type: "adjective" },
                { id: "f-09", de: "laktosefrei", vi: "Không có sữa (cho người dị ứng)", ipa: "", type: "adjective" },
                { id: "f-10", de: "das Tagesgericht", vi: "Món trong ngày (Giá rẻ)", ipa: "", gender: "das", type: "noun" }
            ]
        },
        {
            id: "g4",
            title: "4. Tätigkeiten (Thao tác công việc)",
            items: [
                { id: "v-01", de: "bonieren", vi: "nhập món vào máy POS (quan trọng)", ipa: "/boˈniːʁən/", type: "verb" },
                { id: "v-02", de: "zapfen", vi: "rót bia từ vòi (kỹ thuật khó)", ipa: "/ˈt͡sap͡fn̩/", type: "verb" },
                { id: "v-03", de: "servieren", vi: "bưng bê/phục vụ", ipa: "/zɛʁˈviːʁən/", type: "verb" },
                { id: "v-04", de: "abräumen", vi: "dọn bàn (khi khách ăn xong)", ipa: "/ˈapˌʁɔʏ̯mən/", type: "verb" },
                { id: "v-05", de: "kassieren", vi: "thu tiền", ipa: "/kaˈsiːʁən/", type: "verb" },
                { id: "v-06", de: "polieren", vi: "lau bóng ly/dao dĩa (trước khi xếp)", ipa: "/poˈliːʁən/", type: "verb" },
                { id: "v-07", de: "eindecken", vi: "setup bàn ăn (khăn, dao dĩa)", ipa: "/ˈaɪ̯nˌdɛkn̩/", type: "verb" },
                { id: "v-08", de: "empfehlen", vi: "giới thiệu/gợi ý món", ipa: "/ɛmˈp͡feːlən/", type: "verb" },
                { id: "v-09", de: "reservieren", vi: "đặt bàn trước", ipa: "/ʁezɛʁˈviːʁən/", type: "verb" }
            ]
        },
        {
            id: "g5",
            title: "5. Begrüßung & Platzierung (Chào & Xếp chỗ)",
            items: [
                { id: "p-01", de: "Guten Abend! Haben Sie reserviert?", vi: "Chào buổi tối! Quý khách đặt bàn chưa?", type: "phrase" },
                { id: "p-02", de: "Für wie viele Personen?", vi: "Cho mấy người ạ?", type: "phrase" },
                { id: "p-03", de: "Folgen Sie mir bitte.", vi: "Mời đi theo tôi.", type: "phrase" },
                { id: "p-04", de: "Möchten Sie drinnen oder draußen sitzen?", vi: "Quý khách thích ngồi trong nhà hay ngoài trời?", type: "phrase" },
                { id: "p-05", de: "Hier ist die Speisekarte.", vi: "Gửi quý khách thực đơn.", type: "phrase" },
                { id: "p-06", de: "Darf ich Ihnen die Jacke abnehmen?", vi: "Tôi cất áo khoác giúp quý khách nhé?", type: "phrase" }
            ]
        },
        {
            id: "g6",
            title: "6. Bestellung aufnehmen (Ghi Order)",
            items: [
                { id: "o-01", de: "Möchten Sie schon etwas trinken?", vi: "Quý khách uống gì trước không ạ?", type: "phrase" },
                { id: "o-02", de: "Was darf ich Ihnen bringen?", vi: "Tôi có thể mang gì cho quý khách?", type: "phrase" },
                { id: "o-03", de: "Haben Sie schon gewählt?", vi: "Quý khách chọn xong món chưa?", type: "phrase" },
                { id: "o-04", de: "Wie möchten Sie Ihr Steak? (Blutig, Medium, Durch)", vi: "Quý khách muốn ăn bít tết chín thế nào? (Tái, Vừa, Chín kỹ)", type: "phrase" },
                { id: "o-05", de: "Möchten Sie Pommes oder Reis dazu?", vi: "Quý khách ăn kèm khoai chiên hay cơm?", type: "phrase" },
                { id: "o-06", de: "Haben Sie noch einen Wunsch?", vi: "Quý khách còn cần gì nữa không?", type: "phrase" }
            ]
        },
        {
            id: "g7",
            title: "7. Während des Essens (Trong khi ăn)",
            items: [
                { id: "e-01", de: "Hat es Ihnen geschmeckt?", vi: "Quý khách ăn có ngon miệng không?", type: "phrase" },
                { id: "e-02", de: "Ist alles in Ordnung?", vi: "Mọi thứ ổn cả chứ ạ?", type: "phrase" },
                { id: "e-03", de: "Darf es noch etwas zu trinken sein?", vi: "Quý khách dùng thêm nước không?", type: "phrase" },
                { id: "e-04", de: "Darf ich abräumen?", vi: "Tôi dọn đĩa này được chưa ạ?", type: "phrase" },
                { id: "e-05", de: "Möchten Sie noch ein Dessert?", vi: "Quý khách có dùng tráng miệng không?", type: "phrase" },
                { id: "e-06", de: "Einen Kaffee oder Espresso aufs Haus?", vi: "Mời quý khách một ly cà phê (nhà hàng mời)?", type: "phrase" }
            ]
        },
        {
            id: "g8",
            title: "8. Reklamation & Probleme (Xử lý khiếu nại)",
            items: [
                { id: "r-01", de: "Entschuldigung, das war mein Fehler.", vi: "Xin lỗi, đó là lỗi của tôi.", type: "phrase" },
                { id: "r-02", de: "Ich bringe Ihnen sofort ein neues.", vi: "Tôi sẽ mang cái mới ra ngay.", type: "phrase" },
                { id: "r-03", de: "Ich frage sofort in der Küche nach.", vi: "Để tôi hỏi lại nhà bếp ngay.", type: "phrase" },
                { id: "r-04", de: "Das tut mir leid. Das Essen geht aufs Haus.", vi: "Rất xin lỗi. Bữa này nhà hàng mời.", type: "phrase" },
                { id: "r-05", de: "Ist die Suppe zu kalt?", vi: "Súp bị nguội quá phải không ạ?", type: "phrase" },
                { id: "r-06", de: "Einen Moment bitte, ich hole meinen Kollegen.", vi: "Chờ chút, tôi gọi đồng nghiệp ra (khi không hiểu).", type: "phrase" }
            ]
        },
        {
            id: "g9",
            title: "9. Bezahlen & Verabschiedung (Thanh toán)",
            items: [
                { id: "z-01", de: "Zusammen oder getrennt?", vi: "Quý khách trả chung hay trả riêng? (Câu quan trọng nhất)", type: "phrase" },
                { id: "z-02", de: "Bar oder mit Karte?", vi: "Tiền mặt hay thẻ ạ?", type: "phrase" },
                { id: "z-03", de: "Das macht 45 Euro.", vi: "Hết 45 Euro ạ.", type: "phrase" },
                { id: "z-04", de: "Stimmt so. (Khách nói)", vi: "Khỏi thối lại tiền thừa (Tiền bo).", type: "phrase" },
                { id: "z-05", de: "Brauchen Sie einen Beleg / eine Quittung?", vi: "Quý khách cần hóa đơn không?", type: "phrase" },
                { id: "z-06", de: "Das Kartengerät funktioniert gerade nicht.", vi: "Máy thẻ đang bị hỏng ạ.", type: "phrase" },
                { id: "z-07", de: "Vielen Dank für das Trinkgeld!", vi: "Cảm ơn tiền bo ạ!", type: "phrase" },
                { id: "z-08", de: "Schönen Abend noch! Auf Wiedersehen!", vi: "Chúc buổi tối vui vẻ! Hẹn gặp lại!", type: "phrase" }
            ]
        }
    ]
};

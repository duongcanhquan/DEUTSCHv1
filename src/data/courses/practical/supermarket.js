export const DATA_PRACTICAL_SUPERMARKET = {
    id: "prac-supermarket",
    title: "Làm việc tại Siêu thị (Supermarkt)",
    description: "Từ vựng nghiệp vụ bán lẻ, quầy thu ngân, sắp xếp hàng hóa và giao tiếp với khách hàng.",
    gradient: "from-yellow-500 to-lime-600", // Fresh/Grocery theme

    groups: [
        {
            id: "g1",
            title: "1. An der Kasse (Tại quầy thu ngân)",
            items: [
                { id: "s-01", de: "die Kasse", vi: "Quầy thu ngân / Máy tính tiền", ipa: "/ˈkasə/", gender: "die", type: "noun" },
                { id: "s-02", de: "das Kassenband", vi: "Băng chuyền thanh toán", ipa: "/ˈkasn̩ˌbant/", gender: "das", type: "noun" },
                { id: "s-03", de: "der Warentrenner", vi: "Thanh chắn hàng (chia đồ giữa 2 khách)", ipa: "/ˈvaːʁənˌtʁɛnɐ/", gender: "der", type: "noun" },
                { id: "s-04", de: "der Pfandbon", vi: "Phiếu trả vỏ chai (đổi tiền)", ipa: "/ˈp͡fantˌbɔ̃ː/", gender: "der", type: "noun" },
                { id: "s-05", de: "der Kassenzettel / Bon", vi: "Hóa đơn thanh toán", ipa: "/ˈkasn̩ˌt͡sɛtl̩/", gender: "der", type: "noun" },
                { id: "s-06", de: "die EC-Karte", vi: "Thẻ ngân hàng (Debit)", ipa: "/eːˈt͡seːˌkaʁtə/", gender: "die", type: "noun" },
                { id: "s-07", de: "das Wechselgeld", vi: "Tiền thối lại", ipa: "/ˈvɛksl̩ˌɡɛlt/", gender: "das", type: "noun" },
                { id: "s-08", de: "die Treuepunkte", vi: "Tem tích điểm", ipa: "/ˈtʁɔʏ̯əˌpʊŋktə/", gender: "die (pl)", type: "noun" },
                { id: "s-09", de: "stornieren", vi: "hủy món hàng (khi khách không lấy nữa)", ipa: "/ʃtɔʁˈniːʁən/", type: "verb" },
                { id: "s-10", de: "eintippen", vi: "nhập mã số (thủ công)", ipa: "/ˈaɪ̯nˌtɪpn̩/", type: "verb" }
            ]
        },
        {
            id: "g2",
            title: "2. Im Laden & Regale (Trong cửa hàng & Kệ)",
            items: [
                { id: "l-01", de: "das Lager", vi: "Kho hàng", ipa: "/ˈlaːɡɐ/", gender: "das", type: "noun" },
                { id: "l-02", de: "das Regal", vi: "Kệ hàng", ipa: "/ʁeˈɡaːl/", gender: "das", type: "noun" },
                { id: "l-03", de: "auffüllen", vi: "xếp đầy hàng lên kệ (Refill)", ipa: "/ˈaʊ̯fˌfʏlən/", type: "verb" },
                { id: "l-04", de: "das MHD (Mindesthaltbarkeitsdatum)", vi: "Hạn sử dụng", ipa: "/ɛmhaːˈdeː/", gender: "das", type: "noun" },
                { id: "l-05", de: "abgelaufen", vi: "hết hạn (phải bỏ đi)", ipa: "/ˈapɡəˌlaʊ̯fn̩/", type: "adjective" },
                { id: "l-06", de: "die Palette", vi: "Kiện hàng / Pallet", ipa: "/paˈlɛtə/", gender: "die", type: "noun" },
                { id: "l-07", de: "der Hubwagen", vi: "Xe nâng tay (để kéo Pallet)", ipa: "/ˈhuːpˌvaːɡn̩/", gender: "der", type: "noun" },
                { id: "l-08", de: "die Pappe / der Karton", vi: "Bìa các tông (rác)", ipa: "/ˈpapə/", gender: "die", type: "noun" },
                { id: "l-09", de: "die Preisauszeichnung", vi: "Tem giá / Bảng giá", ipa: "/ˈpʁaɪ̯sʔaʊ̯sˌt͡saɪ̯çnʊŋ/", gender: "die", type: "noun" },
                { id: "l-10", de: "vorziehen", vi: "kéo hàng ra mặt tiền (Spiegeln)", ipa: "/ˈfoːɐ̯ˌt͡siːən/", type: "verb" }
            ]
        },
        {
            id: "g3",
            title: "3. Abteilungen (Các khu vực hàng hóa)",
            items: [
                { id: "a-01", de: "Obst & Gemüse", vi: "Khu rau củ quả", ipa: "", gender: "", type: "noun" },
                { id: "a-02", de: "die Kühltheke", vi: "Tủ mát (Sữa, xúc xích...)", ipa: "/ˈkyːlˌteːkə/", gender: "die", type: "noun" },
                { id: "a-03", de: "die Tiefkühlabteilung (TK)", vi: "Khu đồ đông lạnh", ipa: "", gender: "die", type: "noun" },
                { id: "a-04", de: "die Backstation", vi: "Quầy bánh mì tự chọn", ipa: "/ˈbakʃtaˌt͡si̯oːn/", gender: "die", type: "noun" },
                { id: "a-05", de: "die Getränkeabteilung", vi: "Khu vực đồ uống", ipa: "", gender: "die", type: "noun" },
                { id: "a-06", de: "der Leergutautomat", vi: "Máy thu vỏ chai tự động", ipa: "/ˈleːɐ̯ɡuːtʔaʊ̯toˌmaːt/", gender: "der", type: "noun" },
                { id: "a-07", de: "Haushaltswaren", vi: "Đồ gia dụng (giấy vệ sinh, xà phòng...)", ipa: "", gender: "die (pl)", type: "noun" },
                { id: "a-08", de: "Süßwaren", vi: "Bánh kẹo", ipa: "", gender: "die (pl)", type: "noun" }
            ]
        },
        {
            id: "g4",
            title: "4. Dialoge mit Kunden (Giao tiếp với khách)",
            items: [
                { id: "p-01", de: "Haben Sie eine Payback-Karte?", vi: "Quý khách có thẻ tích điểm Payback không?", type: "phrase" },
                { id: "p-02", de: "Sammeln Sie Treuepunkte?", vi: "Quý khách có sưu tập tem đổi quà không?", type: "phrase" },
                { id: "p-03", de: "Brauchen Sie den Kassenzettel?", vi: "Quý khách có lấy hóa đơn không?", type: "phrase" },
                { id: "p-04", de: "Zahlen Sie bar oder mit Karte?", vi: "Quý khách trả tiền mặt hay thẻ?", type: "phrase" },
                { id: "p-05", de: "Bitte PIN eingeben und bestätigen.", vi: "Mời nhập mã PIN và ấn nút xanh.", type: "phrase" },
                { id: "p-06", de: "Entschuldigung, wo finde ich Hefe?", vi: "Xin lỗi, men nở ở đâu ạ?", type: "phrase" },
                { id: "p-07", de: "Das finden Sie im Gang 3, links.", vi: "Cái đó ở lối đi số 3, bên trái ạ.", type: "phrase" },
                { id: "p-08", de: "Ich muss kurz den Preis prüfen.", vi: "Đợi em chút, em phải check lại giá.", type: "phrase" },
                { id: "p-09", de: "Haben Sie noch Kleingeld?", vi: "Quý khách có tiền lẻ không ạ?", type: "phrase" },
                { id: "p-10", de: "Schönes Wochenende!", vi: "Chúc cuối tuần vui vẻ!", type: "phrase" }
            ]
        },
        {
            id: "g5",
            title: "5. Probleme & Durchsagen (Sự cố & Thông báo)",
            items: [
                { id: "x-01", de: "Kasse 2 bitte öffnen!", vi: "Mở thêm quầy số 2! (Khi khách đông)", type: "phrase" },
                { id: "x-02", de: "Storno an Kasse 1, bitte!", vi: "Hủy hàng ở quầy 1 giúp với! (Gọi quản lý)", type: "phrase" },
                { id: "x-03", de: "Der Barcode ist nicht lesbar.", vi: "Mã vạch không đọc được / bị mờ.", type: "phrase" },
                { id: "x-04", de: "Wir schließen in 5 Minuten.", vi: "Siêu thị đóng cửa trong 5 phút nữa.", type: "phrase" },
                { id: "x-05", de: "Da ist etwas ausgelaufen.", vi: "Có cái gì đó bị đổ/vỡ ra sàn.", type: "phrase" },
                { id: "x-06", de: "Ich brauche Wechselgeld.", vi: "Tôi cần đổi tiền lẻ (hết tiền thối).", type: "phrase" },
                { id: "x-07", de: "Das Gerät akzeptiert die Karte nicht.", vi: "Máy không nhận thẻ này ạ.", type: "phrase" }
            ]
        }
    ]
};

export const DATA_PRACTICAL_FASTFOOD = {
    id: "prac-fastfood",
    title: "Đồ ăn nhanh & Imbiss (Fast Food)",
    introduction: {
        title: "Tốc độ & Phản xạ",
        text: "Làm việc tại cửa hàng Fast Food (Schnellrestaurant) hay tiệm Döner (Imbiss) là môi trường luyện nghe-nói tốc độ cao. Khách hàng thường vội và nói ngắn gọn. Bạn cần thuộc lòng các combo, cách hỏi nước sốt và thao tác máy tính tiền cực nhanh. Đặc biệt, nếu làm ở tiệm Döner, bạn sẽ quen với những câu 'huyền thoại' như 'Mit alles?' (Cho tất cả nhé?). Bộ từ vựng này giúp bạn không bị 'đơ' trước hàng dài khách đang chờ.",
        icon: "Zap" // Icon representing speed/energy
    },
    description: "Từ vựng về quy trình order, chế biến Burger/Döner, dọn dẹp và các loại nước sốt đặc trưng.",
    gradient: "from-red-500 to-yellow-500", // Ketchup & Mustard theme

    groups: [
        {
            id: "g1",
            title: "1. Bestellung aufnehmen (Ghi Order)",
            items: [
                { id: "b-01", de: "Zum Hieressen oder zum Mitnehmen?", vi: "Ăn ở đây hay mang về ạ? (Câu quan trọng nhất)", type: "phrase" },
                { id: "b-02", de: "Ein Menü oder einzeln?", vi: "Quý khách gọi theo set (combo) hay món lẻ?", type: "phrase" },
                { id: "b-03", de: "Welches Getränk dazu?", vi: "Quý khách uống nước gì ạ?", type: "phrase" },
                { id: "b-04", de: "Groß oder klein?", vi: "Cỡ lớn hay nhỏ?", type: "phrase" },
                { id: "b-05", de: "Mit Eis?", vi: "Có lấy đá không ạ?", type: "phrase" },
                { id: "b-06", de: "Ketchup oder Mayo?", vi: "Ăn kèm sốt cà chua hay sốt trứng gà (Mayonnaise)?", type: "phrase" },
                { id: "b-07", de: "Möchten Sie eine Tüte?", vi: "Quý khách có cần túi đựng không?", type: "phrase" },
                { id: "b-08", de: "Das dauert ca. 5 Minuten.", vi: "Cái này chờ khoảng 5 phút nhé.", type: "phrase" },
                { id: "b-09", de: "Der Nächste, bitte!", vi: "Mời người tiếp theo!", type: "phrase" },
                { id: "b-10", de: "Ihre Bestellnummer ist die 45.", vi: "Số order của quý khách là 45.", type: "phrase" }
            ]
        },
        {
            id: "g2",
            title: "2. Im Döner-Imbiss (Tại tiệm Döner Kebab)",
            items: [
                { id: "d-01", de: "Der Drehspieß", vi: "Cây thịt quay (Döner)", ipa: "/ˈdʁeːˌʃpiːs/", gender: "der", type: "noun" },
                { id: "d-02", de: "Das Fladenbrot", vi: "Bánh mì tròn (để kẹp thịt)", ipa: "/ˈflaːdn̩ˌbʁoːt/", gender: "das", type: "noun" },
                { id: "d-03", de: "Mit alles? (Umgangssprache)", vi: "Cho đầy đủ nhé? (Tất cả rau + sốt)", type: "phrase" },
                { id: "d-04", de: "Mit Scharf?", vi: "Có ăn cay không? (Bột ớt)", type: "phrase" },
                { id: "d-05", de: "Ohne Zwiebeln?", vi: "Không lấy hành tây phải không?", type: "phrase" },
                { id: "d-06", de: "Knoblauchsoße", vi: "Sốt tỏi (phổ biến nhất)", ipa: "/ˈknoːplaʊ̯xˌzoːsə/", gender: "die", type: "noun" },
                { id: "d-07", de: "Kräutersoße", vi: "Sốt thảo mộc (vị nhẹ)", ipa: "/ˈkʁɔʏ̯tɐˌzoːsə/", gender: "die", type: "noun" },
                { id: "d-08", de: "Kalb oder Hähnchen?", vi: "Thịt bê hay thịt gà?", type: "phrase" },
                { id: "d-09", de: "Dönerbox", vi: "Hộp thịt + khoai tây chiên", ipa: "", gender: "die", type: "noun" },
                { id: "d-10", de: "Yufka / Dürüm", vi: "Bánh mì cuộn (dạng Wrap)", ipa: "", gender: "der", type: "noun" }
            ]
        },
        {
            id: "g3",
            title: "3. In der Küche & Zubereitung (Bếp & Chế biến)",
            items: [
                { id: "k-01", de: "die Fritteuse", vi: "Bếp chiên nhúng (dầu sôi)", ipa: "/fʁɪˈtøːzə/", gender: "die", type: "noun" },
                { id: "k-02", de: "frittieren", vi: "chiên ngập dầu (khoai, gà)", ipa: "/fʁɪˈtiːʁən/", type: "verb" },
                { id: "k-03", de: "der Grill / Bräter", vi: "Vỉ nướng (làm Burger/Xúc xích)", ipa: "/ɡʁɪl/", gender: "der", type: "noun" },
                { id: "k-04", de: "wenden", vi: "lật mặt (thịt)", ipa: "/ˈvɛndn̩/", type: "verb" },
                { id: "k-05", de: "belegen", vi: "xếp nhân lên bánh (Burger)", ipa: "/bəˈleːɡn̩/", type: "verb" },
                { id: "k-06", de: "die Zange", vi: "Cái kẹp gắp (đá/thịt)", ipa: "/ˈt͡saŋə/", gender: "die", type: "noun" },
                { id: "k-07", de: "die Pommes-Schaufel", vi: "Xẻng xúc khoai tây", ipa: "", gender: "die", type: "noun" },
                { id: "k-08", de: "salzen", vi: "rắc muối", ipa: "/ˈzalt͡sn̩/", type: "verb" },
                { id: "k-09", de: "das Patty", vi: "Miếng thịt Burger", ipa: "/ˈpɛti/", gender: "das", type: "noun" },
                { id: "k-10", de: "toasten", vi: "nướng bánh mì (cho giòn)", ipa: "/ˈtoːstn̩/", type: "verb" }
            ]
        },
        {
            id: "g4",
            title: "4. Sauberkeit & Entsorgung (Vệ sinh & Dọn dẹp)",
            items: [
                { id: "s-01", de: "den Tisch abwischen", vi: "lau bàn", type: "phrase" },
                { id: "s-02", de: "das Tablett zurückgeben", vi: "trả khay (khách tự trả)", type: "phrase" },
                { id: "s-03", de: "der Tablettwagen", vi: "Xe đẩy để khay bẩn", ipa: "", gender: "der", type: "noun" },
                { id: "s-04", de: "Müll trennen", vi: "phân loại rác (giấy/nhựa/thức ăn thừa)", type: "phrase" },
                { id: "s-05", de: "Fett wechseln", vi: "thay dầu chiên (việc nặng)", type: "phrase" },
                { id: "s-06", de: "Boden wischen", vi: "lau sàn nhà", type: "phrase" },
                { id: "s-07", de: "Rutschgefahr", vi: "Nguy hiểm trơn trượt (khi lau sàn)", ipa: "/ˈʁʊtʃɡəˌfaːɐ̯/", gender: "die", type: "noun" },
                { id: "s-08", de: "die Toilette kontrollieren", vi: "kiểm tra nhà vệ sinh (giấy/xà phòng)", type: "phrase" }
            ]
        },
        {
            id: "g5",
            title: "5. Snacks & Spezialitäten (Món ăn vặt phổ biến)",
            items: [
                { id: "x-01", de: "die Currywurst", vi: "Xúc xích sốt cà ri (Món kinh điển)", ipa: "/ˈkœʁiˌvʊʁst/", gender: "die", type: "noun" },
                { id: "x-02", de: "Pommes Rot-Weiß", vi: "Khoai chiên kèm Ketchup & Mayo", type: "phrase" },
                { id: "x-03", de: "Chicken Nuggets", vi: "Gà viên chiên", ipa: "", gender: "die (pl)", type: "noun" },
                { id: "x-04", de: "der Milchshake", vi: "Sữa lắc", ipa: "/ˈmɪlçˌʃeːk/", gender: "der", type: "noun" },
                { id: "x-05", de: "das Softgetränk", vi: "Nước ngọt có ga", ipa: "", gender: "das", type: "noun" },
                { id: "x-06", de: "Veganer Burger", vi: "Burger chay", ipa: "", gender: "der", type: "noun" },
                { id: "x-07", de: "die Bratwurst im Brötchen", vi: "Xúc xích kẹp bánh mì", type: "phrase" }
            ]
        }
    ]
};

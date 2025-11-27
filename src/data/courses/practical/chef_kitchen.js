export const DATA_PRACTICAL_CHEF = {
    id: "prac-chef",
    title: "Nghề Đầu bếp & Bếp chuyên nghiệp (Nâng cao)",
    introduction: {
        title: "Con đường trở thành Bếp trưởng",
        text: "Nghề Bếp tại Đức không chỉ là nấu ăn, mà là một môn khoa học và nghệ thuật. Bạn cần biết 'Mise en Place' là gì, phân biệt các loại dao chuyên dụng, và hiểu rõ hệ thống cấp bậc 'Brigade de cuisine'. Bộ từ vựng này sẽ trang bị cho bạn kiến thức về các loại thịt, rau thơm, gia vị và các kỹ thuật nấu nướng chuẩn Âu (Sous-vide, Blanchieren). Nắm vững nó, bạn sẽ tự tin bước vào bất kỳ nhà hàng 5 sao nào.",
        icon: "ChefHat"
    },
    description: "Từ vựng chuyên sâu về nguyên liệu, gia vị, kỹ thuật chế biến và tổ chức bếp.",
    gradient: "from-red-600 to-orange-700",

    groups: [
        {
            id: "g1",
            title: "1. Küchenbrigade (Cấp bậc trong bếp)",
            items: [
                { id: "h-01", de: "der Küchenchef", vi: "Bếp trưởng (Sếp tổng)", ipa: "/ˈkʏçn̩ˌʃɛf/", gender: "der", type: "noun" },
                { id: "h-02", de: "der Sous-Chef", vi: "Bếp phó (Cánh tay phải)", ipa: "/suː ʃɛf/", gender: "der", type: "noun" },
                { id: "h-03", de: "der Gardemanger", vi: "Đầu bếp bếp lạnh (Salad/Khai vị)", ipa: "/ɡaʁdə mɑ̃ˈʒeː/", gender: "der", type: "noun" },
                { id: "h-04", de: "der Entremetier", vi: "Đầu bếp món phụ (Rau/Trứng/Súp)", ipa: "/ɑ̃tʁəməˈti̯eː/", gender: "der", type: "noun" },
                { id: "h-05", de: "der Saucier", vi: "Đầu bếp nước sốt (Vị trí quan trọng)", ipa: "/soˈsi̯eː/", gender: "der", type: "noun" },
                { id: "h-06", de: "der Patissier", vi: "Đầu bếp bánh ngọt/Tráng miệng", ipa: "/patɪˈsi̯eː/", gender: "der", type: "noun" },
                { id: "h-07", de: "der Commis de Cuisine", vi: "Phụ bếp chính (mới ra nghề)", ipa: "/kɔˈmiː/", gender: "der", type: "noun" },
                { id: "h-08", de: "die Küchenhilfe", vi: "Phụ bếp (rửa rau, sơ chế)", ipa: "/ˈkʏçn̩ˌhɪlfə/", gender: "die", type: "noun" },
                { id: "h-09", de: "der Spüler / Abwäscher", vi: "Nhân viên rửa bát", ipa: "/ˈʃpyːlɐ/", gender: "der", type: "noun" },
                { id: "h-10", de: "der Azubi (Auszubildende)", vi: "Học nghề", ipa: "/aˈt͡suːbi/", gender: "der", type: "noun" }
            ]
        },
        {
            id: "g2",
            title: "2. Werkzeuge & Messer (Dao & Dụng cụ)",
            items: [
                { id: "k-01", de: "das Kochmesser", vi: "Dao đầu bếp (dao to)", ipa: "/ˈkɔxˌmɛsɐ/", gender: "das", type: "noun" },
                { id: "k-02", de: "das Officemesser", vi: "Dao tỉa nhỏ", ipa: "", gender: "das", type: "noun" },
                { id: "k-03", de: "das Brotmesser", vi: "Dao cắt bánh mì (lưỡi răng cưa)", ipa: "", gender: "das", type: "noun" },
                { id: "k-04", de: "der Sparschäler", vi: "Dao nạo vỏ", ipa: "/ˈʃpaːɐ̯ˌʃɛːlɐ/", gender: "der", type: "noun" },
                { id: "k-05", de: "der Wetzstahl", vi: "Cây mài dao", ipa: "/ˈvɛt͡sˌʃtaːl/", gender: "der", type: "noun" },
                { id: "k-06", de: "der Schneebesen", vi: "Phới lồng (đánh trứng)", ipa: "/ˈʃneːˌbeːzn̩/", gender: "der", type: "noun" },
                { id: "k-07", de: "die Kelle", vi: "Cái muôi múc canh", ipa: "/ˈkɛlə/", gender: "die", type: "noun" },
                { id: "k-08", de: "das Sieb / der Seiher", vi: "Cái rây / Rổ lọc", ipa: "/ziːp/", gender: "das", type: "noun" },
                { id: "k-09", de: "die Mandoline", vi: "Bàn bào rau củ (rất sắc)", ipa: "/.../", gender: "die", type: "noun" },
                { id: "k-10", de: "der Pass", vi: "Bàn ra món (nơi đặt đĩa để phục vụ bưng)", ipa: "/pas/", gender: "der", type: "noun" }
            ]
        },
        {
            id: "g3",
            title: "3. Schnitttechniken (Kỹ thuật cắt thái)",
            items: [
                { id: "s-01", de: "Würfel (Brunoises)", vi: "Thái hạt lựu nhỏ xíu", ipa: "/ˈvʏʁfl̩/", gender: "die (pl)", type: "noun" },
                { id: "s-02", de: "Streifen (Julienne)", vi: "Thái sợi chỉ", ipa: "/ˈʃtʁaɪ̯fn̩/", gender: "die (pl)", type: "noun" },
                { id: "s-03", de: "Scheiben", vi: "Thái lát mỏng", ipa: "/ˈʃaɪ̯bn̩/", gender: "die (pl)", type: "noun" },
                { id: "s-04", de: "hacken", vi: "băm nhỏ (hành/tỏi)", ipa: "/ˈhakn̩/", type: "verb" },
                { id: "s-05", de: "schälen", vi: "gọt vỏ", ipa: "/ˈʃɛːlən/", type: "verb" },
                { id: "s-06", de: "parieren", vi: "lọc bỏ gân/mỡ thừa (thịt)", ipa: "/paˈʁiːʁən/", type: "verb" },
                { id: "s-07", de: "filetieren", vi: "phi lê (cá/cam)", ipa: "/fileˈtiːʁən/", type: "verb" },
                { id: "s-08", de: "tournieren", vi: "tỉa hình thoi (kỹ thuật khó)", ipa: "/.../", type: "verb" }
            ]
        },
        {
            id: "g4",
            title: "4. Garmethoden (Phương pháp nấu)",
            items: [
                { id: "m-01", de: "braten", vi: "rán / áp chảo", ipa: "/ˈbʁaːtn̩/", type: "verb" },
                { id: "m-02", de: "kochen", vi: "luộc / nấu sôi", ipa: "/ˈkɔxn̩/", type: "verb" },
                { id: "m-03", de: "dämpfen", vi: "hấp cách thủy", ipa: "/ˈdɛmp͡fn̩/", type: "verb" },
                { id: "m-04", de: "schmoren", vi: "om / kho (nấu chậm, ít nước)", ipa: "/ˈʃmoːʁən/", type: "verb" },
                { id: "m-05", de: "blanchieren", vi: "chần sơ (qua nước sôi rồi ngâm đá)", ipa: "/blɑ̃ˈʃiːʁən/", type: "verb" },
                { id: "m-06", de: "gratinieren", vi: "đút lò tạo vỏ giòn (phủ phô mai)", ipa: "/ɡʁatiˈniːʁən/", type: "verb" },
                { id: "m-07", de: "pochierten", vi: "chần trứng/cá (trong nước không sôi)", ipa: "/poˈʃiːʁən/", type: "verb" },
                { id: "m-08", de: "reduzieren", vi: "nấu cô đặc (nước sốt)", ipa: "/ʁeduˈt͡siːʁən/", type: "verb" },
                { id: "m-09", de: "abschmecken", vi: "nêm nếm gia vị", ipa: "/ˈapˌʃmɛkn̩/", type: "verb" },
                { id: "m-10", de: "anrichten", vi: "trình bày món ra đĩa (Plating)", ipa: "/ˈanˌʁɪçtn̩/", type: "verb" }
            ]
        },
        {
            id: "g5",
            title: "5. Fleisch & Fisch (Thịt & Cá)",
            items: [
                { id: "f-01", de: "das Rindfleisch", vi: "Thịt bò", ipa: "/ˈʁɪntˌflaɪ̯ʃ/", gender: "das", type: "noun" },
                { id: "f-02", de: "das Schweinefleisch", vi: "Thịt lợn", ipa: "/ˈʃvaɪ̯nəˌflaɪ̯ʃ/", gender: "das", type: "noun" },
                { id: "f-03", de: "das Geflügel", vi: "Gia cầm (Gà/Vịt)", ipa: "/ɡəˈflyːɡl̩/", gender: "das", type: "noun" },
                { id: "f-04", de: "das Filet", vi: "Thịt thăn (phần mềm nhất)", ipa: "/fiˈleː/", gender: "das", type: "noun" },
                { id: "f-05", de: "das Hackfleisch", vi: "Thịt xay", ipa: "/ˈhakˌflaɪ̯ʃ/", gender: "das", type: "noun" },
                { id: "f-06", de: "der Lachs", vi: "Cá hồi", ipa: "/laks/", gender: "der", type: "noun" },
                { id: "f-07", de: "die Garnele", vi: "Tôm", ipa: "/ɡaʁˈneːlə/", gender: "die", type: "noun" },
                { id: "f-08", de: "zäh", vi: "dai (thịt)", ipa: "/t͡sɛː/", type: "adjective" },
                { id: "f-09", de: "zart", vi: "mềm (thịt)", ipa: "/t͡saːɐ̯t/", type: "adjective" },
                { id: "f-10", de: "knusprig", vi: "giòn (da)", ipa: "/ˈknʊspʁɪç/", type: "adjective" }
            ]
        },
        {
            id: "g6",
            title: "6. Gemüse & Kräuter (Rau & Thảo mộc)",
            items: [
                { id: "v-01", de: "die Petersilie", vi: "Ngò tây (Parsley)", ipa: "/petɐˈziːli̯ə/", gender: "die", type: "noun" },
                { id: "v-02", de: "der Schnittlauch", vi: "Hẹ tây (lá nhỏ)", ipa: "/ˈʃnɪtˌlaʊ̯x/", gender: "der", type: "noun" },
                { id: "v-03", de: "der Dill", vi: "Thì là", ipa: "/dɪl/", gender: "der", type: "noun" },
                { id: "v-04", de: "der Basilikum", vi: "Húng tây", ipa: "/baˈziːlikʊm/", gender: "der", type: "noun" },
                { id: "v-05", de: "der Rosmarin", vi: "Hương thảo (dùng cho thịt bò)", ipa: "/ˈʁoːsmaˌʁiːn/", gender: "der", type: "noun" },
                { id: "v-06", de: "der Knoblauch", vi: "Tỏi", ipa: "/ˈknoːplaʊ̯x/", gender: "der", type: "noun" },
                { id: "v-07", de: "die Zwiebel", vi: "Hành tây", ipa: "/ˈt͡sviːbl̩/", gender: "die", type: "noun" },
                { id: "v-08", de: "der Spargel", vi: "Măng tây (Món vua ở Đức)", ipa: "/ˈʃpaʁɡl̩/", gender: "der", type: "noun" },
                { id: "v-09", de: "die Paprika", vi: "Ớt chuông", ipa: "/ˈpapʁika/", gender: "die", type: "noun" },
                { id: "v-10", de: "die Zucchini", vi: "Bí ngòi", ipa: "/t͡suˈkiːni/", gender: "die", type: "noun" }
            ]
        },
        {
            id: "g7",
            title: "7. Gewürze & Zutaten (Gia vị)",
            items: [
                { id: "z-01", de: "das Salz", vi: "Muối", ipa: "/zalt͡s/", gender: "das", type: "noun" },
                { id: "z-02", de: "der Pfeffer", vi: "Hạt tiêu", ipa: "/ˈp͡fɛfɐ/", gender: "der", type: "noun" },
                { id: "z-03", de: "der Zucker", vi: "Đường", ipa: "/ˈt͡sʊkɐ/", gender: "der", type: "noun" },
                { id: "z-04", de: "das Öl", vi: "Dầu ăn", ipa: "/øːl/", gender: "das", type: "noun" },
                { id: "z-05", de: "der Essig", vi: "Giấm", ipa: "/ˈɛsɪç/", gender: "der", type: "noun" },
                { id: "z-06", de: "die Sahne", vi: "Kem tươi (nấu sốt)", ipa: "/ˈzaːnə/", gender: "die", type: "noun" },
                { id: "z-07", de: "die Butter", vi: "Bơ", ipa: "/ˈbʊtɐ/", gender: "die", type: "noun" },
                { id: "z-08", de: "das Mehl", vi: "Bột mì", ipa: "/meːl/", gender: "das", type: "noun" },
                { id: "z-09", de: "die Muskatnuss", vi: "Hạt nhục đậu khấu (cho khoai nghiền)", ipa: "/mʊsˈkaːtˌnʊs/", gender: "die", type: "noun" },
                { id: "z-10", de: "die Brühe", vi: "Nước dùng (nước cốt)", ipa: "/ˈbʁyːə/", gender: "die", type: "noun" }
            ]
        },
        {
            id: "g8",
            title: "8. Hygiene & Sicherheit (HACCP)",
            items: [
                { id: "h-01", de: "Hände waschen", vi: "Rửa tay (liên tục)", type: "phrase" },
                { id: "h-02", de: "Müll trennen", vi: "Phân loại rác (Bio, Restmüll)", type: "phrase" },
                { id: "h-03", de: "Rutschfest", vi: "Chống trượt (Giày bếp)", type: "adjective" },
                { id: "h-04", de: "Kreuzkontamination", vi: "Lây nhiễm chéo (Thịt sống & Rau)", gender: "die", type: "noun" },
                { id: "h-05", de: "Kühlkette", vi: "Chuỗi làm lạnh (Không được ngắt)", gender: "die", type: "noun" },
                { id: "h-06", de: "Rotes Brett", vi: "Thớt đỏ (dùng cho thịt sống)", type: "phrase" },
                { id: "h-07", de: "Grünes Brett", vi: "Thớt xanh (dùng cho rau)", type: "phrase" },
                { id: "h-08", de: "Weißes Brett", vi: "Thớt trắng (dùng cho bánh mì/phô mai)", type: "phrase" },
                { id: "h-09", de: "Gelbes Brett", vi: "Thớt vàng (dùng cho gia cầm sống)", type: "phrase" }
            ]
        },
        {
            id: "g9",
            title: "9. Kommunikation (Khẩu lệnh bếp)",
            items: [
                { id: "c-01", de: "Bon!", vi: "Có order mới!", type: "phrase" },
                { id: "c-02", de: "Ja, Chef!", vi: "Rõ thưa sếp! (Xác nhận lệnh)", type: "phrase" },
                { id: "c-03", de: "Service!", vi: "Món xong rồi, bưng đi!", type: "phrase" },
                { id: "c-04", de: "Achtung, heiß!", vi: "Cẩn thận, nóng đấy! (Khi đi sau lưng)", type: "phrase" },
                { id: "c-05", de: "Achtung, Messer!", vi: "Cẩn thận, dao nhọn!", type: "phrase" },
                { id: "c-06", de: "Wie lange noch?", vi: "Còn bao lâu nữa? (Sếp hỏi)", type: "phrase" },
                { id: "c-07", de: "Zwei Minuten!", vi: "2 phút nữa ạ!", type: "phrase" },
                { id: "c-08", de: "Tisch 5 abrufen!", vi: "Chuẩn bị lên món bàn 5!", type: "phrase" },
                { id: "c-09", de: "Mise en Place", vi: "Chuẩn bị sơ chế đầu giờ", type: "phrase" },
                { id: "c-10", de: "Sauber machen!", vi: "Dọn dẹp vệ sinh!", type: "phrase" }
            ]
        }
    ]
};

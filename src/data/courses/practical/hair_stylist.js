export const DATA_PRACTICAL_HAIR = {
    id: "prac-hair",
    title: "Thợ Cắt tóc & Tạo mẫu (Friseur)",
    introduction: {
        title: "Nghệ thuật & Tư vấn",
        text: "Nghề Tóc (Friseur) tại Đức là sự kết hợp giữa kỹ thuật chính xác và nghệ thuật giao tiếp. Khách hàng Đức đánh giá rất cao khâu tư vấn (Beratung). Bạn cần phân biệt rõ 'Schneiden' (cắt) và 'Nachschneiden' (tỉa lại form cũ), hay hiểu đúng ý khách khi họ nói 'nur die Spitzen' (chỉ bấm ngọn). Bộ từ vựng này trang bị cho bạn các thuật ngữ về màu nhuộm, dụng cụ và các câu giao tiếp 'chuẩn Salon' để khách hàng yên tâm giao phó mái đầu cho bạn.",
        icon: "Scissors" // Icon representing hair/cutting
    },
    description: "Từ vựng về dụng cụ làm tóc, kỹ thuật cắt/uốn/nhuộm, các kiểu tóc và giao tiếp tư vấn.",
    gradient: "from-violet-600 to-purple-700", // Creative/Fashion theme

    groups: [
        {
            id: "g1",
            title: "1. Werkzeuge & Geräte (Dụng cụ & Thiết bị)",
            items: [
                { id: "t-01", de: "die Haarschere", vi: "Kéo cắt tóc", ipa: "/ˈhaːɐ̯ˌʃeːʁə/", gender: "die", type: "noun" },
                { id: "t-02", de: "die Effilierschere", vi: "Kéo tỉa mỏng (răng cưa)", ipa: "/ɛfiˈliːɐ̯ˌʃeːʁə/", gender: "die", type: "noun" },
                { id: "t-03", de: "der Kamm", vi: "Cái lược", ipa: "/kam/", gender: "der", type: "noun" },
                { id: "t-04", de: "die Bürste / Rundbürste", vi: "Bàn chải tóc / Lược tròn (sấy phồng)", ipa: "/ˈbʏʁstə/", gender: "die", type: "noun" },
                { id: "t-05", de: "der Föhn", vi: "Máy sấy tóc", ipa: "/føːn/", gender: "der", type: "noun" },
                { id: "t-06", de: "das Glätteisen", vi: "Máy là tóc / Máy duỗi", ipa: "/ˈɡlɛtˌʔaɪ̯zn̩/", gender: "das", type: "noun" },
                { id: "t-07", de: "der Lockenstab", vi: "Máy uốn xoăn", ipa: "/ˈlɔkn̩ˌʃtaːp/", gender: "der", type: "noun" },
                { id: "t-08", de: "der Umhang", vi: "Áo choàng cắt tóc", ipa: "/ˈʊmhaŋ/", gender: "der", type: "noun" },
                { id: "t-09", de: "die Haarklammer", vi: "Kẹp phân khu tóc", ipa: "/ˈhaːɐ̯ˌklamɐ/", gender: "die", type: "noun" },
                { id: "t-10", de: "die Sprühflasche", vi: "Bình xịt nước", ipa: "/ˈʃpʁyːˌflaʃə/", gender: "die", type: "noun" },
                { id: "t-11", de: "die Rasierklinge", vi: "Dao lam / Dao cạo", ipa: "/ʁaˈziːɐ̯ˌklɪŋə/", gender: "die", type: "noun" },
                { id: "t-12", de: "die Haarschneidemaschine", vi: "Tông đơ", ipa: "/.../", gender: "die", type: "noun" }
            ]
        },
        {
            id: "g2",
            title: "2. Waschen, Schneiden, Stylen (Dịch vụ cơ bản)",
            items: [
                { id: "s-01", de: "Waschen, Schneiden, Föhnen", vi: "Gội, Cắt, Sấy (Combo tiêu chuẩn)", type: "phrase" },
                { id: "s-02", de: "die Spitzen schneiden", vi: "cắt ngọn tóc (phần hư tổn)", type: "phrase" },
                { id: "s-03", de: "der Pony", vi: "Tóc mái", ipa: "/ˈpɔni/", gender: "der", type: "noun" },
                { id: "s-04", de: "Stufen schneiden", vi: "cắt tầng / tỉa layer", type: "phrase" },
                { id: "s-05", de: "ausdünnen", vi: "tỉa mỏng bớt (cho tóc dày)", ipa: "/ˈaʊ̯sˌdʏnən/", type: "verb" },
                { id: "s-06", de: "der Scheitel", vi: "Ngôi tóc (Rẽ ngôi)", ipa: "/ˈʃaɪ̯tl̩/", gender: "der", type: "noun" },
                { id: "s-07", de: "rasieren", vi: "cạo (gáy/râu)", ipa: "/ʁaˈziːʁən/", type: "verb" },
                { id: "s-08", de: "die Kopfmassage", vi: "Massage đầu (khi gội)", ipa: "/ˈkɔp͡fmaˌsaːʒə/", gender: "die", type: "noun" },
                { id: "s-09", de: "das Volumen", vi: "Độ phồng", ipa: "/voˈluːmən/", gender: "das", type: "noun" },
                { id: "s-10", de: "glätten", vi: "duỗi thẳng / là thẳng", ipa: "/ˈɡlɛtn̩/", type: "verb" }
            ]
        },
        {
            id: "g3",
            title: "3. Farbe & Chemie (Màu & Hóa chất)",
            items: [
                { id: "c-01", de: "färben", vi: "nhuộm màu (vĩnh viễn)", ipa: "/ˈfɛʁbn̩/", type: "verb" },
                { id: "c-02", de: "tönen", vi: "nhuộm bóng / nhuộm tạm thời (nhanh phai)", ipa: "/ˈtøːnən/", type: "verb" },
                { id: "c-03", de: "blondieren", vi: "tẩy tóc (lên màu vàng sáng)", ipa: "/blɔnˈdiːʁən/", type: "verb" },
                { id: "c-04", de: "die Strähnchen", vi: "Gẩy lai / Highlight", ipa: "/ˈʃtʁɛːnçən/", gender: "die (pl)", type: "noun" },
                { id: "c-05", de: "der Ansatz", vi: "Chân tóc (thường cần dặm lại màu)", ipa: "/ˈanˌzat͡s/", gender: "der", type: "noun" },
                { id: "c-06", de: "die Dauerwelle", vi: "Uốn tóc vĩnh viễn (tóc xoăn)", ipa: "/ˈdaʊ̯ɐˌvɛlə/", gender: "die", type: "noun" },
                { id: "c-07", de: "das Shampoo", vi: "Dầu gội", ipa: "/ʃamˈpuː/", gender: "das", type: "noun" },
                { id: "c-08", de: "die Spülung / der Conditioner", vi: "Dầu xả", ipa: "/ˈʃpyːlʊŋ/", gender: "die", type: "noun" },
                { id: "c-09", de: "die Haarkur", vi: "Kem ủ tóc / Hấp dầu", ipa: "/ˈhaːɐ̯ˌkuːɐ̯/", gender: "die", type: "noun" },
                { id: "c-10", de: "das Haarspray", vi: "Gôm xịt tóc (giữ nếp)", ipa: "/ˈhaːɐ̯ˌʃpʁeː/", gender: "das", type: "noun" }
            ]
        },
        {
            id: "g4",
            title: "4. Frisuren & Beschreibungen (Kiểu tóc & Mô tả)",
            items: [
                { id: "f-01", de: "kurz", vi: "ngắn", type: "adjective" },
                { id: "f-02", de: "mittellang", vi: "dài ngang vai / lỡ", type: "adjective" },
                { id: "f-03", de: "lang", vi: "dài", type: "adjective" },
                { id: "f-04", de: "lockig", vi: "xoăn", type: "adjective" },
                { id: "f-05", de: "glatt", vi: "thẳng", type: "adjective" },
                { id: "f-06", de: "der Bob", vi: "Kiểu tóc Bob (ngắn ôm mặt)", gender: "der", type: "noun" },
                { id: "f-07", de: "der Zopf", vi: "Tóc tết / Đuôi sam", gender: "der", type: "noun" },
                { id: "f-08", de: "der Pferdeschwanz", vi: "Tóc đuôi ngựa (buộc cao)", gender: "der", type: "noun" },
                { id: "f-09", de: "die Hochsteckfrisur", vi: "Tóc bới cao (dự tiệc/cô dâu)", gender: "die", type: "noun" },
                { id: "f-10", de: "kahl / die Glatze", vi: "Hói / Đầu trọc", type: "adjective" }
            ]
        },
        {
            id: "g5",
            title: "5. Beratung & Dialoge (Tư vấn & Hội thoại)",
            items: [
                { id: "d-01", de: "Was darf ich für Sie tun?", vi: "Tôi có thể giúp gì cho quý khách?", type: "phrase" },
                { id: "d-02", de: "Haben Sie einen Termin?", vi: "Quý khách có hẹn trước không?", type: "phrase" },
                { id: "d-03", de: "Wie möchten Sie es haben?", vi: "Quý khách muốn cắt kiểu gì ạ?", type: "phrase" },
                { id: "d-04", de: "Nur die Spitzen schneiden, bitte.", vi: "Làm ơn chỉ cắt ngọn thôi nhé.", type: "phrase" },
                { id: "d-05", de: "Nicht zu kurz!", vi: "Đừng cắt ngắn quá!", type: "phrase" },
                { id: "d-06", de: "Ich möchte eine Veränderung.", vi: "Tôi muốn thay đổi kiểu tóc hoàn toàn.", type: "phrase" },
                { id: "d-07", de: "Ist das Wasser zu heiß?", vi: "Nước gội có nóng quá không ạ?", type: "phrase" },
                { id: "d-08", de: "Möchten Sie den Scheitel links oder rechts?", vi: "Quý khách muốn để ngôi trái hay phải?", type: "phrase" },
                { id: "d-09", de: "Gefällt Ihnen die Länge?", vi: "Độ dài thế này quý khách ưng chưa?", type: "phrase" },
                { id: "d-10", de: "Sollen wir föhnen oder lufttrocknen?", vi: "Chúng tôi sấy tạo kiểu hay để khô tự nhiên?", type: "phrase" },
                { id: "d-11", de: "Das macht 35 Euro.", vi: "Hết 35 Euro ạ.", type: "phrase" },
                { id: "d-12", de: "Möchten Sie ein Produkt für zu Hause?", vi: "Quý khách có muốn mua dưỡng tóc về dùng không?", type: "phrase" }
            ]
        }
    ]
};

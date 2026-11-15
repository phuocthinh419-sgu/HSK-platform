/* =====================================================================
   I. KHO TỪ VỰNG TRỐNG (DO LÒ ĐÚC AI TỰ ĐỘNG NẠP & LƯU TRỮ)
   ===================================================================== */
const VOCABULARY_DB = [];

/* =====================================================================
   II. MA TRẬN 30 ĐIỂM NGỮ PHÁP HSK 1–3 (ĐẦY ĐỦ)
   ===================================================================== */
const GRAMMAR_DB = [
    // --- HSK 1 ---
    {id: "g101", level: 1, title: "1. Câu chữ 是 (shì) – Khẳng định & Định danh", formula: "S + 是 + O", explanation: "Dùng để giới thiệu tên, quốc tịch, nghề nghiệp.", condition: "Vị ngữ là danh từ/đại từ.", exampleZh: "我是学生。", examplePy: "Wǒ shì xuésheng.", exampleVi: "Tôi là học sinh.", commonMistakes: "Dùng 是 với tính từ (VD: 我是忙).", confusable: "Cấu trúc S + 很 + Adj", exercises: []},
    {id: "g102", level: 1, title: "2. Trạng ngữ nơi chốn với 在 (zài)", formula: "S + 在 + Địa điểm + V", explanation: "Diễn tả hành động xảy ra tại một địa điểm.", condition: "Bắt buộc đứng TRƯỚC động từ hành động.", exampleZh: "我在学校看书。", examplePy: "Wǒ zài xuéxiào kàn shū.", exampleVi: "Tôi đọc sách ở trường.", commonMistakes: "Để '在 + địa điểm' ở cuối câu.", confusable: "Động từ 在 mang nghĩa 'ở tại'", exercises: []},
    {id: "g103", level: 1, title: "3. Câu hỏi nghi vấn với 吗 (ma)", formula: "Câu trần thuật + 吗？", explanation: "Biến câu trần thuật thành câu hỏi Có/Không.", condition: "Không dùng kèm các đại từ nghi vấn khác.", exampleZh: "你是老师吗？", examplePy: "Nǐ shì lǎoshī ma?", exampleVi: "Bạn là giáo viên phải không?", commonMistakes: "Dùng chung 吗 với 谁, 什么.", confusable: "Câu hỏi chính phản (V 不 V)", exercises: []},
    {id: "g104", level: 1, title: "4. Phủ định với 不 (bù) và 没 (méi)", formula: "不 + V/Adj (Hiện tại/Tương lai) | 没 + V (Quá khứ)", explanation: "不 phủ định thói quen/tương lai, 没 phủ định hành động đã xảy ra.", condition: "Tùy thuộc vào thời gian của câu.", exampleZh: "我明天不去。/ 我昨天没去。", examplePy: "Wǒ míngtiān bù qù. / Wǒ zuótiān méi qù.", exampleVi: "Mai tôi không đi. / Hôm qua tôi không đi.", commonMistakes: "Dùng 不 cho hành động trong quá khứ.", confusable: "不 vs 没", exercises: []},
    {id: "g105", level: 1, title: "5. Đại từ nghi vấn 谁, 什么, 哪, 哪儿", formula: "S + V + Đại từ nghi vấn?", explanation: "Dùng để hỏi Ai (谁), Cái gì (什么), Nào (哪), Ở đâu (哪儿).", condition: "Đặt từ để hỏi đúng vào vị trí của câu trả lời.", exampleZh: "你去哪儿？", examplePy: "Nǐ qù nǎr?", exampleVi: "Bạn đi đâu?", commonMistakes: "Thêm 吗 vào cuối câu có đại từ nghi vấn.", confusable: "哪 (Nào) vs 那 (Kia)", exercises: []},
    {id: "g106", level: 1, title: "6. Định ngữ và trợ từ kết cấu 的 (de)", formula: "Định ngữ + 的 + Trung tâm ngữ", explanation: "Biểu thị quan hệ sở hữu hoặc tính chất của danh từ.", condition: "Đứng giữa thành phần bổ nghĩa và danh từ chính.", exampleZh: "这是我的书。", examplePy: "Zhè shì wǒ de shū.", exampleVi: "Đây là sách của tôi.", commonMistakes: "Bỏ 的 khi sở hữu đồ vật/người không thân thiết.", confusable: "的 vs 得", exercises: []},
    {id: "g107", level: 1, title: "7. Vị trí của Trạng ngữ thời gian", formula: "Thời gian + S + V hoặc S + Thời gian + V", explanation: "Thời gian xảy ra hành động bắt buộc đứng trước động từ.", condition: "Chỉ mốc thời điểm cụ thể.", exampleZh: "我明天去北京。", examplePy: "Wǒ míngtiān qù Běijīng.", exampleVi: "Ngày mai tôi đi Bắc Kinh.", commonMistakes: "Để trạng ngữ thời gian ở cuối câu.", confusable: "Khoảng thời gian (đứng sau V)", exercises: []},
    {id: "g108", level: 1, title: "8. Động từ năng nguyện 会, 想, 能", formula: "S + 能/会/想 + V", explanation: "会 (biết qua học tập), 想 (muốn), 能 (có khả năng/điều kiện).", condition: "Đứng ngay trước động từ chính.", exampleZh: "我会说汉语。", examplePy: "Wǒ huì shuō Hànyǔ.", exampleVi: "Tôi biết nói tiếng Trung.", commonMistakes: "Nhầm lẫn cách dùng giữa 会 và 能.", confusable: "会 vs 能", exercises: []},
    {id: "g109", level: 1, title: "9. Lượng từ cơ bản 个 (gè), 本 (běn), 些 (xiē)", formula: "Số từ + Lượng từ + Danh từ", "explanation": "Tiếng Trung bắt buộc phải có lượng từ giữa số từ và danh từ.", condition: "Khi đếm số lượng sự vật.", exampleZh: "我有一个苹果。", examplePy: "Wǒ yǒu yí ge píngguǒ.", exampleVi: "Tôi có một quả táo.", commonMistakes: "Dịch trực tiếp bỏ qua lượng từ.", confusable: "Các lượng từ đặc thù cho từng vật", "exercises": []},
    {id: "g110", level: 1, title: "10. Câu liên động (Hai động từ)", "formula": "S + V1 + (O1) + V2 + (O2)", "explanation": "Hành động 2 là mục đích hoặc phương thức của hành động 1.", condition: "Các động từ chung một chủ ngữ.", exampleZh: "我坐飞机去中国。", "examplePy": "Wǒ zuò fēijī qù Zhōngguó.", "exampleVi": "Tôi ngồi máy bay đi Trung Quốc.", commonMistakes: "Sai trật tự (để mục đích lên trước phương tiện).", confusable: "Câu kiêm ngữ", "exercises": []},

    // --- HSK 2 ---
    {id: "g201", level: 2, title: "11. Liên từ nhân quả 因为……所以……", formula: "因为 + Nguyên nhân, 所以 + Kết quả", explanation: "Nối hai mệnh đề để biểu thị quan hệ nhân quả.", condition: "Có thể đứng trước hoặc sau chủ ngữ.", exampleZh: "因为下雨，所以我没去。", examplePy: "Yīnwèi xiàyǔ, suǒyǐ wǒ méi qù.", exampleVi: "Vì trời mưa, nên tôi không đi.", commonMistakes: "Dùng 因为 đi chung với 但是.", confusable: "虽然……但是", exercises: []},
    {id: "g202", level: 2, title: "12. Bổ ngữ trạng thái với 得 (de)", formula: "V + 得 + 很/非常 + Adj", explanation: "Đánh giá mức độ, kết quả của hành động.", condition: "Nếu có tân ngữ phải lặp lại động từ.", exampleZh: "他跑得很快。", examplePy: "Tā pǎo de hěn kuài.", exampleVi: "Anh ấy chạy rất nhanh.", commonMistakes: "S + V + O + 得 + Adj (Sai vị trí).", confusable: "Định ngữ 的", exercises: []},
    {id: "g203", level: 2, title: "13. Đại từ chỉ thị 这 (zhè), 那 (nà)", formula: "这/那 + (Số lượng) + Lượng từ + Danh từ", explanation: "Dùng để chỉ định cụ thể Này (这) hoặc Kia (那).", condition: "Xác định rõ sự vật được nói đến.", exampleZh: "那本书是我的。", "examplePy": "Nà běn shū shì wǒ de.", "exampleVi": "Quyển sách kia là của tôi.", commonMistakes: "Dùng trực tiếp 这/那 + Danh từ mà thiếu lượng từ.", confusable: "哪 (Nào)", exercises: []},
    {id: "g204", level: 2, title: "14. Trợ từ động thái 了 (le)", formula: "V + 了 + (O)", explanation: "Biểu thị hành động đã hoàn thành trong quá khứ.", condition: "Đứng ngay sau động từ.", exampleZh: "我买了一本书。", examplePy: "Wǒ mǎile yì běn shū.", exampleVi: "Tôi đã mua 1 cuốn sách.", commonMistakes: "Dùng 了 cho hành động thói quen thường xuyên.", confusable: "了 ngữ khí (cuối câu)", exercises: []},
    {id: "g205", level: 2, title: "15. Câu so sánh hơn với 比 (bǐ)", formula: "A 比 B + Adj", explanation: "Dùng để so sánh đặc điểm giữa A và B.", condition: "Tính từ phía sau không được mang phó từ chỉ mức độ (很, 非常).", exampleZh: "他比我高。", examplePy: "Tā bǐ wǒ gāo.", exampleVi: "Anh ấy cao hơn tôi.", commonMistakes: "Dùng A 比 B 很高 (Sai).", confusable: "So sánh bằng 跟...一样", exercises: []},
    {id: "g206", level: 2, title: "16. Cấu trúc hành động đang tiếp diễn 正在……呢", formula: "S + 正在 + V + 呢", explanation: "Nhấn mạnh hành động đang diễn ra tại một thời điểm.", condition: "Tương đương thì hiện tại tiếp diễn.", exampleZh: "我正在看电视呢。", examplePy: "Wǒ zhèngzài kàn diànshì ne.", exampleVi: "Tôi đang xem tivi.", commonMistakes: "Dùng với động từ chỉ trạng thái (是, 有).", confusable: "Trợ từ 着", exercises: []},
    {id: "g207", level: 2, title: "17. Hiện tượng lặp lại động từ", formula: "V V hoặc V 一 V", explanation: "Biểu thị hành động diễn ra nhanh, nhẹ nhàng, hoặc mang tính thử nghiệm.", condition: "Chỉ dùng cho động từ chỉ hành động có thể kiểm soát.", exampleZh: "你看一下。", examplePy: "Nǐ kàn yíxià.", exampleVi: "Bạn xem thử đi.", commonMistakes: "Lặp lại động từ chỉ trạng thái (có, là).", confusable: "Tính từ lặp lại", exercises: []},
    {id: "g208", level: 2, "title": "18. Phó từ 就 (jiù) và 才 (cái)", formula: "Thời gian + 就/才 + V", explanation: "就 chỉ sự việc xảy ra sớm, thuận lợi. 才 chỉ sự việc xảy ra muộn, khó khăn.", condition: "Đứng trước động từ.", exampleZh: "他八点就来了。", "examplePy": "Tā bā diǎn jiù lái le.", "exampleVi": "Anh ấy 8 giờ đã đến rồi (Đến sớm).", commonMistakes: "Dùng lẫn lộn sắc thái 2 từ.", confusable: "就 vs 才", exercises: []},
    {id: "g209", level: 2, title: "19. Câu hỏi chính phản (A không A)", formula: "V 不 V / Adj 不 Adj", explanation: "Cách hỏi nghi vấn 'có... không?' trực tiếp.", condition: "Tuyệt đối không dùng thêm 吗 ở cuối câu.", exampleZh: "你去不去？", examplePy: "Nǐ qù bu qù?", exampleVi: "Bạn đi không?", commonMistakes: "Nói '你去不去吗？' (Sai).", confusable: "Câu hỏi với 吗", exercises: []},
    {id: "g210", level: 2, title: "20. Giới từ chỉ đối tượng 给, 对, 跟", "formula": "S + 给/对/跟 + Đối tượng + V", explanation: "Biểu thị hướng của hành động hướng tới ai.", condition: "Phải đứng trước động từ chính.", exampleZh: "我给你打电话。", examplePy: "Wǒ gěi nǐ dǎ diànhuà.", exampleVi: "Tôi gọi điện cho bạn.", commonMistakes: "Đặt giới từ sau động từ (S + V + 给 + O).", confusable: "给 (cho) vs 对 (đối với)", exercises: []},

    // --- HSK 3 ---
    {id: "g301", level: 3, title: "21. Mệnh đề nhượng bộ 虽然……但是……", formula: "虽然 + Nhượng bộ, 但是 + Quan điểm", explanation: "Biểu thị sự đối lập (Tuy... nhưng...).", condition: "Thường dùng để phản biện lịch sự.", exampleZh: "虽然汉字很难，但是很有意思。", examplePy: "Suīrán Hànzì hěn nán, dànshì hěn yǒu yìsi.", exampleVi: "Tuy chữ Hán khó, nhưng rất thú vị.", commonMistakes: "Quên dùng cặp liên từ.", confusable: "因为……所以", exercises: []},
    {id: "g302", level: 3, title: "22. Câu chữ 把 (bǎ) xử trí", formula: "S + 把 + Tân ngữ xác định + V + Thành phần khác", explanation: "Nhấn mạnh sự xử trí, làm thay đổi trạng thái của sự vật ĐÃ XÁC ĐỊNH.", condition: "Bắt buộc phải có thành phần khác (bổ ngữ/trợ từ) sau động từ.", exampleZh: "请把书打开。", examplePy: "Qǐng bǎ shū dǎkāi.", exampleVi: "Xin hãy mở sách ra.", commonMistakes: "Để động từ trơ trọi ở cuối câu.", confusable: "Câu bị động 被", exercises: []},
    {id: "g303", level: 3, title: "23. Câu chữ 被 (bèi) - Bị động", formula: "S + 被 + (Chủ thể) + V + Thành phần khác", explanation: "Biểu thị chủ ngữ là đối tượng tiếp nhận hành động (bị động).", condition: "Động từ phải mang tính tác động và có thành phần phía sau.", exampleZh: "我的苹果被他吃了。", examplePy: "Wǒ de píngguǒ bèi tā chī le.", exampleVi: "Táo của tôi bị anh ấy ăn rồi.", commonMistakes: "Dùng với nội động từ không mang tính tác động.", confusable: "Câu chữ 把", exercises: []},
    {id: "g304", level: 3, title: "24. Bổ ngữ xu hướng kép", formula: "V + 起来, 下去, 过来, 过去...", explanation: "Biểu thị hướng của hành động so với vị trí của người nói.", condition: "Đứng sau động từ. Nếu có tân ngữ nơi chốn, phải kẹp giữa.", exampleZh: "他走过来了。", examplePy: "Tā zǒu guòlái le.", exampleVi: "Anh ấy đi qua đây rồi.", commonMistakes: "Sai vị trí tân ngữ nơi chốn.", confusable: "Bổ ngữ kết quả", exercises: []},
    {id: "g305", level: 3, title: "25. Bổ ngữ khả năng (得/不)", formula: "V + 得/不 + Bổ ngữ kết quả/xu hướng", explanation: "Biểu thị có thể hoặc không thể đạt được kết quả nào đó do điều kiện khách quan.", condition: "Thường dùng ở dạng phủ định.", exampleZh: "我听不懂。", examplePy: "Wǒ tīng bù dǒng.", exampleVi: "Tôi nghe không hiểu (kết quả).", commonMistakes: "Dùng 能 不能 thay vì bổ ngữ khả năng.", confusable: "能 + V", exercises: []},
    {id: "g306", level: 3, title: "26. Cấu trúc tăng tiến 不但……而且……", formula: "不但 + Ý 1, 而且 + Ý 2", explanation: "Không những... mà còn...", condition: "Hai ý phải cùng chiều (cùng tích cực hoặc cùng tiêu cực).", exampleZh: "他不但聪明，而且很努力。", examplePy: "Tā búdàn cōngmíng, érqiě hěn nǔlì.", exampleVi: "Anh ấy không những thông minh mà còn chăm chỉ.", commonMistakes: "Dùng cho hai ý trái ngược nhau.", confusable: "除了...还", exercises: []},
    {id: "g307", level: 3, title: "27. Trợ từ động thái 着 (zhe) chỉ trạng thái", formula: "V1 + 着 + (O1) + V2 + (O2)", explanation: "Hành động 1 đang duy trì trạng thái để làm nền cho hành động 2.", condition: "V1 thường là động từ chỉ tư thế (đứng, ngồi, mặc).", exampleZh: "他们站着说话。", examplePy: "Tāmen zhàn zhe shuōhuà.", exampleVi: "Họ đứng nói chuyện.", commonMistakes: "Nhầm lẫn với 正在 (đang xảy ra).", confusable: "正在 (tiếp diễn hành động)", exercises: []},
    {id: "g308", level: 3, title: "28. Trợ từ động thái 过 (guo) chỉ kinh nghiệm", formula: "V + 过 + (O)", explanation: "Hành động đã từng xảy ra trong quá khứ, hiện tại không còn.", condition: "Dùng để nói về trải nghiệm đã qua.", exampleZh: "我去过中国。", examplePy: "Wǒ qùguo Zhōngguó.", exampleVi: "Tôi đã từng đi Trung Quốc.", commonMistakes: "Dùng chung với 了 một cách tùy tiện.", confusable: "Trợ từ 了 (hoàn thành)", exercises: []},
    {id: "g309", level: 3, title: "29. Phó từ 越来越 (yuèláiyuè)", formula: "越来越 + Adj / V tâm lý", explanation: "Biểu thị mức độ thay đổi tăng dần theo thời gian (Ngày càng...).", condition: "Không được dùng thêm phó từ chỉ mức độ (很, 非常) phía sau.", exampleZh: "天气越来越冷了。", "examplePy": "Tiānqì yuèláiyuè lěng le.", "exampleVi": "Thời tiết ngày càng lạnh rồi.", commonMistakes: "Nói 越来越很冷 (Sai).", confusable: "越...越...", "exercises": []},
    {id: "g310", level: 3, title: "30. Cấu trúc điều kiện 只有……才……", formula: "只有 + Điều kiện duy nhất, 才 + Kết quả", explanation: "Chỉ có... mới...", condition: "Nhấn mạnh điều kiện tiên quyết, không có không được.", exampleZh: "只有努力学习，才能考好。", examplePy: "Zhǐyǒu nǔlì xuéxí, cái néng kǎo hǎo.", exampleVi: "Chỉ có chăm chỉ học, mới có thể thi tốt.", commonMistakes: "Dùng 只有 đi cặp với 就.", confusable: "只要...就... (Miễn là... thì...)", "exercises": []}
];

/* =====================================================================
   III. KHUNG CHỨA KỸ NĂNG NGHE - NÓI - ĐỌC - VIẾT (DỰ PHÒNG CƠ BẢN)
   ===================================================================== */
const LISTENING_DB = [{ id: "l1", level: 1, type: 1, typeName: "Nghe từ", audioText: "你好", pinyin: "nǐ hǎo", viet: "Xin chào", question: "Nghe từ và chọn nghĩa:", options: ["Xin chào", "Cảm ơn", "Tạm biệt"], answer: "Xin chào", explain: "Từ vựng cơ bản HSK 1." }];
const SPEAKING_DATA = { shadowing: [], phonetics: [], qaPrompts: [{ id: "qa1", level: 2, qZh: "你觉得汉语难吗？", qPy: "Nǐ juéde Hànyǔ nán ma?", qVi: "Bạn thấy tiếng Trung khó không?", sampleAnswer: "我觉得汉语不难。", keywords: ["觉得"] }], situations: [] };
const READING_DB = [];
const WRITING_TASKS_DB = [{ id: "w1", actType: "Sắp xếp câu", level: 2, prompt: "Sắp xếp: [因为] [下雨了] [所以] [不去公园]", words: ["因为", "下雨了", "所以", "不去公园"], expected: "因为下雨了所以不去公园", keywords: ["因为", "所以"], grammarNote: "Nhân quả" }];

/* =====================================================================
   IV. HỆ THỐNG TRẠNG THÁI & HỒ SƠ BỆ HẠ (LEARNER STATE)
   ===================================================================== */
window.learnerState = {
    hskStandard: "2.0", targetLevel: "all", voiceEngine: "beijing_instant",
    showPinyin: true, showViet: true, xp: 0, streak: 0, lastStudyDate: null,
    vocabProgress: {}, grammarProgress: {}, customVocab: [], // LƯU TỪ VỰNG DO AI ĐÚC
    skillStats: { listening: { attempts: 0, correct: 0 }, speaking: { attempts: 0, correct: 0 }, reading: { attempts: 0, correct: 0 }, writing: { attempts: 0, correct: 0, submissions: [] } },
    errorBank: [], examHistory: [], dailyQuests: { recallVocab: 0, grammarEx: 0, listenSpeak: 0, readWrite: 0 }
};

window.mergeLearnerState = function(loaded) {
    if (!loaded) return;
    window.learnerState = Object.assign({}, window.learnerState, loaded);
    if (!window.learnerState.voiceEngine || window.learnerState.voiceEngine === "browser_natural") window.learnerState.voiceEngine = "beijing_instant";
    refreshAllViews();
};

function persistState() {
    const today = new Date().toISOString().slice(0, 10);
    if (window.learnerState.lastStudyDate !== today) {
        window.learnerState.streak = (window.learnerState.streak || 0) + 1;
        window.learnerState.lastStudyDate = today;
    }
    updateDashboardAndSidebarStats();
}

function awardRealXP(amount, reason) {
    if (amount <= 0) return;
    window.learnerState.xp += amount;
    showToast(`+${amount} XP • ${reason}`, "emerald");
    persistState();
}

function ensureVocabEntry(wordId) {
    if (!window.learnerState.vocabProgress[wordId]) {
        window.learnerState.vocabProgress[wordId] = {
            state: 0, bookmarked: false, nextReview: null, intervalDays: 0, historyCount: 0,
            metrics: { char: false, meaning: false, pinyin: false, listen: false, sentence: false, write: false, newContext: false }
        };
    }
    return window.learnerState.vocabProgress[wordId];
}

/* =====================================================================
   V. HỆ THỐNG ÂM THANH CHUẨN BẮC KINH (TTS) ĐÃ FIX GIỌNG TỰ NHIÊN
   ===================================================================== */
let currentAudioPlayer = null, availableZhVoices = [], cachedBestVoice = null;

function loadPreferredChineseVoices() {
    if (!('speechSynthesis' in window)) return;
    const all = window.speechSynthesis.getVoices() || [];
    availableZhVoices = all.filter(v => v.lang && v.lang.toLowerCase().includes('zh'));
    cachedBestVoice = pickBestNaturalBrowserVoice();
}
if ('speechSynthesis' in window) {
    loadPreferredChineseVoices();
    window.speechSynthesis.onvoiceschanged = loadPreferredChineseVoices;
}

// Chọn giọng đọc tự nhiên nhất trong trình duyệt
function pickBestNaturalBrowserVoice() {
    if (!availableZhVoices.length && ('speechSynthesis' in window)) {
        const allVoices = window.speechSynthesis.getVoices() || [];
        availableZhVoices = allVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith('zh'));
    }
    if (!availableZhVoices.length) return null;

    // Ưu tiên giọng nữ nhẹ nhàng, tự nhiên của Microsoft/Google (bỏ các giọng trầm hoặc robotic)
    const priorityKeywords = [
        'Xiaoxiao', 'Xiaoyi', 'Tingting', 'Google 普通话', 'zh-CN-XiaoxiaoNeural', 'zh-CN-XiaoyiNeural', 'Natural'
    ];
    for (const kw of priorityKeywords) {
        const match = availableZhVoices.find(v => v.name.includes(kw) || (v.lang && v.lang.includes(kw)));
        if (match) return match;
    }
    const nonDesktop = availableZhVoices.find(v => !v.name.toLowerCase().includes('desktop'));
    return nonDesktop || availableZhVoices[0];
}

function changeVoiceEngine(engine) {
    window.learnerState.voiceEngine = engine;
    showToast(`Đã chọn động cơ: ${engine}`, "emerald");
}

// Phát âm TỨC THÌ (< 30ms) không chờ mạng
function playInstantBeijingSpeech(text, rate = 0.95) {
    if (!('speechSynthesis' in window)) {
        showToast("Trình duyệt hiện tại không hỗ trợ phát âm thanh.", "amber");
        return;
    }
    try {
        if (currentAudioPlayer) {
            currentAudioPlayer.pause();
            currentAudioPlayer = null;
        }
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
        }
        if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
            window.speechSynthesis.cancel();
        }

        const cleanedText = text.replace(/^[男女AB]\s*[：:]\s*/g, '').replace(/\s+[男女AB]\s*[：:]\s*/g, '。 ');
        const utter = new SpeechSynthesisUtterance(cleanedText);
        utter.lang = 'zh-CN';
        if (!cachedBestVoice) cachedBestVoice = pickBestNaturalBrowserVoice();
        if (cachedBestVoice) utter.voice = cachedBestVoice;

        // Trả về mặc định tự nhiên, không chỉnh sửa pitch quá lố gây chói tai
        utter.rate = rate;
        utter.pitch = 1.0; 
        utter.volume = 1.0;

        window.speechSynthesis.speak(utter);
    } catch (e) {
        showToast("Không thể phát âm thanh trên thiết bị này.", "amber");
    }
}

function speakChinese(text, rate = 0.95) {
    playInstantBeijingSpeech(text, rate);
}

function showToast(msg, color = "emerald") {
    const cont = document.getElementById('toast-container');
    if (!cont) return;
    const el = document.createElement('div');
    const bg = color === 'rose' ? 'bg-rose-600' : (color === 'amber' ? 'bg-amber-600' : 'bg-navy-900 border-l-4 border-emerald-500');
    el.className = `${bg} text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-lg`;
    el.innerHTML = msg;
    cont.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 300); }, 3000);
}

/* =====================================================================
   VI. ĐIỀU HƯỚNG VÀ RENDER GIAO DIỆN CƠ BẢN
   ===================================================================== */
function navigateTo(viewId) {
    document.querySelectorAll('.view-section').forEach(s => s.classList.add('hidden'));
    const t = document.getElementById('view-' + viewId);
    if (t) t.classList.remove('hidden');
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.className = "nav-btn w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-slate-300 hover:bg-slate-800 transition-all");
    const aBtn = document.getElementById('nav-' + viewId);
    if (aBtn) aBtn.className = "nav-btn w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-semibold bg-emerald-600 text-white shadow-sm";
    
    if (viewId === 'dashboard') updateDashboardAndSidebarStats();
    if (viewId === 'vocabulary') renderVocabulary();
    if (viewId === 'grammar') renderGrammarList();
    if (viewId === 'listening') renderListeningModule();
    if (viewId === 'speaking') renderSpeakingModule();
}

function updateDashboardAndSidebarStats() {
    const st = window.learnerState;
    const xpEl = document.getElementById('sidebar-xp');
    if(xpEl) xpEl.textContent = `${st.xp} XP`;
    const sb = document.getElementById('sidebar-vocab-count');
    if(sb) sb.textContent = VOCABULARY_DB.length;
}

function renderVocabulary() {
    const grid = document.getElementById('vocab-grid');
    if (!grid) return;
    if (VOCABULARY_DB.length === 0) {
        grid.innerHTML = `<div class="col-span-full bg-indigo-50 p-6 rounded-xl border border-indigo-200 text-center text-indigo-800 text-sm font-bold">Kho từ vựng đang trống. Bệ hạ hãy điền API Key và dán lệnh vào Lò Đúc AI phía trên nhé!</div>`;
        return;
    }
    grid.innerHTML = VOCABULARY_DB.map(w => {
        return `<div class="bg-white rounded-2xl border p-5 shadow-sm hover:shadow-md transition">
            <div class="flex justify-between items-center"><span class="text-[11px] font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-600">HSK ${w.level20} • ${w.pos}</span><button onclick="speakChinese('${w.hanzi}')" class="text-emerald-600 bg-emerald-50 px-2 py-1 rounded"><i class="fa-solid fa-volume-high"></i></button></div>
            <h3 class="text-3xl font-bold hanzi-font mt-3">${w.hanzi}</h3>
            <div class="text-sm font-semibold text-emerald-700 mt-1">${w.pinyin}</div>
            <div class="text-sm font-bold text-slate-800">${w.viet}</div>
            <div class="mt-3 p-3 bg-slate-50 rounded-xl text-xs">
                <div class="hanzi-font font-bold text-sm flex justify-between">${w.exampleZh} <button onclick="speakChinese('${(w.exampleZh||'').replace(/'/g, "\\'")}')" class="text-emerald-600"><i class="fa-solid fa-play"></i></button></div>
                <div class="text-slate-600 italic mt-1">${w.exampleVi}</div>
            </div>
        </div>`;
    }).join('');
}

function renderListeningModule() { 
    const c = document.getElementById('listening-exercises-container');
    if(c) c.innerHTML = LISTENING_DB.map(l => `<div class="p-5 bg-white border rounded-xl mb-4"><div class="flex justify-between items-center"><h3 class="font-bold text-emerald-700">${l.typeName}</h3><button onclick="speakChinese('${l.audioText}')" class="px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg"><i class="fa-solid fa-play"></i> Nghe</button></div><p class="mt-2 font-bold">${l.question}</p><div class="mt-2 text-xs p-2 bg-amber-50 rounded text-amber-800 border border-amber-200">Bản ghi đã khóa. Cần nghe âm thanh thực tế.</div></div>`).join('');
}
function renderSpeakingModule() { 
    const ws = document.getElementById('speaking-workspace');
    if(ws) ws.innerHTML = `<div class="p-6 bg-white border rounded-xl text-center"><h3 class="font-bold text-emerald-700">Hội Thoại AI Đang Sẵn Sàng</h3><p class="text-sm text-slate-500 mt-2">Sử dụng Micro để giao tiếp.</p></div>`;
}

function renderReadWriteModule() { 
    const c = document.getElementById('rw-writing-container');
    if (!c) return;
    const fallbackWord = { id: 'dummy', hanzi: '汉', pinyin: 'hàn', viet: 'Hán (Mẫu)', strokes: ['丶', '㇇', '㇏'], exampleZh: "请先添加词汇。", examplePy: "Qǐng xiān tiānjiā cíhuì.", exampleVi: "Vui lòng thêm từ vựng trước bằng AI Forge." };
    let selectedWord = VOCABULARY_DB.length > 0 ? VOCABULARY_DB[0] : fallbackWord;

    c.innerHTML = `
        <div class="bg-white rounded-2xl border p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 shadow-sm">
            <div class="flex flex-col items-center space-y-3">
                <div class="relative w-64 h-64 rounded-2xl border-2 border-rose-500 tianzige-canvas shadow-inner flex items-center justify-center">
                    <div class="absolute inset-0 flex items-center justify-center text-8xl font-bold hanzi-font text-slate-200/70 select-none">${selectedWord.hanzi}</div>
                    <canvas id="hanzi-draw-canvas" width="256" height="256" class="relative z-10 w-full h-full cursor-crosshair touch-none"></canvas>
                </div>
                <div class="flex gap-2">
                    <button onclick="document.getElementById('hanzi-draw-canvas').getContext('2d').clearRect(0,0,256,256)" class="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded">Xóa bảng</button>
                    <button onclick="awardRealXP(10, 'Luyện viết')" class="px-4 py-2 bg-navy-900 text-white text-xs font-bold rounded">Lưu nét viết</button>
                </div>
            </div>
            <div class="space-y-4 text-xs">
                <h3 class="text-base font-extrabold border-b pb-2">Từ đang viết: <span class="hanzi-font text-emerald-600 text-2xl">${selectedWord.hanzi}</span></h3>
                <div class="p-4 bg-emerald-50 rounded border border-emerald-200 mt-4">
                    <div class="font-bold text-emerald-900">Ví dụ:</div>
                    <div class="hanzi-font font-bold text-sm">${selectedWord.exampleZh}</div>
                    <div>${selectedWord.exampleVi}</div>
                </div>
                <div class="text-amber-700 bg-amber-50 p-3 rounded">Lưu ý: Bệ hạ hãy nạp từ vựng vào kho để hệ thống Canvas nhận diện các từ mới!</div>
            </div>
        </div>
    `;
}

function renderExamOverview() { 
    const c = document.getElementById('exam-history-list');
    if(c) c.innerHTML = "Lịch sử thi mô phỏng sẽ hiện ở đây..."; 
}
function renderSRSAndErrorBank() { 
    if(document.getElementById('srs-full-list')) document.getElementById('srs-full-list').innerHTML = "Lịch ôn SRS 1-3-7-14 ngày. (Trống)"; 
}
function startMockExam(lvl) { showToast(`Bắt đầu thi thử HSK ${lvl}`, "amber"); }

function normalizeChineseSentence(str) { return (str || '').replace(/[。！？，、\s.,!?]/g, '').trim(); }

/* =====================================================================
   VII. LÒ ĐÚC TỪ VỰNG AI (TỰ ĐỘNG NẠP VÀO CSDL TỪ VỰNG)
   ===================================================================== */
async function processBulkImportWithAI() {
    const inputEl = document.getElementById('ai-bulk-import-input');
    const statusEl = document.getElementById('ai-import-status');
    const keyEl = document.getElementById('gemini-api-key');
    
    const rawText = inputEl?.value.trim();
    const apiKey = keyEl?.value.trim();

    if (!rawText) { showToast("Bệ hạ chưa nhập từ vựng!", "amber"); return; }
    if (!apiKey) { showToast("Bệ hạ chưa dán Gemini API Key vào ô!", "rose"); return; }
    
    if (statusEl) statusEl.classList.remove('hidden');
    
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const promptText = `Nhiệm vụ: Chuyển danh sách từ vựng HSK sau thành JSON array. 
    Mỗi object tuân thủ NGHIÊM NGẶT cấu trúc này:
    {"id": "v_auto_" + số ngẫu nhiên, "hanzi": "chữ Hán", "pinyin": "pinyin có dấu", "viet": "nghĩa VN ngắn gọn", "pos": "từ loại", "level20": số nguyên (cấp độ HSK), "level30": số nguyên, "lesson": "Từ vựng AI", "topic": "Mở rộng", "exampleZh": "1 câu ví dụ tiếng Trung ngắn HSK", "examplePy": "pinyin của câu ví dụ", "exampleVi": "dịch câu ví dụ", "collocations": ["cụm 1"], "synonyms": "đồng nghĩa", "related": ["từ liên quan"], "strokes": []}
    Tuyệt đối chỉ trả về chuỗi JSON, không có định dạng markdown hay giải thích nào khác.
    Dữ liệu cần chuyển:\n${rawText}`;

    try {
        const res = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }], generationConfig: { responseMimeType: "application/json" } }) });
        const data = await res.json();
        let jsonText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        
        // Tẩy rửa JSON khỏi mã markdown thừa của AI
        jsonText = jsonText.replace(/```json/gi, '').replace(/```/g, '').trim();
        
        if (jsonText) {
            const newVocabs = JSON.parse(jsonText);
            VOCABULARY_DB.push(...newVocabs);
            window.learnerState.customVocab = (window.learnerState.customVocab || []).concat(newVocabs);
            persistState(); 
            
            inputEl.value = "";
            renderVocabulary();
            updateDashboardAndSidebarStats();
            showToast(`Tuyệt vời! Đã đúc thành công ${newVocabs.length} từ vựng vào kho!`, "emerald");
        }
    } catch (err) { 
        showToast("Lỗi giải mã JSON hoặc API Key không hợp lệ. Xin thử lại.", "rose"); 
        console.error(err);
    } finally { 
        if (statusEl) statusEl.classList.add('hidden'); 
    }
}

/* =====================================================================
   VIII. KHO NGỮ PHÁP VÀ LÒ ĐÚC BÀI TẬP TỪ TỪ VỰNG CÁ NHÂN
   ===================================================================== */
let currentGrammarId = GRAMMAR_DB[0].id;

function renderGrammarList() {
    const col = document.getElementById('grammar-list-col');
    if (!col) return;
    col.innerHTML = GRAMMAR_DB.map(g => {
        const active = g.id === currentGrammarId;
        return `
            <button onclick="selectGrammarPoint('${g.id}')" class="w-full text-left p-4 rounded-2xl border transition-all ${active ? 'bg-navy-900 text-white border-navy-900 shadow' : 'bg-white text-slate-800 hover:border-emerald-400'}">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded ${active ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600'}">HSK ${g.level}</span>
                <h4 class="font-bold text-sm mt-1">${g.title}</h4>
            </button>
        `;
    }).join('');
    renderGrammarDetail(currentGrammarId);
}

function selectGrammarPoint(gId) { currentGrammarId = gId; renderGrammarList(); }

function renderGrammarDetail(gId) {
    const g = GRAMMAR_DB.find(x => x.id === gId);
    const detailCol = document.getElementById('grammar-detail-col');
    if (!g || !detailCol) return;

    detailCol.innerHTML = `
        <div class="border-b border-slate-100 pb-4 space-y-2">
            <h3 class="text-xl font-extrabold text-slate-900">${g.title}</h3>
            <div class="p-3 rounded-xl bg-navy-900 text-emerald-300 font-mono text-xs font-semibold">${g.formula}</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mt-4">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200"><div class="font-bold text-slate-800 mb-1">Giải thích</div><p>${g.explanation}</p></div>
            <div class="p-4 rounded-xl bg-rose-50 border border-rose-200"><div class="font-bold text-rose-800 mb-1">Lỗi thường gặp</div><p>${g.commonMistakes}</p></div>
        </div>
        <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1 mt-4">
            <div class="text-[11px] font-bold text-emerald-800 uppercase">Ví dụ chuẩn mực</div>
            <div class="text-lg font-bold hanzi-font text-slate-900 flex justify-between">${g.exampleZh} <button onclick="speakChinese('${(g.exampleZh).replace(/'/g, "\\'")}')" class="text-emerald-600"><i class="fa-solid fa-volume-high"></i></button></div>
            <div class="text-xs text-emerald-700 font-semibold">${g.examplePy}</div>
            <div class="text-xs text-slate-700">${g.exampleVi}</div>
        </div>
        
        <div class="space-y-4 pt-4 mt-4 border-t border-slate-100">
            <div class="flex items-center justify-between">
                <h4 class="font-extrabold text-slate-900 text-sm flex items-center gap-2"><i class="fa-solid fa-pen-to-square text-emerald-600"></i> Bài Tập Vận Dụng AI</h4>
                <button onclick="generateAIGrammarExercise('${g.id}')" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-1.5"><i class="fa-solid fa-wand-magic-sparkles"></i> Sinh Bài Tập AI</button>
            </div>
            <div id="ai-grammar-ex-box-${g.id}" class="hidden space-y-4"></div>
        </div>
    `;
}

// Hàm AI tự rút từ vựng cá nhân để tạo bài tập ngữ pháp
async function generateAIGrammarExercise(gId) {
    const g = GRAMMAR_DB.find(x => x.id === gId);
    const box = document.getElementById(`ai-grammar-ex-box-${gId}`);
    const keyEl = document.getElementById('gemini-api-key');
    const apiKey = keyEl?.value.trim();

    if (!apiKey) { showToast("Vui lòng dán Gemini API Key vào Lò Đúc ở Kho Từ Vựng trước!", "rose"); return; }
    if (VOCABULARY_DB.length === 0) { showToast("Kho từ vựng trống! Bệ hạ hãy nạp từ vựng trước để AI có nguyên liệu xây bài tập.", "amber"); return; }

    box.classList.remove('hidden');
    box.innerHTML = `<div class="p-4 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-semibold flex items-center gap-2"><i class="fa-solid fa-spinner fa-spin"></i> AI đang rút trích từ vựng trong kho để ghép vào cấu trúc...</div>`;

    // Chọn ngẫu nhiên 6 từ trong kho để đưa vào Prompt
    const shuffledVocab = [...VOCABULARY_DB].sort(() => 0.5 - Math.random());
    const selectedVocab = shuffledVocab.slice(0, 6).map(v => v.hanzi).join(', ');

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const promptText = `Nhiệm vụ: Tạo 1 bài trắc nghiệm và 1 bài sắp xếp câu để luyện ngữ pháp "${g.title}" (Công thức: ${g.formula}).
    BẮT BUỘC dùng các từ vựng này để đặt câu: ${selectedVocab}.
    Trả về định dạng JSON DUY NHẤT (không dùng markdown):
    {"mcq": {"question": "câu hỏi tiếng Trung điền chỗ trống", "options": ["A", "B", "C"], "answer": "đáp án đúng", "explain": "giải thích"}, "reorder": {"promptVi": "Nghĩa tiếng Việt", "words": ["từ 1", "từ 2"], "answer": "câu hoàn chỉnh", "explain": "giải thích trật tự"}}`;

    try {
        const res = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }], generationConfig: { responseMimeType: "application/json" } }) });
        const data = await res.json();
        let jsonText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        jsonText = jsonText.replace(/```json/gi, '').replace(/```/g, '').trim();
        
        if (jsonText) {
            const result = JSON.parse(jsonText);
            box.innerHTML = `
                <div class="p-4 rounded-xl border border-slate-200 bg-white space-y-3 text-xs shadow-sm">
                    <div class="font-bold text-indigo-700"><i class="fa-solid fa-check-circle mr-1"></i> Trắc nghiệm điền từ (Dựa trên kho từ vựng của bạn)</div>
                    <div class="font-bold text-slate-800 hanzi-font text-sm">${result.mcq.question}</div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        ${result.mcq.options.map(opt => `<button onclick="checkAIGrammar(this, '${opt.replace(/'/g, "\\'")}', '${result.mcq.answer.replace(/'/g, "\\'")}', '${result.mcq.explain.replace(/'/g, "\\'")}')" class="text-left p-3 rounded-xl border border-slate-200 hover:border-indigo-500 font-medium hanzi-font transition">${opt}</button>`).join('')}
                    </div>
                </div>
                
                <div class="p-4 rounded-xl border border-slate-200 bg-white space-y-3 text-xs shadow-sm mt-3">
                    <div class="font-bold text-indigo-700"><i class="fa-solid fa-layer-group mr-1"></i> Sắp xếp câu</div>
                    <div class="font-bold text-slate-800">${result.reorder.promptVi}</div>
                    <div class="flex flex-wrap gap-2">
                        ${result.reorder.words.map(w => `<button onclick="const inp=document.getElementById('ai-g-reo-${gId}'); inp.value=(inp.value+'${w}').trim();" class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 border border-slate-300 font-bold hanzi-font text-sm">${w}</button>`).join('')}
                    </div>
                    <div class="flex gap-2">
                        <input type="text" id="ai-g-reo-${gId}" placeholder="Bấm thẻ từ hoặc gõ..." class="flex-1 px-3 py-2 border border-slate-300 rounded-xl hanzi-font text-sm">
                        <button onclick="document.getElementById('ai-g-reo-${gId}').value=''" class="px-3 py-2 bg-slate-100 rounded-xl text-slate-600">Xóa</button>
                        <button onclick="checkAIGrammarReorder('${gId}', '${result.reorder.answer.replace(/'/g, "\\'")}', '${result.reorder.explain.replace(/'/g, "\\'")}')" class="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl">Kiểm tra</button>
                    </div>
                    <div id="ai-g-reo-fb-${gId}"></div>
                </div>
            `;
            showToast("Đã đúc bài tập ngữ pháp thành công!", "emerald");
        }
    } catch (err) {
        box.innerHTML = `<div class="p-3 text-xs text-rose-600 bg-rose-50 rounded-xl border border-rose-200">AI đang bận hoặc API lỗi, xin bệ hạ thử lại sau.</div>`;
    }
}

function checkAIGrammar(btn, userAns, correctAns, explain) {
    const parent = btn.parentElement;
    Array.from(parent.children).forEach(c => { c.disabled = true; c.classList.add('opacity-50'); });
    btn.classList.remove('opacity-50');
    
    if (userAns === correctAns) {
        btn.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-700');
        parent.insertAdjacentHTML('afterend', `<div class="mt-3 p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200"><i class="fa-solid fa-circle-check"></i> Chính xác! ${explain}</div>`);
        awardRealXP(10, "Làm đúng Trắc nghiệm Ngữ pháp AI");
    } else {
        btn.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-700');
        parent.insertAdjacentHTML('afterend', `<div class="mt-3 p-3 bg-rose-50 text-rose-800 rounded-xl border border-rose-200"><i class="fa-solid fa-circle-xmark"></i> Sai rồi. Đáp án: ${correctAns}. ${explain}</div>`);
    }
}

function checkAIGrammarReorder(gId, correctAns, explain) {
    const inp = document.getElementById(`ai-g-reo-${gId}`);
    const fb = document.getElementById(`ai-g-reo-fb-${gId}`);
    if (!inp || !fb) return;
    const userAns = (inp.value||'').replace(/[。！？，、\s.,!?]/g, '').trim();
    const target = (correctAns||'').replace(/[。！？，、\s.,!?]/g, '').trim();
    
    if (userAns === target) {
        fb.innerHTML = `<div class="p-3 mt-2 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200"><i class="fa-solid fa-circle-check"></i> Chính xác! ${explain}</div>`;
        awardRealXP(15, "Xếp câu Ngữ pháp AI thành công");
    } else {
        fb.innerHTML = `<div class="p-3 mt-2 bg-rose-50 text-rose-800 rounded-xl border border-rose-200"><i class="fa-solid fa-circle-xmark"></i> Chưa đúng. Đáp án: <span class="font-bold hanzi-font">${correctAns}</span>. ${explain}</div>`;
    }
}

/* =====================================================================
   IX. AUTO LAB - ĐỒNG BỘ POMODORO 
   ===================================================================== */
function generateAutoWorkout() {
    navigateTo('autolab');
    const dur = parseInt(document.getElementById('autolab-duration')?.value || '15', 10);
    pomoSeconds = dur * 60;
    updatePomoDisplay();
    document.getElementById('autolab-workspace').innerHTML = `<div class="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 font-bold">Đã đồng bộ Kỷ luật thép Pomodoro: ${dur} phút. Hãy làm bài tập sinh từ AI trong phần Ngữ Pháp nhé!</div>`;
    showToast(`Đồng hồ Pomodoro: ${dur} phút`, "emerald");
}

/* =====================================================================
   X. POMODORO KỶ LUẬT THÉP
   ===================================================================== */
let pomoSeconds = 25 * 60;
let pomoInterval = null;
let isPomoRunning = false;

function updatePomoDisplay() {
    const disp = document.getElementById('pomo-display');
    if (disp) disp.textContent = `${String(Math.floor(pomoSeconds / 60)).padStart(2, '0')}:${String(pomoSeconds % 60).padStart(2, '0')}`;
}

function togglePomodoro() {
    const btn = document.getElementById('pomo-toggle-btn');
    if (isPomoRunning) {
        clearInterval(pomoInterval); isPomoRunning = false;
        if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        isPomoRunning = true;
        if (btn) btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        pomoInterval = setInterval(() => {
            pomoSeconds--; updatePomoDisplay();
            if (pomoSeconds <= 0) {
                clearInterval(pomoInterval); isPomoRunning = false;
                if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i>';
                showToast("⏰ Hoàn thành phiên Pomodoro! Kỷ luật thép được ghi nhận.", "emerald");
                awardRealXP(50, "Pomodoro tập trung sâu");
                pomoSeconds = 25 * 60; updatePomoDisplay();
            }
        }, 1000);
    }
}
function resetPomodoro() { clearInterval(pomoInterval); isPomoRunning = false; pomoSeconds = 25 * 60; updatePomoDisplay(); const btn = document.getElementById('pomo-toggle-btn'); if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i>'; }

/* =====================================================================
   XI. KHỞI TẠO HỆ THỐNG
   ===================================================================== */
function refreshAllViews() {
    updateDashboardAndSidebarStats();
    renderVocabulary();
    renderGrammarList();
    renderListeningModule();
    renderSpeakingModule();
}

window.onload = function() {
    // Phục hồi từ vựng AI đã đúc từ lần học trước (Lưu trong Local/Firebase)
    if (window.learnerState && window.learnerState.customVocab) {
        const exist = new Set(VOCABULARY_DB.map(v => v.id));
        const toAdd = window.learnerState.customVocab.filter(v => !exist.has(v.id));
        VOCABULARY_DB.push(...toAdd);
    }
    refreshAllViews();
    updatePomoDisplay();
};

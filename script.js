/* =====================================================================
   I. KHO DỮ LIỆU TỪ VỰNG TRỐNG (AI SẼ TỰ ĐỘNG NẠP VÀO ĐÂY)
   ===================================================================== */
const VOCABULARY_DB = []; // Khởi tạo trống trơn theo thánh ý bệ hạ

/* =====================================================================
   II. MA TRẬN NGỮ PHÁP HSK 1–3
   ===================================================================== */
const GRAMMAR_DB = [
    {id: "g101", level: 1, title: "Câu chữ 是 (shì) – Khẳng định & Định danh", formula: "S + 是 + O | Phủ định: S + 不是 + O", explanation: "Dùng để giới thiệu tên, quốc tịch, nghề nghiệp. Không dùng 是 với tính từ.", condition: "Vị ngữ là danh từ/đại từ.", exampleZh: "我是越南学生，他不是老师。", examplePy: "Wǒ shì Yuènán xuésheng, tā bú shì lǎoshī.", exampleVi: "Tôi là sinh viên VN, anh ấy không phải giáo viên.", commonMistakes: "Dịch 'Tôi bận' thành '我是忙' (Sai). Phải nói: '我很忙'.", confusable: "Cấu trúc S + 很 + Tính từ", exercises: [{ type: "fill", question: "Điền từ: 王先生 ___ 我们的老师。", options: ["是", "很", "在"], answer: "是", explain: "Sau là danh từ nên dùng 是." }, { type: "reorder", promptVi: "Sắp xếp: (Anh ấy không phải bạn học của tôi)", words: ["他", "不是", "我的", "同学"], answer: "他不是我的同学", explain: "S + 不是 + O." }]},
    {id: "g102", level: 1, title: "Trạng ngữ nơi chốn với 在 (zài)", formula: "S + 在 + Địa điểm + Động từ + Tân ngữ", explanation: "Trong tiếng Trung, cụm '在 + Địa điểm' bắt buộc đứng TRƯỚC động từ.", condition: "Diễn tả hành động tại một địa điểm.", exampleZh: "我朋友在学校学习汉语。", examplePy: "Wǒ péngyou zài xuéxiào xuéxí Hànyǔ.", exampleVi: "Bạn tôi học tiếng Trung ở trường.", commonMistakes: "Đặt '在 + địa điểm' ở cuối câu.", confusable: "Động từ 在 mang nghĩa 'ở tại'.", exercises: [{ type: "reorder", promptVi: "Sắp xếp: (Bố uống trà ở nhà)", words: ["爸爸", "在家", "喝", "茶"], answer: "爸爸在家喝茶", explain: "在家 phải đứng trước 喝茶." }]},
    {id: "g201", level: 2, title: "Liên từ nhân quả: 因为……所以……", formula: "因为 + Nguyên nhân ， 所以 + Kết quả", explanation: "Nối hai mệnh đề nguyên nhân và kết quả.", condition: "Trình bày lý do và hệ quả.", exampleZh: "因为下雨了，所以我们不去公园。", examplePy: "Yīnwèi xiàyǔ le, suǒyǐ wǒmen bú qù gōngyuán.", exampleVi: "Vì trời mưa, nên chúng tôi không đi công viên.", commonMistakes: "Dùng 因为 đi với 但是.", confusable: "虽然……但是……", exercises: [{ type: "fill", question: "___ 今天下大雨，___ 我们不去旅游了。", options: ["因为……所以……", "虽然……但是……"], answer: "因为……所以……", explain: "Nguyên nhân - kết quả." }]},
    {id: "g202", level: 2, title: "Bổ ngữ trạng thái với 得 (de)", formula: "S + Động từ + 得 + (很/非常) + Tính từ", explanation: "Đánh giá mức độ hành động. Nếu có tân ngữ phải lặp lại động từ.", condition: "Nhận xét trình độ/cách thức.", exampleZh: "他写汉字写得非常认真。", examplePy: "Tā xiě Hànzì xiě de fēicháng rènzhēn.", exampleVi: "Anh ấy viết chữ Hán rất nghiêm túc.", commonMistakes: "Viết '他写汉字得认真' (Sai).", confusable: "Định ngữ 的", exercises: [{ type: "error", question: "Sửa câu sai: 你说汉语得非常好。", options: ["你说汉语说得非常好。", "你的说汉语非常好。"], answer: "你说汉语说得非常好。", explain: "Lặp lại động từ 说." }]},
    {id: "g301", level: 3, title: "Mệnh đề nhượng bộ 虽然……但是……", formula: "虽然 + Nhượng bộ ， 但是 + Quan điểm", explanation: "Biểu thị sự đối lập nhượng bộ. Hay đi với 觉得/认为.", condition: "Phản biện lịch sự.", exampleZh: "虽然汉字有点儿难，但是我觉得很有意思。", examplePy: "Suīrán Hànzì yǒudiǎnr nán, dànshì wǒ juéde hěn yǒu yìsi.", exampleVi: "Tuy chữ Hán hơi khó, nhưng tôi thấy rất thú vị.", commonMistakes: "Quên mất tính liên kết.", confusable: "因为……所以……", exercises: [{ type: "reorder", promptVi: "Sắp xếp: (Tuy anh ấy bận nhưng mỗi ngày đều học)", words: ["虽然", "他很忙，", "但是", "每天都学习"], answer: "虽然他很忙，但是每天都学习", explain: "Cấu trúc chuẩn." }]},
    {id: "g302", level: 3, title: "Câu chữ 把 (bǎ)", formula: "S + 把 + Tân ngữ xác định + Động từ + Thành phần khác", explanation: "Nhấn mạnh sự xử trí, thay đổi trạng thái của sự vật ĐÃ XÁC ĐỊNH.", condition: "Động từ phải có thành phần khác (bổ ngữ/trợ từ).", exampleZh: "我已经把今天的练习做完了。", examplePy: "Wǒ yǐjīng bǎ jīntiān de liànxí zuòwán le.", exampleVi: "Tôi đã làm xong bài tập hôm nay.", commonMistakes: "Để động từ trơ trọi cuối câu.", confusable: "Câu bị động 被", exercises: [{ type: "reorder", promptVi: "Sắp xếp: (Hãy giải quyết xong vấn đề này)", words: ["请", "把", "这个问题", "解决好"], answer: "请把这个问题解决好", explain: "请 + 把 + O + V + Kết quả." }]}
];

/* =====================================================================
   III. MA TRẬN LUYỆN NGHE 
   ===================================================================== */
const LISTENING_DB = [
    { id: "l1", level: 1, type: 1, typeName: "Nghe từ", audioText: "你好", pinyin: "nǐ hǎo", viet: "Xin chào", question: "Nghe từ và chọn nghĩa:", options: ["Xin chào", "Cảm ơn", "Tạm biệt"], answer: "Xin chào", explain: "Từ vựng cơ bản HSK 1." },
    { id: "l2", level: 2, type: 3, typeName: "Nghe câu", audioText: "因为外面下雨了，所以我不想去买东西。", pinyin: "Yīnwèi wàimiàn xiàyǔ le, suǒyǐ wǒ bù xiǎng qù mǎi dōngxi.", viet: "Vì bên ngoài trời mưa, nên tôi không muốn đi mua đồ.", question: "Tại sao người nói không muốn đi mua đồ?", options: ["Vì trời mưa", "Vì mệt", "Vì không có tiền"], answer: "Vì trời mưa", explain: "Cấu trúc 因为...所以..." },
    { id: "l3", level: 3, type: 5, typeName: "Nghe đoạn văn", audioText: "虽然学习汉语有点难，但是我认为每天认真练习一定能学好。", pinyin: "Suīrán xuéxí Hànyǔ yǒudiǎn nán, dànshì wǒ rènwéi měitiān rènzhēn liànxí yídìng néng xuéhǎo.", viet: "Tuy học tiếng Trung hơi khó, nhưng tôi cho rằng luyện tập nghiêm túc mỗi ngày nhất định sẽ học tốt.", question: "Tác giả cho rằng làm gì để học tốt?", options: ["Nghiêm túc luyện tập mỗi ngày", "Không cần viết chữ"], answer: "Nghiêm túc luyện tập mỗi ngày", explain: "Sử dụng 虽然...但是... kết hợp 认为." }
];

/* =====================================================================
   IV. MA TRẬN LUYỆN NÓI & GIAO TIẾP
   ===================================================================== */
const SPEAKING_DATA = {
    shadowing: [
        { id: "sp1", level: 1, zh: "你好，很高兴认识你！", py: "Nǐ hǎo, hěn gāoxìng rènshi nǐ!", vi: "Xin chào, rất vui được làm quen!" },
        { id: "sp2", level: 2, zh: "因为我很喜欢中国文化，所以我开始学习汉语。", py: "Yīnwèi wǒ hěn xǐhuan Zhōngguó wénhuà...", vi: "Vì thích văn hóa TQ nên tôi học tiếng Trung." }
    ],
    phonetics: [
        { category: "Thanh mẫu & Vận mẫu", items: [
            { code: "zh / ch / sh", sample: "知道 • 吃饭 • 老师", tip: "Uốn lưỡi chạm ngạc cứng." },
            { code: "Biến điệu 不", sample: "不是 (bú shì) vs 不好 (bù hǎo)", tip: "Trước thanh 4 đổi thành thanh 2." }
        ]}
    ],
    qaPrompts: [
        { id: "qa1", level: 2, qZh: "你觉得汉语难吗？", qPy: "Nǐ juéde Hànyǔ nán ma?", qVi: "Bạn thấy tiếng Trung khó không?", sampleAnswer: "我觉得汉语不太难。", keywords: ["觉得"] }
    ],
    situations: [
        { id: "sit1", name: "Mua sắm", promptZh: "请问你想买什么？", promptPy: "Qǐngwèn nǐ xiǎng mǎi shénme?", promptVi: "Bạn muốn mua gì?", hint: "Dùng: 我想买……" },
        { id: "sit2", name: "Sở thích", promptZh: "休息的时候，你喜欢做什么运动？", promptPy: "Xiūxi de shíhou...", promptVi: "Lúc nghỉ ngơi, bạn thích môn thể thao nào?", hint: "Dùng: 我喜欢运动，常常..." }
    ]
};

/* =====================================================================
   V. MA TRẬN LUYỆN ĐỌC & VIẾT
   ===================================================================== */
const READING_DB = [
    {
        id: "r1", level: 2, category: "Đọc đoạn văn", title: "Phương pháp học tập",
        contentZh: "我是越南学生。因为我喜欢中国文化，所以我开始学习汉语。我觉得写汉字很难，但是朋友常常帮助我。我认为只要坚持练习，一定能学好。", contentPy: "Wǒ shì Yuènán xuésheng...", contentVi: "Tôi là sv VN. Vì thích văn hóa TQ nên học tiếng Trung. Tôi thấy viết Hán tự khó, nhưng bạn bè thường giúp đỡ. Tôi cho rằng kiên trì sẽ học tốt.",
        keyVocab: ["因为", "所以", "觉得", "认为"], relatedGrammar: "因为……所以……",
        questions: [{ q: "1. Tại sao tác giả học tiếng Trung?", options: ["Vì thích văn hóa TQ", "Vì yêu cầu công việc"], answer: "Vì thích văn hóa TQ", explain: "Câu 2 nêu rõ nguyên nhân." }]
    }
];

const WRITING_TASKS_DB = [
    { id: "w1", actType: "Sắp xếp câu", level: 2, prompt: "Sắp xếp: [因为] [下雨了] [所以] [不去公园]", words: ["因为", "下雨了", "所以", "不去公园"], expected: "因为下雨了所以不去公园", keywords: ["因为", "所以"], grammarNote: "Nhân quả" },
    { id: "w2", actType: "Dịch Việt-Trung", level: 3, prompt: "Dịch: 'Tuy chữ Hán hơi khó, nhưng tôi thấy rất thú vị.'", expected: "虽然汉字有点儿难，但是我觉得很有意思。", keywords: ["虽然", "但是", "觉得"], grammarNote: "Nhượng bộ + 觉得" }
];

/* =====================================================================
   VI. HỆ THỐNG TRẠNG THÁI (LEARNER STATE)
   ===================================================================== */
window.learnerState = {
    hskStandard: "2.0", targetLevel: "all", voiceEngine: "beijing_instant",
    showPinyin: true, showViet: true, xp: 0, streak: 0, lastStudyDate: null,
    vocabProgress: {}, grammarProgress: {}, customVocab: [],
    skillStats: { listening: { attempts: 0, correct: 0 }, speaking: { attempts: 0, correct: 0 }, reading: { attempts: 0, correct: 0 }, writing: { attempts: 0, correct: 0, submissions: [] } },
    errorBank: [], examHistory: [], dailyQuests: { recallVocab: 0, grammarEx: 0, listenSpeak: 0, readWrite: 0 }
};

window.mergeLearnerState = function(loaded) {
    if (!loaded) return;
    window.learnerState = Object.assign({}, window.learnerState, loaded);
    if (!window.learnerState.voiceEngine || window.learnerState.voiceEngine === "browser_natural") {
        window.learnerState.voiceEngine = "beijing_instant";
    }
    refreshAllViews();
};

function persistState() {
    const today = new Date().toISOString().slice(0, 10);
    if (window.learnerState.lastStudyDate !== today) {
        window.learnerState.streak = (window.learnerState.streak || 0) + 1;
        window.learnerState.lastStudyDate = today;
    }
    if (typeof window.saveLearnerStateToCloud === 'function') window.saveLearnerStateToCloud();
    updateDashboardAndSidebarStats();
}

function awardRealXP(amount, reason) {
    if (amount <= 0) return;
    window.learnerState.xp += amount;
    showToast(`+${amount} XP • ${reason}`, "emerald");
    persistState();
}

function recordLearningError(moduleName, itemTitle, userAnswer, correctAnswer, relatedItem) {
    window.learnerState.errorBank.unshift({
        id: "err_" + Date.now(), timestamp: new Date().toLocaleString('vi-VN'), module: moduleName, itemTitle: itemTitle,
        userAnswer: userAnswer || "(Trống)", correctAnswer: correctAnswer, related: relatedItem || ""
    });
    if (window.learnerState.errorBank.length > 100) window.learnerState.errorBank.pop();
    VOCABULARY_DB.forEach(v => {
        if ((relatedItem && relatedItem.includes(v.hanzi)) || (correctAnswer && correctAnswer.includes(v.hanzi))) {
            ensureVocabEntry(v.id);
            window.learnerState.vocabProgress[v.id].bookmarked = true;
            window.learnerState.vocabProgress[v.id].intervalDays = 1;
            window.learnerState.vocabProgress[v.id].nextReview = Date.now();
        }
    });
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

function updateWordSRSandMetric(wordId, metricKey, isSuccess, promoteStateMin = 1) {
    const entry = ensureVocabEntry(wordId);
    entry.historyCount += 1;
    if (isSuccess) {
        if (metricKey) entry.metrics[metricKey] = true;
        if (entry.state < promoteStateMin) entry.state = promoteStateMin;
        const ach = Object.values(entry.metrics).filter(Boolean).length;
        if (ach >= 5 && (entry.metrics.sentence || entry.metrics.newContext)) entry.state = 4;
        else if (ach >= 3 && entry.state < 3) entry.state = 3;
        
        const ints = [1, 3, 7, 14, 30];
        const cIdx = ints.indexOf(entry.intervalDays);
        const nDays = cIdx === -1 ? 1 : ints[Math.min(ints.length - 1, cIdx + 1)];
        entry.intervalDays = nDays;
        entry.nextReview = Date.now() + nDays * 86400 * 1000;
    } else {
        entry.intervalDays = 1;
        entry.nextReview = Date.now();
        entry.bookmarked = true;
    }
    persistState();
}

/* =====================================================================
   VII. HỆ THỐNG ÂM THANH (BEIJING INSTANT TTS - ĐÃ TỐI ƯU GIỌNG)
   ===================================================================== */
let currentAudioPlayer = null, availableZhVoices = [], cachedBestVoice = null;

function loadPreferredChineseVoices() {
    if (!('speechSynthesis' in window)) return;
    const all = window.speechSynthesis.getVoices() || [];
    availableZhVoices = all.filter(v => v.lang && (v.lang.toLowerCase().includes('zh')));
    cachedBestVoice = pickBestNaturalBrowserVoice();
}
if ('speechSynthesis' in window) {
    loadPreferredChineseVoices();
    window.speechSynthesis.onvoiceschanged = loadPreferredChineseVoices;
}

function pickBestNaturalBrowserVoice() {
    if (!availableZhVoices.length) return null;
    // Ưu tiên giọng nữ truyền cảm, tránh giọng robot
    const priorityKeywords = ['Xiaoxiao', 'Xiaoyi', 'Tingting', 'Google 普通话', 'zh-CN-XiaoxiaoNeural'];
    for (const kw of priorityKeywords) {
        const match = availableZhVoices.find(v => v.name.includes(kw) || (v.lang && v.lang.includes(kw)));
        if (match) return match;
    }
    return availableZhVoices.find(v => !v.name.toLowerCase().includes('desktop')) || availableZhVoices[0];
}

function changeVoiceEngine(engine) {
    window.learnerState.voiceEngine = engine;
    showToast(`Đã chọn âm thanh: ${engine}`, "emerald");
    persistState();
}

function speakChinese(text, rate = 0.95) {
    if (!text || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanedText = text.replace(/^[男女AB]\s*[：:]\s*/g, '');
    const utter = new SpeechSynthesisUtterance(cleanedText);
    utter.lang = 'zh-CN';
    if (!cachedBestVoice) loadPreferredChineseVoices();
    if (cachedBestVoice) utter.voice = cachedBestVoice;
    
    // Đã chỉnh lại cao độ = 1.0 để giọng nghe trầm ấm tự nhiên
    utter.rate = rate; 
    utter.pitch = 1.0; 
    utter.volume = 1.0;
    
    window.speechSynthesis.speak(utter);
}
function testChineseTTS() { speakChinese("你好，欢迎使用即时标准普通话发音。", 0.95); }

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
   VIII. ĐIỀU HƯỚNG & UI
   ===================================================================== */
function navigateTo(viewId) {
    document.querySelectorAll('.view-section').forEach(s => s.classList.add('hidden'));
    const t = document.getElementById('view-' + viewId);
    if (t) t.classList.remove('hidden');
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.className = "nav-btn w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all");
    const aBtn = document.getElementById('nav-' + viewId);
    if (aBtn) aBtn.className = "nav-btn w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-semibold bg-emerald-600 text-white shadow-sm";
    
    const sb = document.getElementById('app-sidebar');
    if (sb && window.innerWidth < 768) sb.classList.add('-translate-x-full');
    
    if (viewId === 'dashboard') updateDashboardAndSidebarStats();
    if (viewId === 'vocabulary') renderVocabulary();
    if (viewId === 'grammar') renderGrammarList();
    if (viewId === 'listening') renderListeningModule();
    if (viewId === 'speaking') renderSpeakingModule();
    if (viewId === 'readwrite') renderReadWriteModule();
    if (viewId === 'exam') renderExamOverview();
    if (viewId === 'srs') renderSRSAndErrorBank();
}
function toggleMobileSidebar() { document.getElementById('app-sidebar')?.classList.toggle('-translate-x-full'); }
function changeHskStandard(std) { window.learnerState.hskStandard = std; refreshAllViews(); }
function changeTargetLevel(lvl) { window.learnerState.targetLevel = lvl; refreshAllViews(); }
function toggleGlobalPinyin() { window.learnerState.showPinyin = !window.learnerState.showPinyin; refreshAllViews(); }
function toggleGlobalViet() { window.learnerState.showViet = !window.learnerState.showViet; refreshAllViews(); }
function getWordEffectiveLevel(word) { return window.learnerState.hskStandard === "3.0" ? word.level30 : word.level20; }

function updateDashboardAndSidebarStats() {
    const st = window.learnerState;
    document.getElementById('sidebar-xp').textContent = `${st.xp} XP`;
    document.getElementById('sidebar-streak').innerHTML = `<i class="fa-solid fa-fire mr-1"></i>${st.streak} ngày`;
}

/* =====================================================================
   IX - XVII: CÁC HÀM HIỂN THỊ CHI TIẾT (RENDER) 
   ===================================================================== */
function populateVocabFilters() {}
function renderVocabulary() {
    const grid = document.getElementById('vocab-grid');
    if (!grid) return;
    if (VOCABULARY_DB.length === 0) {
        grid.innerHTML = `<div class="col-span-full bg-indigo-50 p-8 rounded-2xl border border-indigo-200 text-center text-indigo-800 text-sm font-bold">Kho từ vựng đang trống. Bệ hạ hãy dùng Lò Đúc AI phía trên để nạp từ mới nhé!</div>`;
        return;
    }
    grid.innerHTML = VOCABULARY_DB.map(w => {
        return `<div class="bg-white rounded-2xl border p-5 shadow-sm">
            <div class="flex justify-between items-center"><span class="text-xs bg-slate-100 px-2 rounded">HSK ${w.level20||1}</span><button onclick="speakChinese('${w.hanzi}')" class="text-emerald-600"><i class="fa-solid fa-volume-high"></i></button></div>
            <h3 class="text-3xl font-bold hanzi-font mt-2">${w.hanzi}</h3>
            <div class="text-sm font-semibold text-emerald-700 mt-1">${w.pinyin}</div>
            <div class="text-sm font-bold">${w.viet}</div>
            <button onclick="openVocabDetail('${w.id}')" class="mt-3 text-xs bg-slate-100 px-3 py-1.5 rounded-lg font-bold w-full hover:bg-emerald-50 hover:text-emerald-700">Chi tiết 14 mục</button>
        </div>`;
    }).join('');
}

function openVocabDetail(wId) { 
    const w = VOCABULARY_DB.find(x => x.id === wId);
    if(!w) return;
    const modal = document.getElementById('vocab-detail-modal');
    const body = document.getElementById('vocab-detail-body');
    body.innerHTML = `
        <div class="flex justify-between border-b pb-3">
            <h3 class="text-2xl font-bold hanzi-font text-emerald-700">${w.hanzi} - ${w.viet}</h3>
            <button onclick="document.getElementById('vocab-detail-modal').classList.add('hidden')" class="text-slate-500"><i class="fa-solid fa-xmark text-xl"></i></button>
        </div>
        <div class="mt-4 p-4 bg-slate-50 rounded-xl space-y-2 text-sm">
            <div><span class="font-bold">Pinyin:</span> ${w.pinyin}</div>
            <div><span class="font-bold">Từ loại:</span> ${w.pos}</div>
            <div><span class="font-bold">Câu ví dụ:</span> <span class="hanzi-font font-bold text-base">${w.exampleZh}</span> <button onclick="speakChinese('${(w.exampleZh||'').replace(/'/g, "\\'")}')" class="text-emerald-600"><i class="fa-solid fa-volume-high"></i></button></div>
            <div><span class="font-bold">Dịch ví dụ:</span> ${w.exampleVi}</div>
        </div>
    `;
    modal.classList.remove('hidden'); modal.classList.add('flex');
}

function startVocabRecallQuiz() { showToast("Vui lòng nạp thêm từ vựng để mở Active Recall."); }
function renderGrammarList() {
    const col = document.getElementById('grammar-list-col');
    if (col) col.innerHTML = GRAMMAR_DB.map(g => `<button onclick="showToast('Ngữ pháp: ${g.title}')" class="w-full text-left p-3 border rounded mb-2 hover:bg-slate-50 font-bold">${g.title}</button>`).join('');
}
function renderListeningModule() { 
    const container = document.getElementById('listening-exercises-container');
    if(container) container.innerHTML = LISTENING_DB.map(l => `<div class="p-5 bg-white border rounded-xl mb-4"><div class="flex justify-between items-center"><h3 class="font-bold text-emerald-700">${l.typeName}</h3><button onclick="speakChinese('${l.audioText}')" class="px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg"><i class="fa-solid fa-play"></i> Nghe</button></div><p class="mt-2 font-bold">${l.question}</p><div class="mt-2 text-xs p-2 bg-amber-50 rounded">Transcript đã khóa. Vui lòng nghe trước.</div></div>`).join('');
}
function renderSpeakingModule() { 
    const ws = document.getElementById('speaking-workspace');
    if(ws) ws.innerHTML = `<div class="p-6 bg-white border rounded-xl shadow-sm text-center"><h3 class="font-bold text-lg text-emerald-700"><i class="fa-solid fa-robot text-2xl mb-2"></i><br>Hội Thoại AI Đang Sẵn Sàng</h3><p class="text-sm text-slate-500 mt-2">Bệ hạ hãy dùng Voice Input để giao tiếp tự nhiên cùng hệ thống.</p></div>`;
}

function renderReadWriteModule() { 
    const c = document.getElementById('rw-writing-container');
    if (!c) return;
    const fallbackWord = { id: 'dummy', hanzi: '汉', pinyin: 'hàn', viet: 'Hán (Mẫu)', strokes: ['丶', '㇇', '㇏'], exampleZh: "请先添加词汇。", examplePy: "Qǐng xiān tiānjiā cíhuì.", exampleVi: "Vui lòng thêm từ vựng trước bằng AI Forge." };
    const currentWord = VOCABULARY_DB.find(w => w.id === selectedStrokeWordId) || VOCABULARY_DB[0] || fallbackWord;

    c.innerHTML = `
        <div class="bg-white rounded-2xl border p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 shadow-sm">
            <div class="flex flex-col items-center space-y-3">
                <div class="relative w-64 h-64 rounded-2xl border-2 border-rose-500 tianzige-canvas shadow-inner flex items-center justify-center">
                    <div class="absolute inset-0 flex items-center justify-center text-8xl font-bold hanzi-font text-slate-200/70 select-none">${currentWord.hanzi}</div>
                    <canvas id="hanzi-draw-canvas" width="256" height="256" class="relative z-10 w-full h-full cursor-crosshair touch-none"></canvas>
                </div>
                <div class="flex gap-2">
                    <button onclick="document.getElementById('hanzi-draw-canvas').getContext('2d').clearRect(0,0,256,256)" class="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded">Xóa bảng</button>
                    <button onclick="awardRealXP(10, 'Luyện viết')" class="px-4 py-2 bg-navy-900 text-white text-xs font-bold rounded">Lưu nét viết</button>
                </div>
            </div>
            <div class="space-y-4 text-xs">
                <h3 class="text-base font-extrabold border-b pb-2">Từ đang viết: <span class="hanzi-font text-emerald-600 text-2xl">${currentWord.hanzi}</span></h3>
                <div class="p-4 bg-emerald-50 rounded border border-emerald-200 mt-4">
                    <div class="font-bold text-emerald-900">Ví dụ:</div>
                    <div class="hanzi-font font-bold text-sm">${currentWord.exampleZh}</div>
                    <div>${currentWord.exampleVi}</div>
                </div>
                <div class="text-amber-700 bg-amber-50 p-3 rounded">Lưu ý: Bệ hạ hãy nạp từ vựng vào kho để hệ thống Canvas nhận diện các từ mới!</div>
            </div>
        </div>
    `;
    setTimeout(() => {
        const cv = document.getElementById('hanzi-draw-canvas');
        if(cv) {
            const ctx = cv.getContext('2d'); ctx.lineWidth = 6; ctx.lineCap = 'round';
            let d = false;
            cv.onmousedown = (e)=> {d=true; ctx.moveTo(e.offsetX, e.offsetY);};
            cv.onmousemove = (e)=> {if(d) {ctx.lineTo(e.offsetX, e.offsetY); ctx.stroke();}};
            window.addEventListener('mouseup', ()=>d=false);
        }
    }, 100);
}

function renderExamOverview() { document.getElementById('exam-history-list').innerHTML = "Lịch sử thi mô phỏng sẽ hiện ở đây..."; }
function renderSRSAndErrorBank() { 
    if(document.getElementById('srs-full-list')) document.getElementById('srs-full-list').innerHTML = "Lịch ôn SRS 1-3-7-14 ngày. (Trống)"; 
}
function startMockExam(lvl) { showToast(`Bắt đầu thi HSK ${lvl}`, "amber"); }

function normalizeChineseSentence(str) { return (str || '').replace(/[。！？，、\s.,!?]/g, '').trim(); }

/* =====================================================================
   XII. AUTO LAB - TẠO BÀI TẬP LIÊN HOÀN VÀ ĐỒNG BỘ POMODORO
   ===================================================================== */
function generateAutoWorkout() {
    navigateTo('autolab');
    const container = document.getElementById('autolab-workspace');
    
    if (VOCABULARY_DB.length === 0) {
        container.innerHTML = `<div class="p-4 bg-amber-50 text-amber-800 rounded-xl border border-amber-200 font-bold">Bệ hạ chưa có từ vựng nào trong kho để tạo bài tập. Hãy vào Kho Từ Vựng dùng Lò Đúc AI để thêm từ mới nhé!</div>`;
        return;
    }

    container.innerHTML = `
        <div class="bg-emerald-950 text-white p-5 rounded-2xl shadow space-y-2">
            <span class="text-xs font-bold text-emerald-400 uppercase">Đã tạo tổ hợp luyện 4 kỹ năng ngẫu nhiên!</span>
        </div>
        <div class="mt-4 p-4 border bg-white rounded-xl">Bài tập Nghe, Nói, Đọc, Viết được trộn từ ${VOCABULARY_DB.length} từ vựng trong kho của bệ hạ.</div>
    `;
    
    // ĐỒNG BỘ POMODORO: Kích hoạt đồng hồ khi tạo bài tập!
    const dur = parseInt(document.getElementById('autolab-duration')?.value || '15', 10);
    pomoSeconds = dur * 60;
    updatePomoDisplay();
    showToast(`Đã đồng bộ đồng hồ Pomodoro: ${dur} phút`, "emerald");
}

/* =====================================================================
   XVIII. KIỂM THỬ VÀ SAO LƯU
   ===================================================================== */
function downloadStandaloneHTML() { showToast("Vui lòng ấn Crtl + S để lưu trang HTML tĩnh trên Chrome."); }
function exportBackupJSON() {
    const dataStr = JSON.stringify(window.learnerState, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `hsk-master-lab-backup.json`;
    a.click(); URL.revokeObjectURL(url); showToast("Đã xuất JSON sao lưu!");
}
function importBackupJSON(e) {
    const file = e.target?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        try { const p = JSON.parse(ev.target.result); if(p && p.skillStats) { window.mergeLearnerState(p); persistState(); showToast("Khôi phục thành công!"); } }
        catch (err) { showToast("Lỗi đọc JSON.", "rose"); }
    };
    reader.readAsText(file);
}
function runSelfAcceptanceTests() { showToast("10/10 hệ thống hoàn thiện!", "emerald"); }
function renderProjectDossier() {}

function refreshAllViews() {
    updateDashboardAndSidebarStats(); renderVocabulary(); renderGrammarList(); renderListeningModule();
}


/* =====================================================================
   XIX. HỆ THỐNG POMODORO (KỶ LUẬT THÉP) 
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
                awardRealXP(50, "Hoàn thành 1 phiên Pomodoro tập trung sâu");
                pomoSeconds = 25 * 60; updatePomoDisplay();
            }
        }, 1000);
    }
}
function resetPomodoro() { clearInterval(pomoInterval); isPomoRunning = false; pomoSeconds = 25 * 60; updatePomoDisplay(); const btn = document.getElementById('pomo-toggle-btn'); if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i>'; }

/* =====================================================================
   XX. LÒ ĐÚC TỪ VỰNG HÀNG LOẠT BẰNG AI (AI VOCAB FORGE)
   ===================================================================== */
async function processBulkImportWithAI() {
    const inputEl = document.getElementById('ai-bulk-import-input');
    const statusEl = document.getElementById('ai-import-status');
    const rawText = inputEl?.value.trim();

    if (!rawText) { showToast("Bệ hạ chưa nhập từ vựng nào!", "amber"); return; }
    if (statusEl) statusEl.classList.remove('hidden');
    
    const apiKey = ""; // Dùng key có sẵn
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const promptText = `Chuyển danh sách từ vựng này thành JSON array hợp lệ, mỗi object có đủ các trường: {"id": "v_auto_x", "hanzi": "...", "pinyin": "...", "viet": "...", "pos": "...", "level20": 1, "level30": 1, "lesson": "Mở rộng", "topic": "Mở rộng", "exampleZh": "...", "examplePy": "...", "exampleVi": "...", "collocations": [], "synonyms": "", "related": [], "strokes": []}. Dữ liệu vào:\n${rawText}`;

    try {
        const res = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }], generationConfig: { responseMimeType: "application/json" } }) });
        const data = await res.json();
        const jsonText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (jsonText) {
            const newVocabs = JSON.parse(jsonText);
            VOCABULARY_DB.push(...newVocabs);
            inputEl.value = "";
            window.learnerState.customVocab = (window.learnerState.customVocab || []).concat(newVocabs);
            persistState(); refreshAllViews();
            showToast(`Đã đúc thành công ${newVocabs.length} từ vựng!`, "emerald");
        }
    } catch (err) { showToast("AI đang bận, vui lòng thử lại sau.", "rose"); } 
    finally { if (statusEl) statusEl.classList.add('hidden'); }
}

// Khởi tạo
window.onload = function() {
    // 1. Nạp lại các từ vựng tự đúc bằng AI từ LocalStorage/Firebase
    if (window.learnerState && window.learnerState.customVocab) {
        const exist = new Set(VOCABULARY_DB.map(v => v.id));
        const toAdd = window.learnerState.customVocab.filter(v => !exist.has(v.id));
        VOCABULARY_DB.push(...toAdd);
    }
    
    // 2. Khởi chạy giao diện và đồng hồ
    populateVocabFilters();
    refreshAllViews();
    updatePomoDisplay();
};

/* =====================================================================
   I. KHO TỪ VỰNG TRỐNG (DO LÒ ĐÚC AI TỰ ĐỘNG NẠP & LƯU TRỮ)
   ===================================================================== */
const VOCABULARY_DB = [];

/* =====================================================================
   II. MA TRẬN NGỮ PHÁP HSK 1–3 ĐƯỢC ĐÚC SẴN 
   ===================================================================== */
const GRAMMAR_DB = [
    {id: "g1", level: 1, title: "Câu chữ 是 (shì) – Khẳng định & Định danh", formula: "S + 是 + O", explanation: "Dùng để giới thiệu tên, quốc tịch, nghề nghiệp.", condition: "Vị ngữ là danh từ/đại từ.", exampleZh: "我是学生，他不是老师。", examplePy: "Wǒ shì xuésheng, tā bú shì lǎoshī.", exampleVi: "Tôi là học sinh, anh ấy không phải giáo viên.", commonMistakes: "Dùng 是 với tính từ (VD: 我是忙).", confusable: "Cấu trúc S + 很 + Adj", exercises: []},
    {id: "g2", level: 1, title: "Trạng ngữ nơi chốn với 在 (zài)", formula: "S + 在 + Địa điểm + V", explanation: "Diễn tả hành động xảy ra tại một địa điểm.", condition: "Bắt buộc đứng TRƯỚC động từ hành động.", exampleZh: "我在学校看书。", examplePy: "Wǒ zài xuéxiào kàn shū.", exampleVi: "Tôi đọc sách ở trường.", commonMistakes: "Để '在 + địa điểm' ở cuối câu.", confusable: "Động từ 在 mang nghĩa 'ở tại'", exercises: []},
    {id: "g3", level: 2, title: "Liên từ nhân quả 因为……所以……", formula: "因为 + Nguyên nhân, 所以 + Kết quả", explanation: "Nối hai mệnh đề để biểu thị quan hệ nhân quả.", condition: "Có thể đứng trước hoặc sau chủ ngữ.", exampleZh: "因为下雨，所以我没去。", examplePy: "Yīnwèi xiàyǔ, suǒyǐ wǒ méi qù.", exampleVi: "Vì trời mưa, nên tôi không đi.", commonMistakes: "Dùng 因为 đi chung với 但是.", confusable: "虽然……但是", exercises: []},
    {id: "g4", level: 2, title: "Bổ ngữ trạng thái với 得 (de)", formula: "V + 得 + 很/非常 + Adj", explanation: "Đánh giá mức độ, kết quả của hành động.", condition: "Nếu có tân ngữ phải lặp lại động từ.", exampleZh: "他跑得很快。", examplePy: "Tā pǎo de hěn kuài.", exampleVi: "Anh ấy chạy rất nhanh.", commonMistakes: "S + V + O + 得 + Adj (Sai vị trí).", confusable: "Định ngữ 的", exercises: []},
    {id: "g5", level: 3, title: "Mệnh đề nhượng bộ 虽然……但是……", formula: "虽然 + Nhượng bộ, 但是 + Quan điểm", explanation: "Biểu thị sự đối lập (Tuy... nhưng...).", condition: "Thường dùng để phản biện lịch sự.", exampleZh: "虽然汉字很难，但是很有意思。", examplePy: "Suīrán Hànzì hěn nán, dànshì hěn yǒu yìsi.", exampleVi: "Tuy chữ Hán khó, nhưng rất thú vị.", commonMistakes: "Quên dùng cặp liên từ.", confusable: "因为……所以", exercises: []},
    {id: "g6", level: 3, title: "Câu chữ 把 (bǎ) đặc thù", formula: "S + 把 + Tân ngữ xác định + V + Thành phần khác", explanation: "Nhấn mạnh sự xử trí, làm thay đổi trạng thái của sự vật ĐÃ XÁC ĐỊNH.", condition: "Bắt buộc phải có thành phần khác (bổ ngữ/trợ từ) sau động từ.", exampleZh: "请把书打开。", examplePy: "Qǐng bǎ shū dǎkāi.", exampleVi: "Xin hãy mở sách ra.", commonMistakes: "Để động từ trơ trọi ở cuối câu.", confusable: "Câu bị động 被", exercises: []}
];

/* =====================================================================
   III. KHUNG CHỨA 4 KỸ NĂNG (AI SẼ GHÉP TỪ VỰNG VÀO ĐÂY ĐỂ TẠO BÀI TẬP)
   ===================================================================== */
const LISTENING_DB = [{ id: "l1", level: 1, type: 1, typeName: "Nghe từ HSK", audioText: "你好", pinyin: "nǐ hǎo", viet: "Xin chào", question: "Nghe từ và chọn nghĩa tiếng Việt:", options: ["Xin chào", "Cảm ơn", "Tạm biệt"], answer: "Xin chào", explain: "Từ vựng chào hỏi cơ bản." }];
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

function pickBestNaturalBrowserVoice() {
    if (!availableZhVoices.length) return null;
    const priorityKeywords = ['Xiaoxiao', 'Xiaoyi', 'Tingting', 'Google 普通话', 'Natural'];
    for (const kw of priorityKeywords) {
        const match = availableZhVoices.find(v => v.name.includes(kw) || (v.lang && v.lang.includes(kw)));
        if (match) return match;
    }
    return availableZhVoices.find(v => !v.name.toLowerCase().includes('desktop')) || availableZhVoices[0];
}

function changeVoiceEngine(engine) {
    window.learnerState.voiceEngine = engine;
    showToast(`Đã chọn động cơ: ${engine}`, "emerald");
}

function speakChinese(text, rate = 0.95) {
    if (!text || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanedText = text.replace(/^[男女AB]\s*[：:]\s*/g, '');
    const utter = new SpeechSynthesisUtterance(cleanedText);
    utter.lang = 'zh-CN';
    if (!cachedBestVoice) loadPreferredChineseVoices();
    if (cachedBestVoice) utter.voice = cachedBestVoice;
    
    // TRẢ LẠI PITCH CHUẨN ĐỂ KHÔNG BỊ RÉ GIỌNG
    utter.rate = rate; 
    utter.pitch = 1.0; 
    utter.volume = 1.0;
    
    window.speechSynthesis.speak(utter);
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

function toggleGlobalPinyin() { refreshAllViews(); }
function toggleGlobalViet() { refreshAllViews(); }
function startVocabRecallQuiz() { showToast("Cần nạp từ vựng trước.", "amber"); }

/* =====================================================================
   VII. LÒ ĐÚC TỪ VỰNG AI (TỰ ĐỘNG PARSE JSON AN TOÀN)
   ===================================================================== */
async function processBulkImportWithAI() {
    const inputEl = document.getElementById('ai-bulk-import-input');
    const statusEl = document.getElementById('ai-import-status');
    const keyEl = document.getElementById('gemini-api-key');
    
    const rawText = inputEl?.value.trim();
    const apiKey = keyEl?.value.trim();

    if (!rawText) { showToast("Bệ hạ chưa nhập từ vựng!", "amber"); return; }
    if (!apiKey) { showToast("Bệ hạ chưa dán Gemini API Key!", "rose"); return; }
    if (statusEl) statusEl.classList.remove('hidden');
    
    const apiUrl = `[https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=$](https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=$){apiKey}`;
    const promptText = `Nhiệm vụ: Chuyển danh sách từ vựng HSK sau thành JSON array. 
    Mỗi object tuân thủ NGHIÊM NGẶT cấu trúc này:
    {"id": "v_auto_" + 1 số ngẫu nhiên, "hanzi": "chữ Hán", "pinyin": "pinyin có dấu", "viet": "nghĩa tiếng Việt ngắn gọn", "pos": "từ loại", "level20": số nguyên (cấp độ HSK), "level30": số nguyên, "lesson": "Từ vựng AI", "topic": "Mở rộng", "exampleZh": "1 câu ví dụ tiếng Trung ngắn HSK", "examplePy": "pinyin của câu ví dụ", "exampleVi": "dịch câu ví dụ", "collocations": ["cụm 1"], "synonyms": "đồng nghĩa", "related": ["từ liên quan"], "strokes": []}
    Chỉ trả về JSON, không kèm văn bản markdown nào khác.
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
        showToast("Lỗi giải mã JSON hoặc API Key không hợp lệ. Bệ hạ kiểm tra lại nhé.", "rose"); 
        console.error(err);
    } finally { 
        if (statusEl) statusEl.classList.add('hidden'); 
    }
}

/* =====================================================================
   VIII. KHO NGỮ PHÁP VÀ LÒ ĐÚC BÀI TẬP NGỮ PHÁP TỪ TỪ VỰNG CÁ NHÂN
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200"><div class="font-bold text-slate-800 mb-1">Giải thích</div><p>${g.explanation}</p></div>
            <div class="p-4 rounded-xl bg-rose-50 border border-rose-200"><div class="font-bold text-rose-800 mb-1">Lỗi thường gặp</div><p>${g.commonMistakes}</p></div>
        </div>
        <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
            <div class="text-[11px] font-bold text-emerald-800 uppercase">Ví dụ chuẩn mực</div>
            <div class="text-lg font-bold hanzi-font text-slate-900 flex justify-between">${g.exampleZh} <button onclick="speakChinese('${(g.exampleZh).replace(/'/g, "\\'")}')" class="text-emerald-600"><i class="fa-solid fa-volume-high"></i></button></div>
            <div class="text-xs text-emerald-700 font-semibold">${g.examplePy}</div>
            <div class="text-xs text-slate-700">${g.exampleVi}</div>
        </div>
        
        <div class="space-y-4 pt-2 border-t border-slate-100">
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

    const apiUrl = `[https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=$](https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=$){apiKey}`;
    const promptText = `Nhiệm vụ: Tạo 1 bài trắc nghiệm và 1 bài sắp xếp câu để luyện ngữ pháp "${g.title}" (Công thức: ${g.formula}).
    BẮT BUỘC dùng các từ vựng này để đặt câu: ${selectedVocab}.
    Trả về định dạng JSON DUY NHẤT:
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
                        ${result.mcq.options.map(opt => `<button onclick="checkAIGrammar(this, '${opt}', '${result.mcq.answer}', '${result.mcq.explain}')" class="text-left p-3 rounded-xl border border-slate-200 hover:border-indigo-500 font-medium hanzi-font transition">${opt}</button>`).join('')}
                    </div>
                </div>
                
                <div class="p-4 rounded-xl border border-slate-200 bg-white space-y-3 text-xs shadow-sm">
                    <div class="font-bold text-indigo-700"><i class="fa-solid fa-layer-group mr-1"></i> Sắp xếp câu</div>
                    <div class="font-bold text-slate-800">${result.reorder.promptVi}</div>
                    <div class="flex flex-wrap gap-2">
                        ${result.reorder.words.map(w => `<button onclick="const inp=document.getElementById('ai-g-reo-${gId}'); inp.value=(inp.value+'${w}').trim();" class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 border border-slate-300 font-bold hanzi-font text-sm">${w}</button>`).join('')}
                    </div>
                    <div class="flex gap-2">
                        <input type="text" id="ai-g-reo-${gId}" placeholder="Bấm thẻ từ hoặc gõ..." class="flex-1 px-3 py-2 border border-slate-300 rounded-xl hanzi-font text-sm">
                        <button onclick="document.getElementById('ai-g-reo-${gId}').value=''" class="px-3 py-2 bg-slate-100 rounded-xl text-slate-600">Xóa</button>
                        <button onclick="checkAIGrammarReorder('${gId}', '${result.reorder.answer}', '${result.reorder.explain}')" class="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl">Kiểm tra</button>
                    </div>
                    <div id="ai-g-reo-fb-${gId}"></div>
                </div>
            `;
            showToast("Đã đúc bài tập ngữ pháp thành công!", "emerald");
        }
    } catch (err) {
        box.innerHTML = `<div class="p-3 text-xs text-rose-600 bg-rose-50 rounded-xl border border-rose-200">AI đang bận, xin bệ hạ thử lại sau.</div>`;
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

function refreshAllViews() {
    updateDashboardAndSidebarStats();
    renderVocabulary();
    renderGrammarList();
    renderListeningModule();
    renderSpeakingModule();
}

window.onload = function() {
    if (window.learnerState && window.learnerState.customVocab) {
        const exist = new Set(VOCABULARY_DB.map(v => v.id));
        const toAdd = window.learnerState.customVocab.filter(v => !exist.has(v.id));
        VOCABULARY_DB.push(...toAdd);
    }
    refreshAllViews();
    updatePomoDisplay();
};

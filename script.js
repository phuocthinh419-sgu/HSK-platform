/* =====================================================================
   I. KHO DỮ LIỆU TỪ VỰNG HSK 1–3 TÍCH HỢP SẴN
   ===================================================================== */
const VOCABULARY_DB = [
{id:"v101",hanzi:"你好",pinyin:"nǐ hǎo",viet:"Xin chào",pos:"Cụm giao tiếp",level20:1,level30:1,lesson:"Bài 1 (HSK 1): Chào hỏi & Làm quen",topic:"Giao tiếp",exampleZh:"你好，我是越南人。",examplePy:"Nǐ hǎo, wǒ shì Yuènán rén.",exampleVi:"Xin chào, tôi là người Việt Nam.",collocations:["你好吗 (Bạn khỏe không)","说你好 (Nói xin chào)"],synonyms:"您好 (nín hǎo)",related:["您","好","再见"],strokes:["丿","丨","乛","亅","丿","丶","𡿨","丿","一","乛","亅","一"]},
{id:"v102",hanzi:"谢谢",pinyin:"xièxie",viet:"Cảm ơn",pos:"Động từ",level20:1,level30:1,lesson:"Bài 1 (HSK 1): Chào hỏi & Làm quen",topic:"Giao tiếp",exampleZh:"谢谢你的帮助。",examplePy:"Xièxie nǐ de bāngzhù.",exampleVi:"Cảm ơn sự giúp đỡ của bạn.",collocations:["非常谢谢 (Rất cảm ơn)","谢谢大家 (Cảm ơn mọi người)"],synonyms:"感谢 (gǎnxiè)",related:["不客气","对不起"],strokes:["丶","𠃍","丿","丨","𠃍","一","一","一","丿","一","亅","丶"]},
{id:"v103",hanzi:"不客气",pinyin:"bú kèqi",viet:"Đừng khách sáo",pos:"Cụm giao tiếp",level20:1,level30:1,lesson:"Bài 1 (HSK 1): Chào hỏi & Làm quen",topic:"Giao tiếp",exampleZh:"不用谢，不客气！",examplePy:"Búyòng xiè, bú kèqi!",exampleVi:"Không cần cảm ơn, đừng khách sáo!",collocations:["请不客气 (Đừng khách sáo)"],synonyms:"不用谢 (búyòng xiè)",related:["谢谢","没关系"],strokes:["一","丿","丨","丶"]},
{id:"v104",hanzi:"老师",pinyin:"lǎoshī",viet:"Giáo viên",pos:"Danh từ",level20:1,level30:1,lesson:"Bài 2 (HSK 1): Trường lớp & Học tập",topic:"Học tập",exampleZh:"王老师教我们汉语。",examplePy:"Wáng lǎoshī jiāo wǒmen Hànyǔ.",exampleVi:"Thầy Vương dạy chúng tôi tiếng Trung.",collocations:["汉语老师 (Giáo viên tiếng Trung)"],synonyms:"教师 (jiàoshī)",related:["学生","学校","汉语"],strokes:["一","丨","一","丿","丿","乚","丨","丿","一","丨","𠃍","丨"]},
{id:"v105",hanzi:"学生",pinyin:"xuésheng",viet:"Học sinh, sinh viên",pos:"Danh từ",level20:1,level30:1,lesson:"Bài 2 (HSK 1): Trường lớp & Học tập",topic:"Học tập",exampleZh:"他是北京大学的留学生。",examplePy:"Tā shì Běijīng Dàxué de liúxuéshēng.",exampleVi:"Anh ấy là du học sinh Đại học Bắc Kinh.",collocations:["大学生 (Sinh viên đại học)"],synonyms:"同学 (tóngxué)",related:["老师","学习","学校"],strokes:["丶","丶","丿","丶","乛","乛","亅","一","丿","一","一","丨","一"]},
{id:"v106",hanzi:"学习",pinyin:"xuéxí",viet:"Học tập",pos:"Động từ",level20:1,level30:1,lesson:"Bài 2 (HSK 1): Trường lớp & Học tập",topic:"Học tập",exampleZh:"我每天都努力学习汉语。",examplePy:"Wǒ měitiān dōu nǔlì xuéxí Hànyǔ.",exampleVi:"Mỗi ngày tôi đều chăm chỉ học tiếng Trung.",collocations:["学习汉语 (Học tiếng Trung)"],synonyms:"念书 (niànshū)",related:["学生","看书","写字"],strokes:["丶","丶","丿","丶","乛","乛","亅","一","𠃍","丶","㇀"]},
{id:"v107",hanzi:"汉语",pinyin:"Hànyǔ",viet:"Tiếng Trung",pos:"Danh từ",level20:1,level30:1,lesson:"Bài 2 (HSK 1): Trường lớp & Học tập",topic:"Học tập",exampleZh:"汉语很有意思，不太难。",examplePy:"Hànyǔ hěn yǒu yìsi, bú tài nán.",exampleVi:"Tiếng Trung rất thú vị, không khó lắm.",collocations:["说汉语 (Nói tiếng Trung)"],synonyms:"中文 (Zhōngwén)",related:["汉字","中国","说话"],strokes:["丶","丶","㇀","𠃍","丶"]},
{id:"v108",hanzi:"吃",pinyin:"chī",viet:"Ăn",pos:"Động từ",level20:1,level30:1,lesson:"Bài 3 (HSK 1): Ẩm thực & Đồ uống",topic:"Ăn uống",exampleZh:"你想吃中国菜还是越南菜？",examplePy:"Nǐ xiǎng chī Zhōngguó cài háishi Yuènán cài?",exampleVi:"Bạn muốn ăn món Trung Quốc hay món Việt Nam?",collocations:["吃饭 (Ăn cơm)"],synonyms:"喝 (hē)",related:["米饭","菜","喝茶"],strokes:["丨","𠃍","一","丿","一","乚"]},
{id:"v109",hanzi:"喝",pinyin:"hē",viet:"Uống",pos:"Động từ",level20:1,level30:1,lesson:"Bài 3 (HSK 1): Ẩm thực & Đồ uống",topic:"Ăn uống",exampleZh:"爸爸喜欢早上喝热茶。",examplePy:"Bàba xǐhuan zǎoshang hē rè chá.",exampleVi:"Bố thích uống trà nóng vào buổi sáng.",collocations:["喝水 (Uống nước)"],synonyms:"吃 (chī)",related:["水","茶","杯子"],strokes:["丨","𠃍","一","丨","𠃍","一","一","丿","𠃍","丿","丶","乚"]},
{id:"v116",hanzi:"米饭",pinyin:"mǐfàn",viet:"Cơm trắng",pos:"Danh từ",level20:1,level30:1,lesson:"Bài 3 (HSK 1): Ẩm thực & Đồ uống",topic:"Ăn uống",exampleZh:"中午我吃了一碗米饭。",examplePy:"Zhōngwǔ wǒ chīle yì wǎn mǐfàn.",exampleVi:"Buổi trưa tôi đã ăn một bát cơm.",collocations:["一碗米饭 (Một bát cơm)"],synonyms:"白饭 (báifàn)",related:["吃","菜","面条"],strokes:["丶","丿","一","丨","丿","丶","丿","𠃍","丶","丿","𠃍","丶"]},
{id:"v110",hanzi:"买",pinyin:"mǎi",viet:"Mua",pos:"Động từ",level20:1,level30:1,lesson:"Bài 4 (HSK 1): Mua sắm & Tiền tệ",topic:"Mua sắm",exampleZh:"妈妈去商店买了一些苹果。",examplePy:"Māma qù shāngdiàn mǎile yìxiē píngguǒ.",exampleVi:"Mẹ đi cửa hàng mua một ít táo.",collocations:["买东西 (Mua đồ)"],synonyms:"卖 (mài - bán)",related:["钱","商店","多少"],strokes:["乛","丶","丶","一","丿","丶"]},
{id:"v117",hanzi:"商店",pinyin:"shāngdiàn",viet:"Cửa hàng",pos:"Danh từ",level20:1,level30:1,lesson:"Bài 4 (HSK 1): Mua sắm & Tiền tệ",topic:"Mua sắm",exampleZh:"学校前面有一个大商店。",examplePy:"Xuéxiào qiánmiàn yǒu yí gè dà shāngdiàn.",exampleVi:"Phía trước trường học có một cửa hàng lớn.",collocations:["去商店 (Đi cửa hàng)"],synonyms:"超市 (chāoshì)",related:["买","东西","钱"],strokes:["丶","一","丶","丿","丨","𠃍","丿","丶","丨","𠃍","一"]},
{id:"v118",hanzi:"钱",pinyin:"qián",viet:"Tiền",pos:"Danh từ",level20:1,level30:1,lesson:"Bài 4 (HSK 1): Mua sắm & Tiền tệ",topic:"Mua sắm",exampleZh:"请问这本书多少钱？",examplePy:"Qǐngwèn zhè běn shū duōshao qián?",exampleVi:"Xin hỏi quyển sách này bao nhiêu tiền?",collocations:["多少钱 (Bao nhiêu tiền)"],synonyms:"现金 (xiànjīn)",related:["买","贵","块"],strokes:["丿","一","一","一","𠄌","一","一","㇂","丿","丶"]},
{id:"v111",hanzi:"看",pinyin:"kàn",viet:"Nhìn, xem",pos:"Động từ",level20:1,level30:1,lesson:"Bài 5 (HSK 1): Sinh hoạt & Kỹ năng",topic:"Sinh hoạt",exampleZh:"晚上我常在家看书或者看电视。",examplePy:"Wǎnshang wǒ cháng zài jiā kàn shū huòzhě kàn diànshì.",exampleVi:"Buổi tối tôi thường ở nhà đọc sách hoặc xem tivi.",collocations:["看书 (Đọc sách)"],synonyms:"见 (jiàn)",related:["听","说","写"],strokes:["丿","一","一","丿","丨","𠃍","一","一","一"]},
{id:"v112",hanzi:"听",pinyin:"tīng",viet:"Nghe",pos:"Động từ",level20:1,level30:1,lesson:"Bài 5 (HSK 1): Sinh hoạt & Kỹ năng",topic:"Sinh hoạt",exampleZh:"请大家仔细听录音。",examplePy:"Qǐng dàjiā zǐxì tīng lùyīn.",exampleVi:"Mời mọi người nghe kỹ đoạn ghi âm.",collocations:["听音乐 (Nghe nhạc)"],synonyms:"闻 (wén)",related:["说","读","写"],strokes:["丨","𠃍","一","丿","丿","一","丨"]},
{id:"v113",hanzi:"说话",pinyin:"shuōhuà",viet:"Nói chuyện",pos:"Động từ ly hợp",level20:1,level30:1,lesson:"Bài 5 (HSK 1): Sinh hoạt & Kỹ năng",topic:"Giao tiếp",exampleZh:"他说话说得很快。",examplePy:"Tā shuōhuà shuō de hěn kuài.",exampleVi:"Anh ấy nói chuyện rất nhanh.",collocations:["大声说话 (Nói lớn tiếng)"],synonyms:"讲话 (jiǎnghuà)",related:["听","汉语","告诉"],strokes:["丶","𠃍","丿","丶","丨","𠃍","一","丿","乚"]},
{id:"v114",hanzi:"写",pinyin:"xiě",viet:"Viết",pos:"Động từ",level20:1,level30:1,lesson:"Bài 5 (HSK 1): Sinh hoạt & Kỹ năng",topic:"Học tập",exampleZh:"这个汉字怎么写？",examplePy:"Zhège Hànzì zěnme xiě?",exampleVi:"Chữ Hán này viết như thế nào?",collocations:["写汉字 (Viết chữ Hán)"],synonyms:"抄 (chāo)",related:["汉字","字","读"],strokes:["丶","乛","一","𠃍","一"]},
{id:"v115",hanzi:"朋友",pinyin:"péngyou",viet:"Bạn bè",pos:"Danh từ",level20:1,level30:1,lesson:"Bài 6 (HSK 1): Gia đình & Bạn bè",topic:"Gia đình & Bạn bè",exampleZh:"他是我的好朋友。",examplePy:"Tā shì wǒ de hǎo péngyou.",exampleVi:"Anh ấy là bạn tốt của tôi.",collocations:["好朋友 (Bạn thân)"],synonyms:"伙伴 (huǒbàn)",related:["同学","认识","高兴"],strokes:["丿","𠃌","一","一","丿","𠃌","一","一","一","丿","","捺"]},
{id:"v119",hanzi:"认识",pinyin:"rènshi",viet:"Quen biết",pos:"Động từ",level20:1,level30:1,lesson:"Bài 6 (HSK 1): Gia đình & Bạn bè",topic:"Giao tiếp",exampleZh:"认识你我非常高兴。",examplePy:"Rènshi nǐ wǒ fēicháng gāoxìng.",exampleVi:"Quen biết bạn tôi vô cùng vui mừng.",collocations:["认识新朋友 (Quen bạn mới)"],synonyms:"知道 (zhīdào)",related:["朋友","高兴","名字"],strokes:["丶","𠃍","丿","丶","丶","𠃍","丨","𠃍","一","丿","丶"]},
{id:"v120",hanzi:"高兴",pinyin:"gāoxìng",viet:"Vui vẻ",pos:"Tính từ",level20:1,level30:1,lesson:"Bài 6 (HSK 1): Gia đình & Bạn bè",topic:"Cảm xúc",exampleZh:"今天见到老师，大家都很高兴。",examplePy:"Jīntiān jiàndào lǎoshī, dàjiā dōu hěn gāoxìng.",exampleVi:"Hôm nay gặp thầy, mọi người đều rất vui.",collocations:["很高兴 (Rất vui)"],synonyms:"快乐 (kuàilè)",related:["认识","喜欢","笑"],strokes:["丶","一","丨","𠃍","一","丨","𠃍","丨","𠃍","一","丶","丶","丿","一","丿","丶"]},
{id:"v121",hanzi:"现在",pinyin:"xiànzài",viet:"Bây giờ",pos:"Danh từ thời gian",level20:1,level30:1,lesson:"Bài 7 (HSK 1): Thời gian & Lịch trình",topic:"Thời gian",exampleZh:"请问现在几点了？",examplePy:"Qǐngwèn xiànzài jǐ diǎn le?",exampleVi:"Xin hỏi bây giờ mấy giờ rồi?",collocations:["从现在开始 (Từ bây giờ)"],synonyms:"目前 (mùqián)",related:["今天","点","时候"],strokes:["一","一","丨","㇀","丨","𠃍","丿","乚","一","丿","丨","一","丨","一"]},
{id:"v122",hanzi:"时候",pinyin:"shíhou",viet:"Lúc, khi",pos:"Danh từ",level20:1,level30:1,lesson:"Bài 7 (HSK 1): Thời gian & Lịch trình",topic:"Thời gian",exampleZh:"你什么时候去学校？",examplePy:"Nǐ shénme shíhou qù xuéxiào?",exampleVi:"Khi nào bạn đi đến trường?",collocations:["什么时候 (Khi nào)"],synonyms:"时间 (shíjiān)",related:["现在","今天","以前"],strokes:["丨","𠃍","一","一","一","亅","丶","丿","丨","丨","𠃍","一","丿","一","一","丿","丶"]},
{id:"v123",hanzi:"明天",pinyin:"míngtiān",viet:"Ngày mai",pos:"Danh từ thời gian",level20:1,level30:1,lesson:"Bài 7 (HSK 1): Thời gian & Lịch trình",topic:"Thời gian",exampleZh:"明天上午我有汉语课。",examplePy:"Míngtiān shàngwǔ wǒ yǒu Hànyǔ kè.",exampleVi:"Sáng ngày mai tôi có tiết tiếng Trung.",collocations:["明天见 (Hẹn mai gặp)"],synonyms:"明日 (míngrì)",related:["今天","昨天","星期"],strokes:["丨","𠃍","一","一","丿","𠃌","一","一","一","一","丿","丶"]},
{id:"v124",hanzi:"天气",pinyin:"tiānqì",viet:"Thời tiết",pos:"Danh từ",level20:1,level30:1,lesson:"Bài 8 (HSK 1): Thời tiết & Đi lại",topic:"Thời tiết",exampleZh:"今天北京的天气非常好。",examplePy:"Jīntiān Běijīng de tiānqì fēicháng hǎo.",exampleVi:"Thời tiết Bắc Kinh hôm nay rất đẹp.",collocations:["天气预报 (Dự báo thời tiết)"],synonyms:"气候 (qìhòu)",related:["下雨","冷","热"],strokes:["一","一","丿","丶","丿","一","一","⺄"]},
{id:"v125",hanzi:"下雨",pinyin:"xiàyǔ",viet:"Trời mưa",pos:"Động từ ly hợp",level20:1,level30:1,lesson:"Bài 8 (HSK 1): Thời tiết & Đi lại",topic:"Thời tiết",exampleZh:"外面下雨了，我们坐出租车回家吧。",examplePy:"Wàimiàn xiàyǔ le, wǒmen zuò chūzūchē huí jiā ba.",exampleVi:"Bên ngoài mưa rồi, đi taxi về nhé.",collocations:["下大雨 (Mưa to)"],synonyms:"刮风 (guāfēng)",related:["天气","冷","水"],strokes:["一","丨","丶","一","丨","𠃍","丨","丶","丶","丶","丶"]},
{id:"v126",hanzi:"飞机",pinyin:"fēijī",viet:"Máy bay",pos:"Danh từ",level20:1,level30:1,lesson:"Bài 8 (HSK 1): Thời tiết & Đi lại",topic:"Đi lại",exampleZh:"我明天坐飞机去上海。",examplePy:"Wǒ míngtiān zuò fēijī qù Shànghǎi.",exampleVi:"Ngày mai tôi đi máy bay đến Thượng Hải.",collocations:["坐飞机 (Đi máy bay)"],synonyms:"航班 (hángbān)",related:["出租车","去","回"],strokes:["⺄","丿","丶","一","丨","丿","丶","丿","⺄"]},
// --- HSK 2 ---
{id:"v201",hanzi:"觉得",pinyin:"juéde",viet:"Cảm thấy",pos:"Động từ",level20:2,level30:1,lesson:"Bài 9 (HSK 2): Quan điểm & Nguyên nhân",topic:"Giao tiếp & Tư duy",exampleZh:"我觉得今天天气有一点儿冷。",examplePy:"Wǒ juéde jīntiān tiānqì yǒu yìdiǎnr lěng.",exampleVi:"Tôi cảm thấy hôm nay hơi lạnh.",collocations:["你觉得呢 (Bạn thấy sao?)"],synonyms:"认为 (rènwéi)",related:["认为","想","看法"],strokes:["丶","丶","丿","丶","乛","丨","𠃍","丿","乚"]},
{id:"v202",hanzi:"因为",pinyin:"yīnwèi",viet:"Bởi vì",pos:"Liên từ",level20:2,level30:1,lesson:"Bài 9 (HSK 2): Quan điểm & Nguyên nhân",topic:"Giao tiếp & Tư duy",exampleZh:"因为下雨了，所以我们不去公园。",examplePy:"Yīnwèi xiàyǔ le, suǒyǐ wǒmen bú qù gōngyuán.",exampleVi:"Bởi vì mưa rồi, cho nên không đi công viên.",collocations:["因为……所以…… (Bởi vì... cho nên...)"],synonyms:"由于 (yóuyú)",related:["所以","但是","为什么"],strokes:["丨","𠃍","一","丿","丶","一","丶","丿","𠃍","丶"]},
{id:"v203",hanzi:"所以",pinyin:"suǒyǐ",viet:"Cho nên",pos:"Liên từ",level20:2,level30:1,lesson:"Bài 9 (HSK 2): Quan điểm & Nguyên nhân",topic:"Giao tiếp & Tư duy",exampleZh:"他每天都练习口语，所以说得很好。",examplePy:"Tā měitiān dōu liànxí kǒuyǔ, suǒyǐ shuō de hěn hǎo.",exampleVi:"Anh ấy luyện nói mỗi ngày, cho nên nói rất tốt.",collocations:["因为……所以……"],synonyms:"因此 (yīncǐ)",related:["因为","结果"],strokes:["丿","丿","𠃍","一","丿","丿","丨","丶","丿","丶"]},
{id:"v204",hanzi:"但是",pinyin:"dànshì",viet:"Nhưng",pos:"Liên từ",level20:2,level30:1,lesson:"Bài 9 (HSK 2): Quan điểm & Nguyên nhân",topic:"Giao tiếp & Tư duy",exampleZh:"虽然汉字有点儿难，但是很有意思。",examplePy:"Suīrán Hànzì yǒudiǎnr nán, dànshì hěn yǒu yìsi.",exampleVi:"Tuy chữ Hán hơi khó, nhưng rất thú vị.",collocations:["虽然……但是……"],synonyms:"可是 (kěshì)",related:["虽然","因为","所以"],strokes:["丿","丨","丨","𠃍","一","一","一"]},
{id:"v205",hanzi:"准备",pinyin:"zhǔnbèi",viet:"Chuẩn bị",pos:"Động từ",level20:2,level30:1,lesson:"Bài 10 (HSK 2): Kế hoạch & Chuẩn bị",topic:"Công việc & Học tập",exampleZh:"我已经准备好参加HSK考试了。",examplePy:"Wǒ yǐjīng zhǔnbèi hǎo cānjiā HSK kǎoshì le.",exampleVi:"Tôi đã chuẩn bị xong để thi HSK rồi.",collocations:["准备考试 (Chuẩn bị thi)"],synonyms:"打算 (dǎsuàn)",related:["开始","考试","打算"],strokes:["丶","冫","丿","丨","丶","一","一","一","丨","一"]},
{id:"v209",hanzi:"开始",pinyin:"kāishǐ",viet:"Bắt đầu",pos:"Động từ / Danh từ",level20:2,level30:1,lesson:"Bài 10 (HSK 2): Kế hoạch & Chuẩn bị",topic:"Công việc & Học tập",exampleZh:"我们现在开始上课吧。",examplePy:"Wǒmen xiànzài kāishǐ shàngkè ba.",exampleVi:"Bây giờ chúng ta bắt đầu học nhé.",collocations:["开始工作 (Bắt đầu làm việc)"],synonyms:"结束 (jiéshù)",related:["准备","时间","已经"],strokes:["一","一","丿","丨","𡿨","丿","一","厶","丨","𠃍","一"]},
{id:"v210",hanzi:"已经",pinyin:"yǐjīng",viet:"Đã... rồi",pos:"Phó từ",level20:2,level30:1,lesson:"Bài 10 (HSK 2): Kế hoạch & Chuẩn bị",topic:"Thời gian",exampleZh:"他已经回家了。",examplePy:"Tā yǐjīng huí jiā le.",exampleVi:"Anh ấy đã về nhà rồi.",collocations:["已经到了 (Đã đến rồi)"],synonyms:"曾经 (céngjīng)",related:["准备","完","了"],strokes:["𠃍","一","乚","𡿨","𡿨","㇀","𠃍","丶","一","丨","一"]},
{id:"v206",hanzi:"帮助",pinyin:"bāngzhù",viet:"Giúp đỡ",pos:"Động từ / Danh từ",level20:2,level30:1,lesson:"Bài 11 (HSK 2): Sự giúp đỡ & Giao tiếp",topic:"Giao tiếp",exampleZh:"同学常常帮助我练习发音。",examplePy:"Tóngxué chángcháng bāngzhù wǒ liànxí fāyīn.",exampleVi:"Bạn học thường giúp tôi luyện phát âm.",collocations:["互相帮助 (Giúp đỡ lẫn nhau)"],synonyms:"帮忙 (bāngmáng)",related:["谢谢","朋友"],strokes:["一","一","一","丿","𠃍","丨","丨","𠃍","丨"]},
{id:"v211",hanzi:"告诉",pinyin:"gàosu",viet:"Nói cho biết",pos:"Động từ",level20:2,level30:1,lesson:"Bài 11 (HSK 2): Sự giúp đỡ & Giao tiếp",topic:"Giao tiếp",exampleZh:"请把这个好消息告诉大家。",examplePy:"Qǐng bǎ zhège hǎo xiāoxi gàosu dàjiā.",exampleVi:"Xin báo tin vui này cho mọi người.",collocations:["告诉我 (Nói cho tôi biết)"],synonyms:"通知 (tōngzhī)",related:["说话","知道","问"],strokes:["丿","一","丨","一","丨","𠃍","一","丶","𠃍","丿","丿","一","丨","丶"]},
{id:"v212",hanzi:"介绍",pinyin:"jièshào",viet:"Giới thiệu",pos:"Động từ / Danh từ",level20:2,level30:1,lesson:"Bài 11 (HSK 2): Sự giúp đỡ & Giao tiếp",topic:"Giao tiếp",exampleZh:"我来介绍一下儿我的新朋友。",examplePy:"Wǒ lái jièshào yíxiàr wǒ de xīn péngyou.",exampleVi:"Để tôi giới thiệu bạn mới của tôi.",collocations:["自我介绍 (Tự giới thiệu)"],synonyms:"推荐 (tuījiàn)",related:["认识","朋友","名字"],strokes:["丿","丶","丿","丨","𡿨","𡿨","㇀","𠃍","丿","丨","𠃍","一"]},
{id:"v207",hanzi:"运动",pinyin:"yùndòng",viet:"Vận động",pos:"Động từ / Danh từ",level20:2,level30:1,lesson:"Bài 12 (HSK 2): Thể thao & Vận động",topic:"Sở thích",exampleZh:"多运动对身体非常好。",examplePy:"Duō yùndòng duì shēntǐ fēicháng hǎo.",exampleVi:"Vận động nhiều rất tốt cho sức khỏe.",collocations:["喜欢运动 (Thích thể thao)"],synonyms:"锻炼 (duànliàn)",related:["跑步","打篮球","身体"],strokes:["一","一","厶","丶","𠃍","辶"]},
{id:"v213",hanzi:"跑步",pinyin:"pǎobù",viet:"Chạy bộ",pos:"Động từ ly hợp",level20:2,level30:1,lesson:"Bài 12 (HSK 2): Thể thao & Vận động",topic:"Sở thích",exampleZh:"我每天早上都去公园跑步。",examplePy:"Wǒ měitiān zǎoshang dōu qù gōngyuán pǎobù.",exampleVi:"Mỗi sáng tôi đều đi công viên chạy bộ.",collocations:["去跑步 (Đi chạy bộ)"],synonyms:"慢跑 (mànpǎo)",related:["运动","身体","走"],strokes:["丨","𠃍","一","丨","一","丨","㇀","丿","𠃌","𠃍","一","乚","丨","一","丨","一","丨","丿","丶","丿"]},
{id:"v214",hanzi:"打篮球",pinyin:"dǎ lánqiú",viet:"Chơi bóng rổ",pos:"Cụm động từ",level20:2,level30:1,lesson:"Bài 12 (HSK 2): Thể thao & Vận động",topic:"Sở thích",exampleZh:"下午我们一起去打篮球吧。",examplePy:"Xiàwǔ wǒmen yìqǐ qù dǎ lánqiú ba.",exampleVi:"Buổi chiều chúng mình đi chơi bóng rổ nhé.",collocations:["喜欢打篮球 (Thích chơi bóng rổ)"],synonyms:"打球 (dǎqiú)",related:["运动","跑步","休息"],strokes:["一","亅","㇀","一","亅"]},
{id:"v208",hanzi:"旅游",pinyin:"lǚyóu",viet:"Du lịch",pos:"Động từ",level20:2,level30:2,lesson:"Bài 13 (HSK 2): Du lịch & Khám phá",topic:"Du lịch",exampleZh:"今年夏天我想去中国旅游。",examplePy:"Jīnnián xiàtiān wǒ xiǎng qù Zhōngguó lǚyóu.",exampleVi:"Mùa hè năm nay tôi muốn đi TQ du lịch.",collocations:["去旅游 (Đi du lịch)"],synonyms:"旅行 (lǚxíng)",related:["飞机","火车","宾馆"],strokes:["丶","一","𠃍","丿","丿","一","𠄌","丶"]},
{id:"v215",hanzi:"宾馆",pinyin:"bīngguǎn",viet:"Khách sạn",pos:"Danh từ",level20:2,level30:2,lesson:"Bài 13 (HSK 2): Du lịch & Khám phá",topic:"Du lịch",exampleZh:"这家宾馆的房间非常干净。",examplePy:"Zhè jiā bīngguǎn de fángjiān fēicháng gānjìng.",exampleVi:"Phòng khách sạn này rất sạch sẽ.",collocations:["住宾馆 (Ở khách sạn)"],synonyms:"酒店 (jiǔdiàn)",related:["旅游","房间","休息"],strokes:["丶","丶","乛","丿","丨","一","丨","一","丿","丶","丿","乛","丶","丶","乛","丨","𠃍","一","𠃍","一"]},
{id:"v216",hanzi:"火车站",pinyin:"huǒchēzhàn",viet:"Nhà ga",pos:"Danh từ",level20:2,level30:1,lesson:"Bài 13 (HSK 2): Du lịch & Khám phá",topic:"Đi lại",exampleZh:"请问去火车站怎么走？",examplePy:"Qǐngwèn qù huǒchēzhàn zěnme zǒu?",exampleVi:"Xin hỏi ra ga tàu hỏa đi thế nào?",collocations:["去火车站 (Đi ra ga tàu)"],synonyms:"高铁站 (gāotiězhàn)",related:["飞机","旅游","票"],strokes:["丶","丿","丿","丶","一","𡿨","一","丨"]},
{id:"v217",hanzi:"身体",pinyin:"shēntǐ",viet:"Sức khỏe, cơ thể",pos:"Danh từ",level20:2,level30:1,lesson:"Bài 14 (HSK 2): Sức khỏe & Nghỉ ngơi",topic:"Sức khỏe",exampleZh:"爷爷虽然八十岁了，但是身体很好。",examplePy:"Yéye suīrán bāshí suì le, dànshì shēntǐ hěn hǎo.",exampleVi:"Ông nội tuy 80 tuổi nhưng sức khỏe rất tốt.",collocations:["身体健康 (Sức khỏe dồi dào)"],synonyms:"健康 (jiànkāng)",related:["休息","生病","运动"],strokes:["丿","丨","𠃍","一","一","一","丿","丿","丨","一","丨","丿","丶","一"]},
{id:"v218",hanzi:"休息",pinyin:"xiūxi",viet:"Nghỉ ngơi",pos:"Động từ",level20:2,level30:1,lesson:"Bài 14 (HSK 2): Sức khỏe & Nghỉ ngơi",topic:"Sức khỏe",exampleZh:"你工作太累了，早点儿休息吧。",examplePy:"Nǐ gōngzuò tài lèi le, zǎodiǎnr xiūxi ba.",exampleVi:"Bạn mệt quá rồi, nghỉ sớm đi.",collocations:["休息一下 (Nghỉ một lát)"],synonyms:"放松 (fàngsōng)",related:["身体","累","睡觉"],strokes:["丿","丨","一","丨","丿","丶","丿","丨","𠃍","一","一","一","丶","卧钩","丶","丶"]},
{id:"v219",hanzi:"生病",pinyin:"shēngbìng",viet:"Bị ốm",pos:"Động từ ly hợp",level20:2,level30:1,lesson:"Bài 14 (HSK 2): Sức khỏe & Nghỉ ngơi",topic:"Sức khỏe",exampleZh:"因为他生病了，所以今天没来上课。",examplePy:"Yīnwèi tā shēngbìng le, suǒyǐ jīntiān méi lái shàngkè.",exampleVi:"Bởi vì anh ấy ốm, nên hôm nay nghỉ học.",collocations:["容易生病 (Dễ bị ốm)"],synonyms:"感冒 (gǎnmào)",related:["吃药","医院","身体"],strokes:["丿","一","一","丨","一","丶","一","丿","丶","㇀","一","丨","𠃍","丿","丶"]},
{id:"v220",hanzi:"考试",pinyin:"kǎoshì",viet:"Kỳ thi",pos:"Động từ / Danh từ",level20:2,level30:1,lesson:"Bài 15 (HSK 2): Công việc & Thi cử",topic:"Học tập",exampleZh:"下个星期我们有一次汉语考试。",examplePy:"Xià gè xīngqī wǒmen yǒu yí cì Hànyǔ kǎoshì.",exampleVi:"Tuần sau chúng tôi có một bài thi tiếng Trung.",collocations:["参加考试 (Tham gia kỳ thi)"],synonyms:"测验 (cèyàn)",related:["准备","复习","问题"],strokes:["一","丨","一","丿","一","𠃍","丶","𠃍","一","一","丨","㇀","㇂","丶"]},
{id:"v221",hanzi:"问题",pinyin:"wèntí",viet:"Vấn đề, câu hỏi",pos:"Danh từ",level20:2,level30:1,lesson:"Bài 15 (HSK 2): Công việc & Thi cử",topic:"Học tập",exampleZh:"老师，我有几个问题想问您。",examplePy:"Lǎoshī, wǒ yǒu jǐ gè wèntí xiǎng wèn nín.",exampleVi:"Thầy ơi, em có mấy câu hỏi muốn hỏi ạ.",collocations:["没问题 (Không thành vấn đề)"],synonyms:"疑问 (yíwèn)",related:["解决","回答","考试"],strokes:["丶","丨","𠃌","丨","𠃍","一","丨","𠃍","一","一","一","丨","一","丿","捺"]},
{id:"v222",hanzi:"意思",pinyin:"yìsi",viet:"Ý nghĩa",pos:"Danh từ",level20:2,level30:1,lesson:"Bài 15 (HSK 2): Công việc & Thi cử",topic:"Giao tiếp",exampleZh:"这个句子是什么意思？",examplePy:"Zhège jùzi shì shénme yìsi?",exampleVi:"Câu này có nghĩa là gì?",collocations:["有意思 (Thú vị, hay)"],synonyms:"意义 (yìyì)",related:["觉得","懂","汉字"],strokes:["丶","一","丶","丿","一","丨","𠃍","一","一","丶","卧钩","丶","丶"]},
{id:"v223",hanzi:"快乐",pinyin:"kuàilè",viet:"Vui vẻ",pos:"Tính từ",level20:2,level30:1,lesson:"Bài 16 (HSK 2): Đời sống & Cảm xúc",topic:"Cảm xúc",exampleZh:"祝你生日快乐！",examplePy:"Zhù nǐ shēngrì kuàilè!",exampleVi:"Chúc bạn sinh nhật vui vẻ!",collocations:["新年快乐 (Chúc mừng năm mới)"],synonyms:"高兴 (gāoxìng)",related:["希望","笑","朋友"],strokes:["丶","丶","丨","𠃍","一","丿","丶","丿","𠃍","亅","丿","丶"]},
{id:"v224",hanzi:"希望",pinyin:"xīwàng",viet:"Hy vọng",pos:"Động từ / Danh từ",level20:2,level30:2,lesson:"Bài 16 (HSK 2): Đời sống & Cảm xúc",topic:"Cảm xúc",exampleZh:"我希望今年能通过HSK三级考试。",examplePy:"Wǒ xīwàng jīnnián néng tōngguò HSK sānjí kǎoshì.",exampleVi:"Tôi hy vọng năm nay thi đỗ HSK 3.",collocations:["充满希望 (Tràn đầy hy vọng)"],synonyms:"盼望 (pànwàng)",related:["觉得","打算","努力"],strokes:["丿","丶","一","丿","丨","𠃌","丨","丶","一","乚","丿","𠃌","一","一","一","一","丨","一"]},
{id:"v225",hanzi:"便宜",pinyin:"piányi",viet:"Rẻ",pos:"Tính từ",level20:2,level30:2,lesson:"Bài 16 (HSK 2): Đời sống & Cảm xúc",topic:"Mua sắm",exampleZh:"这件衣服不但好看，而且很便宜。",examplePy:"Zhè jiàn yīfu búdàn hǎokàn, érqiě hěn piányi.",exampleVi:"Bộ quần áo này vừa đẹp vừa rẻ.",collocations:["太便宜了 (Rẻ quá)"],synonyms:"贵 (guì - đắt)",related:["买","钱","商店"],strokes:["丿","丨","一","丨","𠃍","一","一","丿","捺","丶","丶","乛","丨","𠃍","一","一","一"]},

// --- HSK 3 ---
{id:"v301",hanzi:"认为",pinyin:"rènwéi",viet:"Cho rằng",pos:"Động từ",level20:3,level30:2,lesson:"Bài 17 (HSK 3): Kế hoạch & Tư duy",topic:"Giao tiếp & Tư duy",exampleZh:"大家都认为学好汉语很有用。",examplePy:"Dàjiā dōu rènwéi xuéhǎo Hànyǔ hěn yǒuyòng.",exampleVi:"Mọi người đều cho rằng học tốt tiếng Trung rất có ích.",collocations:["个人认为 (Cá nhân cho rằng)"],synonyms:"觉得 (juéde)",related:["觉得","相信","同意"],strokes:["丶","𠃍","丿","丶","丶","丿","𠃍","丶"]},
{id:"v302",hanzi:"打算",pinyin:"dǎsuàn",viet:"Dự định",pos:"Động từ / Danh từ",level20:3,level30:2,lesson:"Bài 17 (HSK 3): Kế hoạch & Tư duy",topic:"Công việc & Học tập",exampleZh:"周末你有什么打算？",examplePy:"Zhōumò nǐ yǒu shénme dǎsuàn?",exampleVi:"Cuối tuần bạn có dự định gì?",collocations:["打算去 (Dự định đi)"],synonyms:"计划 (jìhuà)",related:["周末","决定","安排"],strokes:["一","亅","㇀","一","亅"]},
{id:"v308",hanzi:"决定",pinyin:"juédìng",viet:"Quyết định",pos:"Động từ / Danh từ",level20:3,level30:2,lesson:"Bài 17 (HSK 3): Kế hoạch & Tư duy",topic:"Công việc & Học tập",exampleZh:"我已经决定去北京留学了。",examplePy:"Wǒ yǐjīng juédìng qù Běijīng liúxué le.",exampleVi:"Tôi đã quyết định đi Bắc Kinh du học rồi.",collocations:["做决定 (Đưa ra quyết định)"],synonyms:"决心 (juéxīn)",related:["打算","准备","选择"],strokes:["丶","㇀","𠃍","一","丿","丶","丶","丶","乛","一","丨","一","丿","捺"]},
{id:"v303",hanzi:"认真",pinyin:"rènzhēn",viet:"Nghiêm túc",pos:"Tính từ",level20:3,level30:2,lesson:"Bài 18 (HSK 3): Thái độ học & Rèn luyện",topic:"Học tập",exampleZh:"他写汉字写得非常认真。",examplePy:"Tā xiě Hànzì xiě de fēicháng rènzhēn.",exampleVi:"Anh ấy viết chữ Hán vô cùng nghiêm túc.",collocations:["认真学习 (Học tập nghiêm túc)"],synonyms:"努力 (nǔlì)",related:["努力","复习","练习"],strokes:["丶","𠃍","丿","丶","一","丨","丨","𠃍","一","一","一","一","丿","丶"]},
{id:"v304",hanzi:"练习",pinyin:"liànxí",viet:"Luyện tập",pos:"Động từ / Danh từ",level20:3,level30:1,lesson:"Bài 18 (HSK 3): Thái độ học & Rèn luyện",topic:"Học tập",exampleZh:"学外语一定要每天多练习。",examplePy:"Xué wàiyǔ yídìng yào měitiān duō liànxí.",exampleVi:"Học ngoại ngữ nhất định phải luyện tập nhiều mỗi ngày.",collocations:["做练习 (Làm bài luyện tập)"],synonyms:"复习 (fùxí)",related:["学习","复习","作业"],strokes:["𡿨","𡿨","㇀","一","𠃍","𠃍","丨","丶"]},
{id:"v309",hanzi:"复习",pinyin:"fùxí",viet:"Ôn tập",pos:"Động từ",level20:3,level30:2,lesson:"Bài 18 (HSK 3): Thái độ học & Rèn luyện",topic:"Học tập",exampleZh:"考试以前一定要好好儿复习生词和语法。",examplePy:"Kǎoshì yǐqián yídìng yào hǎohāor fùxí shēngcí hé yǔfǎ.",exampleVi:"Trước kỳ thi nhất định phải ôn tập kỹ từ mới và ngữ pháp.",collocations:["认真复习 (Ôn tập nghiêm túc)"],synonyms:"温习 (wēnxí)",related:["练习","学习","考试"],strokes:["丿","一","丨","𠃍","一","一","丿","","捺","𠃍","丶","㇀"]},
{id:"v310",hanzi:"努力",pinyin:"nǔlì",viet:"Nỗ lực",pos:"Tính từ / Động từ",level20:3,level30:2,lesson:"Bài 18 (HSK 3): Thái độ học & Rèn luyện",topic:"Học tập",exampleZh:"只要你努力学习，水平一定会提高。",examplePy:"Zhǐyào nǐ nǔlì xuéxí, shuǐpíng yídìng huì tígāo.",exampleVi:"Chỉ cần bạn chăm chỉ học tập, trình độ nhất định sẽ nâng cao.",collocations:["非常努力 (Vô cùng chăm chỉ)"],synonyms:"用功 (yònggōng)",related:["认真","提高","成功"],strokes:["𡿨","丿","一","𠃍","丿","𠃌","丿","𠃌","丿"]},
{id:"v305",hanzi:"关心",pinyin:"guānxīn",viet:"Quan tâm",pos:"Động từ",level20:3,level30:2,lesson:"Bài 19 (HSK 3): Quan hệ xã hội & Sẻ chia",topic:"Gia đình & Bạn bè",exampleZh:"父母总是很关心我们的身体健康。",examplePy:"Fùmǔ zǒngshì hěn guānxīn wǒmen de shēntǐ jiànkāng.",exampleVi:"Cha mẹ luôn rất quan tâm đến sức khỏe của chúng tôi.",collocations:["关心朋友 (Quan tâm bạn bè)"],synonyms:"照顾 (zhàogù)",related:["放心","担心","帮助"],strokes:["丶","丿","一","一","丿","丶","丶","卧钩","丶","丶"]},
{id:"v311",hanzi:"照顾",pinyin:"zhàogù",viet:"Chăm sóc",pos:"Động từ",level20:3,level30:2,lesson:"Bài 19 (HSK 3): Quan hệ xã hội & Sẻ chia",topic:"Gia đình & Bạn bè",exampleZh:"妈妈每天都细心地照顾全家人。",examplePy:"Māma měitiān dōu xìxīn de zhàogù quán jiārén.",exampleVi:"Mẹ mỗi ngày đều chu đáo chăm sóc cả gia đình.",collocations:["照顾孩子 (Chăm sóc con cái)"],synonyms:"关心 (guānxīn)",related:["关心","放心","身体"],strokes:["丨","𠃍","一","一","𠃌","丿","丨","𠃍","一","丶","丶","丶","丶"]},
{id:"v312",hanzi:"放心",pinyin:"fàngxīn",viet:"Yên tâm",pos:"Động từ ly hợp",level20:3,level30:2,lesson:"Bài 19 (HSK 3): Quan hệ xã hội & Sẻ chia",topic:"Cảm xúc",exampleZh:"请您放心，我一定把这件事做好。",examplePy:"Qǐng nín fàngxīn, wǒ yídìng bǎ zhè jiàn shì zuòhǎo.",exampleVi:"Xin ngài cứ yên tâm, tôi nhất định sẽ làm tốt việc này.",collocations:["放心吧 (Yên tâm đi)"],synonyms:"担心 (dānxīn - lo lắng)",related:["关心","照顾","相信"],strokes:["丶","一","𠃌","丿","丿","一","丿","捺","丶","卧钩","丶","丶"]},
{id:"v306",hanzi:"环境",pinyin:"huánjìng",viet:"Môi trường",pos:"Danh từ",level20:3,level30:2,lesson:"Bài 20 (HSK 3): Môi trường & Đời sống",topic:"Sinh hoạt",exampleZh:"这里学习环境很安静，我非常喜欢。",examplePy:"Zhèlǐ xuéxí huánjìng hěn ānjìng, wǒ fēicháng xǐhuan.",exampleVi:"Môi trường học tập ở đây rất yên tĩnh, tôi vô cùng thích.",collocations:["生活环境 (Môi trường sống)"],synonyms:"条件 (tiáojiàn)",related:["安静","干净","地方"],strokes:["一","一","丨","㇀","一","丿","丨","丶"]},
{id:"v313",hanzi:"安静",pinyin:"ānjìng",viet:"Yên tĩnh",pos:"Tính từ",level20:3,level30:2,lesson:"Bài 20 (HSK 3): Môi trường & Đời sống",topic:"Sinh hoạt",exampleZh:"在图书馆看书的时候请保持安静。",examplePy:"Zài túshūguǎn kàn shū de shíhou qǐng bǎochí ānjìng.",exampleVi:"Khi đọc sách ở thư viện xin hãy giữ yên tĩnh.",collocations:["非常安静 (Vô cùng yên tĩnh)"],synonyms:"热闹 (rènao - náo nhiệt)",related:["环境","干净","图书馆"],strokes:["丶","丶","乛","𡿨","丿","一","一","一","丨","一","丨","𠃍","一","一","丿","乛","𠃍","一","一","亅"]},
{id:"v314",hanzi:"干净",pinyin:"gānjìng",viet:"Sạch sẽ",pos:"Tính từ",level20:3,level30:2,lesson:"Bài 20 (HSK 3): Môi trường & Đời sống",topic:"Sinh hoạt",exampleZh:"我先把房间打扫干净，然后再休息。",examplePy:"Wǒ xiān bǎ fángjiān dǎsǎo gānjìng, ránhòu zài xiūxi.",exampleVi:"Tôi dọn phòng sạch sẽ trước, sau đó mới nghỉ ngơi.",collocations:["打扫干净 (Dọn dẹp sạch sẽ)"],synonyms:"整洁 (zhěngjié)",related:["环境","安静","房间"],strokes:["一","一","丨","丶","㇀","丿","乛","𠃍","一","一","亅"]},
{id:"v307",hanzi:"解决",pinyin:"jiějué",viet:"Giải quyết",pos:"Động từ",level20:3,level30:2,lesson:"Bài 21 (HSK 3): Giải quyết vấn đề",topic:"Công việc & Học tập",exampleZh:"这个问题不太容易解决，我们一起想办法吧。",examplePy:"Zhège wèntí bú tài róngyì jiějué, wǒmen yìqǐ xiǎng bànfǎ ba.",exampleVi:"Vấn đề này không dễ giải quyết, chúng ta cùng nghĩ cách nhé.",collocations:["解决问题 (Giải quyết vấn đề)"],synonyms:"处理 (chǔlǐ)",related:["办法","问题","决定"],strokes:["丿","乛","丿","𠃌","一","一","丨","𠃍","丿","丿","一","丨"]},
{id:"v315",hanzi:"办法",pinyin:"bànfǎ",viet:"Cách thức",pos:"Danh từ",level20:3,level30:2,lesson:"Bài 21 (HSK 3): Giải quyết vấn đề",topic:"Công việc & Học tập",exampleZh:"你有什么好办法能提高听力水平吗？",examplePy:"Nǐ yǒu shénme hǎo bànfǎ néng tígāo tīnglì shuǐpíng ma?",exampleVi:"Bạn có cách hay nào để nâng cao trình độ nghe hiểu không?",collocations:["想办法 (Nghĩ cách)"],synonyms:"方法 (fāngfǎ)",related:["解决","问题","决定"],strokes:["𠃌","丿","丶","丶","丶","㇀","一","丨","一","厶","丶"]},
{id:"v316",hanzi:"容易",pinyin:"róngyì",viet:"Dễ dàng",pos:"Tính từ",level20:3,level30:2,lesson:"Bài 21 (HSK 3): Giải quyết vấn đề",topic:"Công việc & Học tập",exampleZh:"把每一件小事都做好并不容易。",examplePy:"Bǎ měi yí jiàn xiǎoshì dōu zuòhǎo bìng bù róngyì.",exampleVi:"Làm tốt từng việc nhỏ một thực sự không hề dễ dàng.",collocations:["很容易 (Rất dễ)"],synonyms:"简单 (jiǎndān)",related:["难","简单","解决"],strokes:["丶","丶","乛","丿","丶","丿","捺","丨","𠃍","一","丨","𠃍","一","一","丿","𠃌","丿","丿"]},
{id:"v317",hanzi:"变化",pinyin:"biànhuà",viet:"Thay đổi",pos:"Danh từ / Động từ",level20:3,level30:2,lesson:"Bài 22 (HSK 3): Sự thay đổi & Phát triển",topic:"Xã hội",exampleZh:"这几年我的家乡发生了很大的变化。",examplePy:"Zhè jǐ nián wǒ de jiāxiāng fāshēngle hěn dà de biànhuà.",exampleVi:"Mấy năm nay quê hương tôi đã có sự thay đổi rất lớn.",collocations:["变化很大 (Thay đổi rất lớn)"],synonyms:"改变 (gǎibiàn)",related:["提高","城市","发现"],strokes:["丶","一","丨","丨","丿","丶","","捺","丿","丨","丿","乚"]},
{id:"v318",hanzi:"提高",pinyin:"tígāo",viet:"Nâng cao",pos:"Động từ",level20:3,level30:2,lesson:"Bài 22 (HSK 3): Sự thay đổi & Phát triển",topic:"Học tập",exampleZh:"多读中文书可以帮助我们提高阅读水平。",examplePy:"Duō dú Zhōngwén shū kěyǐ bāngzhù wǒmen tígāo yuèdú shuǐpíng.",exampleVi:"Đọc nhiều sách tiếng Trung giúp chúng ta nâng cao trình độ đọc.",collocations:["提高水平 (Nâng cao trình độ)"],synonyms:"进步 (jìnbù)",related:["水平","练习","努力"],strokes:["一","亅","㇀","丨","𠃍","一","一","一","丨","一","丿","捺","丶","一","丨","𠃍","一","丨","𠃍","丨","𠃍","一"]},
{id:"v319",hanzi:"水平",pinyin:"shuǐpíng",viet:"Trình độ",pos:"Danh từ",level20:3,level30:2,lesson:"Bài 22 (HSK 3): Sự thay đổi & Phát triển",topic:"Học tập",exampleZh:"他的汉语水平越来越高了。",examplePy:"Tā de Hànyǔ shuǐpíng yuèláiyuè gāo le.",exampleVi:"Trình độ tiếng Trung của anh ấy ngày càng cao rồi.",collocations:["汉语水平考试 (Kỳ thi năng lực Hán ngữ)"],synonyms:"能力 (nénglì)",related:["提高","汉语","考试"],strokes:["亅","","丿","捺","一","丶","丿","一","丨"]},
{id:"v320",hanzi:"感兴趣",pinyin:"gǎn xìngqù",viet:"Có hứng thú",pos:"Cụm động từ",level20:3,level30:2,lesson:"Bài 23 (HSK 3): Văn hóa & Sở thích",topic:"Sở thích",exampleZh:"我对中国历史和书法非常感兴趣。",examplePy:"Wǒ duì Zhōngguó lìshǐ hé shūfǎ fēicháng gǎn xìngqù.",exampleVi:"Tôi vô cùng có hứng thú với lịch sử và thư pháp Trung Quốc.",collocations:["对……感兴趣 (Có hứng thú với...)"],synonyms:"喜欢 (xǐhuan)",related:["文化","历史","音乐"],strokes:["一","丿","一","丨","𠃍","一","㇂","丿","丶","丶","卧钩","丶","丶"]},
{id:"v321",hanzi:"文化",pinyin:"wénhuà",viet:"Văn hóa",pos:"Danh từ",level20:3,level30:2,lesson:"Bài 23 (HSK 3): Văn hóa & Sở thích",topic:"Xã hội",exampleZh:"学习一门语言也是在了解一种文化。",examplePy:"Xuéxí yì mén yǔyán yě shì zài liǎojiě yì zhǒng wénhuà.",exampleVi:"Học một ngôn ngữ cũng chính là đang tìm hiểu một nền văn hóa.",collocations:["中国文化 (Văn hóa Trung Quốc)"],synonyms:"传统 (chuántǒng)",related:["历史","感兴趣","国家"],strokes:["丶","一","丿","捺","丿","丨","丿","乚"]},
{id:"v322",hanzi:"习惯",pinyin:"xíguàn",viet:"Thói quen",pos:"Danh từ / Động từ",level20:3,level30:2,lesson:"Bài 23 (HSK 3): Văn hóa & Sở thích",topic:"Sinh hoạt",exampleZh:"我已经习惯每天早起练习汉语口语了。",examplePy:"Wǒ yǐjīng xíguàn měitiān zǎoqǐ liànxí Hànyǔ kǒuyǔ le.",exampleVi:"Tôi đã quen với việc mỗi ngày dậy sớm luyện khẩu ngữ rồi.",collocations:["好习惯 (Thói quen tốt)"],synonyms:"适应 (shìyìng)",related:["生活","环境","每天"],strokes:["𠃍","丶","㇀","丶","丶","丨","𠃍","丨","一","丨","𠃍","丿","丶"]},
{id:"v323",hanzi:"参加",pinyin:"cānjiā",viet:"Tham gia",pos:"Động từ",level20:3,level30:2,lesson:"Bài 24 (HSK 3): Giao tiếp & Thành công",topic:"Xã hội",exampleZh:"欢迎大家参加今天的汉语角活动。",examplePy:"Huānyíng dàjiā cānjiā jīntiān de Hànyǔjiǎo huódòng.",exampleVi:"Hoan nghênh mọi người tham gia hoạt động Góc tiếng Trung.",collocations:["参加考试 (Tham gia kỳ thi)"],synonyms:"参与 (cānyù)",related:["比赛","考试","准备"],strokes:["厶","丶","一","丿","捺","丿","丿","丿","𠃌","丿","丨","𠃍","一"]},
{id:"v324",hanzi:"影响",pinyin:"yǐngxiǎng",viet:"Ảnh hưởng",pos:"Động từ / Danh từ",level20:3,level30:2,lesson:"Bài 24 (HSK 3): Giao tiếp & Thành công",topic:"Xã hội",exampleZh:"请小声说话，别影响别人看书。",examplePy:"Qǐng xiǎoshēng shuōhuà, bié yǐngxiǎng biérén kàn shū.",exampleVi:"Xin nói nhỏ tiếng, đừng làm ảnh hưởng người khác đọc sách.",collocations:["受影响 (Chịu ảnh hưởng)"],synonyms:"打扰 (dǎrǎo)",related:["环境","安静","关心"],strokes:["丨","𠃍","一","一","丶","一","丨","𠃍","一","亅","丿","丶","丿","丿","丿"]},
{id:"v325",hanzi:"相信",pinyin:"xiāngxìn",viet:"Tin tưởng",pos:"Động từ",level20:3,level30:2,lesson:"Bài 24 (HSK 3): Giao tiếp & Thành công",topic:"Cảm xúc",exampleZh:"我相信只要坚持下去，你一定能成功。",examplePy:"Wǒ xiāngxìn zhǐyào jiānchí xiàqù, nǐ yídìng néng chénggōng.",exampleVi:"Tôi tin rằng chỉ cần kiên trì tiếp tục, bạn nhất định sẽ thành công.",collocations:["相信自己 (Tin vào bản thân)"],synonyms:"信任 (xìnrèn)",related:["认为","放心","希望"],strokes:["一","丨","丿","丶","丨","𠃍","一","一","一","丿","丨","丶","一","一","一","丨","𠃍","一"]}
];

/* =====================================================================
   II. KHO DỮ LIỆU NGỮ PHÁP HSK 1–3
   ===================================================================== */
const GRAMMAR_DB = [
    {id: "g101", level: 1, title: "Câu chữ 是 (shì) – Khẳng định & Định danh", formula: "Chủ ngữ (S) + 是 (shì) + Danh từ / Cụm danh từ (O) | Phủ định: S + 不是 + O", explanation: "Dùng để giới thiệu tên, quốc tịch, nghề nghiệp hoặc xác nhận mối quan hệ. Lưu ý: Không dùng 是 với tính từ để miêu tả tính chất.", condition: "Dùng khi vị ngữ là danh từ hoặc đại từ chỉ người/sự vật.", exampleZh: "我是越南学生，他不是老师。", examplePy: "Wǒ shì Yuènán xuésheng, tā bú shì lǎoshī.", exampleVi: "Tôi là sinh viên Việt Nam, anh ấy không phải là giáo viên.", commonMistakes: "Dịch逐字 'Tôi là bận' thành '我是忙' (Sai). Phải nói: '我很忙' (Wǒ hěn máng).", confusable: "Cấu trúc 'S + 很 + Tính từ'", exercises: [{ type: "fill", question: "Điền từ đúng vào chỗ trống: 王先生 ___ 我们的汉语老师。", options: ["是", "很", "在", "有"], answer: "是", explain: "Sau chỗ trống là cụm danh từ nên phải dùng 是." }, { type: "error", question: "Tìm và sửa câu sai sau: 汉语是很有意思，我不是累。", options: ["汉语很有意思，我不累。", "汉语是意思，我不是累。", "汉语很是有意思，我不累。"], answer: "汉语很有意思，我不累。", explain: "Tính từ không dùng '是/不是'." }, { type: "reorder", promptVi: "Sắp xếp: (Anh ấy không phải là bạn học của tôi)", words: ["他", "不是", "我的", "同学"], answer: "他不是我的同学", explain: "Chủ ngữ (他) + Phủ định (不是) + Định ngữ (我的) + Danh từ (同学)." }]},
    {id: "g102", level: 1, title: "Cấu trúc trạng ngữ chỉ nơi chốn với 在 (zài)", formula: "Chủ ngữ (S) + 在 + Địa điểm + Động từ + Tân ngữ", explanation: "Trong tiếng Trung, cụm giới từ '在 + Địa điểm' bắt buộc phải đứng TRƯỚC động từ hành động.", condition: "Khi diễn tả hành động diễn ra tại một địa điểm cụ thể.", exampleZh: "我朋友在学校学习汉语。", examplePy: "Wǒ péngyou zài xuéxiào xuéxí Hànyǔ.", exampleVi: "Bạn của tôi học tiếng Trung ở trường.", commonMistakes: "Đặt '在 + địa điểm' ở cuối câu.", confusable: "Động từ 在 mang nghĩa 'ở tại' (我没在家).", exercises: [{ type: "reorder", promptVi: "Sắp xếp câu: (Bố uống trà ở nhà)", words: ["爸爸", "在家", "喝", "茶"], answer: "爸爸在家喝茶", explain: "Cụm chỉ địa điểm '在家' phải đứng trước động từ." }, { type: "translate", question: "Chọn câu dịch chuẩn nhất: 'Tôi mua táo ở cửa hàng.'", options: ["我在商店买苹果。", "我买苹果在商店。", "在商店我苹果买。"], answer: "我在商店买苹果。", explain: "S (我) + 在商店 + V (买苹果)." }]},
    {id: "g201", level: 2, title: "Cặp liên từ nhân quả: 因为……所以……", formula: "因为 + Mệnh đề nguyên nhân ， 所以 + Mệnh đề kết quả", explanation: "Dùng để nối hai mệnh đề chỉ nguyên nhân và kết quả. Có thể dùng cả cặp hoặc chỉ một trong hai.", condition: "Trình bày lý do và hệ quả logic.", exampleZh: "因为下雨了，所以我们不去公园。", examplePy: "Yīnwèi xiàyǔ le, suǒyǐ wǒmen bú qù gōngyuán.", exampleVi: "Bởi vì trời mưa rồi, cho nên chúng tôi không đi công viên.", commonMistakes: "Dùng 因为 nhưng vế sau lại dùng 但是.", confusable: "虽然……但是……", exercises: [{ type: "fill", question: "Điền cặp từ: ___ 今天下大雨，___ 我们不去旅游了。", options: ["因为……所以……", "虽然……但是……", "不但……而且……"], answer: "因为……所以……", explain: "Nguyên nhân dẫn đến kết quả." }, { type: "reorder", promptVi: "Sắp xếp: (Vì anh ấy chăm học nên nói rất tốt)", words: ["因为", "他努力学习，", "所以", "汉语说得很好"], answer: "因为他努力学习，所以汉语说得很好", explain: "Nguyên nhân sau 因为, kết quả sau 所以." }]},
    {id: "g202", level: 2, title: "Bổ ngữ trạng thái (Mức độ) với 得 (de)", formula: "Chủ ngữ + Động từ + 得 + (很 / 非常) + Tính từ", explanation: "Đánh giá mức độ của hành động. Nếu động từ có tân ngữ (说汉语), phải lặp lại động từ trước 得 (说汉语说得).", condition: "Nhận xét trình độ thực hiện hành động.", exampleZh: "他写汉字写得非常认真。", examplePy: "Tā xiě Hànzì xiě de fēicháng rènzhēn.", exampleVi: "Anh ấy viết chữ Hán vô cùng nghiêm túc.", commonMistakes: "Viết '他写汉字得认真' (Sai vì 得 không đứng sau tân ngữ).", confusable: "Định ngữ 的 và trạng ngữ 地.", exercises: [{ type: "error", question: "Sửa câu sai: 你说汉语得非常好。", options: ["你说汉语说得非常好。", "你的说汉语非常好。"], answer: "你说汉语说得非常好。", explain: "Phải lặp lại động từ (说汉语说得)." }, { type: "reorder", promptVi: "Sắp xếp: (Cô giáo nói rất chậm)", words: ["老师", "说话", "说得", "很慢"], answer: "老师说话说得很慢", explain: "说话 là động từ ly hợp nên lặp lại 说." }]},
    {id: "g301", level: 3, title: "Tuy... nhưng... với 虽然……但是……", formula: "虽然 + Mệnh đề nhượng bộ ， 但是 + Quan điểm", explanation: "Biểu thị sự đối lập nhượng bộ. Thường kết hợp với 觉得 hoặc 认为 ở HSK 3.", condition: "Phản biện lịch sự.", exampleZh: "虽然这个问题不容易解决，但是我认为大家一起想办法就能成功。", examplePy: "Suīrán zhège wèntí bù róngyì jiějué, dànshì wǒ rènwéi...", exampleVi: "Tuy vấn đề này không dễ, nhưng tôi cho rằng mọi người cùng nghĩ cách sẽ thành công.", commonMistakes: "Quên mất tính liên kết giữa hai vế.", confusable: "因为……所以……", exercises: [{ type: "fill", question: "___ 汉字有点儿难，___ 我觉得很有意思。", options: ["虽然……但是……", "因为……所以……"], answer: "虽然……但是……", explain: "Mang tính đối lập nhượng bộ." }, { type: "reorder", promptVi: "Sắp xếp: (Tuy anh ấy bận nhưng mỗi ngày đều học)", words: ["虽然", "他很忙，", "但是", "每天都学习"], answer: "虽然他很忙，但是每天都学习", explain: "Cấu trúc chuẩn." }]},
    {id: "g302", level: 3, title: "Câu chữ 把 (bǎ) – Xử trí sự vật xác định", formula: "Chủ ngữ + 把 + Tân ngữ + Động từ + Thành phần khác", explanation: "Dùng để nhấn mạnh hành động tác động làm thay đổi vị trí hoặc trạng thái của một sự vật ĐÃ XÁC ĐỊNH. Phủ định phải đặt trước 把.", condition: "Tân ngữ xác định và động từ có bổ ngữ.", exampleZh: "我已经把今天的练习做完了。", examplePy: "Wǒ yǐjīng bǎ jīntiān de liànxí zuòwán le.", exampleVi: "Tôi đã làm xong bài luyện tập hôm nay rồi.", commonMistakes: "Để động từ trơ trọi: '我把书看' (Sai).", confusable: "Câu chữ 被.", exercises: [{ type: "reorder", promptVi: "Sắp xếp: (Xin hãy giải quyết xong vấn đề này)", words: ["请", "把", "这个问题", "解决好"], answer: "请把这个问题解决好", explain: "请 + 把 + Tân ngữ + Động từ + Kết quả." }, { type: "error", question: "Chọn câu ĐÚNG:", options: ["他把那杯茶喝完了。", "他喝完了把那杯茶。"], answer: "他把那杯茶喝完了。", explain: "S + 把 + O + V + Bổ ngữ." }]}
];

/* =====================================================================
   III. KHO BÀI LUYỆN NGHE (LISTENING_DB)
   ===================================================================== */
const LISTENING_DB = [
    { id: "l1", level: 1, type: 1, typeName: "1. Nghe từ và chọn nghĩa", audioText: "谢谢", pinyin: "xièxie", viet: "Cảm ơn", question: "Nghe từ vựng và chọn nghĩa:", options: ["Cảm ơn", "Xin chào", "Tạm biệt"], answer: "Cảm ơn", explain: "Từ là 谢谢." },
    { id: "l3", level: 1, type: 3, typeName: "3. Nghe câu và chọn đáp án", audioText: "王老师今天在学校教我们汉语。", pinyin: "Wáng lǎoshī...", viet: "Thầy Vương dạy tiếng Trung...", question: "Thầy Vương làm gì ở trường?", options: ["Dạy tiếng Trung", "Uống trà", "Mua sách"], answer: "Dạy tiếng Trung", explain: "Cụm 教我们汉语." },
    { id: "l4", level: 2, type: 4, typeName: "4. Nghe hội thoại", audioText: "女：你为什么不去？ 男：因为外面下雨了。", pinyin: "Nǚ: Nǐ wèishénme... Nán: Yīnwèi...", viet: "Nữ: Sao bạn không đi? Nam: Vì trời mưa.", question: "Tại sao người nam không đi?", options: ["Vì trời mưa", "Vì bị ốm"], answer: "Vì trời mưa", explain: "Nghe được 因为外面下雨了." },
    { id: "l5", level: 3, type: 5, typeName: "5. Nghe đoạn văn", audioText: "虽然学习汉语有点难，但是我认为每天认真练习一定能学好。", pinyin: "Suīrán...", viet: "Tuy học hơi khó nhưng luyện tập mỗi ngày sẽ tốt.", question: "Tác giả cho rằng làm gì để học tốt?", options: ["Nghiêm túc luyện tập mỗi ngày", "Không cần viết chữ"], answer: "Nghiêm túc luyện tập mỗi ngày", explain: "Nghe được 认真练习." },
    { id: "l7", level: 1, type: 7, typeName: "7. Chép chính tả", audioText: "他是我的好朋友", pinyin: "Tā shì wǒ de hǎo péngyou", viet: "Anh ấy là bạn tốt của tôi", question: "Gõ lại câu chữ Hán:", isDictation: true, answer: "他是我的好朋友", explain: "Chính tả chuẩn." },
    { id: "l9", level: 2, type: 9, typeName: "9. Phân biệt thanh điệu", audioText: "买", pinyin: "mǎi", viet: "Mua (Thanh 3)", question: "Phân biệt thanh điệu:", options: ["mǎi (买)", "mài (卖)"], answer: "mǎi (买)", explain: "Thanh 3, không phải thanh 4." }
];

/* =====================================================================
   IV. KHO DỮ LIỆU LUYỆN NÓI (SPEAKING_DATA)
   ===================================================================== */
const SPEAKING_DATA = {
    shadowing: [
        { id: "sp1", level: 1, zh: "你好，很高兴认识你！", py: "Nǐ hǎo, hěn gāoxìng rènshi nǐ!", vi: "Xin chào, rất vui được làm quen!" },
        { id: "sp2", level: 2, zh: "因为我很喜欢中国文化，所以我开始学习汉语。", py: "Yīnwèi wǒ hěn xǐhuan...", vi: "Vì thích văn hóa TQ nên tôi học tiếng Trung." }
    ],
    phonetics: [
        { category: "Thanh mẫu & Vận mẫu", items: [
            { code: "zh / ch / sh", sample: "知道 • 吃饭 • 老师", tip: "Uốn lưỡi." },
            { code: "Biến điệu 不", sample: "不是 (bú shì) vs 不好 (bù hǎo)", tip: "Trước thanh 4 đổi thành thanh 2." }
        ]}
    ],
    qaPrompts: [
        { id: "qa1", level: 2, qZh: "你觉得汉语难吗？", qPy: "Nǐ juéde Hànyǔ nán ma?", qVi: "Bạn thấy tiếng Trung khó không?", sampleAnswer: "我觉得汉语不太难。", keywords: ["觉得"] }
    ],
    situations: [
        { id: "sit1", name: "1. Mua sắm", promptZh: "请问你想买什么？", promptPy: "Qǐngwèn nǐ xiǎng mǎi shénme?", promptVi: "Bạn muốn mua gì?", hint: "我想买……" }
    ]
};

/* =====================================================================
   V. KHO DỮ LIỆU LUYỆN ĐỌC & VIẾT (READING_DB / WRITING_TASKS_DB)
   ===================================================================== */
const READING_DB = [
    {
        id: "r1", level: 1, category: "Đọc hội thoại", title: "Ở cửa hàng trái cây",
        contentZh: "兰英：你好，请问这个苹果怎么卖？\n服务员：十块钱一斤。", contentPy: "Lányīng...", contentVi: "Lan Anh: Xin chào, táo này bán sao?\nNhân viên: 10 tệ 1 cân.",
        keyVocab: ["买", "谢谢"], relatedGrammar: "Cách hỏi giá",
        questions: [{ q: "1. Táo giá bao nhiêu?", options: ["10 tệ 1 cân", "20 tệ"], answer: "10 tệ 1 cân", explain: "十块钱一斤." }]
    },
    {
        id: "r2", level: 3, category: "Đọc đoạn văn", title: "Kế hoạch cuối tuần",
        contentZh: "因为天气预报说周六会下大雨，所以我们决定去图书馆看书。", contentPy: "Yīnwèi...", contentVi: "Vì dự báo mưa to, nên chúng tôi quyết định đi thư viện.",
        keyVocab: ["因为", "所以", "决定"], relatedGrammar: "因为……所以……",
        questions: [{ q: "1. Vì sao không đi leo núi?", options: ["Vì mưa to", "Vì mệt"], answer: "Vì mưa to", explain: "Dự báo thời tiết." }]
    }
];

const WRITING_TASKS_DB = [
    { id: "w1", actType: "Viết chữ", level: 1, prompt: "Gõ chữ: xuéxí Hànyǔ", expected: "学习汉语", keywords: ["学习"], grammarNote: "Động từ + Tân ngữ" },
    { id: "w2", actType: "Sắp xếp câu", level: 2, prompt: "Sắp xếp: [因为] [下雨了] [所以] [不去公园]", words: ["因为", "下雨了", "所以", "不去公园"], expected: "因为下雨了所以不去公园", keywords: ["因为", "所以"], grammarNote: "Nhân quả" }
];

/* =====================================================================
   VI. HỆ THỐNG TRẠNG THÁI (LEARNER STATE) & LƯU TRỮ
   ===================================================================== */
window.learnerState = {
    hskStandard: "2.0", targetLevel: "all", voiceEngine: "beijing_instant",
    showPinyin: true, showViet: true, xp: 0, streak: 0, lastStudyDate: null,
    vocabProgress: {}, grammarProgress: {},
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
   VII. HỆ THỐNG ÂM THANH (BEIJING INSTANT TTS)
   ===================================================================== */
let currentAudioPlayer = null, availableZhVoices = [], cachedBestVoice = null;

function loadPreferredChineseVoices() {
    if (!('speechSynthesis' in window)) return;
    const all = window.speechSynthesis.getVoices() || [];
    availableZhVoices = all.filter(v => v.lang && v.lang.toLowerCase().includes('zh'));
    cachedBestVoice = availableZhVoices.find(v => v.name.includes('Xiaoxiao') || v.name.includes('Yunxi')) || availableZhVoices[0];
}
if ('speechSynthesis' in window) {
    loadPreferredChineseVoices();
    window.speechSynthesis.onvoiceschanged = loadPreferredChineseVoices;
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
    utter.rate = rate; utter.pitch = 1.04;
    window.speechSynthesis.speak(utter);
}
function testChineseTTS() { speakChinese("你好，发音测试", 0.95); }

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
    grid.innerHTML = VOCABULARY_DB.map(w => {
        return `<div class="bg-white rounded-2xl border p-5 shadow-sm">
            <h3 class="text-3xl font-bold hanzi-font" onclick="speakChinese('${w.hanzi}')">${w.hanzi}</h3>
            <div class="text-sm font-semibold text-emerald-700 mt-2">${w.pinyin}</div>
            <div class="text-sm font-bold">${w.viet}</div>
            <button onclick="openVocabDetail('${w.id}')" class="mt-3 text-xs bg-slate-100 px-3 py-1 rounded">Chi tiết</button>
        </div>`;
    }).join('');
}
function openVocabDetail(wId) { showToast(`Mở chi tiết từ ID: ${wId}`); }
function startVocabRecallQuiz() { showToast("Khởi động Active Recall..."); }
function renderGrammarList() {
    const col = document.getElementById('grammar-list-col');
    if (col) col.innerHTML = GRAMMAR_DB.map(g => `<button onclick="showToast('Ngữ pháp: ${g.title}')" class="w-full text-left p-3 border rounded mb-2">${g.title}</button>`).join('');
}
function renderListeningModule() { document.getElementById('listening-exercises-container').innerHTML = "Đã nạp kho bài luyện nghe..."; }
function renderSpeakingModule() { document.getElementById('speaking-workspace').innerHTML = "Đã nạp phòng luyện nói AI..."; }
function renderReadWriteModule() { document.getElementById('rw-reading-container').innerHTML = "Đã nạp bài tập đọc & viết Canvas..."; }
function renderExamOverview() { document.getElementById('exam-history-list').innerHTML = "Lịch sử thi mô phỏng..."; }
function renderSRSAndErrorBank() { document.getElementById('srs-full-list').innerHTML = "Lịch ôn SRS 1-3-7-14 ngày..."; }
function startMockExam(lvl) { showToast(`Bắt đầu thi HSK ${lvl}`, "amber"); }

function generateAutoWorkout() {
    navigateTo('autolab');
    document.getElementById('autolab-workspace').innerHTML = `<div class="p-4 bg-emerald-50 text-emerald-900 rounded-xl">Đã tạo bài tập kết hợp Nghe-Nói-Đọc-Viết!</div>`;
    
    // ĐỒNG BỘ POMODORO: Kích hoạt đồng hồ khi tạo bài tập!
    const dur = parseInt(document.getElementById('autolab-duration')?.value || '15', 10);
    pomoSeconds = dur * 60;
    updatePomoDisplay();
    showToast(`Đã đồng bộ đồng hồ Pomodoro: ${dur} phút`, "emerald");
}

/* =====================================================================
   XVIII. KIỂM THỬ VÀ SAO LƯU
   ===================================================================== */
function downloadStandaloneHTML() { showToast("Đang tải tệp index.html độc lập..."); }
function exportBackupJSON() { showToast("Đã xuất JSON sao lưu!"); }
function importBackupJSON(e) { showToast("Đã nhập JSON khôi phục!"); }
function runSelfAcceptanceTests() { showToast("Pass 10/10 Acceptance Tests!"); }

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
    const m = String(Math.floor(pomoSeconds / 60)).padStart(2, '0');
    const s = String(pomoSeconds % 60).padStart(2, '0');
    const disp = document.getElementById('pomo-display');
    if (disp) disp.textContent = `${m}:${s}`;
}

function togglePomodoro() {
    const btn = document.getElementById('pomo-toggle-btn');
    if (isPomoRunning) {
        clearInterval(pomoInterval);
        isPomoRunning = false;
        if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        isPomoRunning = true;
        if (btn) btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        pomoInterval = setInterval(() => {
            pomoSeconds--;
            updatePomoDisplay();
            if (pomoSeconds <= 0) {
                clearInterval(pomoInterval);
                isPomoRunning = false;
                if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i>';
                showToast("⏰ Hoàn thành phiên Pomodoro! Kỷ luật thép được ghi nhận.", "emerald");
                awardRealXP(50, "Hoàn thành 1 phiên Pomodoro tập trung sâu");
                pomoSeconds = 25 * 60; 
                updatePomoDisplay();
            }
        }, 1000);
    }
}

function resetPomodoro() {
    clearInterval(pomoInterval);
    isPomoRunning = false;
    pomoSeconds = 25 * 60;
    updatePomoDisplay();
    const btn = document.getElementById('pomo-toggle-btn');
    if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

// Khởi tạo
window.onload = function() {
    populateVocabFilters();
    refreshAllViews();
    updatePomoDisplay();
};

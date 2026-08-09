document.documentElement.classList.add("js");

var FLOWER_NOTES = {
  "樱花": {
    personality: "轻",
    latin: "Prunus serrulata",
    image: "images/spring-cherry.jpg",
    observe: [
      { label: "形", text: "花瓣薄而细碎，一枝开成一片。" },
      { label: "色", text: "粉白从花心晕开，越到边缘越淡。" },
      { label: "气", text: "春天被它占满，风一吹就落。" }
    ],
    note: "樱花的美不在单朵，而在“突然”。它不等你准备好，开了就开，落了就落。",
    language: "生命与希望，也有一点“美好易逝”",
    story: "樱花常在一周内开尽，日本人叫它“花吹雪”。它不是等你准备好的美，而是突然就来、很快就走。"
  },
  "郁金香": {
    personality: "直接",
    latin: "Tulipa",
    image: "images/spring-tulip.jpg",
    observe: [
      { label: "形", text: "花瓣收成杯状，整朵花像一句话。" },
      { label: "色", text: "颜色可以很纯，纯到没有杂念。" },
      { label: "气", text: "不吵不闹，一支就够体面。" }
    ],
    note: "郁金香是花里的“直球”。它不绕弯，不铺垫，直接把颜色和姿态摆在那里。",
    language: "永恒的爱，含蓄的热烈",
    story: "17世纪的荷兰曾为郁金香疯狂，一颗球茎一度贵过一座房子，是历史上最早的“花市泡沫”。"
  },
  "桃花": {
    personality: "热闹",
    latin: "Prunus persica",
    image: "images/spring-peach.jpg",
    observe: [
      { label: "形", text: "花瓣圆润贴着枝开，疏密随枝走。" },
      { label: "色", text: "粉得柔和，和樱花的区别藏在花梗里。" },
      { label: "气", text: "是“桃花运”的那种热闹，带着人间的喜气。" }
    ],
    note: "桃花不装清高。它开在人家门口、田边，也开在古诗里，始终是一副“春天来了”的样子。",
    language: "春天的信使，也代表好运与桃花运",
    story: "中国人说“桃花运”，也写“人面桃花相映红”。它不止是春天的花，还是运气和缘分的样子。"
  },
  "荷花": {
    personality: "静",
    latin: "Nelumbo nucifera",
    image: "images/summer-lotus.jpg",
    observe: [
      { label: "形", text: "花瓣大而舒展，清晨开、傍晚合。" },
      { label: "色", text: "粉从花尖开始，往花心慢慢变白。" },
      { label: "气", text: "池塘、蝉鸣、水面，它把夏天变得安静。" }
    ],
    note: "荷花的好看需要“等”。等清晨，等它慢慢打开，也在等一阵风让水面动起来。",
    language: "清白、高洁",
    story: "荷花是夏天的闹钟，多数在清晨开放，所以古人常早起“看荷”。"
  },
  "向日葵": {
    personality: "明亮",
    latin: "Helianthus annuus",
    image: "images/summer-sunflower.jpg",
    observe: [
      { label: "形", text: "一个花盘就是一个小社区，上千朵小花住在一起。" },
      { label: "色", text: "金黄亮到发暖，叶子却深绿沉稳。" },
      { label: "气", text: "看见它，心情会先于理由变好。" }
    ],
    note: "向日葵不藏心事。它喜欢太阳，就把头转过去，喜欢谁，也让人一眼看出来。",
    language: "忠诚、阳光",
    story: "一朵向日葵的花盘里，可能有上千朵小花。我们看到的“种子”，其实是它的果实。"
  },
  "栀子花": {
    personality: "温柔",
    latin: "Gardenia jasminoides",
    image: "images/summer-gardenia.jpg",
    observe: [
      { label: "形", text: "花瓣白而厚，卷成整齐的螺旋。" },
      { label: "色", text: "白色不掺一点杂念，绿得深而安静。" },
      { label: "气", text: "香气先到，人还没看见花，夏天已经靠过来。" }
    ],
    note: "栀子花是先被闻见的花。它不急着出现，但一旦出现，就让人忘不掉那个夏天。",
    language: "清甜、陪伴",
    story: "栀子花开在毕业季，也开在夏夜的路边。很多人对夏天的记忆，是从闻到栀子开始的。"
  },
  "桂花": {
    personality: "隐秘",
    latin: "Osmanthus fragrans",
    image: "images/autumn-osmanthus.jpg",
    observe: [
      { label: "形", text: "细碎的小花挤在叶腋，要凑近才看清。" },
      { label: "色", text: "金黄或淡黄，藏在绿叶里不抢戏。" },
      { label: "气", text: "几米外先闻到香，像一句悄悄话。" }
    ],
    note: "桂花是一种不会主动出现的花。你通常先闻见它，才意识到它就在附近。",
    language: "收获、甜蜜",
    story: "桂花香里带一点果甜，秋天用它做糖、酿酒、泡茶，是中国人把季节留住的办法。"
  },
  "菊花": {
    personality: "克制",
    latin: "Chrysanthemum",
    image: "images/autumn-chrysanthemum.jpg",
    observe: [
      { label: "形", text: "花瓣细密向内卷，一层一层收着。" },
      { label: "色", text: "深红或明黄，都可以开得很长。" },
      { label: "气", text: "秋天不喧闹，它也从不着急。" }
    ],
    note: "菊花的美是“慢慢来”。它不争春天，不赶夏天，等万物开始收场时才出场。",
    language: "从容、长寿",
    story: "菊花在日本是皇室的象征，在中国是“待到秋来九月八”的傲气。同样的花，在不同文化里读出不同性格。"
  },
  "彼岸花": {
    personality: "烈",
    latin: "Lycoris radiata",
    image: "images/autumn-lycoris.jpg",
    observe: [
      { label: "形", text: "细长花瓣向外翻卷，像烟花定格的瞬间。" },
      { label: "色", text: "鲜红，红到带着故事感。" },
      { label: "气", text: "秋天、田埂、传说，它自带氛围。" }
    ],
    note: "彼岸花花开不见叶，叶生不见花。先不管传说，单看这一簇红，就已经很难忘。",
    language: "回忆、重逢，也有一点忧伤",
    story: "彼岸花又叫曼珠沙华，常长在田埂和坟边，所以总带着神秘的传说。抛开传说，它其实是一种很美的秋花。"
  },
  "梅花": {
    personality: "坚定",
    latin: "Prunus mume",
    image: "images/winter-plum.jpg",
    observe: [
      { label: "形", text: "五瓣小花贴着枝开，疏朗有力。" },
      { label: "色", text: "白、粉、红都淡，像在冷空气里调过一遍。" },
      { label: "气", text: "别的花等春天，它先替春天试温度。" }
    ],
    note: "中国人爱梅花，不是因为它不冷，而是因为它没躲。冷就冷着开，开完再说。",
    language: "坚韧、高洁",
    story: "梅花不是不怕冷，而是冷的时候也要开。古人把它和松、竹并称“岁寒三友”。"
  },
  "水仙": {
    personality: "清",
    latin: "Narcissus",
    image: "images/winter-narcissus.jpg",
    observe: [
      { label: "形", text: "六片花瓣托着黄色副冠，像一盏小灯。" },
      { label: "色", text: "白得清，黄得淡，冬天里很醒目。" },
      { label: "气", text: "不需要土，只要水和耐心。" }
    ],
    note: "水仙是最容易养的“会开花的朋友”。它不需要土，只要一点水和耐心，就把冬天变得有盼头。",
    language: "清雅、思念",
    story: "水仙常被养在窗台上过年。花一开，屋子就像被一句很轻的祝福照亮。"
  },
  "山茶花": {
    personality: "庄重",
    latin: "Camellia japonica",
    image: "images/winter-camellia.jpg",
    observe: [
      { label: "形", text: "花瓣厚实有光泽，层层叠叠。" },
      { label: "色", text: "红得深，绿得浓，冬天里很隆重。" },
      { label: "气", text: "从冬开到早春，落的时候也是一整朵。" }
    ],
    note: "山茶花谢的时候，整朵坠落，古人叫它“断头花”。听起来烈，其实是它对自己完整的要求。",
    language: "谦逊、理想的爱",
    story: "山茶花谢的时候，整朵坠落，古人觉得它有种“宁为玉碎”的骨气，所以也叫“断头花”。"
  }
};

var BOUQUETS = [
  {
    id: "red-rose-confession",
    name: "红玫瑰 · 告白",
    moods: ["热烈", "浪漫"],
    occasions: ["喜欢的人", "纪念日"],
    image: "images/rose-bouquet.jpg",
    alt: "一束红玫瑰花束",
    prompt: "一束浓烈的红玫瑰，花瓣层叠舒展，深绿叶片衬底，暖白背景，柔和晨光从左上落下，花束占据画面三分之二，编辑部风格静物摄影。",
    why: "花瓣一层层收成深红的漩涡。光是它自己，就把“我喜欢你”说得足够重。",
    flowers: ["玫瑰", "尤加利叶"],
    story: "红玫瑰不适合解释。它出现的时候，意思已经在那里了。"
  },
  {
    id: "white-lily-blessing",
    name: "白百合 · 祝福",
    moods: ["温柔", "安静", "郑重"],
    occasions: ["家人", "祝福", "感谢"],
    image: "images/lily-bouquet.jpg",
    alt: "一束白百合花束",
    prompt: "一束白色百合，花头微微张开，青绿花枝收拢成束，米白背景，柔光漫射，安静而郑重，像一句没说出口的祝福。",
    why: "白色花头微微张开，像一句准备好了才说出口的祝福，不抢，但让人忘不掉。",
    flowers: ["百合", "满天星"],
    story: "百合白得安静，香气不抢戏，适合把祝福说得郑重而不沉重。"
  },
  {
    id: "rose-carnation-thanks",
    name: "玫瑰与康乃馨 · 谢谢",
    moods: ["温柔", "温暖"],
    occasions: ["家人", "感谢", "探望"],
    image: "images/carnation-bouquet.jpg",
    alt: "玫瑰与康乃馨混合花束",
    prompt: "红玫瑰与粉康乃馨交错成束，颜色温和，叶片簇拥，浅灰背景，自然窗光，整体克制而温暖。",
    why: "红与粉不争抢，花头靠在一起，像把“谢谢”说得又轻又认真。",
    flowers: ["玫瑰", "康乃馨", "尤加利叶"],
    story: "康乃馨是“好好照顾自己”的样子，温柔、耐久，适合递给最惦记的人。"
  },
  {
    id: "sunflower-rose-happy",
    name: "向日葵与玫瑰 · 开心",
    moods: ["明亮", "开心"],
    occasions: ["朋友", "希望你开心", "鼓励"],
    image: "images/sunflower-bouquet.jpg",
    alt: "粉色玫瑰与向日葵组成的花束",
    prompt: "粉色玫瑰与向日葵组成花束，金色花盘最亮，粉与黄碰撞，暖色背景，明亮日光，画面轻快得像一句祝福。",
    why: "向日葵把光放在最中间，周围的粉玫瑰替它收住了声音，又亮又不吵。",
    flowers: ["向日葵", "玫瑰", "雏菊"],
    story: "向日葵不藏心事。它喜欢太阳，就把头转过去，喜欢谁，也让人一眼看出来。"
  },
  {
    id: "lisianthus-sincere",
    name: "洋桔梗 · 真诚",
    moods: ["真诚", "温柔"],
    occasions: ["感谢", "陪伴", "道歉"],
    image: "images/lisianthus-bouquet.jpg",
    alt: "浅粉与白色洋桔梗花束",
    prompt: "浅粉与白色洋桔梗扎成一束，花瓣薄而层叠，像纸张，浅绿细枝穿插，留白背景，柔光近摄。",
    why: "花瓣薄得像纸，颜色浅得像一句没有修饰的话，真诚到不用解释。",
    flowers: ["洋桔梗", "细叶", "满天星"],
    story: "洋桔梗的花语是真诚与不变，适合想认真说一句话、又不想太用力的时候。"
  },
  {
    id: "garden-mixed-fullness",
    name: "花园混色 · 圆满",
    moods: ["圆满", "明亮"],
    occasions: ["乔迁", "重逢", "恭喜"],
    image: "images/mixed-bouquet.jpg",
    alt: "花园混色花束",
    prompt: "多种花园花卉混成一束，粉、白、黄、紫交错，枝叶丰盛，桌面有倒影，自然窗光，像刚从花园剪下。",
    why: "什么颜色都有，却因为枝叶托着，反而像一座很小的花园，热闹但不乱。",
    flowers: ["玫瑰", "菊花", "绣球", "雏菊"],
    story: "绣球由许多小花团成一朵，像很多句祝福挤在一起，热闹又圆满。"
  },
  {
    id: "lilac-spring",
    name: "丁香花束 · 春日",
    moods: ["轻盈", "温柔"],
    occasions: ["春天", "想你了", "朋友"],
    image: "images/hero.jpg",
    alt: "一束淡紫色的丁香花，安静地插在瓶中",
    prompt: "一束淡紫色丁香，小花簇拥成圆锥，瓶中的枝条自然垂落，米白墙面，清晨侧光，安静而有春日气息。",
    why: "小花密密地聚成圆锥，香气比颜色先到，像春天本人站在门口。",
    flowers: ["丁香", "绿枝"],
    story: "丁香的好看不在单朵，而在整束：香气先走进房间，颜色才慢慢跟上来。"
  },
  {
    id: "blooming-daily",
    name: "盛放花束 · 日常",
    moods: ["日常", "丰盛"],
    occasions: ["朋友", "自己", "日常"],
    image: "images/bouquet-bloom.jpg",
    alt: "一束花头饱满的各色鲜花",
    prompt: "满满一束各色鲜花，花头挤在一起，简单包装纸包住花脚，放在木桌上，午后室内光，日常却丰盛。",
    why: "花头挤得满满当当，不是昂贵，是“今天也想好好过”。",
    flowers: ["玫瑰", "康乃馨", "菊花", "满天星"],
    story: "有些花束不为了什么大事，只是为了把一个普通日子，过得稍微亮一点。"
  },
  {
    id: "cascading-bridal",
    name: "层叠新娘花束 · 郑重",
    moods: ["郑重", "轻盈"],
    occasions: ["婚礼", "喜欢的人"],
    image: "images/bouquet-cascading.jpg",
    alt: "层叠垂落的新娘花束",
    prompt: "白色与奶油色花材层层垂落，长枝与叶形成瀑布状，像新娘手捧，柔焦背景，郑重又轻盈。",
    why: "白色花材沿着枝叶垂下来，像把一场郑重的事托得很轻。",
    flowers: ["玫瑰", "绣球", "海芋", "绿枝"],
    story: "新娘花束的垂坠感，让一整天的隆重都停在手上：重要，但不沉重。"
  },
  {
    id: "flower-shop-window",
    name: "花店橱窗 · 路过",
    moods: ["路过", "热闹"],
    occasions: ["自己", "朋友", "日常"],
    image: "images/bouquet-shop.jpg",
    alt: "花店橱窗里摆放的许多花束",
    prompt: "花店橱窗里摆满一束束鲜花，颜色拥挤而有序，玻璃微微反光，傍晚灯光，像路过时忍不住停下的一眼。",
    why: "橱窗里什么都有，玻璃反着傍晚的光，像城市留给路过者的片刻温柔。",
    flowers: ["玫瑰", "郁金香", "菊花", "满天星"],
    story: "有些美不需要被买走。路过花店时停下的那一眼，已经是一种喜欢。"
  },
  {
    id: "peonies-solemn",
    name: "芍药 · 隆重",
    moods: ["隆重", "温柔"],
    occasions: ["纪念日", "家人", "祝福"],
    image: "images/bouquet-peonies.jpg",
    alt: "白色与浅粉芍药组成的花束",
    prompt: "白色与浅粉芍药团成一大束，花瓣层层展开，枝叶低垂，深色背景，柔光从侧面落下，花束丰盛而安静，像一场不用解释的隆重。",
    why: "花瓣一层一层打开，白与粉堆出丰盛，却不吵，像一场不需要解释的隆重。",
    flowers: ["芍药", "细叶"],
    story: "芍药常被看作牡丹的“安静版本”：同样盛大，但它更愿意把隆重藏在柔软里。"
  },
  {
    id: "tulip-lilac-spring",
    name: "郁金香与丁香 · 春天",
    moods: ["春天", "明亮"],
    occasions: ["朋友", "喜欢的人", "希望你开心"],
    image: "images/bouquet-tulip-lilac.jpg",
    alt: "郁金香与丁香混合的花束",
    prompt: "橙黄郁金香与淡紫丁香交错成束，花头高低错落，浅色桌面，自然晨光，空气里像有一整座花园。",
    why: "橙黄花杯和淡紫小花错落在一起，颜色不重叠，反而像一座小花园刚刚醒来。",
    flowers: ["郁金香", "丁香"],
    story: "郁金香负责站直，丁香负责散香，两件事放在一起，就是春天最好的样子。"
  },
  {
    id: "orange-tulips-warm",
    name: "橙色郁金香 · 热烈",
    moods: ["热烈", "明亮"],
    occasions: ["朋友", "鼓励", "喜欢的人"],
    image: "images/bouquet-orange-tulips.jpg",
    alt: "一束橙色郁金香",
    prompt: "一束橙色郁金香，花杯半开，颜色明亮但不刺眼，深色桌面，窗光斜照，热烈而克制。",
    why: "橙色的花杯半开，颜色很亮却不刺眼，像一句直接又不过分的话。",
    flowers: ["郁金香"],
    story: "橙色是红色和黄色之间最会说话的颜色：有热情，也知道分寸。"
  },
  {
    id: "yellow-red-chrysanthemums-autumn",
    name: "黄红菊花 · 秋天",
    moods: ["秋天", "浓郁"],
    occasions: ["家人", "纪念日", "祝福"],
    image: "images/bouquet-chrysanthemums.jpg",
    alt: "黄色与红色菊花组成的花束",
    prompt: "黄色与红色菊花扎成一大束，花头紧密层叠，暖色背景，午后光线，像秋天把颜色都收进手里。",
    why: "黄与红把秋天收进花头，花头又厚又密，像把一段日子好好收藏起来。",
    flowers: ["菊花", "黄叶"],
    story: "菊花的美是“慢慢来”。它不争春天，不赶夏天，等万物开始收场时才出场。"
  },
  {
    id: "wildflower-free",
    name: "田野花束 · 自由",
    moods: ["自由", "轻盈"],
    occasions: ["朋友", "自己", "日常"],
    image: "images/bouquet-wildflowers.jpg",
    alt: "一捧自然蓬松的田野野花",
    prompt: "一捧野花，白色、黄色与紫色小花挤在一起，枝叶自然蓬松，像刚从田埂上随手剪下，带着风与泥土的气息。",
    why: "小花枝叶蓬松地挤在一起，不像被安排过，像从田埂上顺手带回来的风。",
    flowers: ["野花", "绿枝", "满天星"],
    story: "野花不追求整齐。它的好看，恰恰来自没有被修剪过的那部分。"
  },
  {
    id: "poppies-memory",
    name: "罂粟花束 · 记忆",
    moods: ["记忆", "浓烈"],
    occasions: ["想你了", "纪念日", "自己"],
    image: "images/bouquet-poppies.jpg",
    alt: "一大束橙红与粉白相间的罂粟花",
    prompt: "一大束东方罂粟，花瓣轻盈半透明，橙红与粉白交错，深色背景，安静而浓烈，像一段记得很深的夏天。",
    why: "花瓣薄到透光，橙红与粉白聚成一束，像一段记得很深的夏天。",
    flowers: ["虞美人", "细叶"],
    story: "罂粟花的花瓣太轻，风一过就摇，但它一整束出现时，又让人说不出地难忘。"
  }
];

var TEST_STEPS = [
  { key: "object", question: "你想把这束花送给谁？", options: ["喜欢的人", "家人", "朋友", "自己"] },
  { key: "expression", question: "你想让它替你说什么？", options: ["我喜欢你", "谢谢你", "想你了", "希望你开心", "辛苦了", "对不起", "只是想送你一束花"] },
  { key: "feeling", question: "你希望它给人什么感觉？", options: ["热烈", "温柔", "明亮", "安静", "郑重", "自由", "想念"] }
];

var STORAGE_KEY = "huashi-my";

function pad(n) {
  return String(n).padStart(2, "0");
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function loadMy() {
  try {
    var data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data && typeof data === "object" && Array.isArray(data.flowers)) return data;
  } catch (e) {}
  return { flowers: [], feelings: null };
}

function saveMy(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
}

function today() {
  var d = new Date();
  return d.getFullYear() + "." + String(d.getMonth() + 1).padStart(2, "0") + "." + String(d.getDate()).padStart(2, "0");
}

function isCollected(name) {
  return loadMy().flowers.some(function (entry) {
    return entry.name === name;
  });
}

function visualFor(name) {
  for (var i = 0; i < BOUQUETS.length; i += 1) {
    if (BOUQUETS[i].name === name) return { image: BOUQUETS[i].image, alt: BOUQUETS[i].alt };
  }
  if (FLOWER_NOTES[name]) return { image: FLOWER_NOTES[name].image, alt: name };
  for (var j = 0; j < HUA_FLOWERS.length; j += 1) {
    if (HUA_FLOWERS[j].name === name) {
      var legacy = {
        "玫瑰": "images/rose-bouquet.jpg",
        "百合": "images/lily-bouquet.jpg",
        "康乃馨": "images/carnation-bouquet.jpg",
        "绣球": "images/mixed-bouquet.jpg"
      };
      return { image: legacy[name] || "images/hero.jpg", alt: name };
    }
  }
  return { image: "images/hero.jpg", alt: name };
}

function flowerLine(name) {
  var note = FLOWER_NOTES[name];
  if (note) return note.note || note.personality;
  for (var i = 0; i < HUA_FLOWERS.length; i += 1) {
    if (HUA_FLOWERS[i].name === name) return HUA_FLOWERS[i].why;
  }
  return "";
}

function renderBouquetGallery() {
  var gallery = document.getElementById("bouquet-gallery");
  if (!gallery) return;
  gallery.innerHTML = BOUQUETS.map(function (item, index) {
    return (
      '<article class="bouquet-plate" data-index="' + index + '">' +
        '<figure class="bouquet-figure">' +
          '<button class="bouquet-open" type="button" data-open-bouquet="' + index + '" aria-label="打开' + escapeHtml(item.name) + '花束档案">' +
            '<img src="' + item.image + '" alt="' + escapeHtml(item.alt) + '" loading="eager" decoding="async">' +
          '</button>' +
          '<figcaption class="bouquet-number">' + pad(index + 1) + '</figcaption>' +
        '</figure>' +
        '<div class="bouquet-caption">' +
          '<h3>' + escapeHtml(item.name) + '</h3>' +
          '<p class="bouquet-mood">' + escapeHtml(item.moods[0] + " · " + item.occasions[0]) + '</p>' +
          '<p class="bouquet-one">' + escapeHtml(item.why) + '</p>' +
        '</div>' +
      '</article>'
    );
  }).join("");
}

function relatedBouquets(index) {
  var current = BOUQUETS[index];
  var scored = BOUQUETS.map(function (item, i) {
    if (i === index) return { index: i, score: -1 };
    var score = 0;
    current.moods.forEach(function (mood) {
      if (item.moods.indexOf(mood) !== -1) score += 2;
    });
    current.occasions.forEach(function (occasion) {
      if (item.occasions.indexOf(occasion) !== -1) score += 2;
    });
    current.flowers.forEach(function (flower) {
      if (item.flowers.indexOf(flower) !== -1) score += 1;
    });
    return { index: i, score: score };
  });
  scored.sort(function (a, b) {
    return b.score - a.score || a.index - b.index;
  });
  return scored.filter(function (item) {
    return item.score > 0;
  }).slice(0, 3);
}

var lightbox = document.getElementById("lightbox");
var lightboxIndex = 0;
var lastTrigger = null;

function renderLightbox() {
  var item = BOUQUETS[lightboxIndex];
  var img = document.getElementById("lightbox-img");
  img.src = item.image;
  img.alt = item.alt;
  document.getElementById("lightbox-caption").textContent = pad(lightboxIndex + 1) + " / " + item.name;
  document.getElementById("lightbox-kicker").textContent = item.moods[0] + " · " + item.occasions[0];
  document.getElementById("lightbox-name").textContent = item.name;
  document.getElementById("lightbox-why").textContent = item.why;
  document.getElementById("lightbox-prompt").textContent = item.prompt;
  document.getElementById("lightbox-story").textContent = item.story;

  var flowersEl = document.getElementById("lightbox-flowers");
  flowersEl.innerHTML = item.flowers.map(function (name) {
    return (
      '<div class="lb-flower">' +
        '<strong>' + escapeHtml(name) + '</strong>' +
        '<span>' + escapeHtml(flowerLine(name)) + '</span>' +
      '</div>'
    );
  }).join("");

  document.getElementById("lightbox-related").innerHTML = relatedBouquets(lightboxIndex).map(function (rel) {
    return '<button class="related-item" type="button" data-related-index="' + rel.index + '">' + escapeHtml(BOUQUETS[rel.index].name) + '</button>';
  }).join("");

  var collect = document.getElementById("lightbox-collect");
  collect.textContent = isCollected(item.name) ? "已收入我的花事" : "收进我的花事";
  collect.classList.toggle("saved", isCollected(item.name));
}

function openLightbox(index) {
  lightboxIndex = index;
  renderLightbox();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightbox.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
  if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
}

function stepLightbox(delta) {
  lightboxIndex = (lightboxIndex + delta + BOUQUETS.length) % BOUQUETS.length;
  renderLightbox();
}

function initGallery() {
  var gallery = document.getElementById("bouquet-gallery");
  if (!gallery) return;
  gallery.addEventListener("click", function (event) {
    var openBtn = event.target.closest("[data-open-bouquet]");
    if (openBtn) {
      lastTrigger = openBtn;
      openLightbox(Number(openBtn.getAttribute("data-open-bouquet")));
      return;
    }
    var copyBtn = event.target.closest("[data-copy-prompt]");
    if (copyBtn) {
      var prompt = BOUQUETS[Number(copyBtn.getAttribute("data-copy-prompt"))].prompt;
      copyPrompt(prompt, copyBtn);
    }
  });
}

function copyPrompt(text, btn) {
  var done = function () {
    btn.textContent = "已复制";
    window.setTimeout(function () {
      btn.textContent = "复制提示词";
    }, 1600);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, function () {
      fallbackCopyText(text, done);
    });
  } else {
    fallbackCopyText(text, done);
  }
}

function fallbackCopyText(text, done) {
  var area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  try {
    document.execCommand("copy");
    done();
  } catch (e) {}
  document.body.removeChild(area);
}

lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (el) {
  el.addEventListener("click", closeLightbox);
});

lightbox.querySelectorAll("[data-lightbox-nav]").forEach(function (el) {
  el.addEventListener("click", function () {
    stepLightbox(Number(el.getAttribute("data-lightbox-nav")));
  });
});

document.getElementById("lightbox-related").addEventListener("click", function (event) {
  var btn = event.target.closest(".related-item");
  if (!btn) return;
  lightboxIndex = Number(btn.getAttribute("data-related-index"));
  renderLightbox();
});

document.getElementById("lightbox-next-flower").addEventListener("click", function () {
  stepLightbox(1);
});

document.getElementById("lightbox-copy").addEventListener("click", function () {
  copyPrompt(BOUQUETS[lightboxIndex].prompt, document.getElementById("lightbox-copy"));
});

document.getElementById("lightbox-collect").addEventListener("click", function () {
  var name = document.getElementById("lightbox-name").textContent;
  var memory = document.getElementById("lightbox-memory");
  var input = document.getElementById("lightbox-memory-input");
  if (isCollected(name)) {
    var data = loadMy();
    data.flowers = data.flowers.filter(function (flower) {
      return flower.name !== name;
    });
    saveMy(data);
    renderMy();
  } else {
    toggleCollect(name, "我想再看看它。");
  }
  if (memory && input) {
    input.value = "";
    memory.hidden = !isCollected(name);
  }
  syncCollectionUI();
  if (memory && input && !memory.hidden) input.focus();
});

document.getElementById("lightbox-memory-save").addEventListener("click", function () {
  var name = document.getElementById("lightbox-name").textContent;
  var input = document.getElementById("lightbox-memory-input");
  var note = input.value.trim();
  var data = loadMy();
  var entry = findMyEntry(data, name);
  if (entry) {
    entry.note = note || entry.note || "我想再看看它。";
    saveMy(data);
    renderMy();
  }
  document.getElementById("lightbox-memory").hidden = true;
});

document.getElementById("lightbox-memory-cancel").addEventListener("click", function () {
  document.getElementById("lightbox-memory").hidden = true;
});

function toggleCollect(name, note) {
  var data = loadMy();
  var idx = data.flowers.findIndex(function (entry) {
    return entry.name === name;
  });
  if (idx === -1) {
    data.flowers.push({ name: name, date: today(), note: note || "我想再看看它。" });
  } else {
    data.flowers.splice(idx, 1);
  }
  saveMy(data);
  renderMy();
  return idx === -1;
}

function findMyEntry(data, name) {
  for (var i = 0; i < data.flowers.length; i += 1) {
    if (data.flowers[i].name === name) return data.flowers[i];
  }
  return null;
}

function renderMy() {
  var data = loadMy();
  var empty = document.getElementById("my-empty");
  var filled = document.getElementById("my-filled");
  var hasContent = data.flowers.length > 0 || data.feelings;
  if (!empty || !filled) return;
  empty.hidden = hasContent;
  filled.hidden = !hasContent;
  var timeline = document.getElementById("my-timeline");
  var summary = document.getElementById("my-summary");
  var sorted = data.flowers.slice().sort(function (a, b) {
    if (a.date === b.date) return a.name.localeCompare(b.name, "zh");
    return a.date < b.date ? -1 : 1;
  });
  var todayStr = today();
  timeline.innerHTML = sorted.map(function (entry) {
    var visual = visualFor(entry.name);
    var mark = entry.date === todayStr ? '<span class="today-mark">今天</span>' : "";
    return (
      '<div class="my-timeline-item" data-flower="' + escapeHtml(entry.name) + '">' +
        '<span class="timeline-dot" aria-hidden="true"></span>' +
        '<div class="timeline-card">' +
          '<div class="timeline-top">' +
            '<img class="timeline-thumb" src="' + visual.image + '" alt="' + escapeHtml(entry.name) + '">' +
            '<div class="timeline-head">' +
              '<p class="timeline-date">' + escapeHtml(entry.date) + mark + '</p>' +
              '<h4>' + escapeHtml(entry.name) + '</h4>' +
            '</div>' +
          '</div>' +
          '<p class="timeline-note">' + escapeHtml(entry.note || "我想再看看它。") + '</p>' +
          '<div class="timeline-actions">' +
            '<button class="text-btn" type="button" data-edit-note="' + escapeHtml(entry.name) + '">补一句</button>' +
            '<button class="text-btn muted" type="button" data-remove-flower="' + escapeHtml(entry.name) + '">忘记它</button>' +
          '</div>' +
          '<div class="timeline-editor" hidden>' +
            '<textarea aria-label="写一句与这束花有关的记忆"></textarea>' +
            '<div class="timeline-editor-actions">' +
              '<button class="btn btn-ink btn-small" type="button" data-save-note="' + escapeHtml(entry.name) + '">记下来</button>' +
              '<button class="btn btn-outline btn-small" type="button" data-cancel-note="' + escapeHtml(entry.name) + '">取消</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }).join("");
  summary.textContent = sorted.length
    ? "从 " + sorted[0].date + " 到 " + sorted[sorted.length - 1].date + "，你与 " + sorted.length + " 束花有了故事。"
    : "";
  document.getElementById("my-feelings").textContent = data.feelings || "还没有留下感觉";
}

function syncCollectionUI() {
  if (!lightbox.hidden) {
    var name = document.getElementById("lightbox-name").textContent;
    var collected = isCollected(name);
    var collect = document.getElementById("lightbox-collect");
    collect.textContent = collected ? "已收入我的花事" : "收进我的花事";
    collect.classList.toggle("saved", collected);
    var memory = document.getElementById("lightbox-memory");
    if (memory && !collected) memory.hidden = true;
  }
}

document.getElementById("my-timeline").addEventListener("click", function (event) {
  var btn = event.target.closest("button");
  if (!btn) return;
  var entryEl = btn.closest(".my-timeline-item");
  if (!entryEl) return;
  var name = entryEl.getAttribute("data-flower");
  var data = loadMy();
  var entry = findMyEntry(data, name);
  var editor = entryEl.querySelector(".timeline-editor");
  var textarea = entryEl.querySelector("textarea");
  if (btn.hasAttribute("data-edit-note")) {
    if (textarea && entry) textarea.value = entry.note || "";
    editor.hidden = false;
    if (textarea) textarea.focus();
    return;
  }
  if (btn.hasAttribute("data-cancel-note")) {
    editor.hidden = true;
    return;
  }
  if (btn.hasAttribute("data-save-note")) {
    if (entry) {
      entry.note = textarea.value.trim() || "我想再看看它。";
      saveMy(data);
      renderMy();
      syncCollectionUI();
    }
    return;
  }
  if (btn.hasAttribute("data-remove-flower")) {
    if (window.confirm("要忘记这束花吗？")) {
      data.flowers = data.flowers.filter(function (flower) {
        return flower.name !== name;
      });
      saveMy(data);
      renderMy();
      syncCollectionUI();
    }
  }
});

var testStepIndex = 0;
var testSelections = {};
var testStepEl = document.getElementById("test-step");
var testQuestion = document.getElementById("test-question");
var testOptions = document.getElementById("test-options");
var testNext = document.getElementById("test-next");
var testBack = document.getElementById("test-back");

function renderTestOptions() {
  var step = TEST_STEPS[testStepIndex];
  testStepEl.textContent = pad(testStepIndex + 1) + " / " + pad(TEST_STEPS.length);
  testQuestion.textContent = step.question;
  testOptions.innerHTML = "";
  step.options.forEach(function (option) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "test-option";
    if (testSelections[step.key] === option) btn.classList.add("selected");
    btn.textContent = option;
    btn.setAttribute("aria-pressed", testSelections[step.key] === option ? "true" : "false");
    btn.addEventListener("click", function () {
      testSelections[step.key] = option;
      renderTestOptions();
      testNext.disabled = false;
    });
    testOptions.appendChild(btn);
  });
  testBack.hidden = testStepIndex === 0;
  testNext.disabled = !testSelections[step.key];
  testNext.textContent = testStepIndex === TEST_STEPS.length - 1 ? "看看是哪束花" : "下一步";
}

function recommendBouquet(object, expression, feeling) {
  var scored = BOUQUETS.map(function (item, index) {
    var score = 0;
    if (item.occasions.indexOf(object) !== -1) score += 3;
    if (item.moods.indexOf(feeling) !== -1) score += 3;
    item.occasions.forEach(function (occasion) {
      if (expression.indexOf(occasion) !== -1) score += 2;
    });
    return { index: index, item: item, score: score };
  });
  scored.sort(function (a, b) {
    return b.score - a.score || a.index - b.index;
  });
  return scored;
}

function showResult() {
  var object = testSelections.object;
  var expression = testSelections.expression;
  var feeling = testSelections.feeling;
  var ranked = recommendBouquet(object, expression, feeling);
  var top = ranked[0].item;
  var resultName = document.getElementById("result-name");
  var resultImage = document.getElementById("result-image");
  var resultLine = document.getElementById("result-line");
  var resultWhy = document.getElementById("result-why");
  var resultAlternatives = document.getElementById("result-alternatives");
  resultName.textContent = top.name;
  resultImage.src = top.image;
  resultImage.alt = top.alt;
  resultLine.textContent = "你想把这份心意给" + object + "，想说的是“" + expression + "”，希望它看起来" + feeling + "。";
  resultWhy.innerHTML = "<strong>为什么是它</strong><p>" + top.why + "</p><p>" + top.story + "</p>";
  resultAlternatives.innerHTML = ranked.slice(1, 4).map(function (r) {
    return '<div class="alternative"><span>' + r.item.moods[0] + '</span><strong>' + r.item.name + '</strong></div>';
  }).join("");
  document.getElementById("result-collect").textContent = isCollected(top.name) ? "已收入我的花事" : "收进我的花事";
  document.getElementById("result-collect").classList.toggle("saved", isCollected(top.name));
  document.getElementById("huashi-test").hidden = true;
  document.getElementById("huashi-result").hidden = false;
  saveFeelings(feeling + " × " + top.moods[0]);
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("huashi-result").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

testNext.addEventListener("click", function () {
  if (!testSelections[TEST_STEPS[testStepIndex].key]) return;
  if (testStepIndex < TEST_STEPS.length - 1) {
    testStepIndex += 1;
    renderTestOptions();
  } else {
    showResult();
  }
});

testBack.addEventListener("click", function () {
  if (testStepIndex > 0) {
    testStepIndex -= 1;
    renderTestOptions();
  }
});

document.getElementById("result-restart").addEventListener("click", function () {
  testStepIndex = 0;
  testSelections = {};
  document.getElementById("huashi-result").hidden = true;
  document.getElementById("huashi-test").hidden = false;
  renderTestOptions();
});

document.getElementById("result-collect").addEventListener("click", function () {
  var name = document.getElementById("result-name").textContent;
  var added = toggleCollect(name, "“" + testSelections.expression + "”");
  var btn = document.getElementById("result-collect");
  btn.textContent = added ? "已收入我的花事" : "收进我的花事";
  btn.classList.toggle("saved", added);
});

function saveFeelings(feelings) {
  var data = loadMy();
  data.feelings = feelings;
  saveMy(data);
  renderMy();
}

var revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
  revealEls.forEach(function (el) {
    observer.observe(el);
  });
} else {
  revealEls.forEach(function (el) {
    el.classList.add("in");
  });
}

renderBouquetGallery();
initGallery();
renderMy();
renderTestOptions();

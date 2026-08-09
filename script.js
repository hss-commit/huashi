document.documentElement.classList.add("js");

var revealEls = document.querySelectorAll(".reveal");
var sectionIds = ["chapter-1", "chapter-2", "shop", "chapter-3"];
var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));

function setActive(id) {
  navLinks.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + id);
  });
}

var storyToggles = document.querySelectorAll(".story-toggle");
storyToggles.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var story = document.getElementById(btn.getAttribute("aria-controls"));
    var open = story.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
    btn.querySelector(".toggle-label").textContent = open ? "收起它的故事" : "展开它的故事";
  });
});

var practiceSteps = [
  "你觉得它为什么好看？",
  "01 看形：注意花瓣之间的空隙。",
  "02 看色：注意颜色不是平均分布的。",
  "03 看整体：单独一朵花并不特别，但很多朵聚在一起时，它开始像一片云。",
  "现在，你已经开始看花了。",
];
var practiceStep = 0;
var practiceStage = document.getElementById("practice-stage");
var practiceProgress = document.getElementById("practice-progress");
var practiceNext = document.getElementById("practice-next");
if (practiceNext) {
  practiceNext.addEventListener("click", function () {
    practiceStep = practiceStep >= practiceSteps.length - 1 ? 0 : practiceStep + 1;
    practiceStage.textContent = practiceSteps[practiceStep];
    practiceProgress.style.width = ((practiceStep + 1) / practiceSteps.length) * 100 + "%";
    if (practiceStep === 0) {
      practiceNext.textContent = "开始看";
    } else if (practiceStep === practiceSteps.length - 1) {
      practiceNext.textContent = "重新看一遍";
    } else {
      practiceNext.textContent = "下一步";
    }
  });
}

var emotionBtns = document.querySelectorAll(".emotion-btn");
emotionBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    emotionBtns.forEach(function (b) {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
    var target = document.getElementById("emotion-" + btn.getAttribute("data-emotion"));
    if (target) {
      document.querySelectorAll(".guide-row").forEach(function (row) {
        row.classList.toggle("active", row === target);
      });
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
    }
  });
});

var filterBtns = document.querySelectorAll(".filter-btn");
var seasons = document.querySelectorAll(".season");
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterBtns.forEach(function (b) {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
    var target = btn.getAttribute("data-season");
    seasons.forEach(function (season) {
      season.classList.toggle("hidden", target !== "all" && season.id !== target);
    });
  });
});

if ("IntersectionObserver" in window) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach(function (el) {
    observer.observe(el);
  });

  var spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );
  sectionIds.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) spy.observe(el);
  });
} else {
  revealEls.forEach(function (el) {
    el.classList.add("in");
  });
}

var entries = document.querySelectorAll(".spread, .banner, .card-row, .duo-card");
var flowers = Array.prototype.slice.call(entries).map(function (entry) {
  var copy = entry.querySelector(".flower-copy, .duo-copy, .banner-copy");
  var nameEl = copy ? copy.querySelector("h3") : null;
  var latinEl = copy ? copy.querySelector(".flower-latin") : null;
  var quoteEl = copy ? copy.querySelector(".flower-verdict") : null;
  var personalityEl = entry.querySelector(".flower-personality");
  var noteEl = entry.querySelector(".flower-note p:last-child");
  var observeEls = entry.querySelectorAll(".flower-observe li");
  var languageEl = copy ? copy.querySelector(".flower-language") : null;
  var storyEl = entry.querySelector(".story-inner p");
  var photos = Array.prototype.slice.call(entry.querySelectorAll(".flower-photo"));
  return {
    name: nameEl ? nameEl.textContent.trim() : "花朵",
    latin: latinEl ? latinEl.textContent.replace(/FLOWER\s+\d+\s*·\s*/, "").trim() : "",
    quote: quoteEl ? quoteEl.textContent.replace(/^最迷人的地方：/, "").trim() : "",
    personality: personalityEl ? personalityEl.textContent.replace("性格 · ", "").trim() : "",
    observe: Array.prototype.map.call(observeEls, function (li) {
      var label = li.querySelector("span");
      var labelText = label ? label.textContent : "";
      return {
        label: labelText,
        text: li.textContent.replace(labelText, "").trim()
      };
    }),
    note: noteEl ? noteEl.textContent.trim() : "",
    language: languageEl ? languageEl.textContent.replace(/\s+/g, " ").trim() : "",
    story: storyEl ? storyEl.textContent.trim() : "",
    images: photos.map(function (photo) {
      var img = photo.querySelector("img");
      var figure = photo.closest(".flower-figure");
      var captionEl = figure ? figure.querySelector("figcaption") : null;
      return {
        src: img ? img.getAttribute("src") : "",
        alt: img ? img.getAttribute("alt") : "",
        caption: captionEl ? captionEl.textContent.trim() : "",
      };
    }),
  };
});

var lightbox = document.getElementById("lightbox");
var lightboxIndex = 0;
var lightboxImageIndex = 0;
var lastTrigger = null;

function renderLightbox() {
  var flower = flowers[lightboxIndex];
  var imageIndex = Math.min(lightboxImageIndex, flower.images.length - 1);
  var image = flower.images[imageIndex] || { src: "", alt: "", caption: "" };
  document.getElementById("lightbox-img").src = image.src;
  document.getElementById("lightbox-img").alt = image.alt;
  document.getElementById("lightbox-caption").textContent = image.caption;
  document.getElementById("lightbox-name").textContent = flower.name;
  var visuals = FLOWER_VISUALS[flower.name] || {};
  document.getElementById("lightbox-latin").textContent = visuals.latin || flower.latin || "";
  document.getElementById("lightbox-quote").textContent = flower.quote ? "「" + flower.quote + "」" : "";
  document.getElementById("lightbox-observe").innerHTML = flower.observe.map(function (item) {
    return "<p><span>" + item.label + "</span>" + item.text + "</p>";
  }).join("");
  document.getElementById("lightbox-personality").textContent = flower.personality || "";
  document.getElementById("lightbox-note").textContent = flower.note || "";
  document.getElementById("lightbox-language").textContent = flower.language || "";
  document.getElementById("lightbox-story").textContent = flower.story || "";
  document.getElementById("lightbox-related").innerHTML = relatedFlowers(lightboxIndex).slice(0, 3).map(function (item) {
    return '<button class="related-item" type="button" data-related-index="' + item.index + '">' + item.name + '</button>';
  }).join("");
  lightboxCollect.textContent = isCollected(flower.name) ? "已收入我的花事" : "收进我的花事";
  lightboxCollect.classList.toggle("saved", isCollected(flower.name));
  lightbox.querySelectorAll(".lightbox-view").forEach(function (btn) {
    btn.classList.toggle("active", Number(btn.getAttribute("data-view")) === imageIndex);
  });
  document.getElementById("lightbox-hint").textContent =
    imageIndex === 1 ? "你刚才没有注意到这里。" : "";
}

function openLightbox(index, imageIndex) {
  lightboxIndex = index;
  lightboxImageIndex = imageIndex;
  renderLightbox();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightbox.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
  if (lastTrigger && lastTrigger.focus) {
    lastTrigger.focus();
  }
}

function stepLightbox(delta) {
  lightboxIndex = (lightboxIndex + delta + flowers.length) % flowers.length;
  lightboxImageIndex = 0;
  renderLightbox();
}

entries.forEach(function (entry, index) {
  var copy = entry.querySelector(".flower-copy, .duo-copy, .banner-copy");
  var name = copy && copy.querySelector("h3") ? copy.querySelector("h3").textContent.trim() : "花朵";
  var photos = entry.querySelectorAll(".flower-photo");
  photos.forEach(function (photo, photoIndex) {
    photo.setAttribute("role", "button");
    photo.setAttribute("tabindex", "0");
    photo.setAttribute("aria-haspopup", "dialog");
    photo.setAttribute("aria-label", "查看" + name + "大图");
    photo.addEventListener("click", function () {
      lastTrigger = photo;
      openLightbox(index, photoIndex);
    });
    photo.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        lastTrigger = photo;
        openLightbox(index, photoIndex);
      }
    });
  });
});

lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (el) {
  el.addEventListener("click", closeLightbox);
});

lightbox.querySelectorAll("[data-lightbox-nav]").forEach(function (el) {
  el.addEventListener("click", function () {
    stepLightbox(Number(el.getAttribute("data-lightbox-nav")));
  });
});

lightbox.querySelectorAll(".lightbox-view").forEach(function (btn) {
  btn.addEventListener("click", function () {
    lightboxImageIndex = Number(btn.getAttribute("data-view"));
    renderLightbox();
  });
});

document.addEventListener("keydown", function (event) {
  if (lightbox.hidden) return;
  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowLeft") {
    stepLightbox(-1);
  } else if (event.key === "ArrowRight") {
    stepLightbox(1);
  }
});

/* Huashi test */
var TEST_STEPS = [
  {
    question: "如果今天想送一朵花，你想给谁？",
    key: "object",
    options: ["喜欢的人", "家人", "朋友", "自己", "无法说出口的人"]
  },
  {
    question: "你其实想说什么？",
    key: "expression",
    options: ["我喜欢你", "谢谢你", "最近辛苦了", "我想你了", "对不起", "希望你开心", "只是想送你一朵花"]
  },
  {
    question: "希望它听起来是什么感觉？",
    key: "feeling",
    options: ["热烈", "温柔", "克制", "明亮", "安静", "浪漫"]
  }
];

var EXPRESSION_MAP = {
  "我喜欢你": "我喜欢你",
  "谢谢你": "谢谢你",
  "最近辛苦了": "辛苦了",
  "我想你了": "想你了",
  "对不起": "对不起",
  "希望你开心": "希望你开心",
  "只是想送你一朵花": "陪伴"
};

var EXPRESSION_SENTENCES = {
  "我喜欢你": "因为你想说的是“我喜欢你”，但不希望它听起来太用力。",
  "谢谢你": "因为你想说的是“谢谢你”，想说得认真又不沉重。",
  "辛苦了": "因为你想说的是“最近辛苦了”，想先让空气软下来。",
  "想你了": "因为你想说的是“我想你了”，又不希望这句话太用力。",
  "对不起": "因为你想说的是“对不起”，想把歉意放轻一点。",
  "希望你开心": "因为你想说的是“希望你开心”，想让颜色替你笑。",
  "陪伴": "因为你想说的是“只是想送你一朵花”，不需要理由。"
};

var FLOWER_VISUALS = {
  "樱花": { latin: "Prunus serrulata", image: "images/spring-cherry.jpg" },
  "郁金香": { latin: "Tulipa", image: "images/spring-tulip.jpg" },
  "桃花": { latin: "Prunus persica", image: "images/spring-peach.jpg" },
  "荷花": { latin: "Nelumbo nucifera", image: "images/summer-lotus.jpg" },
  "向日葵": { latin: "Helianthus annuus", image: "images/summer-sunflower.jpg" },
  "栀子花": { latin: "Gardenia jasminoides", image: "images/summer-gardenia.jpg" },
  "桂花": { latin: "Osmanthus fragrans", image: "images/autumn-osmanthus.jpg" },
  "菊花": { latin: "Chrysanthemum", image: "images/autumn-chrysanthemum.jpg" },
  "彼岸花": { latin: "Lycoris radiata", image: "images/autumn-lycoris.jpg" },
  "梅花": { latin: "Prunus mume", image: "images/winter-plum.jpg" },
  "水仙": { latin: "Narcissus", image: "images/winter-narcissus.jpg" },
  "山茶花": { latin: "Camellia japonica", image: "images/winter-camellia.jpg" },
  "玫瑰": { latin: "Rosa", image: "images/rose-bouquet.jpg" },
  "百合": { latin: "Lilium", image: "images/lily-bouquet.jpg" },
  "康乃馨": { latin: "Dianthus caryophyllus", image: "images/carnation-bouquet.jpg" },
  "绣球": { latin: "Hydrangea", image: "images/mixed-bouquet.jpg" }
};

var huashiTest = document.getElementById("huashi-test");
var huashiResult = document.getElementById("huashi-result");
var testStepEl = document.getElementById("test-step");
var testQuestion = document.getElementById("test-question");
var testOptions = document.getElementById("test-options");
var testNext = document.getElementById("test-next");
var testBack = document.getElementById("test-back");
var resultName = document.getElementById("result-name");
var resultLine = document.getElementById("result-line");
var resultWhy = document.getElementById("result-why");
var resultAlternatives = document.getElementById("result-alternatives");
var resultCollect = document.getElementById("result-collect");
var resultImage = document.getElementById("result-image");
var testStepIndex = 0;
var testSelections = {};

function renderTestOptions() {
  var step = TEST_STEPS[testStepIndex];
  testStepEl.textContent = "0" + (testStepIndex + 1) + " / 03";
  testQuestion.textContent = step.question;
  testOptions.innerHTML = "";
  step.options.forEach(function (option) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "test-option";
    if (testSelections[step.key] === option) {
      btn.classList.add("selected");
    }
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
  testNext.textContent = testStepIndex === TEST_STEPS.length - 1 ? "看看是哪朵花" : "下一步";
}

function recommendFlower(object, expressionKey, feeling) {
  var scored = HUA_FLOWERS.map(function (f) {
    var score = 0;
    if (f.objects.indexOf(object) !== -1) score += 2;
    if (f.expressions.indexOf(expressionKey) !== -1) score += 3;
    if (f.emotions.indexOf(feeling) !== -1) score += 3;
    return { flower: f, score: score };
  });
  scored.sort(function (a, b) {
    return b.score - a.score || a.flower.name.localeCompare(b.flower.name, "zh");
  });
  var top = scored[0];
  var alternatives = scored.slice(1).filter(function (s) {
    return s.score > 0;
  }).slice(0, 3);
  var i = 1;
  while (alternatives.length < 3 && i < scored.length) {
    if (alternatives.indexOf(scored[i]) === -1) alternatives.push(scored[i]);
    i += 1;
  }
  return {
    top: top.flower,
    alternatives: alternatives.map(function (s) {
      return s.flower;
    })
  };
}

function alternativeLabel(flower) {
  if (flower.emotions.indexOf("热烈") !== -1) return "如果你想更热烈";
  if (flower.emotions.indexOf("浪漫") !== -1) return "如果你想更浪漫";
  if (flower.emotions.indexOf("明亮") !== -1) return "如果你想更明亮";
  if (flower.emotions.indexOf("温柔") !== -1) return "如果你想更温柔";
  if (flower.emotions.indexOf("安静") !== -1) return "如果你想更安静";
  if (flower.emotions.indexOf("克制") !== -1) return "如果你想更克制";
  return "另一个选择";
}

function showResult() {
  var object = testSelections.object;
  var expressionKey = EXPRESSION_MAP[testSelections.expression] || testSelections.expression;
  var feeling = testSelections.feeling;
  var rec = recommendFlower(object, expressionKey, feeling);
  resultName.textContent = rec.top.name;
  var visuals = FLOWER_VISUALS[rec.top.name] || {};
  resultImage.src = visuals.image || "";
  resultImage.alt = rec.top.name + "的推荐图";
  resultLine.textContent = "你想表达的是：“" + testSelections.expression + "”，而你希望这份心意：" + feeling + "。";
  var sentence = EXPRESSION_SENTENCES[expressionKey] || "因为你想说的是“" + testSelections.expression + "”。";
  resultWhy.innerHTML = "<strong>为什么是它</strong><p>" + sentence + "</p><p>" + rec.top.why + "</p>";
  resultAlternatives.innerHTML = rec.alternatives.map(function (f) {
    return '<div class="alternative"><span>' + alternativeLabel(f) + '</span><strong>' + f.name + '</strong></div>';
  }).join("");
  resultCollect.textContent = isCollected(rec.top.name) ? "已收入我的花事" : "收进我的花事";
  resultCollect.classList.toggle("saved", isCollected(rec.top.name));
  huashiTest.hidden = true;
  huashiResult.hidden = false;
  saveFeelings(feeling + " × " + rec.top.personality);
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  huashiResult.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
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
  huashiResult.hidden = true;
  huashiTest.hidden = false;
  renderTestOptions();
});

resultCollect.addEventListener("click", function () {
  var added = toggleCollect(resultName.textContent, "“" + testSelections.expression + "”");
  resultCollect.textContent = added ? "已收入我的花事" : "收进我的花事";
  resultCollect.classList.toggle("saved", added);
});

/* My huashi */
var STORAGE_KEY = "huashi-my";

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
    if (data && typeof data === "object" && Array.isArray(data.flowers)) {
      return data;
    }
  } catch (e) {}
  return { flowers: [], feelings: null };
}

function saveMy(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
}

function isCollected(name) {
  return loadMy().flowers.some(function (entry) {
    return entry.name === name;
  });
}

function today() {
  var d = new Date();
  return d.getFullYear() + "." + String(d.getMonth() + 1).padStart(2, "0") + "." + String(d.getDate()).padStart(2, "0");
}

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

function saveFeelings(feelings) {
  var data = loadMy();
  data.feelings = feelings;
  saveMy(data);
  renderMy();
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
    var visual = FLOWER_VISUALS[entry.name] || {};
    var image = visual.image
      ? '<img class="timeline-thumb" src="' + visual.image + '" alt="' + escapeHtml(entry.name) + '">'
      : "";
    var mark = entry.date === todayStr ? '<span class="today-mark">今天</span>' : "";
    return (
      '<div class="my-timeline-item" data-flower="' + escapeHtml(entry.name) + '">' +
        '<span class="timeline-dot" aria-hidden="true"></span>' +
        '<div class="timeline-card">' +
          '<div class="timeline-top">' + image +
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
            '<textarea aria-label="写一句与这朵花有关的记忆"></textarea>' +
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
    ? "从 " + sorted[0].date + " 到 " + sorted[sorted.length - 1].date + "，你与 " + sorted.length + " 朵花有了故事。"
    : "";
  document.getElementById("my-feelings").textContent = data.feelings || "还没有留下感觉";
}

function syncCollectionUI() {
  if (!lightbox.hidden) {
    var name = document.getElementById("lightbox-name").textContent;
    var collected = isCollected(name);
    lightboxCollect.textContent = collected ? "已收入我的花事" : "收进我的花事";
    lightboxCollect.classList.toggle("saved", collected);
    var memory = document.getElementById("lightbox-memory");
    if (memory && !collected) memory.hidden = true;
  }
  if (!huashiResult.hidden) {
    var resultName = document.getElementById("result-name").textContent;
    var resultCollected = isCollected(resultName);
    resultCollect.textContent = resultCollected ? "已收入我的花事" : "收进我的花事";
    resultCollect.classList.toggle("saved", resultCollected);
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
    if (window.confirm("要忘记这朵花吗？")) {
      data.flowers = data.flowers.filter(function (flower) {
        return flower.name !== name;
      });
      saveMy(data);
      renderMy();
      syncCollectionUI();
    }
  }
});

var lightboxCollect = document.getElementById("lightbox-collect");

function flowerByName(name) {
  for (var i = 0; i < HUA_FLOWERS.length; i += 1) {
    if (HUA_FLOWERS[i].name === name) return HUA_FLOWERS[i];
  }
  return null;
}

lightboxCollect.addEventListener("click", function () {
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

function relatedFlowers(index) {
  var current = flowers[index];
  var currentData = null;
  for (var i = 0; i < HUA_FLOWERS.length; i += 1) {
    if (HUA_FLOWERS[i].name === current.name) {
      currentData = HUA_FLOWERS[i];
      break;
    }
  }
  if (!currentData) return [];
  var scored = [];
  HUA_FLOWERS.forEach(function (f) {
    if (f.name === current.name) return;
    var entryIndex = -1;
    for (var j = 0; j < flowers.length; j += 1) {
      if (flowers[j].name === f.name) {
        entryIndex = j;
        break;
      }
    }
    if (entryIndex === -1) return;
    var score = 0;
    f.emotions.forEach(function (emotion) {
      if (currentData.emotions.indexOf(emotion) !== -1) score += 2;
    });
    if (f.personality === currentData.personality) score += 1;
    scored.push({ index: entryIndex, name: f.name, score: score });
  });
  scored.sort(function (a, b) {
    return b.score - a.score;
  });
  return scored;
}

document.getElementById("lightbox-related").addEventListener("click", function (event) {
  var btn = event.target.closest(".related-item");
  if (!btn) return;
  lightboxIndex = Number(btn.getAttribute("data-related-index"));
  lightboxImageIndex = 0;
  renderLightbox();
});

document.getElementById("lightbox-next-flower").addEventListener("click", function () {
  lightboxIndex = (lightboxIndex + 1) % flowers.length;
  lightboxImageIndex = 0;
  renderLightbox();
});

renderMy();
renderTestOptions();

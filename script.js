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
  var languageEl = copy ? copy.querySelector(".flower-language") : null;
  var storyEl = entry.querySelector(".story-inner p");
  var photos = Array.prototype.slice.call(entry.querySelectorAll(".flower-photo"));
  return {
    name: nameEl ? nameEl.textContent.trim() : "花朵",
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
  document.getElementById("lightbox-language").textContent = flower.language;
  document.getElementById("lightbox-story").textContent = flower.story;
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

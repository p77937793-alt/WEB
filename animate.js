// ===== 滑到才淡入 =====
// 自動找出這些元素，加上 reveal（一開始透明），滑進畫面時再加上 show
const targets = document.querySelectorAll(
  '.fact, .content h2, .content p, .content li, .content figure, .content .btn, .card'
);
targets.forEach(function (el, i) {
  el.classList.add('reveal');
  el.style.transitionDelay = (i % 3) * 0.12 + 's';   // 同一排的東西錯開一點點，比較有層次
});

const watcher = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      watcher.unobserve(entry.target);   // 出現過一次就不再消失
    }
  });
}, { threshold: 0.15 });

targets.forEach(function (el) { watcher.observe(el); });

// 找出頁面上所有的卡牌
const cards = document.querySelectorAll('.card');

// 幫每一張卡牌加上「被點一下就翻面」
cards.forEach(function (card) {
  card.addEventListener('click', function () {
    card.classList.toggle('flipped');
  });
});

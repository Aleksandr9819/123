function closeAd() {
  const adContainer = document.querySelector(".reklama");
  adContainer.style.display = "none";
}
window.onload = function () {
  // Появление рекламы
  setTimeout(function () {
    document.querySelector(".reklama").classList.add("show");
  }, 1000); // Появление через 1 секунду после загрузки страницы
};

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
const openButton = document.querySelector(".button-go-modal");
const modal = document.querySelector(".backdrop");
const closeButton = document.querySelector(".modal-btn-close");

openButton.addEventListener("click", function () {
  modal.classList.remove("is-hidden");
});

closeButton.addEventListener("click", function () {
  modal.classList.add("is-hidden");
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.add("is-hidden");
  }
});

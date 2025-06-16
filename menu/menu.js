(() => {
  function initializeMenu() {
    const buttons = document.querySelectorAll(".tabs button");
    const images = document.querySelectorAll(".image-gallery img");

    function showCategory(category) {
      images.forEach(img => {
        img.style.display = img.dataset.category === category ? "block" : "none";
      });

      buttons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === category);
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        showCategory(btn.dataset.category);
      });
    });

    showCategory("vorspeise");
  }

  try {
    initializeMenu();
  } catch (e) {
    setTimeout(initializeMenu, 100);
  }
})();

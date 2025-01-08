document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        // 클릭 시 active 클래스 토글
        card.classList.toggle("active");
      });
    });
  });
  
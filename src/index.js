import "./styles.css";

window.onload = () => {
  startHireMeCloseBtn();
};

const startHireMeCloseBtn = () => {
  const closeBtn = document.querySelector("#hire-me .close-btn");

  if (closeBtn) {
    closeBtn.onclick = () => {
      const hireMeAlert = document.querySelector("#hire-me");
      hireMeAlert.style.opacity = "0";
      setTimeout(function() {
        hireMeAlert.parentNode.removeChild(hireMeAlert);
      }, 500);
    };
  }
};

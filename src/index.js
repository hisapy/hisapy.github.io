import "./styles.css";

window.onload = () => {
  const closeBtn = document.querySelector("#hire-me .close-btn");

  closeBtn.onclick = () => {
    const hireMeAlert = document.querySelector("#hire-me");
    hireMeAlert.style.opacity = "0";

    setTimeout(function() {
      hireMeAlert.parentNode.removeChild(hireMeAlert);
    }, 500);
  };
};

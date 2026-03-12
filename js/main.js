document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("toggleTextBtn");
  const container = document.getElementById("textAreaContainer");
  const imageBtn = document.getElementById("toggleImageBtn");

  if (btn && container) {
    btn.addEventListener("click", function () {
      if (
        container.style.display === "none" ||
        container.style.display === ""
      ) {
        container.style.display = "block";
        btn.textContent = "Ocultar texto";
      } else {
        container.style.display = "none";
        btn.textContent = "Ler textinho bobo";
      }
    });
  }

  if (imageBtn) {
    imageBtn.addEventListener("click", function () {
      window.location.href = "./Html/index_2.html";
    });
  }

  const festaBtn = document.getElementById("festaBtn");
  if (festaBtn) {
    festaBtn.addEventListener("click", function () {
      window.location.href = "../Index.html";
    });
  }

  const giftBox = document.getElementById("giftBox");
  if (giftBox) {
    let presentClicks = 0;
    giftBox.addEventListener("click", function () {
      if (giftBox.src.includes("presentes.png")) {
        presentClicks++;

        const vw = window.innerWidth - giftBox.offsetWidth;
        const vh = window.innerHeight - giftBox.offsetHeight;
        const x = Math.floor(Math.random() * vw);
        const y = Math.floor(Math.random() * vh);
        giftBox.style.position = "absolute";
        giftBox.style.left = x + "px";
        giftBox.style.top = y + "px";

        const moveSound = document.getElementById("moveSound");
        if (moveSound) ((moveSound.currentTime = 0), moveSound.play());

        if (presentClicks >= 5) {
          giftBox.classList.add("explode");
          setTimeout(function () {
            giftBox.style.display = "none";
          }, 600);
        }
      } else {
        giftBox.classList.add("explode");
        setTimeout(function () {
          giftBox.src = "../img/presentes.png";
          giftBox.classList.remove("explode");
        }, 600);
      }
    });
  }
});
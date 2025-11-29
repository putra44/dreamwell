// Tombol Back to Top

const btn = document.querySelector('.back-to-top');

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

// Generate bintang random
function createStars(count) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("pixel-star");

    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = (Math.random() * 3) + "s";

    document.body.appendChild(star);
  }
}
createStars(100);

// Generate sparks random arah & posisi
function createRandomSparks(count) {
  for (let i = 0; i < count; i++) {
    const spark = document.createElement("div");
    spark.classList.add("pixel-spark");

    spark.style.top = Math.random() * 100 + "%";
    spark.style.left = Math.random() * 100 + "%";

    const angle = Math.random() * Math.PI * 2;
    const distance = 400 + Math.random() * 400;
    spark.style.setProperty("--dx", Math.cos(angle) * distance + "px");
    spark.style.setProperty("--dy", Math.sin(angle) * distance + "px");

    spark.style.animationDuration = (2 + Math.random() * 4) + "s";
    spark.style.animationDelay = Math.random() * 3 + "s";

    document.body.appendChild(spark);
  }
}
createRandomSparks(40);

function updateDevProgress(percent) {
  const bar = document.getElementById("devBar");
  if (!bar) return;

  const safe = Math.max(0, Math.min(100, percent)); // 0–100
  bar.style.width = safe + "%";
}

// awal development
updateDevProgress(40);

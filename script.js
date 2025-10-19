// Floating sparkles for Diwali glow
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.bottom = '0px';
  sparkle.style.animationDuration = (1 + Math.random() * 2) + 's';
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 2000);
}

setInterval(createSparkle, 150);

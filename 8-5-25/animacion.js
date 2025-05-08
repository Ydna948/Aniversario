const prado = document.getElementById('prado');

for (let i = 0; i < 10; i++) {
  const flor = document.createElement('div');
  flor.className = 'flor';
  flor.style.left = `${i * 10 + 5}%`;
  flor.style.animationDelay = `${Math.random() * 3}s`;

  flor.innerHTML = `
    <div class="tallo"></div>
    <div class="hoja left"></div>
    <div class="hoja right"></div>
    <div class="petalo petalo1"></div>
    <div class="petalo petalo2"></div>
    <div class="petalo petalo3"></div>
    <div class="petalo petalo4"></div>
    <div class="centro"></div>
  `;

  prado.appendChild(flor);
}


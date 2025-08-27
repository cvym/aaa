(function() {
  const card = document.getElementById('tilt-card');

  // --- Audio ---
  const audio = document.createElement('audio');
  audio.src = 'audio/musique.mp3'; // chemin vers ton fichier
  audio.loop = true;
  audio.volume = 0.5;
  audio.autoplay = true;
  audio.muted = true; // autoplay autorisé si muet
  document.body.appendChild(audio);

  // Débloquer le son dès la première interaction utilisateur
  function unmuteAudio() {
    audio.muted = false;
    document.body.removeEventListener('click', unmuteAudio);
    document.body.removeEventListener('touchstart', unmuteAudio);
  }
  document.body.addEventListener('click', unmuteAudio);
  document.body.addEventListener('touchstart', unmuteAudio);

  const MAX_ROTATE = 18;
  const SCALE_HOVER = 1.04;

  function setTransform(xRatio, yRatio) {
    const rotY = xRatio * (MAX_ROTATE * 2);
    const rotX = -yRatio * (MAX_ROTATE * 2);
    card.style.transform =
      `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(${SCALE_HOVER})`;
  }

  function onMove(e) {
    const rect = card.getBoundingClientRect();
    const clientX = (e.touches ? e.touches[0].clientX : e.clientX);
    const clientY = (e.touches ? e.touches[0].clientY : e.clientY);
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const xRatio = x / rect.width - 0.5;
    const yRatio = y / rect.height - 0.5;
    setTransform(xRatio, yRatio);
    card.style.setProperty('--gx', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--gy', `${(y / rect.height) * 100}%`);
  }

  function onEnter() { 
    card.classList.add('is-hovered'); 
  }

  function onLeave() {
    card.classList.remove('is-hovered');
    card.style.transform = '';
    card.style.removeProperty('--gx');
    card.style.removeProperty('--gy');
  }

  card.addEventListener('mousemove', onMove);
  card.addEventListener('mouseenter', onEnter);
  card.addEventListener('mouseleave', onLeave);

  card.addEventListener('touchstart', onEnter, { passive: true });
  card.addEventListener('touchmove', onMove, { passive: true });
  card.addEventListener('touchend', onLeave);
})();

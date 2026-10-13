(() => {
  'use strict';
  const root = document.documentElement;
  const themeButtons = [...document.querySelectorAll('[data-theme-choice]')];
  const themeNames = { terra: '暖陶日光', forest: '森野苔綠', cobalt: '靛藍檸光', nocturne: '夜焙琥珀' };
  const themeColors = { terra: '#f5eee4', forest: '#ecefe2', cobalt: '#eeecf8', nocturne: '#181e1d' };
  const status = document.getElementById('theme-status');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) { /* Private browsing still supports theme switching. */ } };
  function setTheme(theme, announce = false) {
    if (!Object.hasOwn(themeNames, theme)) return;
    root.dataset.theme = theme;
    themeButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme)));
    if (themeMeta) themeMeta.content = themeColors[theme];
    if (announce && status) status.textContent = `已切換至${themeNames[theme]}配色`;
  }
  themeButtons.forEach(button => button.addEventListener('click', () => {
    setTheme(button.dataset.themeChoice, true);
    save('pure-select-theme', button.dataset.themeChoice);
  }));
  setTheme(root.dataset.theme || 'terra');

  const motionButton = document.getElementById('motion-toggle');
  const motionLabel = document.getElementById('motion-label');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  function updateMotionControl() {
    const paused = root.dataset.motion === 'paused';
    motionButton.setAttribute('aria-pressed', String(paused || reducedMotion.matches));
    motionButton.disabled = reducedMotion.matches;
    motionLabel.textContent = reducedMotion.matches ? '已減少動態效果' : paused ? '播放動畫' : '暫停動畫';
    motionButton.firstElementChild.textContent = paused || reducedMotion.matches ? '▷' : 'Ⅱ';
  }
  motionButton.addEventListener('click', () => {
    root.dataset.motion = root.dataset.motion === 'paused' ? 'running' : 'paused';
    save('pure-select-motion', root.dataset.motion);
    updateMotionControl();
  });
  reducedMotion.addEventListener('change', updateMotionControl);
  updateMotionControl();
})();

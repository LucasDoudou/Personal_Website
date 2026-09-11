(() => {
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  const stored = localStorage.getItem('theme');
  if (stored) root.dataset.theme = stored;
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.dataset.theme = 'dark';

  const setIcon = () => {
    if (!button) return;
    const dark = root.dataset.theme === 'dark';
    button.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    button.textContent = dark ? '☀' : '◐';
  };
  setIcon();
  button?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', root.dataset.theme);
    setIcon();
  });

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
});

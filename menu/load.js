(async () => {
  const container = document.getElementById('my-custom-menu');
  if (!container) return;

  try {
    const res = await fetch('https://pages.mizumai.de/menu/menu.html');
    container.innerHTML = await res.text();

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://pages.mizumai.de/menu/menu.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://pages.mizumai.de/menu/menu.js';
    document.body.appendChild(script);
  } catch (err) {
    console.error('Failed to load menu:', err);
  }
})();
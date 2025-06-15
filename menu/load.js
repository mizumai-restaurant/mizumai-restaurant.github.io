(async () => {
  const container = document.getElementById('my-custom-menu');
  if (!container) return;

  try {
    const res = await fetch('https://mizumai-restaurant.github.io/menu/menu.html');
    container.innerHTML = await res.text();

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://mizumai-restaurant.github.io/menu/menu.css';
    document.head.appendChild(link);
  } catch (err) {
    console.error('Failed to load menu:', err);
  }
})();
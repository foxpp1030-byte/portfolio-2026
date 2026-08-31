(() => {
  const root = document.body.firstElementChild;
  const closeButton = document.querySelector('[data-popup-close]');
  let frameRequest = 0;

  const sendHeight = () => {
    if (!root) return;

    root.style.transform = '';
    root.style.transformOrigin = '';
    document.body.style.width = '';
    document.body.style.height = '';

    const naturalWidth = Math.max(root.scrollWidth, Math.ceil(root.getBoundingClientRect().width));
    const scale = naturalWidth > 0 ? Math.min(1, window.innerWidth / naturalWidth) : 1;

    if (scale < 1) {
      root.style.transform = `scale(${scale})`;
      root.style.transformOrigin = 'left top';
      document.body.style.width = `${naturalWidth}px`;
    }

    window.requestAnimationFrame(() => {
      const height = Math.ceil(root.getBoundingClientRect().height);
      document.body.style.height = `${height}px`;

      if (window.parent !== window) {
        window.parent.postMessage({ type: 'project-detail-resize', height }, '*');
      }
    });
  };

  const scheduleHeight = () => {
    window.cancelAnimationFrame(frameRequest);
    frameRequest = window.requestAnimationFrame(sendHeight);
  };

  closeButton?.addEventListener('click', () => {
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'project-detail-close' }, '*');
    } else {
      window.history.back();
    }
  });

  document.querySelectorAll('img').forEach((image) => {
    if (!image.complete) image.addEventListener('load', scheduleHeight, { once: true });
  });

  if ('ResizeObserver' in window && root) {
    new ResizeObserver(scheduleHeight).observe(root);
  }

  window.addEventListener('load', scheduleHeight);
  window.addEventListener('resize', scheduleHeight);
  scheduleHeight();
})();

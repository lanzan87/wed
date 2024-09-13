document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  function createRipple(event) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    
    const rect = body.getBoundingClientRect();
    const size = Math.min(rect.width, rect.height) * 0.1; // Smaller size, 10% of the smaller dimension
    
    ripple.style.width = ripple.style.height = `${size}px`;
    
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    body.appendChild(ripple);

    // Create multiple ripples for a wavier effect
    setTimeout(() => createSecondaryRipple(x, y, size * 0.8), 200);
    setTimeout(() => createSecondaryRipple(x, y, size * 0.6), 400);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }

  function createSecondaryRipple(x, y, size) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x + (Math.random() - 0.5) * 10}px`;
    ripple.style.top = `${y + (Math.random() - 0.5) * 10}px`;
    body.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }

  // For desktop
  body.addEventListener('click', createRipple);

  // For mobile
  body.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    createRipple(touch);
  }, { passive: true });
});

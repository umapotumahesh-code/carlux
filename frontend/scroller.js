// JS Infinite Scroller for quick links
// Features: continuous marquee, pause-on-hover, touch/drag support, responsive

(function () {
  const defaultSpeed = 120; // pixels per second, increase = faster

  function initScroller() {
    const scroller = document.querySelector('.quick-scroller');
    if (!scroller) return;

    const track = scroller.querySelector('.scroller-track');
    if (!track) return;

    let speed = defaultSpeed;
    let rafId = null;
    let lastTime = null;
    let pos = 0; // current translateX
    let paused = false;
    let trackWidth = 0;
    let containerWidth = 0;
    let loopWidth = 0; // width after which we reset

    // Ensure the track has duplicated content to allow seamless scroll
    function ensureDuplication() {
      // If track's width is less than container * 2, clone children until it is
      const items = Array.from(track.children);
      trackWidth = track.scrollWidth;
      containerWidth = scroller.clientWidth;
      while (trackWidth < containerWidth * 2) {
        items.forEach((n) => track.appendChild(n.cloneNode(true)));
        trackWidth = track.scrollWidth;
      }
      // Use half of track as the loop width if items are duplicated twice
      loopWidth = trackWidth / 2;
    }

    function recalc() {
      trackWidth = track.scrollWidth;
      containerWidth = scroller.clientWidth;
      // If track contains duplicated set, use half as loop width
      loopWidth = trackWidth / 2;
      // Keep pos in valid range
      pos = pos % loopWidth;
    }

    function step(time) {
      if (lastTime === null) lastTime = time;
      const dt = time - lastTime;
      lastTime = time;
      if (!paused) {
        pos -= (speed * dt) / 1000; // move left
        if (Math.abs(pos) >= loopWidth) {
          // wrap around
          pos += loopWidth;
        }
        track.style.transform = `translateX(${pos}px)`;
      }
      rafId = requestAnimationFrame(step);
    }

    // Pause/Resume
    function pause() {
      paused = true;
    }
    function resume() {
      paused = false;
    }

    // Drag / touch support
    let isDragging = false;
    let dragStartX = 0;
    let dragStartPos = 0;

    function pointerDown(e) {
      isDragging = true;
      pause();
      dragStartX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      dragStartPos = pos;
      scroller.style.cursor = 'grabbing';
    }
    function pointerMove(e) {
      if (!isDragging) return;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const dx = clientX - dragStartX;
      pos = dragStartPos + dx;
      // keep pos within loopWidth
      if (pos > 0) pos = pos - loopWidth;
      if (Math.abs(pos) >= loopWidth) pos = pos % loopWidth;
      track.style.transform = `translateX(${pos}px)`;
    }
    function pointerUp() {
      if (!isDragging) return;
      isDragging = false;
      scroller.style.cursor = 'default';
      // resume after slight delay
      setTimeout(() => { resume(); }, 200);
    }

    // init
    ensureDuplication();
    recalc();

    // Start animation
    rafId = requestAnimationFrame(step);

    // Events
    scroller.addEventListener('mouseenter', pause);
    scroller.addEventListener('mouseleave', resume);

    // Pointer events for mouse and touch
    scroller.addEventListener('mousedown', pointerDown);
    window.addEventListener('mousemove', pointerMove);
    window.addEventListener('mouseup', pointerUp);

    scroller.addEventListener('touchstart', pointerDown, { passive: true });
    scroller.addEventListener('touchmove', pointerMove, { passive: true });
    scroller.addEventListener('touchend', pointerUp);

    // Recalculate on resize
    window.addEventListener('resize', () => {
      // recompute duplication and widths
      recalc();
      ensureDuplication();
    });

    // Expose controls (optional)
    return {
      setSpeed(s) { speed = s; },
      pause() { pause(); },
      resume() { resume(); }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScroller);
  } else {
    initScroller();
  }
})();

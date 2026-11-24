(() => {
  const canvas = document.querySelector('.mobius-live');
  const context = canvas && canvas.getContext('2d');
  if (!context) return;

  const lengthSteps = 104;
  const widthSteps = 8;
  const points = [];
  const faces = [];

  // A half turn of the cross-section joins the two ends with opposite edges.
  for (let step = 0; step <= lengthSteps; step += 1) {
    const angle = 2 * Math.PI * step / lengthSteps;
    for (let across = 0; across <= widthSteps; across += 1) {
      const offset = .35 * (2 * across / widthSteps - 1);
      const radius = 1 + offset * Math.cos(angle / 2);
      points.push([
        radius * Math.cos(angle),
        radius * Math.sin(angle),
        offset * Math.sin(angle / 2),
      ]);
    }
  }

  const stride = widthSteps + 1;
  for (let step = 0; step < lengthSteps; step += 1) {
    for (let across = 0; across < widthSteps; across += 1) {
      const corner = step * stride + across;
      faces.push([corner, corner + stride, corner + stride + 1, corner + 1]);
    }
  }

  function draw(angle) {
    const { width, height } = canvas;
    const tilt = .91;
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    const scale = Math.min(width, height) * .29;
    const vertices = points.map(([x, y, z]) => {
      const horizontal = x * cosine - y * sine;
      const vertical = x * sine + y * cosine;
      return [
        horizontal,
        vertical * Math.cos(tilt) - z * Math.sin(tilt),
        vertical * Math.sin(tilt) + z * Math.cos(tilt),
      ];
    });
    const projected = vertices.map(([x, y, z]) => {
      const perspective = scale / (1 - z * .11);
      return [width / 2 + x * perspective, height / 2 + y * perspective];
    });
    const visible = faces.map(indices => {
      const [a, b, c] = indices.map(index => vertices[index]);
      const u = b.map((coordinate, axis) => coordinate - a[axis]);
      const v = c.map((coordinate, axis) => coordinate - a[axis]);
      const normal = [
        u[1] * v[2] - u[2] * v[1],
        u[2] * v[0] - u[0] * v[2],
        u[0] * v[1] - u[1] * v[0],
      ];
      const length = Math.hypot(...normal);
      const light = Math.abs((-.42 * normal[0] - .5 * normal[1] + .75 * normal[2]) / length);
      return { indices, depth: (a[2] + c[2]) / 2, light };
    }).sort((first, second) => first.depth - second.depth);

    context.clearRect(0, 0, width, height);
    context.lineWidth = .85;
    for (const { indices, depth, light } of visible) {
      const highlight = Math.pow(light, 3);
      const brightness = Math.round(26 + 37 * light + 19 * highlight + 3 * depth);
      context.fillStyle = `hsl(334, 44%, ${brightness}%)`;
      context.strokeStyle = context.fillStyle;
      context.beginPath();
      const [first, ...rest] = indices;
      context.moveTo(...projected[first]);
      for (const index of rest) context.lineTo(...projected[index]);
      context.closePath();
      context.fill();
      context.stroke();
    }
  }

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revolutionMs = 12000;
  const frameInterval = 1000 / 30;
  let angle = -.55;
  let frame;
  let previousDraw;

  function turn(now) {
    if (previousDraw === undefined) previousDraw = now;
    const elapsed = now - previousDraw;
    if (elapsed >= frameInterval) {
      previousDraw = now;
      angle = (angle + 2 * Math.PI * (Math.min(elapsed, 100) / revolutionMs)) % (2 * Math.PI);
      draw(angle);
    }
    frame = requestAnimationFrame(turn);
  }

  function followPreference() {
    cancelAnimationFrame(frame);
    previousDraw = undefined;
    if (!motion.matches) frame = requestAnimationFrame(turn);
  }

  draw(angle);
  canvas.parentElement.classList.add('is-ready');
  if (typeof motion.addEventListener === 'function') {
    motion.addEventListener('change', followPreference);
  } else {
    motion.addListener(followPreference);
  }
  followPreference();
})();

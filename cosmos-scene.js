(function () {
  const DEFAULTS = {
    density: "immersive",
    intensity: "landing",
    accent: "#7dd3fc",
    motion: "normal",
    reducedMotion: null
  };

  function mergeOptions(options) {
    return Object.assign({}, DEFAULTS, options || {});
  }

  function hasWebGL() {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
    } catch (error) {
      return false;
    }
  }

  function getCounts(density, isMobile) {
    if (isMobile) {
      return { far: 620, near: 120, core: 72 };
    }

    if (density === "light") {
      return { far: 780, near: 130, core: 84 };
    }

    return { far: 1350, near: 220, core: 128 };
  }

  function getColor(THREE, palette, index) {
    const color = new THREE.Color(palette[index % palette.length]);
    const drift = ((index * 37) % 100) / 100;
    return color.lerp(new THREE.Color("#ffffff"), drift * 0.18);
  }

  function createStarLayer(THREE, options) {
    const positions = new Float32Array(options.count * 3);
    const colors = new Float32Array(options.count * 3);
    const speeds = new Float32Array(options.count);
    const palette = options.palette;

    for (let i = 0; i < options.count; i += 1) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * options.width;
      positions[i3 + 1] = (Math.random() - 0.5) * options.height;
      positions[i3 + 2] = options.back + Math.random() * options.depth;
      speeds[i] = options.speedMin + Math.random() * (options.speedMax - options.speedMin);

      const color = getColor(THREE, palette, i);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.userData = {
      positions,
      speeds,
      back: options.back,
      front: options.front,
      width: options.width,
      height: options.height
    };

    const material = new THREE.PointsMaterial({
      size: options.size,
      transparent: true,
      opacity: options.opacity,
      vertexColors: true,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    return new THREE.Points(geometry, material);
  }

  function createCoreCluster(THREE, count, accent) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = ["#ffffff", accent, "#f8d49d", "#a7f3d0"];

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      const radius = Math.pow(Math.random(), 1.8) * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = Math.sin(phi) * Math.cos(theta) * radius;
      positions[i3 + 1] = Math.sin(phi) * Math.sin(theta) * radius * 0.72;
      positions[i3 + 2] = Math.cos(phi) * radius * 0.52;

      const color = getColor(THREE, palette, i);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.68,
      transparent: true,
      opacity: 0.74,
      vertexColors: true,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    return new THREE.Points(geometry, material);
  }

  function createOrbit(THREE, radiusX, radiusY, color, opacity) {
    const points = [];
    const segments = 168;

    for (let i = 0; i <= segments; i += 1) {
      const angle = (Math.PI * 2 * i) / segments;
      points.push(new THREE.Vector3(Math.cos(angle) * radiusX, Math.sin(angle) * radiusY, 0));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    return new THREE.Line(geometry, material);
  }

  function createConstellation(THREE, accent) {
    const group = new THREE.Group();
    const material = new THREE.LineBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const lanes = [
      [[-44, -12, -26], [-26, -5, -42], [-9, 9, -36], [15, 4, -54], [34, 14, -38]],
      [[-36, 18, -68], [-12, 25, -48], [8, 15, -62], [30, 28, -48]],
      [[-48, -30, -58], [-22, -24, -44], [2, -34, -64], [26, -22, -52]]
    ];

    lanes.forEach((lane) => {
      const geometry = new THREE.BufferGeometry().setFromPoints(
        lane.map((point) => new THREE.Vector3(point[0], point[1], point[2]))
      );
      group.add(new THREE.Line(geometry, material.clone()));
    });

    return group;
  }

  function createPlanetTexture(THREE, palette, seed) {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext("2d");
    const base = context.createLinearGradient(0, 0, canvas.width, canvas.height);

    base.addColorStop(0, palette[0]);
    base.addColorStop(0.48, palette[1]);
    base.addColorStop(1, palette[2]);
    context.fillStyle = base;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // 1. Swirling/氣旋條紋
    for (let j = 0; j < 4; j += 1) {
      context.strokeStyle = `rgba(255, 255, 255, ${0.05 + (j * 0.02)})`;
      context.lineWidth = 4 + (j * 2);
      context.beginPath();
      for (let x = 0; x <= canvas.width; x += 10) {
        const y = canvas.height * 0.45 + Math.sin(x * 0.04 + seed + j) * 32 + Math.cos(x * 0.015 - seed * 2) * 16;
        if (x === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.stroke();
    }

    // 2. Wind shear bands/細密條紋
    for (let i = 0; i < 48; i += 1) {
      const y = (i * 19 + seed * 29) % canvas.height;
      const height = 2.5 + ((i * 5 + seed) % 10);
      const alpha = 0.08 + ((i * 11) % 15) / 100;
      context.fillStyle = i % 2 === 0 ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha})`;
      context.beginPath();
      context.ellipse(
        canvas.width * 0.5,
        y,
        canvas.width * (0.68 + ((i + seed) % 6) * 0.04),
        height,
        Math.sin(y * 0.08) * 0.04 + ((i + seed) % 4) * 0.02,
        0,
        Math.PI * 2
      );
      context.fill();
    }

    // 3. Crater/隕石坑噪點
    for (let i = 0; i < 120; i += 1) {
      const x = (i * 37 + seed * 43) % canvas.width;
      const y = (i * 23 + seed * 19) % canvas.height;
      const radius = 1.0 + ((i + seed) % 6) * 0.8;
      
      // Shadow (dark side)
      context.fillStyle = `rgba(0,0,0,${0.08 + ((i * 3) % 12) / 100})`;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
      
      // Highlight (light side)
      context.fillStyle = `rgba(255,255,255,${0.06 + ((i * 4) % 10) / 100})`;
      context.beginPath();
      context.arc(x - radius * 0.3, y - radius * 0.3, radius * 0.7, 0, Math.PI * 2);
      context.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }

  function createPlanet(THREE, config) {
    const group = new THREE.Group();
    group.position.set(config.position[0], config.position[1], config.position[2]);
    group.rotation.set(config.rotation[0], config.rotation[1], config.rotation[2]);
    group.userData.spinSpeed = config.spinSpeed;
    group.userData.orbitSpeed = config.orbitSpeed || 0;
    group.userData.travel = config.travel;

    const texture = createPlanetTexture(THREE, config.palette, config.seed);
    const geometry = new THREE.SphereGeometry(config.radius, 48, 32);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.82,
      metalness: 0.04,
      transparent: true,
      opacity: config.opacity,
      emissive: new THREE.Color(config.emissive || "#000000"),
      emissiveIntensity: config.emissiveIntensity || 0
    });

    const planet = new THREE.Mesh(geometry, material);
    planet.userData.texture = texture;
    group.add(planet);
    group.userData.planet = planet;

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(config.radius * 1.06, 48, 24),
      new THREE.MeshBasicMaterial({
        color: config.glow,
        transparent: true,
        opacity: config.glowOpacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    );
    group.add(atmosphere);

    if (config.ring) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(config.radius * 1.35, config.radius * 2.05, 128),
        new THREE.MeshBasicMaterial({
          color: config.ring.color,
          transparent: true,
          opacity: config.ring.opacity,
          side: THREE.DoubleSide,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        })
      );
      ring.rotation.set(config.ring.rotation[0], config.ring.rotation[1], config.ring.rotation[2]);
      group.add(ring);
      group.userData.ring = ring;
    }

    return group;
  }

  function createPlanetSystem(THREE, isMobile) {
    const group = new THREE.Group();
    const planets = [];
    const configs = isMobile
      ? [
          {
            radius: 9.0,
            position: [17, -5, -50],
            rotation: [-0.46, 0.28, -0.78],
            spinSpeed: 0.09,
            orbitSpeed: 0,
            travel: {
              phase: 0.05,
              speed: 0.035,
              left: -46,
              right: 50,
              centerY: -6,
              amplitudeY: 10,
              centerZ: -56,
              amplitudeZ: 12
            },
            opacity: 0.82,
            palette: ["#162033", "#3a6d83", "#d0a96a"],
            glow: "#7dd3fc",
            glowOpacity: 0.14,
            emissive: "#102437",
            emissiveIntensity: 0.24,
            seed: 3,
            ring: {
              color: "#d6efff",
              opacity: 0.16,
              rotation: [1.32, 0.18, -0.78]
            }
          }
        ]
      : [
          {
            radius: 13.6,
            position: [50, 8, -54],
            rotation: [-0.48, 0.28, -0.78],
            spinSpeed: 0.085,
            orbitSpeed: 0,
            travel: {
              phase: 0.05,
              speed: 0.032,
              left: -88,
              right: 92,
              centerY: 2,
              amplitudeY: 17,
              centerZ: -60,
              amplitudeZ: 20
            },
            opacity: 0.9,
            palette: ["#111827", "#376b82", "#d5a45d"],
            glow: "#7dd3fc",
            glowOpacity: 0.18,
            emissive: "#102a3f",
            emissiveIntensity: 0.22,
            seed: 5,
            ring: {
              color: "#d8f3ff",
              opacity: 0.17,
              rotation: [1.3, 0.24, -0.78]
            }
          },
          {
            radius: 5.4,
            position: [18, 24, -82],
            rotation: [0.28, -0.26, -0.78],
            spinSpeed: -0.12,
            orbitSpeed: 0,
            travel: {
              phase: 0.48,
              speed: 0.024,
              left: -76,
              right: 86,
              centerY: 22,
              amplitudeY: 12,
              centerZ: -88,
              amplitudeZ: 16
            },
            opacity: 0.72,
            palette: ["#2a1638", "#7c4f7f", "#f1c27d"],
            glow: "#f0abfc",
            glowOpacity: 0.12,
            emissive: "#2b1538",
            emissiveIntensity: 0.18,
            seed: 11
          },
          {
            radius: 4.2,
            position: [68, -22, -104],
            rotation: [-0.18, 0.46, -0.78],
            spinSpeed: 0.16,
            orbitSpeed: 0,
            travel: {
              phase: 0.12,
              speed: 0.042,
              left: -82,
              right: 94,
              centerY: -23,
              amplitudeY: 14,
              centerZ: -104,
              amplitudeZ: 18
            },
            opacity: 0.7,
            palette: ["#172554", "#3b82f6", "#dbeafe"],
            glow: "#93c5fd",
            glowOpacity: 0.12,
            emissive: "#172554",
            emissiveIntensity: 0.15,
            seed: 17
          }
        ];

    configs.forEach(function (config) {
      const planet = createPlanet(THREE, config);
      planets.push(planet);
      group.add(planet);
    });

    group.userData.planets = planets;
    return group;
  }

  function updateStarLayer(layer, delta, reducedMotion) {
    if (reducedMotion) return;

    const attr = layer.geometry.getAttribute("position");
    const positions = layer.geometry.userData.positions;
    const speeds = layer.geometry.userData.speeds;
    const data = layer.geometry.userData;

    for (let i = 0; i < speeds.length; i += 1) {
      const i3 = i * 3;
      positions[i3 + 2] += speeds[i] * delta;

      if (positions[i3 + 2] > data.front) {
        positions[i3] = (Math.random() - 0.5) * data.width;
        positions[i3 + 1] = (Math.random() - 0.5) * data.height;
        positions[i3 + 2] = data.back;
      }
    }

    attr.needsUpdate = true;
  }

  function disposeObject(object) {
    object.traverse(function (child) {
      if (child.geometry) {
        child.geometry.dispose();
      }

      if (Array.isArray(child.material)) {
        child.material.forEach(function (material) {
          if (material.map) {
            material.map.dispose();
          }
          material.dispose();
        });
      } else if (child.material) {
        if (child.material.map) {
          child.material.map.dispose();
        }
        child.material.dispose();
      }
    });
  }

  function updatePlanetTravel(planetSystem, elapsed, delta, motionScale, reducedMotion, isStatic) {
    planetSystem.userData.planets.forEach(function (planetGroup) {
      const planet = planetGroup.userData.planet;
      const ring = planetGroup.userData.ring;
      const travel = planetGroup.userData.travel;

      if (travel && !isStatic) {
        const progress = (travel.phase + elapsed * travel.speed) % 1;
        const angle = progress * Math.PI * 2;
        planetGroup.position.x = travel.left + (travel.right - travel.left) * progress;
        planetGroup.position.y = travel.centerY + Math.sin(angle - Math.PI * 0.24) * travel.amplitudeY;
        planetGroup.position.z = travel.centerZ + Math.cos(angle) * travel.amplitudeZ;
      }

      if (!reducedMotion && !isStatic) {
        planet.rotation.y += delta * planetGroup.userData.spinSpeed * motionScale;
        planet.rotation.x += delta * planetGroup.userData.spinSpeed * 0.12 * motionScale;
        if (ring) {
          ring.rotation.z += delta * 0.025 * motionScale;
        }
      }
    });
  }

  function createCosmosScene(container, options) {
    const settings = mergeOptions(options);
    const THREE = window.THREE;
    const reducedMotion =
      settings.reducedMotion !== null
        ? !!settings.reducedMotion
        : window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!container || !THREE || !hasWebGL()) {
      if (container) container.classList.add("is-static");
      return { destroy: function () {} };
    }

    const mobileQuery = window.matchMedia("(max-width: 760px)");
    let isMobile = mobileQuery.matches;
    let width = Math.max(container.clientWidth, window.innerWidth);
    let height = Math.max(container.clientHeight, window.innerHeight);
    let animationFrame = 0;
    let visible = !document.hidden;

    const counts = getCounts(settings.density, isMobile);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance"
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75));
    renderer.setSize(width, height, false);

    if ("outputColorSpace" in renderer && THREE.SRGBColorSpace) {
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }

    container.appendChild(renderer.domElement);
    container.classList.add("is-webgl-ready");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, width / height, 0.1, 620);
    camera.position.set(0, 0, 76);

    const root = new THREE.Group();
    scene.add(root);

    scene.add(new THREE.AmbientLight(0x89a9c5, 0.42));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.55);
    keyLight.position.set(-18, 18, 38);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x7dd3fc, 1.8, 160);
    rimLight.position.set(42, -4, 12);
    scene.add(rimLight);

    const accent = settings.accent;
    const farStars = createStarLayer(THREE, {
      count: counts.far,
      width: 260,
      height: 160,
      depth: 390,
      back: -330,
      front: 86,
      speedMin: 0.018,
      speedMax: 0.065,
      size: isMobile ? 0.34 : 0.42,
      opacity: settings.intensity === "quiet" ? 0.58 : 0.72,
      palette: ["#ffffff", "#dbeafe", "#bfe8ff", "#f8d49d"]
    });

    const nearStars = createStarLayer(THREE, {
      count: counts.near,
      width: 180,
      height: 112,
      depth: 250,
      back: -210,
      front: 82,
      speedMin: 0.08,
      speedMax: 0.18,
      size: isMobile ? 0.74 : 0.96,
      opacity: 0.56,
      palette: ["#ffffff", accent, "#d9f99d", "#fde68a"]
    });

    root.add(farStars);
    root.add(nearStars);

    const coreGroup = new THREE.Group();
    coreGroup.position.set(isMobile ? 18 : 31, isMobile ? 3 : 7, -30);
    coreGroup.rotation.set(-0.24, 0.32, -0.18);
    root.add(coreGroup);

    const core = createCoreCluster(THREE, counts.core, accent);
    coreGroup.add(core);

    const orbitColors = [accent, "#ffffff", "#f8d49d", "#a7f3d0"];
    for (let i = 0; i < 5; i += 1) {
      const orbit = createOrbit(
        THREE,
        16 + i * 5.8,
        5.2 + i * 2.1,
        orbitColors[i % orbitColors.length],
        0.2 - i * 0.02
      );
      orbit.rotation.x = 0.92 + i * 0.22;
      orbit.rotation.y = 0.44 + i * 0.17;
      orbit.rotation.z = i * 0.42;
      coreGroup.add(orbit);
    }

    const constellation = createConstellation(THREE, accent);
    root.add(constellation);

    const planetSystem = createPlanetSystem(THREE, isMobile);
    scene.add(planetSystem);

    const clock = new THREE.Clock();
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let scrollDepth = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 2);

    function onPointerMove(event) {
      const point = event.touches ? event.touches[0] : event;
      target.x = (point.clientX / window.innerWidth - 0.5) * 2;
      target.y = (point.clientY / window.innerHeight - 0.5) * 2;
    }

    function onScroll() {
      scrollDepth = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 2);
    }

    function onVisibilityChange() {
      visible = !document.hidden;
      if (visible && !animationFrame && !reducedMotion) {
        clock.getDelta();
        animate();
      }
    }

    function resize() {
      isMobile = mobileQuery.matches;
      width = Math.max(container.clientWidth, window.innerWidth);
      height = Math.max(container.clientHeight, window.innerHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75));
      renderer.setSize(width, height, false);
    }

    function renderFrame(delta, elapsed) {
      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;

      updateStarLayer(farStars, delta * 60, reducedMotion || settings.motion === "static");
      updateStarLayer(nearStars, delta * 60, reducedMotion || settings.motion === "static");

      const motionScale = settings.motion === "subtle" ? 0.55 : 1;
      root.rotation.y = pointer.x * 0.055 * motionScale - scrollDepth * 0.018;
      root.rotation.x = -pointer.y * 0.036 * motionScale + scrollDepth * 0.01;
      root.position.z = scrollDepth * 7;

      coreGroup.rotation.z += reducedMotion ? 0 : delta * 0.032 * motionScale;
      coreGroup.rotation.y += reducedMotion ? 0 : delta * 0.018 * motionScale;
      constellation.rotation.y = Math.sin(elapsed * 0.07) * 0.04;
      constellation.rotation.x = Math.cos(elapsed * 0.06) * 0.025;
      updatePlanetTravel(
        planetSystem,
        elapsed,
        delta,
        motionScale,
        reducedMotion,
        settings.motion === "static"
      );

      const opacity = Math.max(0.42, 1 - scrollDepth * 0.24);
      renderer.domElement.style.opacity = opacity.toFixed(3);
      renderer.render(scene, camera);
    }

    function animate() {
      if (!visible) {
        animationFrame = 0;
        return;
      }

      animationFrame = window.requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.04);
      renderFrame(delta, clock.elapsedTime);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    resize();
    renderFrame(0, 0);

    if (!reducedMotion && settings.motion !== "static") {
      animate();
    } else {
      container.classList.add("is-reduced-motion");
    }

    return {
      destroy: function () {
        window.cancelAnimationFrame(animationFrame);
        window.removeEventListener("resize", resize);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("touchmove", onPointerMove);
        window.removeEventListener("scroll", onScroll);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        disposeObject(root);
        disposeObject(planetSystem);
        renderer.dispose();
        container.classList.remove("is-webgl-ready", "is-reduced-motion");
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }

  window.createCosmosScene = createCosmosScene;
})();

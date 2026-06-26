# Reusable 3D Cosmos Background Design

## Goal

Build a reusable 3D universe background prototype on the current AI YouTube collection landing page. The effect should feel immersive enough to evaluate for future sites, while staying independent from this site's content, data, and layout.

## Product Direction

The first screen becomes a "cosmos of collected knowledge": a full-screen starfield with subtle depth, particle drift, light nebula haze, and mouse/parallax motion behind the existing hero copy. The landing page remains readable and conversion-focused. The 3D scene supports the page instead of becoming the product.

## Recommended Approach

Use vanilla Three.js loaded from a CDN, wrapped in a small local module. This keeps the prototype portable across static HTML, React, Vite, WordPress, and other sites without requiring a React build pipeline.

Rejected approaches:

- Pure 2D canvas: easiest to maintain, but weaker as a 3D prototype.
- React Three Fiber: useful for React-first apps, but too framework-bound for a cross-site reusable experiment.

## Scope

In scope:

- Add a reusable `cosmos-scene.js` module.
- Replace the current landing-page 2D synapse canvas with a WebGL scene container.
- Keep `index.html` and `landing.html` visually synchronized.
- Add responsive performance settings for desktop and mobile.
- Add reduced-motion and WebGL failure fallbacks.

Out of scope:

- No npm build system.
- No React migration.
- No coupling to YouTube video data.
- No 3D model files or heavy textures.
- No changes to the app dashboard in `app.html`.

## Architecture

### `cosmos-scene.js`

Exports a small initializer, for example `createCosmosScene(container, options)`. It owns the Three.js renderer, camera, scene objects, animation loop, resize handling, pointer parallax, and cleanup.

Suggested options:

- `density`: particle count preset.
- `intensity`: opacity and brightness preset.
- `accent`: optional color tint.
- `motion`: normal, subtle, or static.
- `reducedMotion`: explicit override for accessibility.

### Landing Page Integration

The page owns only markup and styling:

```html
<div class="cosmos-scene" id="cosmosScene" aria-hidden="true"></div>
```

The page script loads Three.js, loads `cosmos-scene.js`, and starts the scene only if WebGL and motion settings allow it.

### CSS Layering

The 3D layer is fixed behind content with `pointer-events: none`. A dark readability overlay sits above the WebGL canvas and below the hero content. Text, buttons, topbar, terminal panel, and metric rail stay ordinary HTML.

## Scene Design

The initial prototype should include:

- Dense far-field stars with different depths and sizes.
- A slower foreground particle layer that gives movement when the cursor shifts.
- A soft knowledge-core glow offset to the right side of the hero.
- Thin orbital arcs suggesting categories or learning paths.
- Slow forward drift for a "moving through space" feeling.

The scene should avoid decorative blobs, heavy purple gradients, and busy foreground elements that compete with the text.

## Data Flow

There is no product data dependency. The module receives only DOM container and display options. It reads viewport size, pointer position, scroll position, and reduced-motion preference. It does not read `data/videos.js`, localStorage, or site-specific copy.

## Error Handling

- If WebGL is unavailable, show a static CSS starfield fallback.
- If Three.js fails to load, leave the fallback visible and keep the page usable.
- If `prefers-reduced-motion: reduce` is enabled, render a static or near-static scene without animation.
- On mobile, reduce particle count and disable expensive glow/line effects if needed.

## Performance

Targets:

- Keep the first prototype under one local JS module plus one Three.js CDN import.
- Cap device pixel ratio at 2 on desktop and lower on mobile if needed.
- Pause or heavily reduce animation when the tab is hidden.
- Avoid external textures and large model assets.
- Keep all interactive UI as regular HTML for accessibility and layout stability.

## Testing

Verify with:

- Desktop screenshot at a wide viewport.
- Mobile screenshot around 390px width.
- WebGL scene is nonblank and correctly layered behind hero text.
- Hero text and buttons remain readable.
- Page remains usable if the scene fails to initialize.
- Reduced-motion mode does not run the full animation loop.

## Implementation Decision

The prototype should start with the immersive option selected by the user: full-screen 3D starfield, mild scroll/pointer parallax, and reusable module boundaries. Visual tuning can happen after the first browser screenshot.

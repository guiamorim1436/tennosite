# Plan - Visual Enhancement for Consultoria LP

Make the "Consultoria" landing page more visual, premium, and interactive to match high-end consulting aesthetics (McKinsey/BCG style).

## Proposed Changes

### 1. Visual Components & Styling
- Add background visual elements (gradients, mesh textures, subtle grid patterns).
- Use `glass-morphism` more extensively for section blocks and cards.
- Implement scroll animations (fade-in, slide-up) for content reveal.
- Add hover effects to all methodology and Roadmap steps.

### 2. Hero Section
- Add a high-end visual background (abstract 3D shape or professional blurred imagery).
- Refine typography for a more "expensive" look (varying weights, subtle tracking).
- Animate the primary CTA button.

### 3. Methodology & Investigation Sections
- Transform the "5-step methodology" list into a visual timeline or circular flow.
- Add icons or abstract symbols for each step.
- Improve the "As Quatro Reuniões" section with interactive cards that expand or highlight on hover.

### 4. Comparison & Strategic Roadmap
- Design the Roadmap as a proper visual horizontal timeline with connecting lines.
- Use color-coded priority indicators (Agora, Próximo, Evolução, Escala) with glowing effects.
- Enhance the "Cruzamento das Perspectivas" grid with distinctive icons and better spatial separation.

### 5. Client Experience (Hidden Client)
- Create a clear visual split-screen comparison (Intent vs. Reality) using distinct card styles.

## Technical Details
- Use Framer Motion (already available via `framer-motion` package) for entrance animations.
- Leverage Tailwind `backdrop-blur` and `bg-opacity` for consistent glassmorphism.
- Keep the pure white/slate palette but add controlled magenta (#ff0a54) accents for guidance.
- Ensure all images/icons are high-resolution or vector-based.

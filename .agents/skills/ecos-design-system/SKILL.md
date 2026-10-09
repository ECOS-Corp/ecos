---
name: ecos-design-system
description: Preserve and extend the Ecos Desenvolvimento visual identity, interface patterns, responsive behavior, and Portuguese brand voice. Use for any UI, page, component, content, or styling change in the Ecos institutional Angular project.
---

# Ecos Design System

Maintain a coherent premium technology identity across the Ecos website. Work with the existing Angular structure and reuse its tokens and patterns before introducing new ones.

## Required workflow

1. Read [references/design-system.md](references/design-system.md) before changing visual styles, layout, components, motion, or responsive behavior.
2. Read [references/content-guide.md](references/content-guide.md) when creating or editing visitor-facing text.
3. Inspect `src/styles.scss` and `src/app/app.component.scss` for the current implementation before editing.
4. Prefer the existing CSS custom properties and component classes. Add a token only when no existing semantic token fits.
5. Keep the experience as a responsive, single-scroll institutional page unless the user explicitly changes that product decision.
6. Run `npm run build` after implementation. Treat Angular template errors, budget failures, and broken responsive rules as incomplete work.

## Invariants

- Keep blue as the primary brand signal, paired with deep navy, cool neutrals, and white.
- Preserve the contrast between dark immersive areas and spacious light editorial areas.
- Use Manrope for display typography and DM Sans for body/interface copy.
- Favor large editorial headings, restrained geometry, thin borders, pill CTAs, and subtle motion.
- Do not introduce generic gradients, excessive shadows, glass effects, or unrelated accent colors.
- Maintain keyboard accessibility, semantic HTML, visible focus states, and reduced-motion support.
- Never invent client names, awards, metrics, testimonials, or business capabilities.

The repository wiki at `docs/wiki/README.md` is the human-facing source of truth. When a deliberate design-system decision changes, update both the implementation and the relevant wiki page in the same task.

# Visual rules

## Foundations

The visual concept is **technology with human resonance**. It should feel precise and contemporary, but never cold. The signal/ripple geometry represents an idea creating successive impact.

### Core palette

| Role | Token | Value | Typical use |
| --- | --- | --- | --- |
| Ink | `--ink` | `#07162d` | Text and deep backgrounds |
| Primary | `--blue` | `#1167e8` | Brand, links, primary actions |
| Primary dark | `--blue-dark` | `#0755ca` | Contrast on light elements |
| Paper | `--paper` | `#f7f9fc` | Light section background |
| Muted | `--muted` | `#53647b` | Supporting copy |
| Line | `--line` | `rgba(7,22,45,.12)` | Dividers and quiet borders |

Use `#08162d` or `#0b1b35` for immersive dark sections. Use lighter blue tints only as supporting fields. New colors must have a semantic role and accessible contrast.

### Typography

- Display: Manrope, weights 600–800, tight tracking between `-.04em` and `-.075em`.
- Body and interface: DM Sans, weights 400–700.
- Major headings: fluid `clamp()` sizing, compact line height around `.9–1.05`.
- Eyebrows: uppercase, 12px, bold, tracking around `.14em`.
- Body copy: 16–20px with line height around `1.6–1.7`.

### Space and layout

- Main container: maximum 1180px with 24px desktop and 16px mobile gutters.
- Desktop section spacing: approximately 130–150px vertically.
- Mobile section spacing: approximately 90px vertically.
- Use asymmetric grids to create editorial rhythm. Collapse to one column below 820px.
- Avoid card grids when a list, sequence, or open editorial composition communicates better.

## Components

### Brand

The current inline SVG symbol uses concentric open curves and a point. Keep its stroke rounded and render it in the current text color. The wordmark is lowercase `ecos`, with `desenvolvimento` as a small uppercase descriptor.

Replace the temporary mark only when official logo files are supplied. Do not redraw an official asset from memory.

### Buttons

Primary actions are pill-shaped, bold, and use an up-right arrow. They should have generous horizontal padding and a subtle lift on hover. Keep one dominant action per visual region.

### Section headings

Pair a numbered uppercase eyebrow with a large two-line heading. Use blue to emphasize only the meaningful phrase, not arbitrary words.

### Lists

Services use full-width divided rows rather than isolated cards. Process steps use a numbered vertical sequence. Both patterns should preserve ample whitespace and clear alignment.

## Motion and interaction

- Motion should explain hierarchy or reinforce the echo concept.
- Use 200–500ms transitions for direct interaction.
- Ambient animation may be slower, around 5 seconds.
- Avoid parallax and constant decorative movement.
- Disable nonessential animation under `prefers-reduced-motion: reduce`.

## Responsive and accessibility checks

- Test visual hierarchy at 375px, 768px, and 1280px widths.
- Keep tap targets at least 44px high where practical.
- Navigation must remain usable without hover.
- Decorative SVGs must be hidden from assistive technology.
- Keep headings in logical order and links descriptive.
- Check text contrast, overflow, wrapping, and sticky behavior after every layout change.

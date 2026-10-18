# Zakhar Dolozhevskiy - CV site

Personal CV site and print-ready resume sources.

- `site/` - the website (plain HTML/CSS/JS, no build step). Change the accent color via `--accent` in `site/style.css`.
- `theme-1/`, `theme-2/` - print/PDF CV layouts.
- `export/` - exported PDF versions.
- `data/` - source resume content (`cv.md`, `master.yaml`, notes).

Deployed to GitHub Pages from `site/` via GitHub Actions (`.github/workflows/pages.yml`).

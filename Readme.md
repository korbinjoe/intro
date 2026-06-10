# Korbin Joe

Personal intro site with a terminal shell interface. Type commands in the browser (e.g. `help`, `about`, `teemai`) to explore content.

## Local preview

Requires [Deno](https://deno.com/).

```bash
# Clone the repo and enter the project directory
cd intro

# Start the dev server (hot-reloads on file changes)
deno task dev
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

Or run directly:

```bash
deno run --watch --allow-read --allow-net main.ts
```

## Project structure

| File | Description |
|------|-------------|
| `index.html` | Page markup and terminal interaction logic |
| `main.ts` | Deno static file server |
| `favicon.svg` | Site icon |

## Deployment

Hosted on Deno Deploy. `main.ts` serves `index.html` and `favicon.svg`.

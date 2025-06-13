# 🕸️ .voidrc's Shadow Archive

Welcome to the **source code** of [shadowlab.dev](https://shadowlab.dev) (or wherever your Netlify domain points). This is the **personal knowledge base**, **write-up vault**, and **hacking laboratory** of `.voidrc` — a cybersecurity student spelunking through Red Teaming, malware dev, system internals, and whatever else seems dangerous and fun.

## 📦 Built With

- **[Astro](https://astro.build/)** – Static site generator for those who want speed, structure, and minimal JavaScript cult vibes.
- **Markdown** – For easy, readable notes, because `.voidrc` has things to say and prefers plain text rebellion.
- **Netlify** – Continuous deployment tied to this GitHub repo like a lifeline to the void.

## 🧠 Structure

```
/  
├── public/          # Static files (favicons, fonts, etc.)  
├── src/  
│   ├── assets/      # Header Images 
│   ├── content/     # All content in markdown 
│   │   ├── notes/   # General knowledge, concepts, and rants  
│   │   ├── writeups/# CTFs, labs, targets conquered or broken  
│   │   └── projects/# Code, tools, weird experiments  
│   ├── layouts/     # Page layouts and templates
│   ├── pages/       # Astro pages and routes
│   ├── styles/      # Global styles and CSS
│   ├── components/  # Astro & UI components
│   ├── content.config.ts # Content configuration
│   ├── consts.ts    # Global constants
│   └── env.d.ts     # TypeScript environment declarations
├── astro.config.mjs # Astro configuration
└── tsconfig.json    # TypeScript configuration
```

## 📤 Contributions?

Yes — *but read this like it's written in blood.*

If you've got notes, write-ups, or interesting cyber nonsense, feel free to PR. Just:
- Keep it original (no copy-pasta from other blogs)
- Credit sources if you're referencing tools or research
- Markdown only — `.voidrc` hates bloated formats

> ⚠️ This is not a platform for SEO garbage, clickbait, or generic tech tips. This is a digital fortress of curiosity, malice, and markdown.

## 🧪 Local Setup

If you're deranged enough to run this locally:

```bash
git clone https://github.com/voidrc/shadow-archive.git
cd shadow-archive
npm install
npm run dev
```

Visit `http://localhost:4321` to enter the void.

## 🕶️ Who Dis?

`.voidrc` is a cybersecurity student, red teamer-in-progress, and malware mechanic.  
This site is their shadow — part lab notebook, part trap, part archive.

> _"The internet forgets nothing. So I wrote everything down."_

---

## 🧨 License

MIT — because the source is open, but the secrets are hidden.

---

## 💳 Credit

This blog is based off of the lovely [Astro](https://docs.astro.build/en/getting-started/).

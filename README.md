<h1 align="center">
  <samp>🧪 React Boilerplate — The Last One You'll Ever Need</samp>
</h1>

<p align="center">
  <samp>
  A futuristic, pluggable, and highly configurable React boilerplate built for serious developers. Powered by Vite ⚡ and TypeScript 🧠, architected with Feature-Sliced Design 🏗️, styled with SCSS 🎨, and ready for anything: CSR, SSR, localization, state management, component libraries—you name it.
  </samp>
</p>

<div align="center">
  <img alt="Version" src="https://img.shields.io/github/package-json/v/Warnigo/react-boilerplate/main?style=flat&label=version&labelColor=%2320222d&color=%23e8e8e4&logo=tag&logoColor=%23ffffff">
  <img alt="License" src="https://img.shields.io/github/license/Warnigo/react-boilerplate?style=flat&label=license&labelColor=%2320222d&color=%23e8e8e4&logo=github&logoColor=%23ffffff">
  <img alt="React" src="https://img.shields.io/badge/framework-react-20222d?style=flat&logo=react&logoColor=%23ffffff&labelColor=%2320222d&color=%23e8e8e4">
  <img alt="SCSS" src="https://img.shields.io/badge/styles-scss-20222d?style=flat&logo=sass&logoColor=%23ffffff&labelColor=%2320222d&color=%23e8e8e4">
  <img alt="FSD" src="https://img.shields.io/badge/architecture-FSD-20222d?style=flat&logo=hexagon&logoColor=%23ffffff&labelColor=%2320222d&color=%23e8e8e4">
</div>

---

## 🚀 Why This Boilerplate?

This is not just another boilerplate — it's your **project starter, tech stack playground, and productivity multiplier**. From tiny side projects to scalable enterprise apps, this template adapts to **your workflow**, not the other way around.

### 🔧 Generator-powered setup

When you run `npx react-boilerplate` (or `yarn create` / `pnpm create`), you're prompted to customize everything:

- **Framework**: React (default), Vue (coming soon)
- **Component library**: Ant Design, MUI, Shadcn-UI, or none
- **State manager**: Redux Toolkit, Zustand, Jotai, or Context API
- **Localization**: i18next, next-international, or skip it
- **Routing**: React Router or minimal custom router
- **Rendering**: CSR (default), SSR (via Vite SSR adapter or Next.js)
- **Testing**: Vitest, React Testing Library, Cypress
- **Linter/Formatter**: ESLint, Prettier (with Tailwind plugin support)
- **Package manager**: NPM / Yarn / PNPM (your choice)

Everything is **modular**, **tree-shakable**, and follows **clean architecture (DDD + FSD)**.

---

## 🌍 Tech Stack Overview

| Category            | Stack                                  |
|---------------------|----------------------------------------|
| Core                | React + TypeScript + Vite              |
| Architecture        | Feature-Sliced Design (FSD)            |
| Styling             | SCSS Modules + CSS Variables           |
| State Management    | Customizable: Zustand, Redux, Jotai    |
| UI Library          | Selectable: Ant Design, MUI, etc.      |
| Localization        | Optional: i18next, next-international  |
| Code Quality        | ESLint, Prettier, Commitlint, Husky    |
| Testing             | Vitest, React Testing Library          |
| CI/CD               | GitHub Actions + Git Flow structure    |

---

## 💡 Key Features

- 🧩 **Pluggable architecture** — Turn features on/off during setup.
- 🛠 **Developer experience first** — Autocomplete, strict typing, instant feedback.
- ✨ **Beautiful defaults** — Thoughtful ESLint + Prettier config.
- 🌐 **i18n-ready** — Full localization support out of the box.
- 🔄 **SSR & CSR flexibility** — Choose rendering strategy per project.
- 🚦 **Optimized caching** — React Query with sane defaults.

---

## 📦 Install (soon)

```bash
npx react-boilerplate
# or
yarn create react-boilerplate
# or
pnpm create react-boilerplate
```
You’ll be guided through a beautiful CLI to configure your ideal stack 🧙‍♂️

## 📁 Project Structure
The project uses Feature-Sliced Design (FSD) — a modular and layered architecture to improve maintainability, separation of concerns, and scalability.
Folder structure is inspired by modern frontend domain-driven design (DDD):
```bash
src/
├── shared/        # UI components, lib utils, types
├── entities/      # Core domain models
├── features/      # Business logic units (auth, cart, etc)
├── widgets/       # Composed UI blocks
├── pages/         # Routed screens
├── app/           # App init and layout
```
## 👨‍💻 For Contributors
You're welcome to extend the CLI, add adapters (e.g., Vue support), or improve the default templates.
> ✅ Built to scale, yet elegant to start small.

## 🔮 Coming Soon
create-react-fsd CLI publishing to NPM

- Auto-generated docs using typedoc
- VSCode extension to generate layers/snippets
- Plug-and-play component generators (like Plop.js)
- Template-based monorepo version

## 🧠 Credits
Crafted with ❤️ by @Warnigo
Inspired by `create-next-app`, `vite`, `feature-sliced`, and `T3 Stack`.

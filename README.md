# 🧬 Cellula Kinetics

Interactive cellular dynamics visualizer exploring how cells move, grow, and interact through real-time simulation and animation.

---

## ✨ Live Demo

[→ Open Visualizer](https://replit.com/@mrentomologist/Cellula-Kinetics)

---

## 🎯 What It Does

- 🔬 Watch cells evolve in real-time simulation
- 📊 Visualize cellular kinetics and molecular interactions
- 🎮 Interactive controls for simulation parameters
- ⚡ Dynamic population modeling and behavior analysis

---

## 🚀 Quick Start

```bash
pnpm install
pnpm --filter @workspace/cellula-kinetics-app run dev
```

---

## 🛠️ Tech Stack

```
Frontend  → React 19 + Vite
Backend   → Express.js + Node.js
Database  → PostgreSQL + Drizzle ORM
Language  → TypeScript
Styling   → Tailwind CSS + Framer Motion
```

---

## 📁 Project Structure

```
artifacts/
  ├── api-server/              Express REST API backend
  └── cellula-kinetics-app/    React visualization application

lib/
  ├── db/                      Database schemas & ORM layer
  └── integrations/            External service connectors

scripts/                        Build utilities & CLI tools
```

---

## 💻 Available Commands

| Command | Purpose |
|---------|---------|
| `pnpm install` | Install all dependencies |
| `pnpm run build` | Build all packages |
| `pnpm run typecheck` | Run TypeScript type checking |
| `pnpm --filter @workspace/cellula-kinetics-app run dev` | Start dev server for visualization app |
| `pnpm --filter @workspace/api-server run dev` | Start development API server |

---

## ⚙️ Development

### Starting the Application

**Frontend (Visualization):**
```bash
pnpm --filter @workspace/cellula-kinetics-app run dev
```

**Backend (API Server):**
```bash
pnpm --filter @workspace/api-server run dev
```

### Building for Production

```bash
pnpm run build
```

### Type Checking

```bash
pnpm run typecheck
```

---

## 📦 Monorepo Setup

This project uses **pnpm workspaces** with a shared dependency catalog:

- **Workspace packages** in `artifacts/`, `lib/`, and `scripts/`
- **Catalog versioning** for consistent dependency versions
- **Supply-chain security** with 1-day minimum release age policy

---

## 🔐 Security

This project includes supply-chain attack defenses:
- Minimum 1-day release age for npm packages
- Trusted package allowlist (e.g., `@replit/*`, `stripe-replit-sync`)
- Platform-specific dependency optimization for Replit environment

---

## 📝 License

MIT

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

---

## 📞 Support

For questions or issues, visit the [GitHub Issues page](https://github.com/Draven-Solis/Cellula-Kinetics/issues).

# 🧭 Self-Coaching Platform Monorepo

This is a **monorepo** for the Self-Coaching Platform, managed with **pnpm** + **Turborepo**.

## 📂 Structure
- `apps/` → Frontend apps + API Gateway
- `services/` → Backend microservices
- `packages/` → Shared libraries (UI kit, utils, etc.)
- `docs/` → Architecture + API specifications

## 🚀 Commands
- `pnpm install` → install all dependencies
- `pnpm dev` → run all apps/services in dev mode
- `pnpm build` → build all workspaces
- `pnpm lint` → lint codebase
- `pnpm test` → run tests
- `pnpm format` → run Prettier across repo
- `pnpm clean:all` → remove node_modules + lockfiles

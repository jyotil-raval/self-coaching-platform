# Architecture Overview - Self-Coaching Platform

## 1. Monorepo Structure

We are using a **monorepo** with Turborepo and pnpm workspaces for efficient dependency management and fast development.
self-coaching-platform/
├── backend/ # All backend services (NestJS)
├── frontend/ # All frontend apps (React + Vite)
├── infra/ # Infrastructure: Docker, K8s, Terraform
├── scripts/ # Helper scripts
├── docs/ # Documentation
└── package.json # Root devDependencies & Turborepo scripts

---

## 2. Backend Services

| Service      | Purpose                             | Port | Notes                               |
| ------------ | ----------------------------------- | ---- | ----------------------------------- |
| api-gateway  | Entry point, request routing        | 4000 | NestJS, handles auth + chat routing |
| auth-service | Handles authentication & OAuth      | 4001 | NestJS, JWT, OAuth, OTP             |
| chat-service | LLM request handling & prompt logic | 4002 | NestJS, manages provider adapters   |
| shared       | Shared utilities / libraries        | N/A  | Pure TS, reusable across services   |

---

## 3. Frontend Apps

| App             | Purpose                      | Notes                                      |
| --------------- | ---------------------------- | ------------------------------------------ |
| web-app         | Main user-facing application | React + Vite, integrates with backend APIs |
| admin-dashboard | Admin / monitoring tools     | React + Vite                               |
| shared-ui       | Shared UI components         | Buttons, forms, modals, etc.               |

---

## 4. Key Architecture Decisions

- **Monorepo**: Single repo for all backend, frontend, and shared packages.
- **TypeScript everywhere**: Root `tsconfig.base.json` for consistent configuration.
- **Workspace devDependencies**: Tools like `ts-node` (backend) or `vite` (frontend) defined per workspace.
- **Turborepo**: Handles dev/build pipelines (`dev`, `build`, `lint`) efficiently.
- **pnpm**: Fast installs and workspace symlinking.

---

## 5. Future Extensions

- Microservices: Each backend service can be deployed independently.
- Micro frontends: Future modularization of frontend apps.
- Multi-tenant support.
- Additional LLM provider integrations.

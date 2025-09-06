# Self-Coaching Platform

Monorepo for Self-Coaching Platform including backend services and frontend apps.

## Structure

- `backend/` → API Gateway, Auth Service, Chat Service, Shared libs
- `frontend/` → Web App, Admin Dashboard, Shared UI
- `infra/` → Docker, Terraform, Kubernetes
- `scripts/` → automation scripts
- `docs/` → architecture, ADRs, API specs

## Getting Started

```bash
# Install dependencies
pnpm install

# Run dev mode for all workspaces
pnpm dev

# Format all code
pnpm format
```

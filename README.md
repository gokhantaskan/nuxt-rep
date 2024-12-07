# Full-Stack Web App Template

A full-stack web application template with database integration and modern tooling.

## Tech Stack

- **Framework:** Nuxt 3
- **Database:** PostgreSQL (via Docker and Drizzle ORM)
- **Styling:** TailwindCSS
- **Form Validation:** VeeValidate + Zod
- **Error Tracking:** Sentry
- **Package Manager:** pnpm

## Prerequisites

1. Node.js >= 20
2. pnpm 9.15.0 or higher
3. [mkcert](https://github.com/FiloSottile/mkcert) for local HTTPS development
4. [act](https://github.com/nektos/act) for running GitHub Actions locally
5. Required accounts and API keys:
   - Sentry environment variables
   - Docker and Docker Compose for running PostgreSQL database locally

## Installation

1. Enable pnpm:

```bash
corepack enable
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Then edit `.env` file with your API keys and credentials.

4. Start development server:

```bash
pnpm dev
```

## License

MIT

## Author

Gökhan Taşkan

---

For more information about Nuxt 3, check out the [Nuxt 3 documentation](https://nuxt.com/docs).

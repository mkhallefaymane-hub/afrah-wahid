# Afrah Wahid - Moroccan Wedding & Events Planner

## Overview

A bilingual (Arabic/French) website for a Moroccan wedding and events planning business. The application features a public-facing marketing site with service information, gallery, packages, and contact form, plus a password-protected admin panel to view submitted inquiries. The design embraces Moroccan cultural aesthetics with Zellige patterns, warm color palettes (emerald green, terracotta, gold), and Arabic-first typography.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for page transitions

### Bilingual Routing Pattern
Routes are prefixed with language codes (`/ar` for Arabic, `/fr` for French). The root path redirects to Arabic. Each page component receives a `lang` prop to conditionally render content and apply RTL styling for Arabic.

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Build Tool**: Vite for development, esbuild for production bundling
- **API Pattern**: Simple REST endpoints defined in `shared/routes.ts` with Zod schemas for validation

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema**: Single `messages` table for contact form submissions
- **Migrations**: Drizzle Kit for schema push (`npm run db:push`)

### Authentication
- Admin panel uses simple password authentication via `ADMIN_PASSWORD` environment variable
- Password sent in `x-admin-password` header for API calls
- No session management; password checked on each request

### Project Structure
```
client/           # React frontend
  src/
    components/   # Shared components including Layout
    pages/        # Route pages (Home, Services, Gallery, etc.)
    hooks/        # Custom hooks for API calls
    lib/          # Utilities and query client
server/           # Express backend
  routes.ts       # API endpoint definitions
  storage.ts      # Database operations
  db.ts           # Drizzle/PostgreSQL connection
shared/           # Shared between client/server
  schema.ts       # Drizzle table definitions
  routes.ts       # API route contracts with Zod
```

## External Dependencies

### Database
- **PostgreSQL**: Required via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database access with `drizzle-orm` and `drizzle-kit`

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `ADMIN_PASSWORD`: Password for admin panel access (defaults to `admin123`)

### Third-Party Services
- **Google Fonts**: Cairo (Arabic text), Playfair Display (French headings), Inter (body text)
- No external APIs, payment processing, or email services configured

### UI Component Library
- **shadcn/ui**: Full component set installed via Radix UI primitives
- Components located in `client/src/components/ui/`
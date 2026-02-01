# replit.md

## Overview

This is an Arabic-language car insurance website ("تأمين السيارات الشامل" - Comprehensive Car Insurance). The application is a full-stack TypeScript project with a React frontend and Express backend. It currently serves as an informational/marketing site with pages for home, privacy policy, security information, and cookie policy.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **Build Tool**: Vite with React plugin
- **Language/Direction**: Arabic (RTL - right-to-left layout)

### Backend Architecture
- **Framework**: Express.js 5 with TypeScript
- **Server**: Node.js with HTTP server
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: Vite dev server integration with HMR support
- **Production**: Static file serving from built assets

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - shared between frontend and backend
- **Current Storage**: In-memory storage implementation (`MemStorage` class) with interface for easy database swap
- **Database Ready**: Configured for PostgreSQL via `DATABASE_URL` environment variable
- **Migrations**: Drizzle Kit for schema migrations (`db:push` command)

### Project Structure
```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/ui/  # Shadcn UI components
│   │   ├── pages/          # Route pages
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Data storage interface
│   └── vite.ts      # Vite dev server setup
├── shared/          # Shared code between frontend/backend
│   └── schema.ts    # Database schema and types
└── migrations/      # Drizzle database migrations
```

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets`

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for PostgreSQL

### UI Framework
- **Radix UI**: Complete primitive component suite (dialogs, menus, forms, etc.)
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

### Data & Forms
- **Drizzle ORM**: Type-safe database queries
- **Drizzle Zod**: Schema validation integration
- **Zod**: Runtime type validation
- **React Hook Form**: Form state management

### Build & Development
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development

### Fonts
- **Google Fonts**: Cairo and Tajawal (Arabic fonts loaded via CDN)
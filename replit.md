# JeniDub Tech Education Platform

## Overview

JeniDub is a tech education platform focused on teaching professionals to "Think Like a Programmer, No Code Required." The platform features a marketing homepage promoting an upcoming YouTube series that teaches four core thinking skills: decomposition, critical thinking, effective communication, and AI literacy. The site is designed with a modern, approachable aesthetic inspired by course platform designs, using the brand's "Cali Chill" philosophy—patient, approachable, and practical.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**
- **Framework**: React 18+ with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Bundler**: Vite with custom configuration for monorepo structure
- **State Management**: TanStack Query (React Query) for server state
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design tokens

**Component Structure**
The application uses a component-based architecture with clear separation of concerns:
- Page-level components in `client/src/pages/`
- Reusable UI components in `client/src/components/`
- Primitive UI components from shadcn/ui in `client/src/components/ui/`
- Component examples for testing/documentation in `client/src/components/examples/`

**Design System**
Custom design system implemented through Tailwind configuration:
- Brand colors: Pacific Teal (#008B8B), Warm Coral (#FF6B6B), Sage Green (#9CAF88)
- Custom spacing, border radius, and elevation utilities
- CSS custom properties for theming support
- Design guidelines documented in `design_guidelines.md` for consistent visual language

**Key Architectural Decisions**
- Monorepo structure with shared types between client and server (`shared/` directory)
- Path aliases configured for cleaner imports (`@/`, `@shared/`, `@assets/`)
- Component library follows atomic design principles (atoms, molecules, organisms)
- All components are TypeScript-first with proper type definitions

### Backend Architecture

**Server Framework**
- **Runtime**: Node.js with Express.js
- **Build Tool**: esbuild for production bundling
- **Development**: tsx for TypeScript execution in development mode
- **Architecture Pattern**: RESTful API design (currently minimal implementation)

**Server Structure**
- Express server setup in `server/index.ts` with middleware configuration
- Route registration in `server/routes.ts` (currently placeholder for future API endpoints)
- Storage abstraction layer in `server/storage.ts` providing in-memory storage interface
- Custom Vite integration for HMR and development server in `server/vite.ts`

**Storage Layer**
The application implements a storage interface pattern for future database integration:
- `IStorage` interface defines CRUD operations
- `MemStorage` provides in-memory implementation (currently used)
- Designed to be swapped with database implementation (Drizzle ORM configured but not yet integrated)
- User entity schema defined in `shared/schema.ts` as the data model example

**Key Architectural Decisions**
- Storage interface abstraction allows switching between in-memory and persistent storage without changing application code
- Middleware pipeline includes JSON parsing with raw body preservation for webhook support
- Request/response logging middleware for API observability
- Server-side rendering setup prepared but currently serving SPA

### External Dependencies

**UI Component Libraries**
- **Radix UI**: Headless UI primitives for accessible components (accordion, dialog, dropdown, select, etc.)
- **shadcn/ui**: Pre-built component system built on Radix UI with Tailwind styling
- **Lucide React**: Icon library for consistent iconography

**Database and ORM**
- **Drizzle ORM**: TypeScript-first ORM configured for PostgreSQL
- **Neon Database**: Serverless PostgreSQL provider via `@neondatabase/serverless`
- **Drizzle Kit**: Schema management and migrations
- **Schema validation**: Drizzle-Zod for runtime schema validation

Note: Database configuration is present but not yet integrated with the storage layer. The application currently uses in-memory storage.

**Development Tools**
- **Replit Plugins**: Custom Vite plugins for Replit integration (cartographer, dev banner, runtime error overlay)
- **React Hook Form**: Form state management with `@hookform/resolvers` for validation
- **date-fns**: Date manipulation utilities

**Styling and Design**
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with Autoprefixer
- **class-variance-authority**: Type-safe variant styling for components
- **clsx** and **tailwind-merge**: Utility for conditional className composition

**Future Integration Points**
- User authentication system (schema defined but not implemented)
- YouTube API integration for series launch
- Consulting booking system
- Newsletter/email capture (likely through external service)
- Analytics and tracking
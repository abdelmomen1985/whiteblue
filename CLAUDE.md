# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 Arabic news website called "أبيض X أزرق" (White X Blue). The site features article publishing, categorization, and a CMS-driven content management system with GraphQL integration.

## Common Commands

### Development
```bash
npm run dev        # Start development server on port 5000
npm run build      # Build for production
npm run start      # Start production server on port 5000
npm run lint       # Run Next.js linting
```

### GraphQL Schema Generation
```bash
npm run genql:gen  # Generate GraphQL client from API endpoint
```

The project uses GenQL for type-safe GraphQL queries. The schema is automatically generated from the API endpoint during build process (`prebuild` script).

## Architecture

### Core Structure
- **Next.js 14 App Router**: Uses the new app directory structure
- **Language**: Arabic (RTL) with Arabic content
- **Styling**: Tailwind CSS with custom Arabic design system
- **Data**: GraphQL API with GenQL type-safe client
- **UI Components**: Custom components with shadcn/ui base

### Key Directories
- `app/` - Next.js 14 app router pages and layouts
- `components/` - Reusable UI components
- `lib/` - Core utilities and GraphQL client setup
- `lib/queries/` - GraphQL query functions organized by feature
- `src/generated/genql/` - Auto-generated GraphQL types and client

### GraphQL Integration
- **API Endpoint**: `https://admin.abicyxazra2.com/graphql`
- **Client**: Located in `lib/graphql-client.ts`
- **Authentication**: Uses Bearer token authentication
- **Caching**: Disabled for real-time data (`revalidate: 0`)

### Key Features
- Article management with categories and tags
- Search functionality
- Featured articles and carousels
- Contact form integration
- Responsive Arabic/RTL design
- SEO optimization

### Component Organization
- `components/ui/components/` - Feature-specific components (articles, sidebar, etc.)
- `components/` - Global layout components (Header, Navigation, etc.)
- `app/` - Page components following Next.js 14 conventions

### Data Layer
- All GraphQL queries are organized in `lib/queries/` by feature
- Type-safe operations using GenQL generated types
- Server-side data fetching with Next.js 14 patterns

### Styling Notes
- Uses custom CSS variables for consistent theming
- Brand colors: Blue gradient (`#4381df` to `#3455a6`)
- Responsive design with Arabic text handling
- Font Awesome icons for UI elements

## Development Notes

- The site uses Arabic language and RTL layout
- GraphQL schema is regenerated before each build
- All API calls include authentication headers
- Image optimization is disabled in Next.js config for better compatibility
- The project includes legacy static files in `src/` directory alongside the new Next.js structure
# Genql Setup and Usage Guide

## Overview

Genql is a TypeScript GraphQL client that generates type-safe code from your GraphQL schema. This project has been configured with genql to provide a fully typed GraphQL client experience.

## What's Included

This setup includes:
- `@genql/cli` - Command-line tool for generating the client
- `@genql/runtime` - Runtime library for the generated client
- Generated TypeScript client in `src/generated/genql/`
- Example GraphQL schema (`src/schema/schema.graphql`)
- Type-safe client functions (`lib/graphql-client.ts`)
- React component example (`components/UserList.tsx`)

## Quick Start

### 1. Update Your GraphQL Endpoint

Edit `lib/graphql-client.ts` and update the client URL:

```typescript
const client = createClient({
  url: 'https://your-graphql-endpoint.com/graphql', // Replace with your endpoint
  headers: {
    // Add authentication headers if needed
    // 'Authorization': 'Bearer your-token-here',
    'Content-Type': 'application/json',
  },
})
```

### 2. Generate Client from Your Schema

If you have a live GraphQL endpoint:

```bash
npx genql --endpoint https://your-api.com/graphql --output ./src/generated/genql --sort --verbose
```

If you have a schema file:

```bash
npx genql --schema ./path/to/your/schema.graphql --output ./src/generated/genql --sort --verbose
```

### 3. Use the Generated Client

Import and use the type-safe functions:

```typescript
import { getUserById, getAllUsers, createUser } from './lib/graphql-client'

// Fetch a user with full type safety
const user = await getUserById('123')
console.log(user?.username) // TypeScript knows this is a string | undefined

// Create a new user
const newUser = await createUser({
  username: 'johndoe',
  email: 'john@example.com',
  firstName: 'John',
  lastName: 'Doe'
})
```

## Schema-First Development

### 1. Update Your Schema

Edit `src/schema/schema.graphql` to match your GraphQL API:

```graphql
type Query {
  # Add your queries here
  myCustomQuery(arg: String!): MyType
}

type MyType {
  id: ID!
  name: String!
  # Add your fields here
}
```

### 2. Regenerate the Client

After updating your schema:

```bash
npm run genql
```

This will regenerate all TypeScript types and client code.

## Advanced Usage

### Custom Scalar Types

If your GraphQL schema uses custom scalars, configure them in `genql.config.js`:

```javascript
module.exports = {
  schema: './src/schema/schema.graphql',
  output: './src/generated/genql',
  scalarTypes: {
    DateTime: 'string',
    JSON: 'any',
    UUID: 'string',
    Upload: 'File',
  },
}
```

### Authentication

Add authentication headers to your client:

```typescript
const client = createClient({
  url: 'https://your-api.com/graphql',
  headers: {
    'Authorization': `Bearer ${getAuthToken()}`,
    'Content-Type': 'application/json',
  },
})
```

### Complex Queries

Genql allows you to build complex, nested queries with full type safety:

```typescript
const result = await client.query({
  user: {
    __args: { id: '123' },
    id: true,
    username: true,
    posts: {
      id: true,
      title: true,
      comments: {
        id: true,
        content: true,
        author: {
          username: true,
        },
      },
    },
  },
})

// result.user is fully typed!
```

### Using with React Hooks

Create custom hooks for your GraphQL operations:

```typescript
import { useState, useEffect } from 'react'
import { getAllUsers, type User } from '../lib/graphql-client'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getAllUsers()
      .then(setUsers)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { users, loading, error }
}
```

## Directory Structure

```
whiteblue/
├── src/
│   ├── generated/
│   │   └── genql/           # Generated client code (don't edit manually)
│   │       ├── index.ts
│   │       ├── schema.ts
│   │       ├── types.ts
│   │       └── runtime/
│   └── schema/
│       └── schema.graphql   # Your GraphQL schema
├── lib/
│   └── graphql-client.ts    # Type-safe client functions
├── components/
│   └── UserList.tsx         # Example React component
└── genql.config.js          # Genql configuration
```

## Available Scripts

- `npm run genql` - Generate client from schema
- `npm run genql:watch` - Watch for schema changes and regenerate

## Best Practices

### 1. Version Control

- **Include:** Generated files in `src/generated/genql/`
- **Exclude:** `node_modules/` (already in .gitignore)

### 2. Type Safety

Always use the generated types:

```typescript
import type { User, CreateUserInput } from '../src/generated/genql'

function handleUser(user: User) {
  // TypeScript will enforce the correct structure
}
```

### 3. Error Handling

Wrap GraphQL calls in try-catch blocks:

```typescript
try {
  const result = await client.query({ /* ... */ })
  return result
} catch (error) {
  console.error('GraphQL Error:', error)
  throw new Error('Failed to fetch data')
}
```

### 4. Query Optimization

Only request the fields you need:

```typescript
// Good: Only request needed fields
const users = await client.query({
  users: {
    id: true,
    username: true,
    // Don't request heavy fields like 'posts' unless needed
  },
})

// Avoid: Using everything helper unless necessary
const users = await client.query({
  users: everything, // This requests ALL fields
})
```

## Common Issues

### Schema Mismatch

If you get TypeScript errors after changing your schema:

1. Regenerate the client: `npm run genql`
2. Restart your TypeScript server in your IDE
3. Check that your schema file is valid GraphQL

### Network Errors

If queries fail with network errors:

1. Verify your GraphQL endpoint URL
2. Check CORS settings on your server
3. Ensure authentication headers are correct

### Type Errors

If you see unexpected TypeScript errors:

1. Make sure you're importing types from the generated client
2. Check that your schema matches your server's actual schema
3. Regenerate the client after any schema changes

## Integration with Other Tools

### Apollo Client Migration

If migrating from Apollo Client, genql queries map roughly to Apollo's `useQuery`:

```typescript
// Apollo Client
const { data, loading, error } = useQuery(GET_USERS)

// Genql
const { users, loading, error } = useUsers() // Custom hook
```

### GraphQL Code Generator

Genql is an alternative to GraphQL Code Generator with a different API approach. Both generate type-safe clients, but genql uses a programmatic query building approach rather than string templates.

## Support

For more information:
- [Genql Documentation](https://genql.dev/)
- [GraphQL Documentation](https://graphql.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
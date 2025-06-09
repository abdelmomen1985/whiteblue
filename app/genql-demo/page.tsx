"use client";

import { useState } from "react";
import ArticleList from "../../components/ArticleList";

export default function GenqlDemoPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "demo" | "examples">(
    "overview"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Genql GraphQL Client Demo
          </h1>
          <p className="text-xl text-gray-600">
            Type-safe GraphQL client with automatic code generation
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg mb-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "demo", label: "Live Demo" },
            { id: "examples", label: "Code Examples" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "overview" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">What is Genql?</h2>

            <div className="space-y-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Genql is a TypeScript GraphQL client that generates type-safe
                  code from your GraphQL schema. It provides a programmatic way
                  to build GraphQL queries with full TypeScript support.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>100% Type Safety - No more runtime errors from typos</li>
                  <li>
                    IntelliSense Support - Auto-completion for all fields and
                    operations
                  </li>
                  <li>
                    Automatic Code Generation - Generate client from schema or
                    endpoint
                  </li>
                  <li>
                    Tree-shakable - Only bundle the queries you actually use
                  </li>
                  <li>
                    No Runtime Dependencies - Generated code has minimal
                    footprint
                  </li>
                  <li>
                    Framework Agnostic - Works with React, Vue, Angular, or
                    vanilla JS
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Setup Complete!</h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        <strong>
                          Genql has been successfully added to your project!
                        </strong>
                      </p>
                      <ul className="mt-2 text-sm text-green-600 list-disc list-inside">
                        <li>@genql/cli and @genql/runtime installed</li>
                        <li>
                          Generated client available in src/generated/genql/
                        </li>
                        <li>Example schema and API route created</li>
                        <li>Type-safe client functions ready to use</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Project Structure
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="text-sm text-gray-800">
                    {`whiteblue/
├── src/
│   ├── generated/genql/     # Generated client (don't edit)
│   └── schema/schema.graphql # Your GraphQL schema
├── lib/graphql-client.ts    # Type-safe client functions
├── components/UserList.tsx  # Example React component
├── app/api/graphql/         # Example GraphQL server
└── genql.config.js         # Genql configuration`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "demo" && (
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold mb-2">Live Demo</h2>
              <p className="text-gray-600">
                This demo shows genql in action with a live GraphQL API. The API
                is running at
                <code className="bg-gray-100 px-2 py-1 rounded ml-1">
                  http://34.56.54.244:48085/graphql
                </code>
              </p>
            </div>

            <ArticleList />

            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold mb-2">Try it yourself:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>
                  Start the development server:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    npm run dev
                  </code>
                </li>
                <li>
                  Visit{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    http://34.56.54.244:48085/graphql
                  </code>{" "}
                  to see the GraphQL playground
                </li>
                <li>
                  Use the ArticleList component above to browse articles with
                  filtering and search
                </li>
                <li>All operations are fully type-safe thanks to genql!</li>
              </ol>
            </div>
          </div>
        )}

        {activeTab === "examples" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Code Examples</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Basic Query</h3>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-100">
                    {`import { client } from './lib/graphql-client'

// Fetch all articles with type safety
const result = await client.query({
  articles: {
    id: true,
    title: true,
    content: true,
    excerpt: true,
    slug: true,
    is_published: true,
    article_tags: {
      tags_id: {
        tag: true,
      }
    }
  }
})

// result.articles is fully typed!
console.log(result.articles[0].title) // TypeScript knows this is a string`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  2. Mutation with Variables
                </h3>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-100">
                    {`
// Create a new article
const newArticle = await client.mutation({
  create_articles_item: {
    __args: {
      data: {
        title: 'My New Article',
        content: 'Article content here...',
        slug: 'my-new-article',
        is_published: true
      }
    },
    id: true,
    title: true,
    content: true,
    slug: true,
    created_at: true
  }
})

// newArticle.create_articles_item is typed as articles
console.log(newArticle.create_articles_item.id)
`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  3. Custom Hook Example
                </h3>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-100">
                    {`import { useState, useEffect } from 'react'
import { getAllArticles, type articles } from './lib/graphql-client'

export function useArticles() {
  const [articles, setArticles] = useState<articles[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getAllArticles()
      .then(setArticles)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { articles, loading, error }
}

// Usage in component
function ArticleComponent() {
  const { articles, loading, error } = useArticles()
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  
  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  )
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  4. Regenerating the Client
                </h3>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-100">
                    {`# From a schema file
npm run genql

# From a live endpoint
npm run genql:endpoint

# Watch for changes (useful during development)
npm run genql:watch

# Generate from a custom endpoint
npx genql --endpoint https://api.example.com/graphql \\
          --output ./src/generated/genql \\
          --sort --verbose`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  5. Advanced Query Building
                </h3>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-100">
                    {`import { everything } from './src/generated/genql'

// Use conditional fields
const shouldIncludeTags = true
const result = await client.query({
  articles: {
    id: true,
    title: true,
    content: true,
    ...(shouldIncludeTags && {
      article_tags: {
        tags_id: {
          tag: true,
        }
      }
    })
  }
})

// Use the everything helper (fetches all fields)
const articleWithEverything = await client.query({
  articles_by_id: {
    __args: { id: '1' },
    ...everything
  }
})

// Chain multiple operations
const [articlesResult, categoriesResult] = await Promise.all([
  client.query({ articles: { id: true, title: true } }),
  client.query({ categories: { id: true, name: true } })
])`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

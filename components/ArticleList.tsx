import React, { useEffect, useState } from 'react';
import { client } from '../lib/graphql-client';

type Article = {
  id: string;
  title: string;
  content?: string;
  slug?: string;
  created_at?: string;
};

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Adjust this query based on your GraphQL schema
        const result = await client.query({
          articles: {
            id: true,
            title: true,
            content: true,
            slug: true,
            created_at: true,
          },
        });
        setArticles(result.articles || []);
      } catch (err: any) {
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (loading) return <div>Loading articles...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="space-y-4">
      {articles.length === 0 ? (
        <div>No articles found.</div>
      ) : (
        articles.map((article) => (
          <div key={article.id} className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            {article.content && <p className="text-gray-600 mt-2">{article.content}</p>}
            <div className="text-xs text-gray-400 mt-2">{article.created_at}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default ArticleList;

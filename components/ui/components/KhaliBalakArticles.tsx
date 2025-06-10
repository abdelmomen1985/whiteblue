import { getArticlesByTag } from "../../../lib/graphql-client";
import KhaliBalakArticlesCarousel from "./KhaliBalakArticlesCarousel";

const tagName = "خلي بالك";

export default async function KhaliBalakArticles() {
  const articles = await getArticlesByTag(tagName);
  const allArticles = (articles || []).reverse();

  return <KhaliBalakArticlesCarousel articles={allArticles} />;
}

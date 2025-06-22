import { getArticlesByTag } from "@/lib/queries";
import KhaliBalakArticlesCarousel from "./KhaliBalakArticlesCarousel";

const tagName = "خلي بالك";

export default async function KhaliBalakArticles() {
  const articles = await getArticlesByTag(tagName);
  const allArticles = (articles || []).reverse();

  return <KhaliBalakArticlesCarousel articles={allArticles} />;
}

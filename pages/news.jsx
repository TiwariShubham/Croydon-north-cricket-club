import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Card from "../components/Card";
import content from "../content/news.json";

export default function News() {
  const { hero, notice, items } = content;

  return (
    <Layout active="news">
      <Seo title={content.title} description={content.description} path="news.html" />
      <PageHero {...hero} />

      <section className="section">
        <div className="container">
          <div className="notice"><strong>Placeholder content:</strong> {notice}</div>
          <div className="grid grid-3">
            {items.map((item) => (
              <Card key={item.title} media="News" tag={item.tag} date={item.date} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

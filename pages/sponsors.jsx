import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Callout from "../components/Callout";
import content from "../content/sponsors.json";

export default function Sponsors() {
  const { hero, thankYou, becomeSponsor } = content;

  return (
    <Layout active="sponsors">
      <Seo title={content.title} description={content.description} path="sponsors.html" />
      <PageHero {...hero} />

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{thankYou.eyebrow}</span>
            <h2>{thankYou.heading}</h2>
            <p>{thankYou.text}</p>
          </div>
          <div className="notice"><strong>Placeholder content:</strong> {thankYou.notice}</div>
          <div className="sponsor-strip">
            {thankYou.slots.map((s, i) => (
              <div className="sponsor-slot" key={i}>{s}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <Callout
            title={becomeSponsor.title}
            text={becomeSponsor.text}
            ctaLabel={becomeSponsor.ctaLabel}
            href={becomeSponsor.href}
            transparent
          />
        </div>
      </section>
    </Layout>
  );
}

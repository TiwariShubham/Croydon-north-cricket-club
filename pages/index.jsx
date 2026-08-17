import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Card from "../components/Card";
import Callout from "../components/Callout";
import { useSite, resolveHref } from "../lib/SiteContext";
import content from "../content/home.json";

export default function Home() {
  const site = useSite();
  const { hero, quickLinks, about, stats, news, sponsorsPreview, callout } = content;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: site.clubName,
    alternateName: site.nickname,
    url: site.siteUrl,
    sameAs: [site.facebook, site.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Croydon North",
      addressRegion: "VIC",
      addressCountry: "AU"
    },
    sport: "Cricket"
  };

  return (
    <Layout active="home">
      <Seo title={content.title} description={content.description} path="index.html" jsonLd={jsonLd} />

      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>{hero.heading}<br /><em>{hero.highlight}</em></h1>
          <p className="lead">{hero.lead}</p>
          <div className="btn-row">
            <a href={resolveHref(hero.primaryCta.href, site)} target={hero.primaryCta.external ? "_blank" : undefined} rel={hero.primaryCta.external ? "noopener" : undefined} className="btn btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-outline">{hero.secondaryCta.label}</a>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="quick-links">
          {quickLinks.map((q) => (
            <div className="quick-card" key={q.title}>
              <div className="ic">{q.icon}</div>
              <h4>{q.title}</h4>
              <p>{q.text}</p>
              <a className="link" href={resolveHref(q.href, site)} target={q.external ? "_blank" : undefined} rel={q.external ? "noopener" : undefined}>
                {q.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{about.eyebrow}</span>
            <h2>{about.heading}</h2>
            <p>{about.text}</p>
          </div>
          <div className="grid grid-3">
            {about.cards.map((c) => (
              <Card key={c.title} media={c.media} tag={c.tag} title={c.title} text={c.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <h3>{s.value}</h3>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{news.eyebrow}</span>
            <h2>{news.heading}</h2>
          </div>
          <div className="notice"><strong>Placeholder content:</strong> {news.notice}</div>
          <div className="grid grid-3">
            {news.items.map((item) => (
              <Card key={item.title} media="News" tag={item.tag} date={item.date} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{sponsorsPreview.eyebrow}</span>
            <h2>{sponsorsPreview.heading}</h2>
          </div>
          <div className="sponsor-strip">
            {sponsorsPreview.slots.map((s, i) => (
              <div className="sponsor-slot" key={i}>{s}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Callout
            title={callout.title}
            text={callout.text}
            ctaLabel={callout.ctaLabel}
            href={resolveHref(callout.href, site)}
            external={callout.external}
          />
        </div>
      </section>
    </Layout>
  );
}

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { useSite, resolveHref } from "../lib/SiteContext";
import content from "../content/juniors.json";

export default function Juniors() {
  const site = useSite();
  const { hero, pathway, committee, getInvolved } = content;

  return (
    <Layout active="juniors">
      <Seo title={content.title} description={content.description} path="juniors.html" />
      <PageHero {...hero} />

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{pathway.eyebrow}</span>
            <h2>{pathway.heading}</h2>
            <p>{pathway.text}</p>
          </div>
          <div className="grid grid-4">
            {pathway.cards.map((c) => (
              <div className="card" key={c.title}>
                <div className="card-body">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">{committee.eyebrow}</span>
            <h2>{committee.heading}</h2>
            <p>{committee.text}</p>
            <div className="notice"><strong>Placeholder content:</strong> {committee.notice}</div>
          </div>
          <aside className="card">
            <div className="card-body">
              <h3>{getInvolved.heading}</h3>
              <p>{getInvolved.text}</p>
              <a
                className="btn btn-primary"
                href={resolveHref(getInvolved.href, site)}
                target={getInvolved.external ? "_blank" : undefined}
                rel={getInvolved.external ? "noopener" : undefined}
              >
                {getInvolved.ctaLabel}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

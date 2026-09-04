import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import DataTable from "../components/DataTable";
import Card from "../components/Card";
import Callout from "../components/Callout";
import content from "../content/hall-of-fame.json";

export default function HallOfFame() {
  const { hero, topNotice, lifeMembers, seniorHallOfFame, juniorHallOfFame, premierships, callout } = content;

  return (
    <Layout active="hall-of-fame">
      <Seo title={content.title} description={content.description} path="hall-of-fame.html" />
      <PageHero {...hero} />

      <section className="section">
        <div className="container">
          <div className="notice"><strong>Placeholder content:</strong> {topNotice}</div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{lifeMembers.eyebrow}</span>
            <h2>{lifeMembers.heading}</h2>
            <p>{lifeMembers.text}</p>
          </div>
          <DataTable headers={lifeMembers.table.headers} rows={lifeMembers.table.rows} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{seniorHallOfFame.eyebrow}</span>
            <h2>{seniorHallOfFame.heading}</h2>
            <p>{seniorHallOfFame.text}</p>
          </div>
          <div className="grid grid-3">
            {seniorHallOfFame.categories.map((cat) => (
              <div className="card" key={cat.title}>
                <div className="card-body">
                  <h3>{cat.title}</h3>
                  <DataTable headers={cat.table.headers} rows={cat.table.rows} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{juniorHallOfFame.eyebrow}</span>
            <h2>{juniorHallOfFame.heading}</h2>
            <p>{juniorHallOfFame.text}</p>
          </div>
          <DataTable headers={juniorHallOfFame.table.headers} rows={juniorHallOfFame.table.rows} />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{premierships.eyebrow}</span>
            <h2>{premierships.heading}</h2>
            <p>{premierships.text}</p>
          </div>
          <div className="grid grid-4">
            {premierships.cards.map((c, i) => (
              <Card key={i} title={c.title} text={c.text} />
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
            href={callout.href}
          />
        </div>
      </section>
    </Layout>
  );
}

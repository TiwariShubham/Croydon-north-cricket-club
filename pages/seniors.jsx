import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import DataTable from "../components/DataTable";
import Callout from "../components/Callout";
import { useSite, resolveHref } from "../lib/SiteContext";
import content from "../content/seniors.json";

export default function Seniors() {
  const site = useSite();
  const { hero, teams, callout } = content;

  return (
    <Layout active="seniors">
      <Seo title={content.title} description={content.description} path="seniors.html" />
      <PageHero {...hero} />

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{teams.eyebrow}</span>
            <h2>{teams.heading}</h2>
            <p>{teams.text}</p>
          </div>
          <DataTable headers={teams.table.headers} rows={teams.table.rows} />
          <div className="notice"><strong>Placeholder content:</strong> {teams.notice}</div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Callout
            title={callout.title}
            text={callout.text}
            ctaLabel={callout.ctaLabel}
            href={resolveHref(callout.href, site)}
            external={callout.external}
            btnVariant={callout.variant}
          />
        </div>
      </section>
    </Layout>
  );
}

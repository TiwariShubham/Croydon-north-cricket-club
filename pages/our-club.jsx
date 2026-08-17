import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Card from "../components/Card";
import KeyValueTable from "../components/KeyValueTable";
import content from "../content/our-club.json";

export default function OurClub() {
  const { hero, story, snapshot, timeline, apparel } = content;

  return (
    <Layout active="our-club">
      <Seo title={content.title} description={content.description} path="our-club.html" />
      <PageHero {...hero} />

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">{story.eyebrow}</span>
            <h2>{story.heading}</h2>
            {story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="notice"><strong>Placeholder content:</strong> {story.notice}</div>
            <h3>{story.groundsHeading}</h3>
            <p>{story.groundsIntro}</p>
            <div className="grid grid-2">
              {story.grounds.map((g) => (
                <div className="card" key={g.title}>
                  <a href={g.link} target="_blank" rel="noopener noreferrer">
                    <div className="card-body">
                      <h3>{g.title}</h3>
                      <p>{g.text}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <aside>
            <div className="card">
              <div className="card-body">
                <h3>{snapshot.heading}</h3>
                <KeyValueTable rows={snapshot.rows} />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{timeline.eyebrow}</span>
            <h2>{timeline.heading}</h2>
          </div>
          <div className="notice"><strong>Placeholder content:</strong> {timeline.notice}</div>
          <div className="timeline">
            {timeline.items.map((item) => (
              <div className="t-item" key={item.title}>
                <span className="yr">{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{apparel.eyebrow}</span>
            <h2>{apparel.heading}</h2>
            <p>{apparel.text}</p>
          </div>
          <div className="grid grid-3">
            {apparel.cards.map((c) => (
              <Card key={c.title} media={c.media} title={c.title} text={c.text} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

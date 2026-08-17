import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { useSite } from "../lib/SiteContext";
import content from "../content/contact.json";

function ContactRow({ row, site }) {
  let cell;
  if (row.type === "email") {
    cell = <a href={`mailto:${site.email}`}>{site.email}</a>;
  } else if (row.type === "facebook") {
    cell = <a href={site.facebook} target="_blank" rel="noopener">{row.display}</a>;
  } else if (row.type === "instagram") {
    cell = <a href={site.instagram} target="_blank" rel="noopener">{row.display}</a>;
  } else {
    cell = row.value;
  }
  return (
    <tr>
      <th>{row.label}</th>
      <td>{cell}</td>
    </tr>
  );
}

export default function Contact() {
  const site = useSite();
  const { hero, details, form } = content;

  return (
    <Layout active="contact">
      <Seo title={content.title} description={content.description} path="contact.html" />
      <PageHero {...hero} />

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">{details.eyebrow}</span>
            <h2>{details.heading}</h2>
            <table className="data-table">
              <tbody>
                {details.rows.map((row) => (
                  <ContactRow key={row.label} row={row} site={site} />
                ))}
              </tbody>
            </table>
            <div className="notice"><strong>Placeholder content:</strong> {details.notice}</div>
          </div>
          <aside className="card">
            <div className="card-body">
              <h3>{form.heading}</h3>
              <form action={form.action} method="POST">
                <div className="form-field">
                  <label className="form-label">Name</label>
                  <input type="text" required className="form-input" />
                </div>
                <div className="form-field">
                  <label className="form-label">Email</label>
                  <input type="email" required className="form-input" />
                </div>
                <div className="form-field">
                  <label className="form-label">Message</label>
                  <textarea rows="4" required className="form-input" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">{form.submitLabel}</button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

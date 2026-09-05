import { useEffect, useState } from "react";
import { useSite } from "../lib/SiteContext";

export default function Footer() {
  const site = useSite();
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="brand-crest"><span>CNCC</span></div>
              <div className="club-name">Croydon North CC<br />{site.nickname}</div>
            </div>
            <p>{site.tagline}</p>
            <div className="footer-socials">
              <a href={site.facebook} target="_blank" rel="noopener" aria-label="Facebook">f</a>
              <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram">ig</a>
            </div>
          </div>
          <div>
            <h4>Club</h4>
            <ul>
              <li><a href="our-club.html">Our History</a></li>
              <li><a href="hall-of-fame.html">Hall of Fame</a></li>
              <li><a href="sponsors.html">Sponsors</a></li>
              <li><a href="news.html">News</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Cricket</h4>
            <ul>
              <li><a href="seniors.html">Seniors</a></li>
              <li><a href="juniors.html">Juniors</a></li>
              <li><a href={site.playhq} target="_blank" rel="noopener">Fixtures &amp; Results</a></li>
              <li><a href={site.playhqRegister} target="_blank" rel="noopener">Registration</a></li>
            </ul>
          </div>
          <div>
            <h4>Get In Touch</h4>
            <ul>
              {site.grounds.map((g) => (
                <li key={g}>{g}</li>
              ))}
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>&copy; {year ?? ""} {site.clubName} Inc. &mdash; The {site.nickname}. All rights reserved.</div>
          <div>
            Site built by <a href={site.builtBy.url} target="_blank" rel="noopener">{site.builtBy.label}</a> &middot; {site.bottomNote}
          </div>
        </div>
      </div>
    </footer>
  );
}

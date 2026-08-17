import { useState } from "react";
import { useSite } from "../lib/SiteContext";

export default function Header({ active }) {
  const site = useSite();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div>{site.topbarText}</div>
          <div className="topbar-socials">
            <a href={site.facebook} target="_blank" rel="noopener">Facebook</a>
            <a href={site.instagram} target="_blank" rel="noopener">Instagram</a>
            <a href={site.playhq} target="_blank" rel="noopener">PlayHQ</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a href="index.html" className="brand">
            <div className="brand-crest"><span>CNCC</span></div>
            <div className="brand-text">
              <div className="club-name">Croydon North<br />Cricket Club</div>
              <div className="club-sub">{site.nickname}</div>
            </div>
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            &#9776;
          </button>
          <nav className={`main-nav${open ? " open" : ""}`}>
            {site.nav.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={item.key === active ? "active" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

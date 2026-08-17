import { createContext, useContext } from "react";

const SiteContext = createContext(null);

export function SiteProvider({ site, children }) {
  return <SiteContext.Provider value={site}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const site = useContext(SiteContext);
  if (!site) throw new Error("useSite must be used within a SiteProvider");
  return site;
}

// Content JSON can reference global site data with the "site:<key>" convention,
// e.g. "site:playhq" resolves to site.playhq, keeping shared URLs in one place.
export function resolveHref(href, site) {
  if (typeof href === "string" && href.startsWith("site:")) {
    return site[href.slice(5)];
  }
  return href;
}

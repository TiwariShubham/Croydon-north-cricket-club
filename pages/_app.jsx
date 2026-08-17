import "../styles/globals.css";
import { SiteProvider } from "../lib/SiteContext";
import site from "../content/site.json";

export default function App({ Component, pageProps }) {
  return (
    <SiteProvider site={site}>
      <Component {...pageProps} />
    </SiteProvider>
  );
}

export default function Callout({ title, text, ctaLabel, href, external, btnVariant = "btn-outline", transparent = false }) {
  return (
    <div className={transparent ? "callout callout-transparent" : "callout"}>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <a
        className={`btn ${btnVariant}`}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener" : undefined}
      >
        {ctaLabel}
      </a>
    </div>
  );
}

export default function PageHero({ eyebrow, breadcrumb, h1, lead }) {
  return (
    <div className="page-hero">
      <div className="container">
        <div className="breadcrumb"><a href="index.html">Home</a> / {breadcrumb}</div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{h1}</h1>
        <p className="lead">{lead}</p>
      </div>
    </div>
  );
}

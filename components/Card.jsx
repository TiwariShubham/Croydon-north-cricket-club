export default function Card({ media, tag, date, title, text }) {
  return (
    <div className="card">
      {media && <div className="card-media">{media}</div>}
      <div className="card-body">
        {tag && <span className="card-tag">{tag}</span>}
        {date && <span className="date">{date}</span>}
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

const ITEMS = [
  "Renewable Energy","Circular Economy","Financial Advisory","SenHub",
  "Project Financing","Gender Lens","Sustainable Investing","Impact Investing",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div key={i} className="ticker-item">
            <span>{item}</span>
            <span className="ticker-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}

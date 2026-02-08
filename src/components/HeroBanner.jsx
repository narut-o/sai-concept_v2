import "./HeroBanner.css";

export default function HeroBanner({ title, subtitle, banner }) {
  return (
    <div className="cat-banner">
      <div
        className="cat-banner-inner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="cat-banner-text">
          <h1>
            {title}
          </h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

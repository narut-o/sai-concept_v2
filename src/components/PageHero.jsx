import { useEffect, useState } from "react";
import "./PageHero.css";

export default function PageHero({
  title,
  subtitle,
  images = [],
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 350);
    }, 4000); // ⭐ slow change

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="thin-hero">

      {/* LEFT TEXT */}
      <div className="thin-hero-left">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>

      {/* RIGHT IMAGE */}
      {images.length > 0 && (
        <div className="thin-hero-right">
          <img
            src={images[index]}
            alt=""
            className={fade ? "fade-in" : "fade-out"}
          />
        </div>
      )}

    </div>
  );
}

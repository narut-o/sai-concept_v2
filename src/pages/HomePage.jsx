import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PRODUCT_DATA from "../data/products";
import { countProducts } from "../utils/helpers";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import "./HomePage.css";

/* ===== HERO IMAGES ===== */
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1400",
  "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1400",
  "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=1400",
];

/* ===== BRAND LOGOS ===== */
const BRAND_IMAGES = [
  "https://i.postimg.cc/hGCYVPdy/Go-cheese-Photoroom.png",
  "https://i.postimg.cc/QNKzWDxJ/amul-Photoroom.png",
  "https://i.postimg.cc/4NzFB1cc/mccain-Photoroom.png",
  "https://i.postimg.cc/Cx7rVLmz/dlecta-Photoroom.png",
  "https://i.postimg.cc/hGCYVPdy/Go-cheese-Photoroom.png",
  "https://i.postimg.cc/QNKzWDxJ/amul-Photoroom.png",
  "https://i.postimg.cc/4NzFB1cc/mccain-Photoroom.png",
  "https://i.postimg.cc/Cx7rVLmz/dlecta-Photoroom.png",
  "https://i.postimg.cc/hGCYVPdy/Go-cheese-Photoroom.png",
  "https://i.postimg.cc/QNKzWDxJ/amul-Photoroom.png",
  "https://i.postimg.cc/4NzFB1cc/mccain-Photoroom.png",
  "https://i.postimg.cc/Cx7rVLmz/dlecta-Photoroom.png",
];

const FEATURED = [
  {
    name: "Mozzarella Diced",
    brand: "Go Cheese",
    size: "2kg",
    img: "https://images.unsplash.com/photo-1634487359989-3e90c9432133?w=300",
  },
  {
    name: "Regular Fries",
    brand: "McCain",
    size: "2.5kg",
    img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=300",
  },
  {
    name: "Fresh Cream",
    brand: "Amul",
    size: "1L",
    img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300",
  },
];

export default function HomePage() {

  const categories = Object.entries(PRODUCT_DATA);

  const totalProducts = categories.reduce(
    (acc, [, data]) => acc + countProducts(data.subcategories),
    0
  );

  /* HERO SLIDE */
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      {/* ================= HERO ================= */}

      <div className="hero">
        <div className="hero-main hero-with-slider">

          {/* IMAGE SLIDER */}
          <div className="hero-slider">
            <div
              className="hero-slider-track"
              style={{ transform: `translateX(-${heroIndex * 100}%)` }}
            >
              {HERO_IMAGES.map((img, i) => (
                <img key={i} src={img} alt="" />
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="hero-content">

            <div className="hero-tag">🏷️ Wholesale Distributor</div>

            <h1 className="hero-title">
              Quality Products,
              <br />
              <span>Reliable Supply</span>
            </h1>

            <p className="hero-desc">
              Your one-stop wholesale partner for cheese, dairy, frozen foods,
              sauces, beverages and more.
            </p>

            <div className="hero-actions">

              <a
                className="hero-cta"
                href="https://wa.me/919334183119"
                target="_blank"
                rel="noreferrer"
              >
                Contact on WhatsApp
              </a>

              <Link to="/about" className="hero-about-btn">
                About Us
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* ================= BRAND TICKER ================= */}

      <div className="brand-ticker">
        <div className="brand-track">
          {[...BRAND_IMAGES, ...BRAND_IMAGES].map((img, i) => (
            <div className="brand-item" key={i}>
              <img src={img} alt="brand" />
            </div>
          ))}
        </div>
      </div>

      {/* ================= CATEGORIES ================= */}

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Browse Categories</h2>
          <span className="section-count">{totalProducts} products</span>
        </div>

        <div className="categories-grid">
          {categories.map(([name, data], i) => (
            <CategoryCard key={name} name={name} data={data} index={i} />
          ))}
        </div>
      </section>

      {/* ================= FEATURED ================= */}

      <section className="section">
        <h2 className="section-title">Featured Products</h2>

        <div className="products-grid">
          {FEATURED.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>
      </section>

    </>
  );
}

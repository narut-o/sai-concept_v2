import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PRODUCT_DATA from "../data/products";
import { countProducts } from "../utils/helpers";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import "./HomePage.css";

/* Right Side Auto Changing Images */
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800",
  "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800",
  "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800",
  "https://images.unsplash.com/photo-1562967916-eb82221dfb36?w=800",
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

  /* Image Auto Change */
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000); // slower change for premium feel

    return () => clearInterval(interval);
  }, []);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      {/* ===== HERO LIGHT ===== */}

      <div className="hero-light">

        {/* LEFT */}
        <div className="hero-left">

          <div className="hero-badge">
            Wholesale Distributor
          </div>

          <h1 className="hero-title">
            Quality Products
            <br />
            <span>Reliable Supply</span>
          </h1>

          <p className="hero-desc">
            Your one-stop wholesale partner for cheese, dairy, frozen foods,
            sauces, beverages and more.
          </p>

          <div className="hero-actions">

            <a
              href="https://wa.me/919334183119"
              target="_blank"
              rel="noreferrer"
              className="hero-cta"
            >
              Contact on WhatsApp
            </a>

            <Link
              to="/about"
              className="hero-about-btn"
            >
              About Us
            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img
            src={HERO_IMAGES[imageIndex]}
            alt="products"
            className="hero-image"
          />
        </div>

      </div>

      {/* ===== CATEGORY ===== */}

      <section className="section">

        <div className="section-header">
          <h2 className="section-title">Browse Categories</h2>
          <span className="section-count">
            {totalProducts} products
          </span>
        </div>

        <div className="categories-grid">
          {categories.map(([name, data], i) => (
            <CategoryCard key={name} name={name} data={data} index={i} />
          ))}
        </div>

      </section>

      {/* ===== FEATURED ===== */}

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

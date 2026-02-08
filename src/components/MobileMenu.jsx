import { Link } from "react-router-dom";
import PRODUCT_DATA from "../data/products";
import { slugify } from "../utils/helpers";
import "./MobileMenu.css";

export default function MobileMenu({ isOpen, onClose, currentSlug }) {
  const categories = Object.keys(PRODUCT_DATA);

  return (
    <>
      <div
        className={`mobile-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h3>Sai Concept</h3>
          <button className="mobile-close" onClick={onClose} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className="mobile-search">
          <input type="text" placeholder="Search products..." />
        </div>

        <Link
          to="/"
          className={`mobile-nav-item ${currentSlug === "home" ? "active" : ""}`}
          onClick={onClose}
        >
          🏠 Home
        </Link>

        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/category/${slugify(cat)}`}
            className={`mobile-nav-item ${currentSlug === slugify(cat) ? "active" : ""}`}
            onClick={onClose}
          >
            {PRODUCT_DATA[cat].icon} {cat}
          </Link>
        ))}
      </div>
    </>
  );
}

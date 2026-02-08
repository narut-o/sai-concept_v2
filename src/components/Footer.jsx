import { Link } from "react-router-dom";
import PRODUCT_DATA from "../data/products";
import { slugify } from "../utils/helpers";
import "./Footer.css";

export default function Footer() {
  const categories = Object.keys(PRODUCT_DATA);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Sai Concept</h3>
          <span className="footer-tagline">Your Partner in Procurement</span>
          <p>
            A wholesome distribution company based in Ranchi, Jharkhand. We
            supply premium quality cheese, dairy, frozen foods, sauces, and
            beverage products to businesses.
          </p>
        </div>

        <div>
          <h4>Categories</h4>
          {categories.slice(0, 5).map((cat) => (
            <Link
              key={cat}
              to={`/category/${slugify(cat)}`}
              className="footer-link"
            >
              {cat}
            </Link>
          ))}
        </div>

        <div>
          <h4>More</h4>
          {categories.slice(5).map((cat) => (
            <Link
              key={cat}
              to={`/category/${slugify(cat)}`}
              className="footer-link"
            >
              {cat}
            </Link>
          ))}
          <Link to="/" className="footer-link">
            Home
          </Link>
        </div>

        <div>
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            9334183119
          </div>
          <div className="footer-contact">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Lalpur, Ranchi - 834001
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Sai Concept. All rights reserved.
      </div>
    </footer>
  );
}

import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PRODUCT_DATA from "../data/products";
import { slugify, getAllProducts } from "../utils/helpers";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import logo from "../assets/sai-logo.png";

import "./Header.css";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const categories = Object.keys(PRODUCT_DATA);

  const currentSlug = location.pathname.startsWith("/category/")
    ? location.pathname.split("/category/")[1]
    : location.pathname === "/"
    ? "home"
    : "";

  return (
    <>
      

      <header className="header">
        <div className="header-inner">
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>

          <Link to="/" className="logo">
             <img
    src={logo}
    alt="Sai Concept"
    className="logo-img"
  />
            <div>
              <div className="logo-text">SAI CONCEPT</div>
              <div className="logo-sub">YOUR PARTNER IN PROCUREMENT</div>
            </div>
          </Link>
          <Link to="/" className="logo">

</Link>


          <SearchBar />
          
          <a
            href="tel:9334183119"
            className="header-phone"
            aria-label="Call us"
          > 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          9334183119
          </a>
        </div>
      </header>

      <nav className="nav">
        <div className="nav-inner">
          <Link
            to="/"
            className={`nav-item nav-home ${currentSlug === "home" ? "active" : ""}`}
          >
            🏠 Home
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/category/${slugify(cat)}`}
              className={`nav-item ${currentSlug === slugify(cat) ? "active" : ""}`}
            >
              {PRODUCT_DATA[cat].icon} {cat}
            </Link>
          ))}
         
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        currentSlug={currentSlug}
      />
    </>
  );
}

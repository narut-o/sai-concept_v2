import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PRODUCT_DATA from "../data/products";
import { slugify, getAllProducts } from "../utils/helpers";
import "./SearchBar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  const allProducts = useMemo(() => getAllProducts(PRODUCT_DATA), []);

  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    return allProducts
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query, allProducts]);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (product) => {
    navigate(`/category/${slugify(product.category)}`);
    setFocused(false);
    setQuery("");
  };

  return (
    <div className="search" ref={ref}>
      <input
        type="text"
        placeholder="Search products, brands, categories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
      />
      <button className="search-btn" aria-label="Search">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>

      {focused && results.length > 0 && (
        <div className="search-results">
          {results.map((p, i) => (
            <button
              key={i}
              className="search-result-item"
              onClick={() => handleSelect(p)}
            >
              <img src={p.img} alt={p.name} />
              <div>
                <div className="search-result-name">{p.name}</div>
                <div className="search-result-meta">
                  {p.brand} · {p.size}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

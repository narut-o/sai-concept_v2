import "./ProductCard.css";

export default function ProductCard({ product, index = 0 }) {
  const delayClass = `delay-${Math.min((index % 6) + 1, 6)}`;

  return (
    <div className={`product-card animate ${delayClass}`}>
      <div className="product-img-wrap">
        <img
          className="product-img"
          src={product.img}
          alt={product.name}
          loading="lazy"
        />
        <span className="product-brand-badge">{product.brand}</span>
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-brand">
          by {product.brand}
          {product.subcategory ? ` · ${product.subcategory}` : ""}
        </div>
        <div className="product-size">📦 {product.size}</div>
      </div>
    </div>
  );
}

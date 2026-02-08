import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PRODUCT_DATA from "../data/products";
import { getCategoryBySlug, countProducts } from "../utils/helpers";
import Breadcrumb from "../components/Breadcrumb";
import HeroBanner from "../components/HeroBanner";
import SubcategoryTabs from "../components/SubcategoryTabs";
import ProductCard from "../components/ProductCard";
import "./CategoryPage.css";

export default function CategoryPage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("all");

  const result = getCategoryBySlug(PRODUCT_DATA, slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab("all");
  }, [slug]);

  if (!result) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🔍</div>
        <h3>Category not found</h3>
        <p>The category you are looking for does not exist.</p>
        <Link to="/" className="empty-cta">Go Home</Link>
      </div>
    );
  }

  const [categoryName, categoryData] = result;
  const { subcategories, icon, banner, description } = categoryData;
  const totalCount = countProducts(subcategories);
  const subcategoryNames = Object.keys(subcategories);

  const displayProducts =
    activeTab === "all"
      ? Object.entries(subcategories).flatMap(([sub, data]) =>
          data.products.map((p) => ({ ...p, subcategory: sub }))
        )
      : subcategories[activeTab].products.map((p) => ({
          ...p,
          subcategory: activeTab,
        }));

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: categoryName },
        ]}
      />

      <HeroBanner
        icon={icon}
        title={categoryName}
        subtitle={`${displayProducts.length} products \u00B7 ${subcategoryNames.length} subcategories`}
        banner={banner}
      />

      <section className="category-section">
        {description && <p className="category-desc">{description}</p>}

        <SubcategoryTabs
          subcategories={subcategories}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          totalCount={totalCount}
        />

        <div className="products-grid">
          {displayProducts.map((product, i) => (
            <ProductCard key={`${product.name}-${product.brand}-${product.size}-${i}`} product={product} index={i} />
          ))}
        </div>

        {displayProducts.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📦</div>
            <h3>No products found</h3>
            <p>Try selecting a different subcategory.</p>
          </div>
        )}
      </section>
    </>
  );
}

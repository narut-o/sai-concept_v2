import "./SubcategoryTabs.css";

export default function SubcategoryTabs({
  subcategories,
  activeTab,
  onTabChange,
  totalCount,
}) {
  const tabs = Object.keys(subcategories);

  return (
    <div className="sub-tabs">
      <button
        className={`sub-tab ${activeTab === "all" ? "active" : ""}`}
        onClick={() => onTabChange("all")}
      >
        All ({totalCount})
      </button>
      {tabs.map((sub) => (
        <button
          key={sub}
          className={`sub-tab ${activeTab === sub ? "active" : ""}`}
          onClick={() => onTabChange(sub)}
        >
          {sub} ({subcategories[sub].products.length})
        </button>
      ))}
    </div>
  );
}

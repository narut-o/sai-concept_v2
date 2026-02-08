export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getAllProducts(productData) {
  const products = [];
  Object.entries(productData).forEach(([category, data]) => {
    Object.entries(data.subcategories).forEach(([subcategory, subData]) => {
      subData.products.forEach((product) => {
        products.push({
          ...product,
          category,
          subcategory,
        });
      });
    });
  });
  return products;
}

export function getCategoryBySlug(productData, slug) {
  return Object.entries(productData).find(
    ([name]) => slugify(name) === slug
  );
}

export function countProducts(subcategories) {
  return Object.values(subcategories).reduce(
    (acc, sub) => acc + sub.products.length,
    0
  );
}

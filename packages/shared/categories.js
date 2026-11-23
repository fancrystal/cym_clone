export const DEFAULT_CATEGORIES = Object.freeze(['好货内购', '福利专区'])
export function categoryName(category) { return category === DEFAULT_CATEGORIES[1] ? DEFAULT_CATEGORIES[1] : DEFAULT_CATEGORIES[0] }
export function categoryOptions() { return [...DEFAULT_CATEGORIES] }
export function filterProducts(products, category) { return category ? products.filter(product => categoryName(product.category) === category) : products }

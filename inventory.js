// inventory.js

// calculate discount
function calculateDiscount(price, discount) {
  if (typeof price !== 'number' || price < 0) {
    throw new Error('Invalid price');
  }
  if (typeof discount !== 'number' || discount < 0 || discount > 100) {
    throw new Error('Invalid discount');
  }
  return price * (1 - discount / 100);
}
//filter product.
function filterProducts(products, category) {
  if (!Array.isArray(products)) {
    throw new Error('Products must be an array');
  }
  if (typeof category !== 'string' || category.trim() === '') {
    throw new Error('Invalid category');
  }
  return products.filter(product => 
    product && typeof product === 'object' && product.category === category
  );
}
//sort invenrory
function sortInventory(products, sortBy) {
  if (!Array.isArray(products)) {
    throw new Error('Products must be an array');
  }
  if (typeof sortBy !== 'string' || !['price', 'name'].includes(sortBy)) {
    throw new Error('Invalid sort field');
  }
  
  return [...products].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
}

module.exports = { calculateDiscount, filterProducts, sortInventory };
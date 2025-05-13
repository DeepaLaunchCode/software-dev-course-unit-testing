const { calculateDiscount, filterProducts, sortInventory } = require('../inventory');

describe('Inventory Methods', () => {
  describe('calculateDiscount', () => {
    test('should calculate 20% discount on price 100', () => {
      expect(calculateDiscount(100, 20)).toBe(80);
    });

    test('should handle zero discount', () => {
      expect(calculateDiscount(100, 0)).toBe(100);
    });

    test('should throw error for negative price', () => {
      expect(() => calculateDiscount(-10, 20)).toThrow('Invalid price');
    });

    test('should handle edge case: 100% discount', () => {
      expect(calculateDiscount(50, 100)).toBe(0);
    });
  });

  describe('filterProducts', () => {
    const products = [
      { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
      { id: 2, name: 'Shirt', category: 'Clothing', price: 30 },
      { id: 3, name: 'Phone', category: 'Electronics', price: 500 },
    ];

    test('should filter products by Electronics category', () => {
      const result = filterProducts(products, 'Electronics');
      expect(result).toEqual([
        { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
        { id: 3, name: 'Phone', category: 'Electronics', price: 500 },
      ]);
    });

    test('should return empty array for unknown category', () => {
      expect(filterProducts(products, 'Books')).toEqual([]);
    });

    test('should handle empty product list', () => {
      expect(filterProducts([], 'Electronics')).toEqual([]);
    });
  });

  describe('sortInventory', () => {
    const products = [
      { id: 1, name: 'Laptop', price: 1000 },
      { id: 2, name: 'Shirt', price: 30 },
      { id: 3, name: 'Phone', price: 500 },
    ];

    test('should sort by price ascending', () => {
      const result = sortInventory(products, 'price');
      expect(result).toEqual([
        { id: 2, name: 'Shirt', price: 30 },
        { id: 3, name: 'Phone', price: 500 },
        { id: 1, name: 'Laptop', price: 1000 },
      ]);
    });

    test('should sort by name alphabetically', () => {
      const result = sortInventory(products, 'name');
      expect(result).toEqual([
        { id: 1, name: 'Laptop', price: 1000 },
        { id: 3, name: 'Phone', price: 500 },
        { id: 2, name: 'Shirt', price: 30 },
      ]);
    });

    test('should throw error for invalid sortBy field', () => {
      expect(() => sortInventory(products, 'invalid')).toThrow('Invalid sort field');
    });
  });
});
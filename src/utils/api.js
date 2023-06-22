// Add your API integration code here, e.g., fetching products from a server
import productsData from '../data/products.json';

export const fetchProducts = () => {
  return new Promise((resolve) => {
    // Simulating API request delay
    setTimeout(() => {
      resolve(productsData);
    }, 500);
  });
};

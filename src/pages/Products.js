import React from 'react';
import ProductList from '../components/ProductList';

const Products = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Products;

import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductItem;

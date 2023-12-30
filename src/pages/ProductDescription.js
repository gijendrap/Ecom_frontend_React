// ProductDescription.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDescription = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/300" // Replace with actual product image URL
            className="img-fluid"
            alt={product.name}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          {/* Additional product details go here */}
          <div className="mt-3">
            <button className="btn btn-primary mr-2">Add to Cart</button>
            <button className="btn btn-outline-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

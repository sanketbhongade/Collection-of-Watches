import React from 'react';
import { useParams } from 'react-router-dom';
import ProductData from '../Product Data/ProductData';
// import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className='container'>
      <div className='product-detail'>
        <img src={product.cover} alt={product.name} className='product-image' />
        <h1>{product.name}</h1>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Description: {product.description}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default ProductDetail;

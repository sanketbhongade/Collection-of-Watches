import React from 'react';
import { useNavigate } from 'react-router-dom';
import Design from '../Design/Design';
import ProductData from '../Product Data/ProductData';
import './Card1.css';

const Card1 = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleViewMore = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (product) => {
    const itemExists = cartItems.find(item => item.id === product.id);

    if (itemExists) {
      alert('This watch is already in the cart');
    } else {
      setCartItems([...cartItems, product]);
      alert('Watch added to cart');
    }
  };

  return (
    <>
      <div className='container'>
        <div className='card-head'>
          <h4 className='card-head2 text-center'>GLAMORE EDITION</h4>
          <h4 className='card-head3 text-center mt-3'>Special Edition</h4>
        </div>

        <div className='row'>
          {ProductData.map((product, index) => (
            <div key={index} className='col-md-4 mt-5 card-display'>
              <div className='card'>
                <i className='bi bi-heart fs-2 heart-icon'></i>
                <img
                  className='card-img-top'
                  alt={product.name}
                  src={product.cover}
                />
                <div className='card-body'>
                  <h5 className='card-text1 card-title text-center'>
                    {product.name}
                  </h5>
                  <h5 className='card-text2 text-center'>Price: {product.price}</h5>
                  <h5 className='card-star text-center'>
                    {[...Array(product.rating)].map((star, i) => (
                      <i key={i} className='bi bi-star-fill fs-2'></i>
                    ))}
                  </h5>
                  <div className='card-body2'>
                    <i className='bi bi-cart fs-2 cart-icon' onClick={() => handleAddToCart(product)}></i>
                    <button className='btn btn-success cart-btn' onClick={() => handleViewMore(product.id)}>
                      View more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Design/>
      {/* <Card2 cartItems={cartItems} setCartItems={setCartItems}/> */}
    </>
  );
}

export default Card1;

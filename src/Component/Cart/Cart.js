import React from 'react';

const Cart = ({ cartItems, setCartItems }) => {

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container">
      <h2 className="mt-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="list-group mt-4">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item">
              <div className="row">
                <div className="col-md-6">
                  <h5>{item.name}</h5>
                  <p>Price: {item.price}</p>
                </div>
                <div className="col-md-6 text-right">
                  <img src={item.cover} alt={item.name} style={{ width: '50px' }} />
                  <button 
                    className="btn btn-danger ml-2"
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

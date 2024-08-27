import React from 'react';
import './Home.css';
import Card1 from '../Card1/Card1';

const Home = ({ cartItems, setCartItems }) => {
  return (
    <>
      <div className='container-fluid'>
        <div className='home'>
          <img src='https://cdn.shopify.com/s/files/1/0635/2581/4492/files/slider_bg.jpg?width=1600&height=500&crop=center' alt='Background'/>
          <div className='home-head'>
            <h2 className='head2'>Welcome to my website</h2>
            <p className='head3'>Collection of watches</p>
            <a href='/' className='home-btn btn btn-warning'>Learn more</a>
          </div>
        </div>
      </div>
      <Card1 cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

export default Home;

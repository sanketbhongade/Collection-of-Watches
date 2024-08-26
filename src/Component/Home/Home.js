import React from 'react'
import './Home.css'
import Card1 from '../Card1/Card1';

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='home'>
          <div className='home-head'>
            <h2 className='head2'>Welcome to my website</h2>
            <p className='head3'>Collection of watches</p>
            <a href='/' className='home-btn btn btn-warning'>Learn more</a>
          </div>
        </div>
      </div>  
      <Card1/> 
    </>
  )
}

export default Home;
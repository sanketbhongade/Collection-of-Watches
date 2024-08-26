import Card2 from '../Card2/Card2';
import './Card1.css'
import React from 'react'

const Card1 = () => {
  return (
    <>
        <div className='container'>

            <div className='card-head'>
                <h4 className='card-head2 text-center'>GLAMORE EDITION</h4>
                <h4 className='card-head3 text-center mt-3'>Special Edition</h4>
            </div>

            <div className='row'>

                <div className='col-md-4 mt-5 card-display'>

                    <div className='card'>
                        <i className='bi bi-heart fs-2 heart-icon'></i>
                        <img className='card-img-top' alt='Card Cap'
                        src="https://cdn.shopify.com/s/files/1/0635/2581/4492/products/shop03_8db7d667-9b21-4a7a-b771-7ee390df2e0a_600x.jpg?v=1653894711"
                        />
                        <div className='card-body'>
                            <h5 className='card-text1 card-title text-center '>White Golden Strip</h5>
                            <h5 className='card-text2 text-center '>Price: 999.00</h5>
                            <h5 className='card-star text-center'>
                                <i className='bi bi-star-fill fs-2'></i>
                                <i className='bi bi-star-fill fs-2'></i>
                                <i className='bi bi-star-fill fs-2'></i>
                            </h5>
                            <div className='card-body2'>
                                <button className='btn btn-success '>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='col-md-4 mt-5'>
                    <div className='card'>
                        <i className='bi bi-heart fs-2 heart-icon'></i>
                        <img
                        className='card-img-top' alt='Card Cap'
                        src='https://cdn.shopify.com/s/files/1/0635/2581/4492/products/shop05_9d0fa58d-e3cb-4306-b1f6-2c3c229fc4ff_600x.jpg?v=1653894910 '
                        />
                        <div className='card-body'>
                            <h5 className='card-text1 card-title text-center'>Classic Brown Strip</h5>
                            <h5 className='card-text2 text-center'>Price: 899.00</h5>
                            <h5 className='card-star text-center'>
                                <i className='bi bi-star-fill fs-2'></i>
                                <i className='bi bi-star-fill fs-2'></i>
                                <i className='bi bi-star-fill fs-2'></i>
                            </h5>
                            <div className='card-body2'>
                                <i className='bi bi-cart fs-2'></i>
                                <a href='/' className='btn btn-success'>View more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 mt-5'>
                    <div className='card'>
                        <i className='bi bi-heart fs-2 heart-icon'></i>
                        <img
                        className='card-img-top' alt='Card Cap'
                        src="https://cdn.shopify.com/s/files/1/0635/2581/4492/products/shop04_093538b9-095a-42bf-87db-1b46397ad9c4_600x.jpg?v=1653894874" 
                        />
                        <div className='card-body'>
                            <h5 className='card-text1 card-title text-center'>Black Dail Watch</h5>
                            <h5 className='card-text2 text-center'>Price: 599.00</h5>
                            <h5 className='card-star text-center'>
                                <i className='bi bi-star-fill fs-2'></i>
                                <i className='bi bi-star-fill fs-2'></i>
                                <i className='bi bi-star-fill fs-2'></i>
                            </h5>
                            <div className='card-body2'>
                                <i className='bi bi-cart fs-2'></i>
                                <a href='/' className='btn btn-success'>View more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <Card2/>
    </>
  )
}

export default Card1;
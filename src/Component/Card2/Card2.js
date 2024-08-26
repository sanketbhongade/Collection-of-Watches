import React from 'react'
import './Card2.css'
import NewTech from '../New Technology/NewTech'

const Card2 = () => {
  return (
    <>
        <div className='container'>
            <div className='row card-display2'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <i className='bi bi-heart fs-2 heart-icon'></i>
                            <img
                            className='card-img-top' alt='Card Cap'
                            src="https://cdn.shopify.com/s/files/1/0635/2581/4492/products/shop06_626a7bf7-3cce-4f05-b0c8-3cf604bc4e35_600x.jpg?v=1653894965"  
                            />
                            <div className='card-body'>
                                <h5 className='card-text1 card-title text-center'>Black Dail Strip</h5>
                                <h5 className='card-text2 text-center'>Price: 999.00</h5>
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

                    <div className='col-md-4'>
                        <div className='card'>
                            <i className='bi bi-heart fs-2 heart-icon'></i>
                            <img className='card-img-top' alt='Card Cap'
                             src='https://cdn.shopify.com/s/files/1/0635/2581/4492/products/shop01_0efdce1e-9bd4-4645-9bca-1621d76a2106_600x.jpg?v=1653894641'
                            />
                            <div className='card-body'>
                                <h5 className='card-text1 card-title text-center'>White Dail Watch</h5>
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
                    <div className='col-md-4'>
                        <div className='card'>
                            <i className='bi bi-heart fs-2 heart-icon'></i>
                            <img className='card-img-top' alt='Card Cap'
                            src='https://cdn.shopify.com/s/files/1/0635/2581/4492/products/shop02_c8e0c0f0-de7f-401b-81eb-e93bd8d7b84d_600x.jpg?v=1653894676'
                            />
                            <div className='card-body'>
                                <h5 className='card-text1 card-title text-center'>Brown Strip Watch</h5>
                                <h5 className='card-text2 text-center'>Price: 799.00</h5>
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

            <div className='watch-img'>
                <h3 className='watch-img-text text-center'>Men's and Women's Collection</h3>
                <div className='row d-flex'>

                    <div className='col-md-6'>
                        <div className='overlay'>
                            <img className='mens-img' alt='Not found' 
                            src="https://cdn.shopify.com/s/files/1/0635/2581/4492/files/grid01.jpg?v=1653893367"
                            />
                            <div className='overlay-content'>
                                <p className='overlay-text'>Men's Watch Collection</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='overlay'>
                            <img className='womens-img' alt='Not found'
                            src="https://cdn.shopify.com/s/files/1/0635/2581/4492/files/grid02.jpg?v=1653893378"
                            />
                            <div className='overlay-content'>
                                <p className='overlay-text'>Women's Watch Collection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <NewTech/>
    </>
  )
}

export default Card2

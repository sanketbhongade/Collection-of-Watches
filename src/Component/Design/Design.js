import React from 'react';
import './Design.css';
import Footer from '../Footer/Footer';

const Design = () => {
  return (
    <>
        <div className='container'>
            <h1 className='text-center fontfamily3 design-head' data-aos='flip-right'>OUR DESIGNING WATCHES MEN'S & WOMEN'S</h1>
            <div className='container mt-5'>
                <div className='row'>

                    <div className='col-md-3 mb-4'>
                        <div className='card design-img1'>
                            <div className='image-container'>
                                <img src='https://cdn.shopify.com/s/files/1/0635/2581/4492/files/grid06.jpg?width=300&height=800' alt='img'/>
                                <img src='https://cdn.shopify.com/s/files/1/0635/2581/4492/files/grid05.jpg?width=300&height=800' alt='img'/>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                        <div className='card design-img2' >
                        <img src='https://cdn.shopify.com/s/files/1/0635/2581/4492/articles/blog10.jpg?v=1653888938' className='card-img-top blog-img' alt='img1'/>
                            <div className='overlay'>
                                <div className='text'>DESIGNING
                                    <i className='fa-solid fa-heart'></i>
                                </div>
                                <div className='card-body'>
                                    <p className='card-title'>MAY 30,2024</p>
                                    <h2 className='card-text fontfamily2'>HOW TO BUILD TO WATCHES<br/>BY MACHINE</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                        <div className='card design-img3'>
                            <img src='https://cdn.shopify.com/s/files/1/0635/2581/4492/articles/blog09.jpg?v=1653888902' className='card-img-top blog-img' alt='Not Found'/>
                            <div className='overlay'>
                                <div className='text'>STYLING
                                    <br/>
                                    <i className='fa-solid fa-pen-nib'></i>
                                </div>
                                <div className='card-body'>
                                    <p className='card-title'>MAY 30,2024</p>
                                    <h2 className='card-text fontfamily1'>HOW TO BUILD TO WATCHES<br/>BY MACHINE</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 mb-4'>
                        <div className='card design-img4'>
                            <img src='https://cdn.shopify.com/s/files/1/0635/2581/4492/articles/blog03.jpg?v=1653888738' className='card-img-top blog-img' alt='Not Found'/>
                            <div className='overlay'>
                                <div className='text'>GOLDEN STYLE<br/>
                                    <i className='fa-solid fa-bolt'></i>
                                </div>
                                <div className='card-body'>
                                    <p className='text-title'>MAY 30,2024</p>
                                    <h2 className='card-text fontfamily1'>HOW TO BUILD WATCHES<br/>BY MACHINE</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container mt-5'>
                    <h3 className='fontfamily2 h3' data-aos='flip-up'>CERTIFIED WATCHES</h3>
                    <h1 className='fontfamily2 h1' data-aos='flip-up'>DURABLE & STYLE</h1>
                </div>

                <div className='container'>
                    <div className='row'>
                        
                        <div className='col-md-4 mt-4 mb-4'>
                            <img src='https://cdn.shopify.com/s/files/1/0635/2581/4492/files/grid09.jpg?v=1653893503' className='img-fluid' alt='...'/>
                        </div>

                        <div className='col-md-4 mt-4 mb-4'>
                            <img src='https://cdn.shopify.com/s/files/1/0635/2581/4492/files/grid08.jpg?v=1653893492' className='img-fluid' alt='...'/>
                        </div>

                        <div className='col-md-4 mt-4 mb-4'>
                            <img src='https://cdn.shopify.com/s/files/1/0635/2581/4492/files/grid10.jpg?v=1653893529' className='img-fluid' alt='...'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Design;
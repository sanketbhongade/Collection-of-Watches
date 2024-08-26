import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className='footer bg-dark text-white mt-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 mt-4'>
                            <h5 style={{color:"rgb(207,180,113)"}}>Contact Us</h5>
                            <ul className='list-unstyled'>
                                <li><i className='fas fa-map-market-alt'></i>Address: Karve Nagar, Pune, India</li>
                                <li><i className='fas fa-phone'></i>Phone: 7066545284</li>
                                <li><i className='fas fa-envelope'></i>Email: sanketbhongade01@gmail.com</li>
                            </ul>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <h5 style={{color:"rgb(207,180,113)"}}>Links</h5>
                            <ul className='list-unstyled'>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className='col-md-4 mt-4 list-unstyled'>
                            <h5 style={{color:"rgb(207,180,113"}}>Newsletter</h5>
                            <p>Sign up for our newsletter to receive the latest news and updates.</p>
                            <form>
                                <div className='form-group'>
                                    <input type='email' className='form-control' placeholder='Email address' style={{background:"rgb(207,180,113)",color:"black"}}></input>
                                </div>
                                <br/>
                                <button className='btn btn-success'>Sign Up</button>
                            </form>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 text-center list-unstyled'>
                            <p className='mt-3 mb-0' style={{color:"rgb(207,180,113)"}}> &copy; 2024 company Name. All Rigths Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
    </>
  )
}

export default Footer

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const ProductCart = (props) => {

    const {addItem}=useCart();

  return (
    <>
      <div className='col-md-4 mb-4'>
        <div className='card'>
            <img src={props.cover} className='top-img' alt='Not found'/>
            <div className='card-body'>
                <h5 className="card-title text-center card-text1">{props.name}</h5>
                <h5 className="card-titlee text-center card-text2">Price: {props.price}</h5>
                <h5 className="card-text card-center card-star">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    {/* rating:{props.rating} */}
                </h5>

                <NavLink to={`/productinfo/${props.id}`}>
                    <button className="btn btn-success float-end">Know more</button>
                </NavLink>

                <NavLink to={"/cart"}>
                    {/* <button className='btn btn-success' onClick={()=>addItem(props.item)}>Add to Cart</button>                         */}
                </NavLink>

                <div className='card-cart'>
                    <i className='bi bi-cart' onClick={()=>addItem(props.item)}></i>
                </div>

                <div className='card-cart2'>
                    <i className='bi bi-heart'></i>
                </div>
                <div className='card-cart3'>
                    <i className='bi bi-eye'></i>
                </div>

            </div>
             
        </div>

      </div>
    </>
  )
}

export default ProductCart;
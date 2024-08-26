import React from 'react';
import './Cart.css';
import { useCart } from 'react-use-cart';

const Cart = () => {

    const {items, updateItemQuantity}=useCart;

  return (
    <>
      <div className='container'>
        <h1 className='text-center cart-head'>Cart Collection</h1>
        <table className='table table-bordered mt-4'>
            <tr>
                <th className='tbl-head'>ID</th>
                <td className='tbl-head'>IMAGE</td>
                <td className='tbl-head'>NAME</td>
                <td className='tbl-head'>PRICE</td>
                <td className='tbl-head'>COLOR</td>
            </tr>
            {
                items.map((cval)=>{
                    return(
                        <>
                            <tr>
                                <td>{cval.id}</td>
                                <td><img src={cval.cover} alt='Not found'/></td>
                                <td className='card-text3'>{cval.name}</td>
                                <td className='card-text3'>{cval.price}</td>
                                <td className='card-text3'>{cval.color}</td>
                                <td className='card-text3'>{cval.action}</td>

                                <td>
                                    <i className='bi bi-minus' onClick={()=>updateItemQuantity(cval.id, cval.quantity-1)}></i>
                                </td>
                                <td>{cval.quantity}</td>
                            </tr>
                        </>
                    )
                })
            }
        </table>
      </div>
    </>
  )
}

export default Cart

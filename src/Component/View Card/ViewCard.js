import React from 'react';
import ProductData from '../Product Data/ProductData'
import { useParams } from 'react-router-dom';

const ViewCard = () => {

    const {id}=useParams();

  return (
    <>
        <div className='container'>
            <h1 className='viewcard-head'>Details</h1>
            {
                ProductData.map((cval) =>   {
                    if(id === cval.id){
                        return(
                            <>
                                <div className='container'>
                                    <div className='col-md-5'>
                                        <img src={cval.cover} className='view-img' alt='Not found'/>
                                    </div>
                                    <div className='col-md-7'>
                                        <h1>{cval.name}</h1>
                                        <h3>Price: {cval.price}</h3>
                                        <p>Color: {cval.color}</p>
                                        <p>{cval.description}</p>
                                        <button className='btn btn-success'>Add to Cart</button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })
            }
        </div>  
    </>
  )
}

export default ViewCard;

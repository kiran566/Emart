import React from 'react'

import { useParams } from 'react-router-dom'
import { menData } from '../stores/data/men'

import Navbar from '../stores/components/Navbar'
const MenSingle = () => {
    const {id}=useParams();
    console.log(id)
  const product = menData.find(item => item.id === id); 
  return (
    <>
    <Navbar/>
    <div className="ind-page ">
        <div className="ind-image">
            <img src={product.image} alt="" />
        </div>
        <div className="ind-details">
            <div className="ind-comp space">
                <h2>{product.company}{' '}
            {product.model}</h2>
        </div>
        <div className="ind-price space">
            <h2>₹{product.price}</h2>
        </div>
        <div className="ind-desc space">
            <p>{product.description}</p>
        </div>
        <button>ADD CART</button>
</div>
    </div>
    </>
      
  )
}

export default MenSingle

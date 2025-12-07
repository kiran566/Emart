import React from 'react'
import { mobileData } from '../stores/data/mobiles'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
const MobileSingle = () => {
    const {id}=useParams();
    const product =mobileData.find((item=>item.id===id))
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

export default MobileSingle

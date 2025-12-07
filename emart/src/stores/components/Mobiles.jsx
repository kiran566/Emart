


import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'

const Mobiles = () => {
  const fistfive = mobileData.slice(0,5);
  return (
<>
<Link to={`/mobiles`} style={{textDecorationLine:'none'}}>
<h2 className='tit'>Mobiles</h2></Link>
    <div className='proSection'>
      {
        fistfive.map((mobile)=>{
            return (
                <div className='imgBoc' >
                    <img  className="proImage" src={mobile.image} alt="mobile" />
                </div>
            )
        })
      }

    </div>

</>  )
}

export default Mobiles

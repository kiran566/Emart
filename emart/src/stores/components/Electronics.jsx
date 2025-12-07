


import React from 'react'
import {kitchenData} from '../data/kitchen'
const Electronics = () => {
  const fistfive = kitchenData.slice(0,5);
  return (
<>
<h2>Electronics</h2>
    <div className='proSection'>
      {
        fistfive.map((item)=>{
            return (
                <div className='imgBoc' >
                    <img  className="proImage" src={item.image} alt="mobile" />
                </div>
            )
        })
      }

    </div>

</>  )}

export default Electronics;

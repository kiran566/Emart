


import React from 'react'
import {furnitureData} from '../data/furniture'
const Furniture = () => {
  const fistfive = furnitureData.slice(0,5);
  return (
<>
<h2>Furniture</h2>
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

export default Furniture;

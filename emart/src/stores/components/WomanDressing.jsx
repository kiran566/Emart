


import React from 'react'
import {womanData} from '../data/woman'
const WomanDressing = () => {
  const fistfive = womanData.slice(0,5);
  return (
<>
<h2>Woman-Dressing</h2>
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

export default WomanDressing;

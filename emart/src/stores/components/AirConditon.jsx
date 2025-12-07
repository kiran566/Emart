


import React from 'react'
import {acData} from '../data/ac'
const AirCondition = () => {
  const fistfive = acData.slice(0,5);
  return (
<>
<h2>Air-Conditon</h2>
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

export default AirCondition;




import React from 'react'
import {menData} from '../data/men'
import { Link } from 'react-router-dom';
const MenFashion = () => {
  const fistfive = menData.slice(0,5);
  return (

<><Link to={`/mens`} style={{textDecorationLine:'none'}}>
<h2>Men-Fashion</h2></Link>
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

export default MenFashion;

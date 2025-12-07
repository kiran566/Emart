


import React from 'react'
import {watchData} from '../data/watch'
import { Link } from 'react-router-dom';
const Watches = () => {
  const fistfive = watchData.slice(0,5);
  return (
<>
<Link to={`/watches`} style={{textDecorationLine:'none'}}>
<h2>Watches</h2></Link>
    <div className='proSection'>
      {
        fistfive.map((wath)=>{
            return (
                <div className='imgBoc' >
                    <img  className="proImage" src={wath.image} alt="mobile" />
                </div>
            )
        })
      }

    </div>

</>  )}

export default Watches




import React from 'react'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'

const Computers = () => {
  const fistfive = computerData.slice(0,5);
  return (
<>
<Link to={`/computers`} style={{textDecorationLine:'none'}}>
<h2>Computer</h2></Link>
    <div className='proSection'>
      {
        fistfive.map((comp)=>{
            return (
                <div className='imgBoc' >
                    <img  className="proImage" src={comp.image} alt="mobile" />
                </div>
            )
        })
      }

    </div>

</>  )
}

export default Computers


import React from 'react'
import Navbar from '../components/Navbar'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom';
const ComputersPage = () => {
  return (
    <>
    <Navbar/>
        <div className='pageSection'>
        {
            computerData.map((item)=>{
                return(
                    <div>
                        <div className="pageImg">
                            <Link to={`/computers/${item.id}`}><img src={item.image} alt="" /></Link>
                        </div>
                        <div className="proModel">
                            {item.company} {item.model}
                        </div>
                    </div>

                )
            })
        }
      
    </div>

    </>
  )
}

export default ComputersPage

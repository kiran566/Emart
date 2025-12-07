
import React from 'react'
import Navbar from '../components/Navbar'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'
const MobilePage = () => {

  return (
    <>
    <Navbar/>
        <div className='pageSection'>
        {
            mobileData.map((item)=>{
                return(
                    <div>
                        <div className="pageImg">
                            <Link to={`/mobiles/${item.id}`}><img src={item.image} alt="" />
</Link>
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

export default MobilePage

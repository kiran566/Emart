
import React from 'react'
import Navbar from '../components/Navbar'
import { menData } from '../data/men'
import { Link } from 'react-router-dom';

const MenPage = () => {

  return (
    <>
    <Navbar/>
        <div className='pageSection'>
        {
            menData.map((item)=>{
                return(
                    <div>
                        <div className="pageImg">
                            <Link to={`/mens/${item.id}`}><img src={item.image} alt="" /></Link>
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

export default MenPage;


import React from 'react'
import Navbar from '../components/Navbar'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom';
const FurniturePage = () => {

  return (
    <>
    <Navbar/>
        <div className='pageSection'>
        {
            furnitureData.map((item)=>{
                return(
                    <div>
                        <div className="pageImg">
                     <Link to={`/furniture/${item.id}`}><img src={item.image} alt="" /></Link>
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

export default FurniturePage;

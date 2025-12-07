
import React from 'react'
import Navbar from '../components/Navbar'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom';
const WomanPage = () => {

  return (
    <>
    <Navbar/>
        <div className='pageSection'>
        {
            womanData.map((item)=>{
                return(
                    <div>
                        <div className="pageImg">
                            <Link to={`/womans/${item.id}`}><img src={item.image} alt="" /></Link>
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

export default WomanPage;

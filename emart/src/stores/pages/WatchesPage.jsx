
import React from 'react'
import Navbar from '../components/Navbar'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom';
const WatchesPage = () => {

  return (
    <>
    <Navbar/>
        <div className='pageSection'>
        {
            watchData.map((item)=>{
                return(
                    <div>
                        <div className="pageImg">
                     <Link to={`/watches/${item.id}`}><img src={item.image} alt="" /></Link>
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

export default WatchesPage;

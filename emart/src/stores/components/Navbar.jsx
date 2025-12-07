

import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="nav-section">
      <div className="title"><Link to ='/' style={{textDecorationLine:'none', color:'white'}}><h2>E-Mart</h2></Link>
</div>
<div className="search"><input type="text"  placeholder="Search...."/></div>
<div className="user">
  <div className="user-deatils"><button className='btn'> SignIN/UP</button>
</div>
</div>
  <div className="cart">
    <button className='btn'> GoCart</button>
  </div>

    </div>
    <div className="sub-menu">
  <ul>
    <Link to='/mobiles' style={{textDecorationLine:'none', color:'white'}}><li>Mobiles</li>
</Link>
    <Link to='/computers'  style={{textDecorationLine:'none', color:'white'}}><li>Computers</li></Link>
    <Link to='/mens' style={{textDecorationLine:'none', color:'white'}}><li>Mens</li></Link>
    <Link to='/womans'  style={{textDecorationLine:'none', color:'white'}}><li>Woman</li></Link>
    <Link to='/watches' style={{textDecorationLine:'none', color:'white'}}><li>Watches</li></Link>
    <Link to='/furniture' style={{textDecorationLine:'none', color:'white'}}><li>Furniture</li></Link>
    <Link to='/ac' style={{textDecorationLine:'none', color:'white'}}><li>Ac</li></Link>
    <Link to='/electronics' style={{textDecorationLine:'none', color:'white'}}><li>Electronics</li></Link>

  </ul>
</div>
</>

      
    
  )
}

export default Navbar

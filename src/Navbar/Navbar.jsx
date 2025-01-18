import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
    <div id='Navbar'>
      <Link to="/"><div id='logo'>Wayfair</div></Link>
    
    <div id='inputbox'><input type="text" id='Input' placeholder='Search For Products or Brands'/></div>

    <div id='Buttons'>
      <Link to="/signin">SignIn</Link>
     <Link to="/cart"><div><img width="15" height="15" src="https://img.icons8.com/ios/50/box--v1.png" alt="box--v1"/> Stores</div></Link>
      <div>Purchases</div>
    </div>
    </div>
    <hr />

    <div id='Navbar-Bottom'>
    <button>New</button>
    <button>Clearance</button>
    <button>Women</button>
    <button>Men</button>
    <button>Women</button>
    <button>Kids</button>
    <button>Shoes</button>
    <button>Bags & Accessories</button>
    <button>Home</button>
    <button>Beauty</button>
    <button>Gift</button>
    </div>
    </div>
  )
}

export default Navbar

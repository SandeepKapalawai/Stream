import React from 'react'
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = ()=>{
    return (
      <div className="ui secondary pointing menu">
      <Link to="/" className="item">A</Link>
      <div className="right menu">
      <Link to="/"className="item">B</Link>
      </div>
      
    
      <GoogleAuth/>
    </div>
    )
}

export default Header;
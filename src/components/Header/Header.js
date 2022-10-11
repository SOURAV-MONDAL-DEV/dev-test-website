import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
       <div className='header-container' >
        <div className='logoNname'>
            <img className='header-image' src={'../../light-bulb.png'} alt='img'/>
            <h1>Dev Test</h1>
        </div>
        <nav className='Head-Nav'>
         <Link to='/' >Home</Link>
         <Link to='/statistics' >Statistics</Link>
         <Link to='/blog' >Blog</Link>
        </nav>
       </div>
    );
};

export default Header;
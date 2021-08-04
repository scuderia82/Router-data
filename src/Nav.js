import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
function Nav(){
    return(
        <nav className="style">
            <h3>Logo</h3>
              <ul className="nav">
                 <Link style={{color:"white"}} to ='/About'>
                   <li>About</li>
                 </Link>
                 <Link style={{color:"white"}} to ='/Shop'>
                   <li>Shop</li>
                 </Link>
               </ul>
        </nav>
    )
}
export default Nav;
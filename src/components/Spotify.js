import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Spotify() {
  
  return (
    <div className='container'>
     <ul>  
  <li><NavLink to='/' >Home</NavLink></li>  
  <li><NavLink to='/artists' href=".">Artists</NavLink></li>  
  <li><NavLink to='/songs'>Songs</NavLink></li>  
  <li><a href=".">Search</a></li>  
</ul>
    </div>
  )
}

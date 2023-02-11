import React from 'react'
import Searchbar from './Searchbar'

function Navbar() {
  return (
    <div className='top'>
        <div className='topLeft'>
           <a href='NULL'><h1>CarrerPro</h1></a>
        </div>
        <div className='topCenter'>
            <Searchbar />
        </div>
    </div>
  )
}

export default Navbar
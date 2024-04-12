import React from 'react'
import './Home.css'
import DisplayBooks from './DisplayBooks'

function Home() {
  return (
    // <Navbar/>
    <>
      <div className='contain-home'>
          <DisplayBooks></DisplayBooks>
      </div>
      
    </>
  )
}

export default Home
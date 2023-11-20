import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='bg-yellow-300'>Header ha ye </div>
    < div> <h1>page begins heree</h1> </div>
    
    <Link href="/About"> About page</Link>
      <Link href="/Products"> Products page</Link>
      <Link href="/Courses"> Courses </Link>
      

    </>
    
  )
}

export default Header;
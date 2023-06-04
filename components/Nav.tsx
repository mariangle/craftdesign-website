import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between py-6 max-w-screen-lg mx-auto px-4 items-center'>
        <div><b>CRAFT</b></div>
        <div>
            <ul className='flex gap-6'>
                <li>Our Works</li>
                <li>Services</li>
                <li>About Us</li>
            </ul>
        </div>
        <div>
            <button className='bg-white px-4 py-2 shadow-xl'>Contact Us</button>
        </div>
    </nav>
  )
}

export default Nav
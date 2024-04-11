import React from 'react'
import logo from '../assets/nav-logo.svg'
import navProfile from '../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='flex flex-1 items-center justify-between p-3 shadow-lg bg-white'>
      <img className=' w-[200px] max-sm:w-[150px]' src={logo} alt="" />
      <img className='w-[75px]' src={navProfile} alt="" />
    </div>
  )
}

export default Navbar

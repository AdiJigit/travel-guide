import React, {useState} from 'react';
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram} from 'react-icons/fa';
import * as Scroll from 'react-scroll'
import {Link} from 'react-scroll';


const Navbar = () => {
  const [burger, setBurger] = useState(false)
  const [logo, setLogo] = useState(false)

  const handleClick = () => {
    setBurger(!burger)
    setLogo(!logo)
  }

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleClick} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
      </div>
      <ul className='hidden md:flex cursor-pointer'>
        <li>
          <Link to='home' smooth={true} duration={500} >Home</Link>
        </li>
        <li>
          <Link to='resorts' smooth={true} duration={500} >Resort</Link>
        </li>
        <li>
          <Link to='travel' smooth={true} duration={500} >Travel</Link>
        </li>
        <li>
          <Link to='view' smooth={true} duration={500} >View</Link>
        </li>
        <li>
          <Link to='pictures' smooth={true} duration={500} >Pictures</Link>
        </li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='mr-2 cursor-pointer' size={20}/>
        <BsPerson className='cursor-pointer' size={20}/>
      </div>

      {/* Hamburger */}
      <div className='md:hidden z-10' onClick={handleClick}>
        {burger ? <AiOutlineClose className='fixed right-5 text-black' size={20} /> : <HiOutlineMenuAlt4 size={20}/>}
      </div>

      {/* Mobile Menu dropdown */}
      <div onClick={handleClick} className={burger ? 'fixed text-black left-0 top-0 w-full h-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>BEACHES.</h1>
          <li className='border-b'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500} className='cursor-pointer' >Home</Link>
          </li>
          <li className='border-b'>
            <Link onClick={handleClick} to='resorts' smooth={true} duration={500} className='cursor-pointer' >Resorts</Link>
          </li>
          <li className='border-b'>
            <Link onClick={handleClick} to='travel' smooth={true} duration={500} className='cursor-pointer' >Travel</Link>
          </li>
          <li className='border-b'>
            <Link onClick={handleClick} to='view' smooth={true} duration={500} className='cursor-pointer' >View</Link>
          </li>
          <li className='border-b'>
            <Link onClick={handleClick} to='pictures' smooth={true} duration={500} className='cursor-pointer' >Pictures</Link>
          </li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6 border-b'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
"use client";

import { Button } from '@/components/ui/button';
import { Menu, Search, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className='h-16 border-b-1 w-full backdrop-blur-md transition-all top-0 z-50 flex justify-between px-4 lg:px-12 items-center fixed'>
  <nav className='flex lg:gap-10 items-center justify-center h-full'>
    <div className='flex gap-3 items-center'>
      <div className="h-8 w-8 flex items-center justify-center rounded-md bg-gradient-to-r from-green-600 via-yellow-500 to-red-500">
        <span className="text-white font-bold">CE</span>
      </div>
      <h1 className='font-bold lg:text-xl'>Congo Event</h1>
    </div>

    {/* Desktop menu */}
    <ul className='hidden lg:flex lg:gap-3.5'>
      <Link href=''><li className='cursor-pointer text-gray-700 hover:text-gray-900'>Accueil</li></Link>
      <Link href='#event'><li className='cursor-pointer text-gray-700 hover:text-gray-900 transition ease-in-out duration-75'>Evenement</li></Link>
      <Link href='#about'><li className='cursor-pointer text-gray-900 hover:text-gray-900'>A propos</li></Link>
      <Link href=''><li className='cursor-pointer text-gray-900 hover:text-gray-900'>Contact</li></Link>
    </ul>
  </nav>

  <div className='flex gap-4 items-center'>
    {/* <Search className='text-gray-500 cursor-pointer'/> */}

    {/* Desktop buttons */}
    <div className='hidden lg:flex gap-3'>
      <Button className='border border-green-600 bg-white text-green-600 hover:bg-green-50'>
        Connexion
      </Button>
      <Button className='bg-green-600 hover:bg-green-500'>
        S&apos;inscrire
      </Button>
    </div>

    {/* Mobile menu toggle (hamburger) */}
    <div className='lg:hidden'>
      <Button
        type="button"
        className="inline-flex items-center justify-center rounded-md bg-gray-100 text-gray-500 hover:bg-gray-100 border-2  border-green-600 focus:ring-2 focus:ring-inset focus:ring-green-500"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu className="border-none outline-none " size={24} />}
      </Button>
    </div>
  </div>

  {/* Mobile menu */}
  {isMenuOpen && (
    <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
      <ul className='flex flex-col gap-4 p-4'>
        <Link href=''><li className='text-gray-600'>Accueil</li></Link>
        <Link href='#event'><li className='text-gray-600'>Evenement</li></Link>
        <Link href='#about'><li className='text-gray-600'>A propos</li></Link>
        <Link href='#footer'><li className='text-gray-600'>Contact</li></Link>
        {/* horizental line */}
        <div className='h-0.5 bg-gray-100 w-full'/>
        <div className='flex justify-center gap-2 mt-2 w-full'>
          <Button className='w-1/2 border border-green-600 bg-white text-green-600 hover:bg-green-50'>
            Connexion
          </Button>
          <Button className='w-1/2 bg-green-600 hover:bg-green-500'>
            S&apos;inscrire
          </Button>
        </div>
      </ul>
    </div>
  )}
</header>

  )
}

export default Header
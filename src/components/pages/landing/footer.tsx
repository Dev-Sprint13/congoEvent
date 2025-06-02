"use client";

import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
    <footer id='footer' className='px-15 flex flex-col py-8 space-y-5 bg-[#020617]'>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 lg:gap-8'>
        {/* First Section */}
        <div className='flex flex-col space-y-3'>
          <div className='flex gap-2 items-center'>
            <div className="h-8 w-8 flex items-center justify-center rounded-md bg-gradient-to-r from-green-600 via-yellow-500 to-red-500">
              <span className="text-white font-bold">CE</span>
            </div>
            <h1 className='font-bold lg:text-xl text-white/95'>Congo Event</h1>
          </div>
          <p className='text-gray-500'>Valoriser et promouvoir le patrimoine culturel congolais à travers des événements artistiques et culturels innovants.</p>
          <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
        </div>
        {/* Second Section */}
        <div className='flex flex-col space-y-3'>
          <h1 className='font-bold lg:text-xl text-white/95'>Liens Rapides</h1>
          <ul className='space-y-3'>
            <Link href=''><li className='cursor-pointer text-gray-400 hover:text-white'>Accueil</li></Link>
            <Link href='#event'><li className='cursor-pointer text-gray-400 hover:text-white'>Evenement</li></Link>
            <Link href='#about'><li className='cursor-pointer text-gray-400 hover:text-white'>A propos</li></Link>
            <Link href='#footer'><li className='cursor-pointer text-gray-400 hover:text-white'>Contact</li></Link>
          </ul>
        </div>
        {/* Third Section */}
        <div className='flex flex-col space-y-3'>
          <h1 className='font-bold lg:text-xl text-white/95'>Evenements</h1>
          <ul className='space-y-3 flex-col'>
            <Link href=''><li className='cursor-pointer text-gray-400 hover:text-white'>Concerts & Musique</li></Link>
            <Link href=''><li className='cursor-pointer text-gray-400 hover:text-white'>Expositions d&apos;Art
</li></Link>
            <Link href=''><li className='cursor-pointer text-gray-400 hover:text-white'>Danse & Performances</li></Link>
            <Link href=''>
            <li className='cursor-pointer text-gray-400 hover:text-white'>Ateliers & Formations</li></Link>
            <Link href=''>
            <li className='cursor-pointer text-gray-400 hover:text-white'>Festivals</li></Link>
          </ul>
        </div>
          <div className='flex flex-col space-y-3'>
            <h1 className='font-bold lg:text-xl text-white/95'>Contact</h1>
            <div className='flex items-center gap-4'>
              <MapPin className='text-gray-400' size={40}/>
              <p className='text-gray-400'>123 Avenue de l&apos;Indépendance, Brazzaville, République du Congo</p>
            </div>
            <div className='flex items-center gap-4'>
              <Phone className='text-gray-400' size={20}/>
              <p className='text-gray-400'>+242 06 123 4567</p>
            </div>
            <div className='flex items-center gap-4'>
              <Mail className='text-gray-400' size={20}/>
              <p className='text-gray-400'>contact@culturecongo.org</p>
            </div>
          </div>
      </div>
      <div className='h-[0.5px] bg-white/5 w-full'/>
      <p className='text-gray-400 text-center'>&copy;2025 CultureCongo. Tous droits réservés.</p>
    </footer>
  )
}

export default Footer
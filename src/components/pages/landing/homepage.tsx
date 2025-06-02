"use client";
import React from 'react'

import hero from '../../../../public/mouv.jpg';
import festival from '../../../../public/festival.jpg';
import { Button } from '@/components/ui/button';
import { Award, BarChart3, Calendar, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import CarousHero from './carrousel-hero';
import Link from 'next/link';


function Homepage() {
  return (
      <>
        <section>
        <div className="relative h-[75vh] w-full rounded-b-3xl overflow-hidden">
          {/* Image de fond */}
          <CarousHero />
        </div>
    </section>

    {/* Second Section */}
    <section id='event' className='h-full w-full flex-col justify-center px-5 py-5 lg:gap-5 lg:px-15  bg-zinc-50'>
        <div className='flex w-full max-md:space-x-20 justify-between items-center'>
            <h1 className='font-bold text-xl lg:text-2xl'>Evenements à venir</h1>
            <h1 className=' text-xl text-green-500'><Link href={'/'}>Voir tous les evenements &gt;</Link> </h1>
        </div>
        {/* Events Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 min-sm:gap-3.5'>

          <Card className='bg-white   lg:w-75 rounded-t-xl pt-0'>
            <div className='flex-col gap-4 '>
              <Image src={festival} alt="Evenement" width={400} height={250} className="rounded-t-xl w-full h-auto object-cover" />
              <div className='relative -top-33 md:-top-50 lg:-top-40 flex gap-3 px-4'>
                  <Button className='bg-blue-200 h-5 lg:h-6 rounded-full'>À venir</Button>
                <Button className='bg-amber-200 h-5 lg:h-6 rounded-full'>Musique</Button>
              </div>
              <div className='px-3 space-y-2'>
                <h1 className='font-bold text-xl'>Festival de Musique Traditionnelle</h1>
                <p className='text-gray-500'>Celebration de la musique congolaise traditionnelle</p>
                <div className='flex-col lg:gap-4 lg:space-y-2 items-center'>
                  <div className="flex gap-2 items-center">
                    <Calendar  className='text-green-500' size={18} />
                    <p className='text-gray-500'>15 Juin 2025</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MapPin  className='text-green-500' size={18} />
                    <p className='text-gray-500'>
                    Place de la liberté, Brazaville
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Users  className='text-green-500' size={18} />
                    <p className='text-gray-500'>
                    32000/5000 Inscrits
                    </p>
                  </div>
                </div>
              </div>
              
              <div className='flex justify-between items-center relative px-2 py-3 lg:px-4 lg:pt-4 bg-gray-50 -bottom-6 rounded-b-xl'>

                <p className='font-bold'>5,000 XAF</p>
                <Button className='bg-green-500 max-md:h-8'>Voir les details</Button>
              </div>
            </div>
          </Card>
          <Card className='bg-white lg:w-75 rounded-t-xl pt-0 max-w-sm mx-auto'>
            <div className='flex-col gap-4 '>
              <Image src={festival} alt="Evenement" width={400} height={250} className="rounded-t-xl w-full h-auto object-cover" />

              <div className='relative -top-33 md:-top-50 lg:-top-40 flex gap-3 px-4'>
                  <Button className='bg-blue-200 h-5 lg:h-6 rounded-full'>À venir</Button>
                <Button className='bg-amber-200 h-5 lg:h-6 rounded-full'>Musique</Button>
              </div>
              <div className='px-3 space-y-2'>
                <h1 className='font-bold text-xl'>Festival de Musique Traditionnelle</h1>
                <p className='text-gray-500'>Celebration de la musique congolaise traditionnelle</p>
                <div className='flex-col lg:gap-4 lg:space-y-2 items-center'>
                  <div className="flex gap-2 items-center">
                    <Calendar  className='text-green-500' size={18} />
                    <p className='text-gray-500'>15 Juin 2025</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MapPin  className='text-green-500' size={18} />
                    <p className='text-gray-500'>
                    Place de la liberté, Brazaville
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Users  className='text-green-500' size={18} />
                    <p className='text-gray-500'>
                    32000/5000 Inscrits
                    </p>
                  </div>
                </div>
              </div>
              
              <div className='flex justify-between items-center relative px-2 py-3 lg:px-4 lg:pt-4 bg-gray-50 -bottom-6 rounded-b-xl'>

                <p className='font-bold'>5,000 XAF</p>
                <Button className='bg-green-500 max-md:h-8'>Voir les details</Button>
              </div>
            </div>
          </Card>
          <Card className='bg-white lg:w-75 rounded-t-xl pt-0 max-w-sm mx-auto'>
            <div className='flex-col gap-4 '>
              <Image src={festival} alt="Evenement" width={400} height={250} className="rounded-t-xl w-full h-auto object-cover" />

              <div className='relative -top-33 md:-top-50 lg:-top-40 flex gap-3 px-4'>
                  <Button className='bg-blue-200 h-5 lg:h-6 rounded-full'>À venir</Button>
                <Button className='bg-amber-200 h-5 lg:h-6 rounded-full'>Musique</Button>
              </div>
              <div className='px-3 space-y-2'>
                <h1 className='font-bold text-xl'>Festival de Musique Traditionnelle</h1>
                <p className='text-gray-500'>Celebration de la musique congolaise traditionnelle</p>
                <div className='flex-col lg:gap-4 lg:space-y-2 items-center'>
                  <div className="flex gap-2 items-center">
                    <Calendar  className='text-green-500' size={18} />
                    <p className='text-gray-500'>15 Juin 2025</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MapPin  className='text-green-500' size={18} />
                    <p className='text-gray-500'>
                    Place de la liberté, Brazaville
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Users  className='text-green-500' size={18} />
                    <p className='text-gray-500'>
                    32000/5000 Inscrits
                    </p>
                  </div>
                </div>
              </div>
              
              <div className='flex justify-between items-center relative px-2 py-3 lg:px-4 lg:pt-4 bg-gray-50 -bottom-6 rounded-b-xl'>

                <p className='font-bold'>5,000 XAF</p>
                <Button className='bg-green-500 max-md:h-8'>Voir les details</Button>
              </div>
            </div>
          </Card>
          <Card className='bg-white lg:w-75 rounded-t-xl pt-0 max-w-sm mx-auto'>
            <div className='flex-col gap-4 '>
              <Image src={festival} alt="Evenement" width={400} height={250} className="rounded-t-xl w-full h-auto object-cover" />

              <div className='relative -top-33 md:-top-50 lg:-top-40 flex gap-3 px-4'>
                  <Button className='bg-blue-200 h-5 lg:h-6 rounded-full'>À venir</Button>
                <Button className='bg-amber-200 h-5 lg:h-6 rounded-full'>Musique</Button>
              </div>
              <div className='px-3 space-y-2'>
                <h1 className='font-bold text-xl'>Festival de Musique Traditionnelle</h1>
                <p className='text-gray-500'>Celebration de la musique congolaise traditionnelle</p>
                <div className='flex-col lg:gap-4 lg:space-y-2 items-center'>
                  <div className="flex gap-2 items-center">
                    <Calendar  className='text-green-500' size={18} />
                    <p className='text-gray-500'>15 Juin 2025</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MapPin  className='text-green-500' size={18} />
                    <p className='text-gray-500'>
                    Place de la liberté, Brazaville
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Users  className='text-green-500' size={18} />
                    <p className='text-gray-500'>
                    32000/5000 Inscrits
                    </p>
                  </div>
                </div>
              </div>
              
              <div className='flex justify-between items-center relative px-2 py-3 lg:px-4 lg:pt-4 bg-gray-50 -bottom-6 rounded-b-xl'>

                <p className='font-bold'>5,000 XAF</p>
                <Button className='bg-green-500 max-md:h-8'>Voir les details</Button>
              </div>
            </div>
          </Card>
        </div>
          <div className='flex justify-center pt-10'>
            <Button className='p-4 lg:p-6 lg:text-xl  text-center border border-green-600 bg-green-50 text-green-600 hover:bg-green-100'>
                  Explorer tous les evenements
            </Button>
          </div>
    </section>

    {/* Third section */}
    <section id='about' className="h-full flex flex-col items-center justify-center w-full px-5 py-10 space-y-5">
      <div className="w-full md:w-[50vw] text-center space-y-3 py-3">
        <h1 className="text-xl md:text-3xl font-bold">
          Pourquoi Choisir Congo Event?
        </h1>
        <p className="text-gray-500 md:text-xl">
          Nous sommes dédiés à la promotion et à la préservation de la riche culture congolaise à travers des événements de haute qualité et accessibles à tous.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2  md:pt-8 md:px-15 space-x-3'>
        <Card className='bg-zinc-50'>
          <CardContent className='flex flex-col justify-center items-center gap-4 text-center'>
            <div className='rounded-full bg-green-300 p-2'>
              <Calendar className='text-green-700' />
            </div>
            <h1 className='text-xl font-bold'>Événements Divers</h1>
            <p className='text-gray-500'>Des dizaines d&apos;événements culturels variés chaque mois.</p>
          </CardContent>
        </Card>
        <Card className='bg-zinc-50'>
          <CardContent className='flex flex-col justify-center items-center gap-4 text-center'>
            <div className='rounded-full bg-yellow-100 p-2'>
              <Users className='text-yellow-700' />
            </div>
            <h1 className='text-xl font-bold'>Communauté Active</h1>
            <p className='text-gray-500'>Rejoignez des milliers de participants passionnés par la culture.</p>
          </CardContent>
        </Card>
        <Card className='bg-zinc-50'>
          <CardContent className='flex flex-col justify-center items-center gap-4 text-center'>
            <div className='rounded-full bg-red-100 p-2'>
              <Award className='text-red-700' />
            </div>
            <h1 className='text-xl font-bold'>Qualité Supérieure</h1>
            <p className='text-gray-500'>Des événements soigneusement sélectionnés et organisés.</p>
          </CardContent>
        </Card>
        <Card className='bg-zinc-50'>
          <CardContent className='flex flex-col justify-center items-center gap-4 text-center'>
            <div className='rounded-full bg-blue-100 p-2'>
              <BarChart3 className='text-blue-700' />
            </div>
            <h1 className='text-xl font-bold'>Impact Culturel</h1>
            <p className='text-gray-500'>Contribuer à la préservation et au rayonnement du patrimoine.</p>
          </CardContent>
        </Card>
      </div>
    </section>

{/* Fourth */}
    <section className='bg-zinc-50 w-full space-y-3 px-5 py-5 lg:px-20'>
      <div className='flex-col w-full justify-center items-center text-center space-y-3 py-3'>
        <h1 className='text-xl md:text-3xl font-bold '>Découvrir par Catégorie</h1>
      </div>
      <div className='grid lg:grid-cols-2 gap-4 w-full'>
        <div className='rounded-md'>
          <div
            className="w-full h-48 bg-cover bg-center rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-90 shadow-md"
            style={{ backgroundImage: `url(${hero.src})` }}
          >
            <div className='bg-black/40 w-full h-full flex flex-col justify-end items-start text-white p-4'>
              <h1 className='text-xl font-bold'>Musique</h1>
              <p className='text-gray-200'>Explorer la catégorie.</p>
            </div>
          </div>
        </div>
        <div className='rounded-md'>
          <div
            className="w-full h-48 bg-cover bg-center rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-90 shadow-md"
            style={{ backgroundImage: `url(conge.jpg)` }}
          >
            <div className='bg-black/40 w-full h-full flex flex-col justify-end items-start text-white p-4'>
              <h1 className='text-xl font-bold'>Art</h1>
              <p className='text-gray-200'>Explorer la catégorie.</p>
            </div>
          </div>
        </div>
        <div className='rounded-md'>
          <div
            className="w-full h-48 bg-cover bg-center rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-90 shadow-md"
            style={{ backgroundImage: `url(cat1.jpg)` }}
          >
            <div className='bg-black/40 w-full h-full flex flex-col justify-end items-start text-white p-4'>
              <h1 className='text-xl font-bold'>Ateliers</h1>
              <p className='text-gray-200'>Explorer la catégorie.</p>
            </div>
          </div>
        </div>
        <div className='rounded-md'>
          <div
            className="w-full h-48 bg-cover bg-center rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-90 shadow-md"
            style={{ backgroundImage: `url(${festival.src})` }}
          >
            <div className='bg-black/40 w-full h-full flex flex-col justify-end items-start text-white p-4'>
              <h1 className='text-xl font-bold'>Danse</h1>
              <p className='text-gray-200'>Explorer la catégorie.</p>
            </div>
          </div>
        </div>
        
 
      </div>
    </section>

    {/* Section Five */}
    <section className=' bg-green-600 w-full flex justify-center space-y-3 px-5 py-5 lg:px-20 lg:py-10'>
      <div className='flex-col justify-between gap-5 space-y-5'>
        <div className=' flex-col w-full md:w-[50vw] justify-center items-center text-center space-y-3 py-3'>
          <h1 className='text-xl md:text-3xl font-bold text-white/95 '>Vous organisez un événement culturel ?</h1>
          <p className='text-white/60 text-base md:text-xl'>Rejoignez notre plateforme pour promouvoir votre événement et atteindre un public plus large passionné par la culture congolaise.</p>
        </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 px-2">
        <Button variant="secondary"
                className="text-xl p-3.5 md:p-6 bg-yellow-500 hover:bg-yellow-600">
          Devenir Organisateur
        </Button>
        <Button variant="secondary"
                 className="text-xl p-3.5 text-white md:p-6 bg-transparent border-1 border-white/50 hover:bg-white hover:text-green-600">
          En savoir plus
        </Button>
      </div>
      </div>
    </section>
    </>
  );
}

export default Homepage;
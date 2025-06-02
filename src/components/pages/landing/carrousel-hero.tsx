"use client";

import React from 'react';
import hero from '../../../../public/mouv.jpg';
import festival from '../../../../public/festival.jpg';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const heroData = [
  {
    title: 'Festival de Musique Traditionnelle',
    description: 'Célébration de la musique traditionnelle congolaise',
    date: '15 Juin 2025',
    location: 'Place de la liberté',
    attendees: '32000/5000 Inscrits',
    image: hero,
  },
  {
    title: 'Festival de Danse Folklorique',
    description: 'Un spectacle vivant de danse africaine',
    date: '20 Juillet 2025',
    location: 'Stade Municipal',
    attendees: '1500/3000 Inscrits',
    image: festival,
  },
];

function CarousHero() {
  return (
    <>
      <section className="relative w-full h-full overflow-hidden">
        <Carousel className="w-full h-full">

          
            <CarouselPrevious className="z-30 left-4 text-green-500 hover:text-green-900" />
          <CarouselNext className="z-30 right-4 text-green-500 hover:text-green-900" />
     
          <CarouselContent className="h-full">
            {heroData.map((event, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-[75vh] w-full">
                  <Image
                    src={event.image}
                    alt="hero-image"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <div className="relative z-20 flex items-end h-full px-8 lg:px-15 pb-10">
                    <div className='flex-col space-y-5'>
                      <div className='flex gap-3 mb-2'>
                        <Button className='bg-amber-200 h-8 rounded-full'>Musique</Button>
                        <Button className='bg-blue-200 h-8 rounded-full'>À venir</Button>
                      </div>
                      <h1 className='font-bold text-4xl text-white'>{event.title}</h1>
                      <p className='text-gray-200'>{event.description}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="text-green-500" size={18} />
                          <p className="text-white text-sm sm:text-base font-bold">{event.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="text-green-500" size={18} />
                          <p className="text-white text-sm sm:text-base font-bold">{event.location}</p>
                        </div>
                        <div className="flex gap-4">
                          <Users className='text-green-500' />
                          <p className='text-white font-bold'>{event.attendees}</p>
                        </div>
                      </div>
                      <div className='flex gap-3 lg:gap-2'>
                        <Button className='bg-green-600 hover:bg-green-500'>
                          Détails de l&apos;évènement
                        </Button>
                        <Button className='border border-green-600 bg-white text-green-600 hover:bg-green-50'>
                          S&apos;inscrire
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselNext className="z-30" />
        </Carousel>
      </section>
    </>
  );
}

export default CarousHero;

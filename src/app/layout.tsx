import type { Metadata } from "next";
import {  Montserrat, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/pages/landing/header";
import Footer from "@/components/pages/landing/footer";



export const roboto = Roboto({
  subsets:["latin"],
  weight:["400","700"],
  variable:"--font-roboto"
})



const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});


const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Congo Event",
  description: "Votre plateforme evenementiel de reference au service de notre culture, de notre identité",
  keywords:["culture brazzaville","evenement culturel","site culture","organiser un evenement"],
  openGraph:{
    title:"Congo Event",
    description:"Venez profiter d'un congo unique en son genre",
    url:"https://congoevent.vercel.app",
    siteName:"Congo Event",
    images:[
      {
        url:"https://culturecongo.vercel.app/next.svg",
        width:1200,
        height:630,
        alt:"La culture à l'air du numerique avec Congo Event"
      }
    ],
    locale:"fr_FR",
    type:"website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <title>Congo Event</title>
        <meta name="description" content="Votre plateforme événementielle de référence au service de notre culture, de notre identité" />
        <meta name="keywords" content="culture brazzaville, evenement culturel, site culture, organiser un evenement" />
        <meta property="og:title" content="Congo Event" />
        <meta property="og:description" content="Venez profiter d'un congo unique en son genre" />
        <meta property="og:image" content="https://culturecongo.vercel.app/next.svg" />
        <meta property="og:url" content="https://congoevent.vercel.app" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${roboto.variable} antialiased `}
      >
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
           <Footer />
      </body>
    </html>
  );
}

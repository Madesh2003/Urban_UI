import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Card from './Components/Card'
import Middle from './Components/Middle'
import Featured from './Components/Featured'
import Clients from './Components/Clients'

export default function Home() {
  return (
    <div className='px-5 scroll-smooth'>
      <Navbar />
     <Header />
     <Card/>
     <Middle />
     <Featured />
     <Clients />
    </div>
  )
}

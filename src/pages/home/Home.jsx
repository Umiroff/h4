import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import Products from '../../components/products/Products'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Products/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Home
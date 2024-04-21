import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/banner/Banner'
import Favorites from '../../components/favorites/Favorites'

function Liked() {
  return (
    <>
    <div>
        <Navbar/>
        <Banner/>
        <Favorites/>
        <Footer/>    
    </div>
    </>
  )
}

export default Liked
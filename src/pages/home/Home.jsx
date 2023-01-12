import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import './Home.css'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedList from '../../components/FeaturedList/FeaturedList'

const home = () => {
  return (
    <div>
    <Navbar />
    <Header />
    <Featured />
    <h1 className='listTitle'>Browse by property type</h1>
    <PropertyList />
    <h1 className='listTitle'>Homes guests love</h1>
    <FeaturedList />
    </div>
  
  )
}

export default home


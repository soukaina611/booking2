import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './List.css'
import { format } from 'date-fns'


const List = () => {
  const location=useLocation();
  const [destination, setDestination]=useState(location.state.destination)
  const [date, setDate]=useState(location.state.date)
  const [options, setOptions]=useState(location.state.options)
  return (
   <div>
    <Navbar />
    <Header type="list" />
    <div className='listContainer'>
      <div className='listWrapper'>
        <div className='search'>
          <h1 className='searchText'>Search</h1>
          <div className='destination'>
            <label className='destinationText'>Destination/property name :</label>
            <input className='destinationInput' placeholder={destination}/>
          </div>
          <div className='destination'>
            <label className='destinationText'>Check-in/out :</label>
            <span>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
          </div>
          <div className='destination'>
            <span>{`${options.adult} adult . ${options.children} children. ${options.room} room`}</span>
          </div>
          <div className='checkboxItem'>
            <input type="checkbox"/>
            <span className='checkboxText'>Entire homes & apartments</span>
          </div>
          <div className='checkboxItem'>
            <input type="checkbox"/>
            <span className='checkboxText'>I'm travelling for work</span>
          </div>
          <div className='btnSearch'>
            <button>Search</button>
          </div>
          </div>
        <div className='listHotels'>
        </div>
        </div>
      </div>
      </div>
   
    
    
  )
}

export default List

import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './List.css'
import { format } from 'date-fns'
import SearchItem from '../../components/SearchItem/SearchItem'
import { DateRange } from 'react-date-range';


const List = () => {
  const location=useLocation();
  const [destination, setDestination]=useState(location.state.destination)
  const [date, setDate]=useState(location.state.date)
  const [options, setOptions]=useState(location.state.options)
  const [openDate, setOpenDate]= useState(false)
  const [openOptions, setOpenOptions]= useState(false)
  const handleOptions = (name, operation)=>{
    setOptions((prev)=>{
       return {
         ...prev,
         [name]: operation==="i" ? options[name] +1 : options[name] -1
       }
     })
     }

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
            <span onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
            {openDate && <DateRange
              className='dateRange'
              onChange={item => setDate([item.selection])}
              ranges={date}
              minDate= {new Date()}
               />
            }
          </div>
          <div className='destination'>
            <span onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult . ${options.children} children. ${options.room} room`}</span>
            {openOptions && 
            <div className='options'>
              <div className='optionsItem'>
                <span className='optionsItemText'>Adults</span>
                <div className='optionCounter'>
                  <button disabled={options.adult <=1}
                  className='optionCounterbtn' 
                  onClick={()=>handleOptions("adult", "d")}>-</button>
                  <span className='optionCounterNumber'>{options.adult}</span>
                  <button className='optionCounterbtn' onClick={()=>handleOptions("adult", "i")}>+</button>
                </div>
                </div>
                <div className='optionsItem'>
                <div className='children'>
                <span className='optionsItemText'>Children</span>
                <span className='optionsItemAge'>Ages 0 - 17</span>
                </div>
                <div className='optionCounter'>
                  <button 
                  disabled={options.children <= 0} 
                  className='optionCounterbtn' 
                  onClick={()=>handleOptions("children", "d")}>-</button>
                  <span className='optionCounterNumber'>{options.children}</span>
                  <button className='optionCounterbtn' onClick={()=>handleOptions("children", "i")}>+</button>
                </div>
                </div>
                <div className='optionsItem'>
                <span className='optionsItemText'>Rooms</span>
                <div className='optionCounter'>
                  <button 
                  disabled={options.room <= 1} 
                  className='optionCounterbtn' 
                  onClick={()=>handleOptions("room", "d")}>-</button>
                  <span className='optionCounterNumber'>{options.room}</span>
                  <button className='optionCounterbtn' onClick={()=>handleOptions("room", "i")}>+</button>
                </div>
                </div>
        </div>
        }
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
          <SearchItem />
          <SearchItem /> 
          <SearchItem />
          <SearchItem /> 
          <SearchItem />
          <SearchItem /> 
          <SearchItem />
          <SearchItem />  
        </div>
        </div>
      </div>
      </div>
   
    
    
  )
}

export default List

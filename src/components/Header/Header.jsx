import React from 'react'
import { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faCar, faPlane, faTaxi, faUser} from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'


const Header = ({type}) => {
  const navigate = useNavigate();
  const [destination, setDestination]=useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions]=useState(false)
  const [options, setOptions]=useState({
    
    adult : 1,
    children : 0,
    room : 1
    
})
const handleOptions = (name, operation)=>{
 setOptions((prev)=>{
    return {
      ...prev,
      [name]: operation==="i" ? options[name] +1 : options[name] -1
    }
  })
  }
  const handleSearch = ()=>{
    navigate('/hotels', {state:{destination,date, options}})
  }
  return (
    <div className='header'>
     <div className={type === "list" ? "header-content list" : "header-content"}>
      <div className='headerList'>
        <div className='headerListItem active'>
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faCar} />
        <span>Car rentals</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>
        </div>
    </div>
    { type !== "list" &&
    <>
    <h1 className='headerTitle'>Find your next stay</h1>
    <p className='headerDesc'>Search low prices on hotels, homes and much more...</p>
    <div className='headerSearch'>
        <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text" placeholder='Where are you going ?' onChange={(e)=>setDestination(e.target.value)}/>
        </div>
        <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
            <span onClick={()=> setOpenDate(!openDate)} className='headerIcon'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate &&
            <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="dateRange"
              minDate= {new Date()}

            />
            }
        </div>
        <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faUser} className="headerIcon" />
            <span onClick ={()=>setOpenOptions(!openOptions)}className='headerIcon'>{`${options.adult} adults . ${options.children} children .${options.room} room .`}</span>
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
        <div className='headerSearchItem'>
            <button onClick={handleSearch}>Search</button>
        </div>
    </div>
    </>
    }
    </div>
</div>
    
  )
}

export default Header

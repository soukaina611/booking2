import React from 'react'
import './SearchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img 
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/274784768.jpg?k=3e871a177fcda8a70c5c57f57bb99616f4f70e8e94c67247759f3af5e1f64cd4&o=&hp=1"
        alt=""
        className='imgHotel'
        />
        <div className='hotelDesc'>
            <h1 className='hotelTitle'>Hotel Nuevo Madrid</h1>
            <span className='distanceCenter'>6,6 km from center</span>
            <span className='taxiAeroport'>43 % off</span>
            <div className='details'>
            <span className='subTitle'>Premium Double Room</span>
            <span className='roomDetails'>Beds: 1 double or 2 singles</span>
            <span className='availibilityRoom'>Only 5 rooms left at this price on our site</span>
            </div>
        </div>
        <div className='hotelReviews'>
            <div className='reviews'>
            <span className='reviewText'>Very Good </span>
            <button className='reviewScore'>8.2</button>
            </div>
            <div className='price'>
                <span className='nightNumber'>3 nights, 2 adults</span>
                <span className='priceValue'> MAD 3,353</span>
                <small className='taxesAndFees'>Includes taxes and charges</small>
                <button className='availibilityBtn'>See availibility </button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem

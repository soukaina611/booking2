import React from 'react'
import './FeaturedList.css'

const FeaturedList = () => {
  return (
    <div className='featuredList'>
        <div className='featuredItem'>
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/square600/121399207.webp?k=b0e7119a0ba3354de23997d3698aac0296822fd58a590d83ddbb372f8af887a9&o=&s=1"
            alt=""
            className='featuredImgList'
            />
            <div className='featuredItemTitle'>
                <h2>3 Epoques Apartments by Prague Residences</h2>
            </div>
            <div className='featuredDesc'>
                <p>Prague 1, Czech Republic, Praha 1</p>
                <p>Starting from <span>MAD 839</span></p>
            </div>
            <div className='featuredRating'>
                <button>8,7</button>
                <span>Fabulous</span>
                <span className='featuredReviews'>407 reviews</span>
            </div>

        </div>
        <div className='featuredItem'>
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=bc461f3aff9a66c15ddae3b3a7e10a44f6aea550cb89ce292cec7ca0b4ccecdb&o=&s=1"
            alt=""
            className='featuredImgList'
            />
            <div className='featuredItemTitle'>
                <h2>Villa Domina</h2>
            </div>
            <div className='featuredDesc'>
                <p>Split City Centre, Croatia, Split</p>
                <p>Starting from <span> 494 MAD </span></p>
            </div>
            <div className='featuredRating'>
                <button>9,4</button>
                <span>Superb</span>
                <span className='featuredReviews'>1,022 reviews</span>
            </div>

        </div>

        <div className='featuredItem'>
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
            alt=""
            className='featuredImgList'
            />
            <div className='featuredItemTitle'>
                <h2>7Seasons Apartments Budapest</h2>
            </div>
            <div className='featuredDesc'>
                <p>06. Terézváros, Hungary, Budapest</p>
                <p>Starting from <span>MAD 822</span></p>
            </div>
            <div className='featuredRating'>
                <button>8,8</button>
                <span>Fabulous</span>
                <span className='featuredReviews'>7,234 reviews</span>
            </div>

        </div>

        <div className='featuredItem'>
            <img 
            src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1"
            alt=""
            className='featuredImgList'
            />
            <div className='featuredItemTitle'>
                <h2>Oriente Palace Apartments</h2>
            </div>
            <div className='featuredDesc'>
                <p>Centro, Spain, Madrid</p>
                <p>Starting from <span>MAD 650</span></p>
            </div>
            <div className='featuredRating'>
                <button>8,9</button>
                <span>Fabulous</span>
                <span className='featuredReviews'>2,497 reviews</span>
            </div>

        </div>
    </div>
  )
}

export default FeaturedList

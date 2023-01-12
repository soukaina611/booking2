import React from 'react'
import './Featured.css'

const featured = () => {
  return (
    <>
    <div className='FeaturedSection1'>
        <div className='FeaturedItem'>
            <img 
            src="https://cf.bstatic.com/xdata/images/city/540x270/579738.webp?k=1bfe325b8ed4316353264edd21a15b96de60a1297aa5166f609bc972707fc183&o=" 
            alt="" 
            className='featuredImg'/>
                <div className='FeaturedTitles'>
                    <h2>Marrakesh</h2>
                    <img src="https://cf.bstatic.com/static/img/flags/24/ma/2c1b043c5e6f46aacadca54f6c00d9c12c541da9.png" alt=""/>
                </div>
        </div>

        <div className='FeaturedItem'>
            <img 
            src="https://cf.bstatic.com/xdata/images/city/540x270/613087.webp?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o="
             alt="" 
             className='featuredImg'/>
                <div className='FeaturedTitles'>
                    <h2>Paris</h2>
                    <img src="https://cf.bstatic.com/static/img/flags/24/fr/c3dafe717a0b4b97e6ddd0d791e8a018d8f96310.png" alt=""/>
                </div>
        </div>
        </div>
        <div className='FeaturedSection2'>

         <div className='FeaturedItem'>
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/654657.webp?k=89856fe34d0c79585591dfb571c096931beeea442ef9175f86cd9960ffb242dd&o="
             alt="" 
             className='featuredImg'/>
                <div className='FeaturedTitles'>
                 <h2>Istanbul</h2>
                 <img src="https://cf.bstatic.com/static/img/flags/24/tr/6063b2f0a3514175752bd8a50ff55b0050189115.png" alt=""/>
                </div>
        </div>
        <div className='FeaturedItem'>
            <img 
            src="https://cf.bstatic.com/xdata/images/city/540x270/619923.webp?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=" 
            alt=""
            className='featuredImg' />
                <div className='FeaturedTitles'>
                    <h2>Dubai</h2>
                    <img src="https://cf.bstatic.com/static/img/flags/24/ae/e5f54d8e1da0853393141831bcb0104381215a7e.png" alt=""/>
                </div>
        </div>
        <div className='FeaturedItem'>
            <img 
            src="https://cf.bstatic.com/xdata/images/city/540x270/968314.webp?k=0e0d712f666150594683eeeea60d7e3afdaab51286a9023f15f648ff3fbb0d6c&o=" 
            alt=""
            className='featuredImg' />
                <div className='FeaturedTitles'>
                    <h2>Barcelona</h2>
                    <img src="https://cf.bstatic.com/static/img/flags/24/es/a14721d7698af5131b08bd34227508c729ab11bc.png" alt=""/>
                </div>
        </div>
        </div>
  
    </>
  )
}

export default featured

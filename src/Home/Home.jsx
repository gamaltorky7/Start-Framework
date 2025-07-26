import React from 'react'
import homeimg from '../assets/avataaars.svg'
export default function Home() {
  return (
   
   <div className='home-page'>
     <div className="container py-3">
      <div className="row">
        <div className='item text-center'>
           <img src={homeimg} className='w-25 pb-5 ' alt="" />
           <h1 className='text-uppercase text-white pb-2'>start Framework</h1>

           <div className="star-contain pb-2">
            <span className='line'></span>
            <i className  ="fa-solid fa-star  text-white "></i>
            <span className='line'></span>
           </div>
           <p className='text-white '>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
   </div>

  )
}

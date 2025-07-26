import React from 'react'

export default function About() {
  return (
    <div className='about-page'>
      <div className="container text-white about-contain">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-uppercase fw-bold"> about component</h1>
            <div className="star-contain py-3">
            <span className='line'></span>
            <i className  ="fa-solid fa-star  text-white "></i>
            <span className='line'></span>
           </div>
          </div>
        </div>
        <div className="row px-5">
          <div className="col-md-6">
            <p className="">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-6">
            <p className="">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

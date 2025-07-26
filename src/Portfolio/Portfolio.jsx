import React, { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

export default function Portfolio() {
  const [image, setimage] = useState(null);
  const [isvisible, setisvisible] = useState(false);
  const handleclick = (image) => {
    setimage(image);
    setisvisible(true);
  };

  const handleClose = (e) => {
    if (e.target.classList.contains("image-popup")) {
      setisvisible(false);
      setimage(null);
    }
  };

  
  return (
    <div>
      <div className="container py-3 ">
        <div className="row py-4 port">
          <h1 className="text-center text-uppercase fw-bold">
            portfolio component
          </h1>
          <div className="star-contain2 pb-2">
            <span className="line2"></span>
            <i className="fa-solid fa-star icolor"></i>
            <span className="line2"></span>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div
              className="img-item position-relative"
              onClick={() => handleclick(img1)}
            >
              <img src={img1} className="w-100 rounded-3" alt="" />
              <div className="layer rounded-3 d-flex justify-content-center align-items-center position-absolute start-0 top-0 h-100 w-100">
                <i className="fa-solid fa-plus text-white plus"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="img-item position-relative"
              onClick={() => handleclick(img2)}
            >
              <img src={img2} className="w-100 rounded-3" alt="" />
              <div className="layer rounded-3 d-flex justify-content-center align-items-center position-absolute start-0 top-0 h-100 w-100">
                <i className="fa-solid fa-plus text-white plus"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="img-item position-relative"
              onClick={() => handleclick(img3)}
            >
              <img src={img3} className="w-100 rounded-3" alt="" />
              <div className="layer rounded-3 d-flex justify-content-center align-items-center position-absolute start-0 top-0 h-100 w-100">
                <i className="fa-solid fa-plus text-white plus"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="img-item position-relative"
              onClick={() => handleclick(img1)}
            >
              <img src={img1} className="w-100 rounded-3" alt="" />
              <div className="layer rounded-3 d-flex justify-content-center align-items-center position-absolute start-0 top-0 h-100 w-100">
                <i className="fa-solid fa-plus text-white plus"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="img-item position-relative"
              onClick={() => handleclick(img2)}
            >
              <img src={img2} className="w-100 rounded-3" alt="" />
              <div className="layer rounded-3 d-flex justify-content-center align-items-center position-absolute start-0 top-0 h-100 w-100">
                <i className="fa-solid fa-plus text-white plus"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="img-item position-relative"
              onClick={() => handleclick(img3)}
            >
              <img src={img3} className="w-100 rounded-3" alt="" />
              <div className="layer rounded-3 d-flex justify-content-center align-items-center position-absolute start-0 top-0 h-100 w-100">
                <i className="fa-solid fa-plus text-white plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`image-popup ${isvisible ? "displayBlock" : "displayNone"}`}
        onClick={handleClose}
      >
        {image && <img src={image} className="h-75" alt="" />}
      </div>
    </div>
  );
}

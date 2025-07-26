import React from "react";

export default function Footer() {
  return (
    <><div className="top">
      <div className="container top-cont">
        <div className="row">
          <div className="col-md-4">
            <div className="item text-white text-center">
              <h3 className="text-uppercase">location</h3>
              <p>255 gamal turki drive</p>
              <p>cairo , dok 5548</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item text-white text-center">
              <h3 className="text-uppercase">AROUND THE WEB</h3>
              <div className="icons">
                <i className="fa-brands fa-facebook star"></i>
                <i className="fa-brands fa-twitter star"></i>
                <i className="fa-brands fa-instagram star"></i>
                <i className="fa-brands fa-linkedin star"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item text-white text-center">
              <h3 className="text-uppercase">ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by me</p>

            </div>
          </div>
        </div>
      </div>
      <div className="bottom py-4">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <p className="m-auto text-center text-white">© 2025 Freelance. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

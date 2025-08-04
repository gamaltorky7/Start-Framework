import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="container py-5 text-center">
        <div className="row">
          <h1 className="text-center text-uppercase fw-bold">
            conatct section
          </h1>
          <div className="star-contain2 pb-2">
            <span className="line2"></span>
            <i className="fa-solid fa-star icolor"></i>
            <span className="line2"></span>
          </div>

          <form action="">
            <div className="row d-flex justify-content-center ">
              <div className="w-50 g-5">
                <input type="text" className="form-control mb-3 p-3" placeholder="Name" />
                <input type="number" className="form-control mb-3 p-3" placeholder="user age" />
                <input type="email" className="form-control mb-3 p-3" placeholder="Email" />
                <input type="password" className="form-control mb-3 p-3" placeholder="password" />
                <button className="button">send message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

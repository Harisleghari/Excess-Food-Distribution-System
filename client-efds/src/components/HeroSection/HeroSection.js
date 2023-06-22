import React from 'react'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <>
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={require('./images/hero-img.png')} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Secure, Deliver, and Savor Delicious Food with Ease!</h1>
        <p class="lead">We bridge the gap between food industry surplus and those in need - Join our non-profit mission today!</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-default btn-lg px-4 me-md-2 herosection-btn">Donate Now</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

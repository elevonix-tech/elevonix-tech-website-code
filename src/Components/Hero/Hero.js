import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className=''>
      <main class="landing">
        <img class="linesbg linesbg--landing mt-5 pt-5" src="https://truemarket.ca/wp-content/themes/truemarket/assets/dist/images/bg-asset-lines-01.svg" alt=""/>
        <img class="pillbg pillbg--landing" src="https://truemarket.ca/wp-content/themes/truemarket/assets/dist/images/bg-asset-pill-right.svg" alt=""/>
        <div className='container'>
        <div class="hero">
            <div class="hero__textbox">
                <h3 class="subheading">We Build</h3>
                <h1 class="hero__heading" data-sal="slide-left" data-sal-delay="700" data-sal-easing="easeInCubic">Performance Driven Websites</h1>
                <p class="bodytext_hero">Elevate Your Digital Horizon</p>
                <div data-sal="slide-left" data-sal-delay="900" data-sal-easing="easeInCubic">
                    <a href="/new-websites/" class="button hero__button" target="_self">
                Web Development              </a>
                </div>
            </div>
            <div class="hero__image" data-sal="slide-up" data-sal-delay="100" data-sal-easing="easeInCubic">
                <img src="https://truemarket.ca/wp-content/themes/truemarket/assets/dist/images/hero-image.png" alt="Example of True Market built site" width="680" height="760" />
            </div>
        </div>
        </div>
        <div>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='px-lg-5'>
                  <div className='customers_should_notice_box'>
                    <div className='text-center'>
                      <h2 className='customers_should_notice_h2'>
                      Customers Should Notice
                      </h2>
                      <p className='amazing_business_p'>How amazing your business is</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
    </div>
  )
}

export default Hero

import React, { useEffect, useState } from 'react';
import "./Hero.css";

const Hero = () => {
  const word = "ebsites."; // Word to animate
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true); // Direction flag

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (forward) {
          if (prevIndex + 1 === word.length) {
            setForward(false); // Reverse direction at the end
            return prevIndex;
          }
          return prevIndex + 1;
        } else {
          if (prevIndex === 0) {
            setForward(true); // Forward direction at the start
            return prevIndex;
          }
          return prevIndex - 1;
        }
      });
    }, 500); // Change letter every 500ms (adjust as needed)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [forward, word.length]);

  return (
    <div className=''>
      <main className="landing">
        <img className="linesbg linesbg--landing mt-5 pt-5" src="https://truemarket.ca/wp-content/themes/truemarket/assets/dist/images/bg-asset-lines-01.svg" alt="" />
        <img className="pillbg pillbg--landing" src="https://truemarket.ca/wp-content/themes/truemarket/assets/dist/images/bg-asset-pill-right.svg" alt="" />
        <div className='container'>
          <div className="hero">
            <div className="hero__textbox">
              <h3 className="subheading">We Build</h3>
              <h1 className="hero__heading" data-sal="slide-left" data-sal-delay="700" data-sal-easing="easeInCubic">
                Performance Driven W{word.substring(0, index).padEnd(word.length, "\u00A0")}
              </h1>
              <p className="bodytext_hero">Elevate Your Digital Horizon</p>
              <div data-sal="slide-left" data-sal-delay="900" data-sal-easing="easeInCubic">
                <a href="/new-websites/" className="button hero__button" target="_self">
                  Web Development
                </a>
              </div>
            </div>
            <div className="hero__image" data-sal="slide-up" data-sal-delay="100" data-sal-easing="easeInCubic">
              <img src="https://truemarket.ca/wp-content/themes/truemarket/assets/dist/images/hero-image.png" alt="Example of True Market built site" width="680" height="760" />
            </div>
          </div>
        </div>
        <div>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className=''>
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
  );
}

export default Hero;

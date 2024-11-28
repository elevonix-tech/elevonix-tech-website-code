import React from 'react'
import "./ProvenProcess.css"
import Iconcoursebusimage from "../../assets/pictures/icon-course-opporations.png"
import dotsImg from "../../assets/pictures/svgviewer-png-output.png"
import Iconcoursemarketingimage from "../../assets/pictures/icon-course-marketing.png"
import Iconcourserevenueimage from "../../assets/pictures/icon-course-finance.png"
import Iconcourseseoimage from "../../assets/pictures/icon-course-bus.png"

const ProvenProcess = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
                <div>
                    <p className='proven_process_p pt-lg-4 pb-lg-5 py-md-3 py-3'>Our process has been formed from hundreds of clients, years of data and a continual pursuit of results. We’d like to use that to your advantage.</p>
                </div>
                <div className='d-flex justify-content-center pb-lg4 pb-md-4 pb-3 '>
                    <div className='two_variable_line'></div>
                </div>
                <div className='d-flex justify-content-center pb-5 '>
                    <h3 className='proven_experience_h3'>Our process is proven to boost </h3>
                </div>
            </div>
            <div className='col-12 px-lg-5 pb-lg-5 pb-md-4 pb-3'>
                <div className='d-flex align-items-center justify-content-around'>
                    <div>
                    <div className='proven_process_box'>
                        <img src={Iconcoursebusimage} className='d-flex justify-content-center' alt='icon-course-img'></img>
                    </div>
                    <h4 className='proven_experience_h4'>User Experience</h4>
                </div>
                <div>
                  <img src={dotsImg} className='pb-5'></img>
                </div>
                    <div>
                    <div className='proven_process_box'>
                        <img src={Iconcoursemarketingimage} className='d-flex justify-content-center' alt='icon-course-img'></img>
                    </div>
                    <h4 className='proven_experience_h4'>Sales and Marketing</h4>
                </div>
                <div>
                  <img src={dotsImg} className='pb-5'></img>
                </div>
                    <div>
                    <div className='proven_process_box'>
                        <img src={Iconcourserevenueimage} className='d-flex justify-content-center' alt='icon-course-img'></img>
                    </div>
                    <h4 className='proven_experience_h4'>Revenue</h4>
                </div>
                <div>
                  <img src={dotsImg} className='pb-5'></img>
                </div>
                    <div>
                    <div className='proven_process_box'>
                        <img src={Iconcourseseoimage} className='d-flex justify-content-center' alt='icon-course-img'></img>
                    </div>
                    <h4 className='proven_experience_h4'>SEO</h4>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProvenProcess

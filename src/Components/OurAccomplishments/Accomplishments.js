import React from 'react'
import "./Accomplishments.css"
import Icon1 from "../../assets/pictures/icon-01.png"
import Icon2 from "../../assets/pictures/icon-02.png"
import Icon3 from "../../assets/pictures/icon-03.png"
import Icon4 from "../../assets/pictures/icon-04.png"
import Icon5 from "../../assets/pictures/icon-05.png"

const Accomplishments = () => {
  return (
    <div className=''>
        <div className='pb-5'>
        <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div>
                            <h2 className='our_skills_h2 pt-3'>Our Accomplishments</h2>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='d-flex justify-content-center pt-lg-5 pt-md-4 pt-3 pb-3'>
                            <div className='px-lg-5 px-md-4 px-3'>
                                <div className='text-center'>
                                    <img src={Icon1}></img>
                                </div>
                                <div className=''>
                                    <h4 className='accomplishments_h4 text-center pt-3'>Established in <br/> 
                                        Pakistan
                                    </h4>
                                </div>
                            </div>
                            <div className='px-lg-5 px-md-4 px-3'>
                                <div className='text-center'>
                                    <img src={Icon2}></img>
                                </div>
                                <div className=''>
                                    <h4 className='accomplishments_h4 text-center pt-3'>Hundreds Of Websites<br/> 
                                        Launched
                                    </h4>
                                </div>
                            </div>
                            <div className='px-lg-5 px-md-4 px-3'>
                                <div className='text-center'>
                                    <img src={Icon3}></img>
                                </div>
                                <div className=''>
                                    <h4 className='accomplishments_h4 text-center pt-3'>10,000+ Keywords 
                                        <br/>
                                        Ranking On P.1 Of
                                        <br/> 
                                        Google
                                    </h4>
                                </div>
                            </div>
                            <div className='px-lg-5 px-md-4 px-3'>
                                <div className='text-center'>
                                    <img src={Icon4}></img>
                                </div>
                                <div className=''>
                                    <h4 className='accomplishments_h4 text-center pt-3'>Voted Top 1% Agency  
                                        <br/>
                                        By Upcity & Clutch
                                    </h4>
                                </div>
                            </div>
                            <div className='px-lg-5 px-md-4 px-3'>
                                <div className='text-center'>
                                    <img src={Icon5}></img>
                                </div>
                                <div className=''>
                                <h4 className='accomplishments_h4 text-center pt-3'>$100+ Million 
                                        <br/>
                                        Generated For Ecom
                                        <br/> 
                                        Clients
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Accomplishments

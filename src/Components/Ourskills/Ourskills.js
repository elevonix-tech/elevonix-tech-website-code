import React from 'react'
import "./Ourskills.css"
import wordpressImg from "../../assets/pictures/platform-1-160x140.webp"
import woocommerceImg from "../../assets/pictures/platform-2-160x140.webp"
import laravelImg from "../../assets/pictures/platform-3-160x140.webp"
import magentoImg from "../../assets/pictures/platform-4-160x140.webp"
import shopifyImg from "../../assets/pictures/platform-5-160x140.webp"
import phpImg from "../../assets/pictures/language-1-160x140.webp"
import htmlImg from "../../assets/pictures/language-2-160x140.webp"
import cssImg from "../../assets/pictures/language-3-160x140.webp"
import nodeImg from "../../assets/pictures/language-4-160x140.webp"
import reactImg from "../../assets/pictures/language-5-160x140.webp"
import angularImg from "../../assets/pictures/language-6-160x140.webp"
import jqueryImg from "../../assets/pictures/pythonlogo.png"

const Ourskills = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div>
                            <h2 className='our_skills_h2 pt-5'>Our Skills</h2>
                            <p className='our_development_p pt-3'>Our development team is compiled of skillful experts poised to make ideas come to life.<br /> We believe code needs to meet all goals of form, function, and speed.</p>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex justify-content-center'>
                            <div className='pt-lg-3'>
                                {/* <div className='platforms_text_div'> */}
                                <h6 className='platforms_text_h6 ps-2'>
                                    Platforms
                                </h6>
                                {/* </div>  */}
                            </div>
                        </div>
                    <div className='col-12'>
                        <div className='d-flex pt-3 justify-content-center'>
                            <div className='skills_development_square me-3'>
                                <div className='skills_development_images text-center'>
                                    <img src={wordpressImg}></img>
                                    <h5 className='skills_development_text pt-2'>WORDPRESS</h5>
                                </div>
                            </div>
                            <div className='skills_development_square me-3'>
                                <div className='skills_development_images text-center'>
                                    <img src={shopifyImg}></img>
                                    <h5 className='skills_development_text pt-2'>SHOPIFY</h5>
                                </div>
                            </div>
                            <div className='skills_development_square me-3'>
                                <div className='skills_development_images text-center'>
                                    <img src={woocommerceImg}></img>
                                    <h5 className='skills_development_text pt-2'>WOOCOMMERCE</h5>
                                </div>
                            </div>
                            <div className='skills_development_square me-3'>
                                <div className='skills_development_images text-center'>
                                    <img src={laravelImg}></img>
                                    <h5 className='skills_development_text pt-2'>LARAVEL</h5>
                                </div>
                            </div>
                            <div className='skills_development_square me-3'>
                                <div className='skills_development_images text-center'>
                                    <img src={magentoImg}></img>
                                    <h5 className='skills_development_text pt-2'>MAGENTO</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                        <div className='d-flex justify-content-center'>
                            <div className='pt-lg-5 pt-lg-4 pt-3'>
                                {/* <div className='platforms_text_div'> */}
                                <h6 className='platforms_text_h6 ps-2'>
                                    Languages
                                </h6>
                                {/* </div>  */}
                            </div>
                        </div>
                    <div className='col-12'>
                        <div className='d-flex pt-3 justify-content-center'>
                            <div className='skills_development_square me-3'>
                                <div className='skills_development_images text-center'>
                                    <img src={phpImg}></img>
                                    <h5 className='skills_development_text pt-2'>PHP</h5>
                                </div>
                            </div>
                            <div className='skills_development_square me-3'>
                                <div className='skills_development_images text-center'>
                                    <img src={htmlImg}></img>
                                    <h5 className='skills_development_text pt-2'>HTML</h5>
                                </div>
                            </div>
                            <div className='skills_development_square me-3'>
                                <div className='skills_development_images text-center'>
                                    <img src={cssImg}></img>
                                    <h5 className='skills_development_text pt-2'>CSS</h5>
                                </div>
                            </div>
                            <div className='skills_development_square me-3'>
                                <div className='skills_development_images text-center'>
                                    <img src={reactImg}></img>
                                    <h5 className='skills_development_text pt-2'>REACT</h5>
                                </div>
                            </div>
                            <div className='skills_development_square me-3'>
                                <div className='skills_development_images text-center'>
                                    <img src={nodeImg}></img>
                                    <h5 className='skills_development_text pt-2'>NODE.JS</h5>
                                </div>
                            </div>
                            <div className='skills_development_square me-3'>
                                <div className='skills_development_images text-center'>
                                    <img src={angularImg}></img>
                                    <h5 className='skills_development_text pt-2'>ANGULAR</h5>
                                </div>
                            </div>
                            <div className='skills_development_square'>
                                <div className='skills_development_images text-center'>
                                    <img src={jqueryImg}></img>
                                    <h5 className='skills_development_text pt-2'>PYTHON</h5>
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

export default Ourskills

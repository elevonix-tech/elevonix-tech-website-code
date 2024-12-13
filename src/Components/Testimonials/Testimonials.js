import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import darkBrownCircleImg from "../../assets/pictures/dark-brown.jpg"

const Testimonials = () => {
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const testimonials = [
        {
            text: "Ryan and his team are fantastic to work with. Ryan is always quick to respond any time I have questions or need help. Ryan and his team have developed websites for all 3 of my companies. I highly recommend working with Ryan.",
            author: "Kathy Chappell",
        },
        {
            text: "The Gooder team has helped me improve my online presence through new web page development, Google marketing and SEO campaigns. They spent time with me to help identify my market and the clients I want to attract. Always top self strategies that have delivered next level results.Thank you Gooder team.",
            author: "Roger L’Ecuyer",
        },
        {
            text: "I needed something looked into with my ecommerce website and I wasn’t familiar enough with woocommerce to resolve it myself. I contacted Ryan and he was able to do it the same day, which was great because I needed it done asap. Overall very happy, highly recommend.",
            author: "Patrick Gooley",
        },
        {
            text: "Ryan and his team are always quick, responsive and knowledgeable with very fair pricing. I’m very pleased with my website design development. They were great at walking me through each step of development, and always there when I had any questions. I’ve had my website for numerous years, and whenever I have any questions Ryan is always quick to respond and help. 5 stars for Gooder!",
            author: "Josee Chapman",
        },
        {
            text: "Great websites Ryan! Impressive that you build websites from the ground up instead of from a cut and paste template. To be able to incorporate MLS listing links that connect directly is great for all realtors! Very impressive!",
            author: "Pamela Elliott",
        },
    ];

    return (
        <section id="TestimonialSlider">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="slickslidercontainer">
                            <div className="innerslide">
                                <div className="imgbox">
                                    <img
                                        src="https://goodermarketing.com/wp-content/uploads/2024/08/testimonials.png"
                                        alt="Avatar Captain image"
                                        className="slideimage"
                                        width="100%"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="slideinfo">
                                    <div className="slidericons">
                                        <div className="left">
                                            <img
                                                src="https://goodermarketing.com/wp-content/themes/ADOATheme/img/fivestars.png"
                                                alt="Five stars Icon"
                                                height="22"
                                                width="171"
                                                className="starsicon"
                                                loading="lazy"
                                            />
                                            <h2 className="testimonials_h2">Testimonials</h2>
                                        </div>
                                        <div className="quote">

                                        </div>
                                        {/* <img
                                            src="https://goodermarketing.com/wp-content/themes/ADOATheme/img/testimonials-quote.png"
                                            alt="testimonials quote"
                                            height="140"
                                            width="171"
                                            className="quote"
                                            loading="lazy"
                                        /> */}
                                    </div>
                                    <Slider {...sliderSettings} className="slicktestimonialslider">
                                        {testimonials.map((testimonial, index) => (
                                            <div key={index} className="slide">
                                                <p>{testimonial.text}</p>
                                                <div className="authorinfo">
                                                    <div className="testimonial_circle_dot"></div>
                                                    <h6>{testimonial.author}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

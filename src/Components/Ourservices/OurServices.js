import React, { useEffect, useState } from 'react'
import "./OurServices.css"
import { Link } from 'react-router-dom';

const OurServices = () => {
    const word = "Services."; // Word to animate
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % (word.length + 1));
        }, 500); // Change letter every 200ms (adjust as needed)

        return () => clearInterval(interval); // Cleanup on unmount
    }, [word.length]);
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pt-5 mt-lg-5">
                            <h2 className="power_growth_h2">
                                <span className="dark_brown_color">We Provide</span>{" "}
                                <span className="word-placeholder">
                                    {word.substring(0, index).padEnd(word.length, "\u00A0")}
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <section class="g-our-services">
                        <div class="wrap-v4">
                            <div class="items our-services-items-v5">
                                <div class="item">
                                    <div class="item__content">
                                        <div class="left">
                                            <h4>Team Augmentation</h4>
                                            <h5>We provide engineers or teams tailored to your project, ensuring skill and compatibility with your goals and culture. They will collaborate with you closely, infusing fresh energy and ideas.</h5>
                                            <div class="specs">
                                                <div class="specs__item">Cultural fit</div>
                                                <div class="specs__item"> Top 1%</div>
                                                <div class="specs__item"> Instant hire</div>
                                            </div>
                                            <div class="actions-wrap">
                                                <button class="action-btn -arrow-right">
                                                    Let’s chat
                                                </button>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <img decoding="async" src="https://diffco.us/wp-content/uploads/2024/08/s-3.svg" title="1" />
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="item__content">
                                        <div class="left">
                                            <h4>Web Development</h4>
                                            <h5>We are experienced in building modular, high-performance web applications for corporate clients and startups. We utilize modern and robust technology stacks.</h5>
                                            <div class="specs">
                                                <div class="specs__item">HTML / CSS / Js</div>
                                                <div class="specs__item"> React</div>
                                                <div class="specs__item"> Node.Js</div>
                                                <div class="specs__item"> Python</div>
                                                <div class="specs__item"> PHP/Laravel</div>
                                            </div>
                                            <div class="actions-wrap">
                                                <button class="action-btn -arrow-right" data-target="toggleBlock" data-type="popup" href="#modalGetQuote">
                                                    Let’s chat
                                                </button>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <img decoding="async" src="https://diffco.us/wp-content/uploads/2024/08/s-6.svg" title="1" />
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="item__content">
                                        <div class="left">
                                            <h4>Mobile Development</h4>
                                            <h5>We specialize in developing native and cross-platform mobile applications for iOS and Android.</h5>
                                            <div class="specs">
                                                <div class="specs__item">Swift</div>
                                                <div class="specs__item"> React Native</div>
                                                <div class="specs__item"> Flutter</div>
                                                <div class="specs__item"> Java</div>
                                                <div class="specs__item"> Kotlin</div>
                                            </div>
                                            <div class="actions-wrap">
                                                <button class="action-btn -arrow-right" data-target="toggleBlock" data-type="popup" href="#modalGetQuote">
                                                    Let’s chat
                                                </button>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <img decoding="async" src="https://diffco.us/wp-content/uploads/2024/08/s-1.svg" title="1" />
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="item__content">
                                        <div class="left">
                                            <h4>Ecommerce Development</h4>
                                            <h5>Our developers can create web solutions that are tailored to your needs, easy to manage with popular CMS, and which can be seamlessly integrated with your existing internal systems.</h5>
                                            <div class="specs">
                                                <div class="specs__item">WordPress</div>
                                                <div class="specs__item"> Shopify</div>
                                                <div class="specs__item"> WooCommerce</div>
                                                <div class="specs__item"> Wix</div>
                                                <div class="specs__item"> Magento</div>
                                            </div>
                                            <div class="actions-wrap">
                                                <button class="action-btn -arrow-right" data-target="toggleBlock" data-type="popup" href="#modalGetQuote">
                                                    Let’s chat
                                                </button>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <img decoding="async" src="https://diffco.us/wp-content/uploads/2024/08/s-2.svg" title="1" />
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="item__content">
                                        <div class="left">
                                            <h4>DevOps Services</h4>
                                            <h5>We deliver comprehensive DevOps solutions to optimize your development processes and improve operational efficiency. Our services include:</h5>
                                            <div class="specs">
                                                <div class="specs__item">CI/CD Pipelines</div>
                                                <div class="specs__item">Kubernetes</div>
                                                <div class="specs__item">Prometheus</div>
                                                <div class="specs__item">Grafana</div>
                                                <div class="specs__item">Infrastructure as Code (IaC)</div>
                                            </div>
                                            <div class="actions-wrap">
                                                <button class="action-btn -arrow-right" data-target="toggleBlock" data-type="popup" href="#modalGetQuote">
                                                    Let’s Chat
                                                </button>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <img decoding="async" src="https://diffco.us/wp-content/uploads/2024/08/s-4.svg" title="DevOps Illustration" />
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="item__content">
                                        <div class="left">
                                            <h4>Cloud Services</h4>
                                            <h5>Our team ensures scalable and secure cloud infrastructure deployments tailored to your business needs. We are proficient in:</h5>
                                            <div class="specs">
                                                <div class="specs__item">AWS</div>
                                                <div class="specs__item">Google Cloud Platform (GCP)</div>
                                                <div class="specs__item">Microsoft Azure</div>
                                                <div class="specs__item">Oracle Cloud</div>
                                                <div class="specs__item">Computer Vision</div>
                                            </div>
                                            <div class="actions-wrap">
                                                <button class="action-btn -arrow-right" data-target="toggleBlock" data-type="popup" href="#modalGetQuote">
                                                    Let’s chat
                                                </button>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <img decoding="async" src="https://diffco.us/wp-content/uploads/2024/08/s-5.webp" title="1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="actions mt-4">
                                <div data-sal="slide-left" data-sal-delay="900" data-sal-easing="easeInCubic">
                                    <Link to="/request-a-quote" class="button hero__button">
                                        Request a Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default OurServices

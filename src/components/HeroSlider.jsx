import React from 'react';
// import Image from "./../backgroundImage.jpeg"
import Image from "./../images/backgroundImage.jpeg"

const HeroSlider = () => {
    return (
        <>
            <section id="hero-slider" className="hero-slider">
                <div className="container-md" data-aos="fade-in">
                    <div className="row">
                        <div className="col-12">
                            <div className="swiper sliderFeaturedPosts">
                                <div className="swiper-wrapper">

                                    <div className="swiper-slide">
                                        <a href="#" className="img-bg d-flex align-items-end" style={{ backgroundImage: `url(${Image})`  }}>
                                            <div className="img-bg-inner">
                                                <h2>Vision</h2>
                                                <p>To spread the message of the Gospel to diverse cultures around the world, reaching as many people as Jesus Christ has instructed us to. Our mission includes establishing new churches in various communities, fostering environments where individuals can grow in their faith and come together in worship. Through these efforts, we aim to fulfill the Great Commission by sharing the love and teachings of Christ across different cultural landscapes, ensuring that His message is accessible to all. </p>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                                {/* <div className="custom-swiper-button-next">
                                    <span className="bi-chevron-right"></span>
                                </div>
                                <div className="custom-swiper-button-prev">
                                    <span className="bi-chevron-left"></span>
                                </div>
                                <div className="swiper-pagination"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSlider;

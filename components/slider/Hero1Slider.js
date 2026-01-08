import Link from "next/link";
import { useState, useEffect } from "react";
import ModalVideo from 'react-modal-video';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero1Slider() {
    const [isOpen, setOpen] = useState(false)
    const [displayedText, setDisplayedText] = useState("")
    const fullText = "Integrated Logistics and Specialized Cargo"
    
    useEffect(() => {
        let currentIndex = 0
        let timeoutId = null
        const typingSpeed = 100 // milliseconds per character
        const pauseAfterComplete = 2000 // pause for 2 seconds after typing is complete
        
        const typeWriter = () => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.substring(0, currentIndex + 1))
                currentIndex++
                timeoutId = setTimeout(typeWriter, typingSpeed)
            } else {
                // After typing is complete, wait and then restart
                timeoutId = setTimeout(() => {
                    currentIndex = 0
                    setDisplayedText("")
                    // Start typing again after a brief pause
                    setTimeout(() => {
                        typeWriter()
                    }, 300)
                }, pauseAfterComplete)
            }
        }
        
        // Start typing after a small delay to ensure page is loaded
        const initialTimer = setTimeout(() => {
            typeWriter()
        }, 500)
        
        return () => {
            clearTimeout(initialTimer)
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [])
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={800} // Smooth transition between slides (in ms)
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                effect="slide"
                className="swiper-wrapper"
                allowTouchMove={false}
                style={{ height: '100%', width: '100%' }}
            >
                <SwiperSlide style={{ height: '100%' }}>
                    <div className="banner-1 video-banner-wrapper" style={{ 
                        position: 'relative', 
                        overflow: 'hidden',
                        height: '100vh',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 0
                    }}>
                        {/* Video Banner Replace Image */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                minHeight: "100%",
                                minWidth: "100%"
                            }}
                        >
                            <source src="/assets/videos/banner.mp4" type="video/mp4" />
                            {/* fallback text */}
                            Your browser does not support the video tag.
                        </video>
                        <div className="container" style={{ 
                            position: "relative", 
                            zIndex: 3,
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div className="row align-items-center justify-content-center" style={{ width: '100%' }}>
                                <div className="col-lg-12 text-center">
                                    <p className="font-md color-white mb-15 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">Logistics &amp; Transportation</p>
                                    <h1 className="color-white mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s" style={{ textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                                        {displayedText ? (
                                            <>
                                                {displayedText.toUpperCase()}
                                                <span className="typewriter-cursor" style={{ animation: "blink 1s infinite" }}>|</span>
                                            </>
                                        ) : (
                                            <span className="typewriter-cursor" style={{ animation: "blink 1s infinite" }}>|</span>
                                        )}
                                    </h1>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 col-md-10">
                                            <p className="font-md color-white mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                                            India trusted partner for high precision supply chains. We specialize in Pharma Logistics with Cold Chain strength delivering reliable Cargo solutions across Textiles Machinery and General Cargo.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="box-button mt-30">
                                        <Link className="btn btn-brand-1-big hover-up wow animate__animated animate__fadeInUp" href="/about">Explore More</Link>
                                        {/* <a className="btn btn-play popup-youtube hover-up wow animate__animated animate__fadeInUp" onClick={() => setOpen(true)}>
                                            <img className="wow animate__animated animate__fadeInUp" src="/assets/imgs/template/icons/play.svg" alt="" />How it work?
                                        </a> */}
                                    </div>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                        {/* Overlay for darken video so text is readable */}
                        <div 
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgba(0,0,0,0.45)",
                                zIndex: 2
                            }}
                        />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className="banner-1" style={{ backgroundImage: 'url(assets/imgs/banner4.jpg)' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <p className="font-md color-white mb-15 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">Logistics &amp; Transportation</p>
                                    <h1 className="color-white mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                                        Pioneering Pharma<br className="d-none d-lg-block" />Logistics in India
                                    </h1>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p className="font-md color-white mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                                                India's Trusted Integrated Logistics Solution Provider, Specializing in Cold Chain and Reliable Air & Sea Pharma Cargo Movement.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="box-button mt-30">
                                        <Link className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeInUp" href="/about">Explore More</Link>
                                        {<a className="btn btn-play popup-youtube hover-up wow animate__animated animate__fadeInUp" onClick={() => setOpen(true)}>
                                            <img className="wow animate__animated animate__fadeInUp" src="/assets/imgs/template/icons/play.svg" alt="" />How it work?
                                        </a>}
                                    </div>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
            <div className="swiper-pagination swiper-pagination-banner" />
        </>
    )
}

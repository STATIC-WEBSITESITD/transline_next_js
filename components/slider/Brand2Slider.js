import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

const slideBoxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 110,
    padding: "20px",
    border: "1px solid #eee",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    background: "#fff",
};

const imgStyle = {
    maxHeight: 80,
    maxWidth: 140,
    objectFit: "contain"
};

const slides = [
    { src: "/assets/imgs/certifications/accai.png", alt: "ACCAI Certification Logo" },
    { src: "/assets/imgs/certifications/aeo.png", alt: "AEO Certification Logo" },
    { src: "/assets/imgs/certifications/fiata.svg", alt: "FIATA Certification Logo" },
    { src: "/assets/imgs/certifications/iata.svg", alt: "IATA Certification Logo" },
    { src: "/assets/imgs/certifications/iso.png", alt: "ISO Certification Logo" },
    { src: "/assets/imgs/certifications/jc trans.png", alt: "JC Trans Certification Logo" },
    { src: "/assets/imgs/certifications/sgs.jpg", alt: "SGS Certification Logo" },
    { src: "/assets/imgs/certifications/wca.png", alt: "WCA Certification Logo" },
];

export default function Brand2Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={6}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-customers",
                    nextEl: ".swiper-button-next-customers",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper wow animate__animated animate__fadeIn"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div style={slideBoxStyle}>
                            <img src={slide.src} alt={slide.alt} style={imgStyle} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

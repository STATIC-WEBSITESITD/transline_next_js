import { useEffect, useState } from 'react'
import CountUp from '@/components/elements/CounterUp'
import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import Pricing2 from "@/components/sections/homepage2/Pricing2"
import Link from "next/link"

export default function Service() {
    const [isOpen, setOpen] = useState(false)
    const [inViewport, setInViewport] = useState(false)

    const handleScroll = () => {
        const elements = document.getElementsByClassName('counterUp')
        if (elements.length > 0) {
            const element = elements[0]
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight
            if (isInViewport && !inViewport) {
                setInViewport(true);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="box-pageheader-1 text-center">
                            {/* <span className="btn btn-tag wow animate__animated animate__fadeIn">Who We Are</span> */}
                            <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Our Services</h2>
                            {/* <p className="font-md color-white wow animate__animated animate__fadeIn">We have been pioneering the industry in Europe for 20 years, and delivering value<br className="d-none d-lg-block" />products within given timeframe, every single time.</p> */}
                        </div>
                    </div>
                </section>
                <section className="section pt-100 pb-100">
                    <div className="container">
                        <div className="text-center">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Our Services</p>
                            <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                                We Are Trusted For<br className="d-none d-lg-block" /> Our Services
                            </h2>
                        </div>
                        <div className="mt-35">
                            <div className="row">
                                <div className="col-xl-4 col-md-6 mb-50 wow animate__animated animate__fadeIn">
                                    <div className="cardService">
                                        <div className="cardImage">
                                            <img src="/assets/imgs/page/homepage1/img.png" alt="Air Freight (Exports)" />
                                        </div>
                                        <div className="cardInfo">
                                            <h6 className="color-brand-2 mb-10">Air Freight (Exports)</h6>
                                            <p className="font-xs color-grey-900">
                                                Fast, predictable, and dedicated pharma-handling expertise with strong partnerships with global carriers. We deliver reliable pharmaceutical logistics solutions via air.
                                            </p>
                                            {/* <div className="box-button mt-30">
                                                <Link href="/services" className="btn btn-link font-sm color-brand-2">
                                                    View Details
                                                    <span>
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 mb-50 wow animate__animated animate__fadeIn">
                                    <div className="cardService">
                                        <div className="cardImage">
                                            <img src="/assets/imgs/page/homepage1/img2.png" alt="Sea Freight (Exports)" />
                                        </div>
                                        <div className="cardInfo">
                                            <h6 className="color-brand-2 mb-10">Sea Freight (Exports)</h6>
                                            <p className="font-xs color-grey-900">
                                                Reliable ocean freight forwarding and global shipping support for LCL, FCL, and non-containerized cargo.
                                            </p>
                                            {/* <div className="box-button mt-30">
                                                <Link href="/services" className="btn btn-link font-sm color-brand-2">
                                                    View Details
                                                    <span>
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-4 col-md-6 mb-50 wow animate__animated animate__fadeIn">
                                    <div className="cardService">
                                        <div className="cardImage">
                                            <img src="/assets/imgs/page/homepage1/img3.png" alt="Customs Clearance" />
                                        </div>
                                        <div className="cardInfo">
                                            <h6 className="color-brand-2 mb-10">Customs Clearance</h6>
                                            <p className="font-xs color-grey-900">
                                                Efficient and fast customs management for time-sensitive pharma cargo for both air and sea shipments. We are known for our reliable regulatory compliance.
                                            </p>
                                            {/* <div className="box-button mt-30">
                                                <Link href="/services" className="btn btn-link font-sm color-brand-2">
                                                    View Details
                                                    <span>
                                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
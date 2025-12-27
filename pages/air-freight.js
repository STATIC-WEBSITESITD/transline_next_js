import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function AirFreight() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false });
        } else {
            setIsActive({ status: true, key });
        }
    };

    return (
        <>
            <Layout
                headTitle="Air Freight Exports | Transline Air Cargo - Pharma Logistics"
                metaDescription="Transline Air Cargo delivers life-saving pharma freight with precision. We optimize the India supply chain using GDP-compliant, cold chain tech for global exports."
                metaKeywords="Air freight exports, pharma air cargo, cold chain logistics, GDP compliant, pharmaceutical exports India, temperature controlled shipping"
                canonicalUrl="https://transline-logistics.com/air-freight"
            >
                {/* Hero Banner Section */}
                <section className="section">
                    <div className="box-pageheader-1 text-center" style={{ background: "url(assets/imgs/s1.jpg) no-repeat top/cover fixed" }}>
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Air Freight (Exports)</h2>
                        <p className="color-grey-700 text-white font-md wow animate__animated animate__fadeIn">
                            Pharma air freight. Cold chain experts. Global GDP-compliant exports from India.
                        </p>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="section pt-100 pb-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="content-detail wow animate__animated animate__fadeIn">
                                    <p className="font-md color-grey-900 mb-30" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                                        Transline Air Cargo Services Pvt. Ltd. is your strategic partner in growth. We recognize that the India pharmaceutical sector needs a supply chain that is both agile and secure. By choosing our cold chain expertise, you secure a promise of quality, transparency, and global compliance. As we invest in smarter tracking and sustainable logistics, our mission remains clear: providing a high-velocity bridge that brings life-saving innovations from Indian labs to patients worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section pt-50 pb-100 bg-1">
                    <div className="container">
                        <div className="text-center mb-65">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Our Benefits</p>
                            <h2 className="color-brand-2 text-capitalize mb-15 mt-15 wow animate__animated animate__fadeInUp">
                                Why Choose Our Air Freight Services
                            </h2>
                        </div>
                        <div className="row mt-35">
                            <div className="col-xl-4 col-lg-6 mb-30">
                                <div className="cardGrid wow animate__animated animate__fadeIn">
                                    <div className="cardImage">
                                        <div style={{
                                            height: "200px",
                                            background: "linear-gradient(135deg, #2C7DA1 0%, #1C6180 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="64" height="64" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2 mb-15">Robust Cold Chain Assurance</h6>
                                        <p className="font-md color-grey-700">
                                            Rigorously monitor and control temperature to keep pharma shipments safe, maintaining product efficacy on every delivery from India to global markets.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 mb-30">
                                <div className="cardGrid wow animate__animated animate__fadeIn" style={{ animationDelay: "0.2s" }}>
                                    <div className="cardImage">
                                        <div style={{
                                            height: "200px",
                                            background: "linear-gradient(135deg, #2C7DA1 0%, #1C6180 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="64" height="64" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2 mb-15">Optimized Air Freight & Customs</h6>
                                        <p className="font-md color-grey-700">
                                            Experience faster and reliable delivery with prioritized handling and seamless regulatory processes, keeping your supply chain smooth internationally.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 mb-30">
                                <div className="cardGrid wow animate__animated animate__fadeIn" style={{ animationDelay: "0.4s" }}>
                                    <div className="cardImage">
                                        <div style={{
                                            height: "200px",
                                            background: "linear-gradient(135deg, #2C7DA1 0%, #1C6180 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="64" height="64" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2 mb-15">Comprehensive Risk Management</h6>
                                        <p className="font-md color-grey-700">
                                            Get full visibility with constant real-time tracking and strict GDP-compliance, ensuring your pharma brand is protected from end-to-end in every shipment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="section pt-100 pb-0">
                    <div className="container">
                        <div className="text-center mb-65">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Why Choose Us</p>
                            <h2 className="color-brand-2 text-capitalize mb-15 mt-15 wow animate__animated animate__fadeInUp">
                                Our Competitive Advantages
                            </h2>
                        </div>
                        <div className="row mt-35">
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="d-flex align-items-start wow animate__animated animate__fadeIn" style={{gap: "20px"}}>
                                    <div className="flex-shrink-0">
                                        <div className="cardLeadingCompany" style={{
                                            width: "80px",
                                            height: "80px",
                                            padding: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="40" height="40" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Market Leadership in India</h5>
                                        <p className="font-md color-grey-700">
                                            India focused leadership that connects laboratories with strong export expertise many general forwarders often miss
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="d-flex align-items-start wow animate__animated animate__fadeIn" style={{gap: "20px", animationDelay: "0.2s"}}>
                                    <div className="flex-shrink-0">
                                        <div className="cardLeadingCompany" style={{
                                            width: "80px",
                                            height: "80px",
                                            padding: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="40" height="40" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Validated Cold Chain Security</h5>
                                        <p className="font-md color-grey-700">
                                            Proven cold chain security with careful planning and route checks to avoid temperature risks before issues arise
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="d-flex align-items-start wow animate__animated animate__fadeIn" style={{gap: "20px", animationDelay: "0.4s"}}>
                                    <div className="flex-shrink-0">
                                        <div className="cardLeadingCompany" style={{
                                            width: "80px",
                                            height: "80px",
                                            padding: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="40" height="40" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Resilient Supply Chain Architecture</h5>
                                        <p className="font-md color-grey-700">
                                            Strong and flexible supply chains built with backup options and top carriers so shipments never get stuck
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-40">
                                <div className="d-flex align-items-start wow animate__animated animate__fadeIn" style={{gap: "20px", animationDelay: "0.6s"}}>
                                    <div className="flex-shrink-0">
                                        <div className="cardLeadingCompany" style={{
                                            width: "80px",
                                            height: "80px",
                                            padding: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <svg width="40" height="40" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Data-Driven Global Decision Making</h5>
                                        <p className="font-md color-grey-700">
                                            Smart global decisions powered by clear data insights and reports that turn logistics into a business advantage
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section bg-transparent pt-100 pb-100 bg-faqs">
                    <div className="container">
                        <div className="text-center">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Frequently Asked Questions</p>
                            <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                                Answers to Common Air Freight Queries
                            </h2>
                        </div>
                        <div className="mt-35">
                            <div className="box-accordion">
                                <div className="accordion" id="accordionAirFreight">
                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={isActive.key === 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                What types of pharmaceutical cargo do you handle in India?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                We handle a wide range of pharmaceutical exports from India including medicines APIs vaccines and clinical trial shipments through a secure supply chain and cold chain process.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={isActive.key === 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                How do you maintain cold chain integrity during air freight exports?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Our cold chain management includes temperature controlled handling monitoring and coordination across the supply chain to ensure pharma cargo from India remains stable during transit.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={isActive.key === 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                Do you support end to end supply chain management for exports?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Yes we manage the complete export supply chain from India including pickup airport handling customs coordination and global delivery with a strong focus on cold chain compliance.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={isActive.key === 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                Are your air freight services compliant with global pharma standards?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Our operations follow GDP aligned processes to support a compliant supply chain and cold chain for pharmaceutical exports from India.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                                            <button className={isActive.key === 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                How do you reduce risks in the pharma export supply chain?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 5 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                We reduce risks through real time monitoring structured planning and backup options across the supply chain and cold chain to protect shipments moving from India.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(6)}>
                                            <button className={isActive.key === 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                Why choose Transline Air Cargo for pharma exports from India?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 6 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Transline Air Cargo offers strong India focused expertise reliable cold chain handling and transparent supply chain operations to support safe and timely global deliveries.
                                            </div>
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


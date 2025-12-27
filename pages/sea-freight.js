import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function SeaFreight() {
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
                headTitle="Sea Freight Exports | Transline Sea Cargo - Pharma Logistics"
                metaDescription="Transline Cargo Services delivers dependable export logistics sea solutions for pharmaceutical companies moving cargo across international markets with careful planning and strong coordination."
                metaKeywords="Sea freight exports, pharma sea cargo, export logistics sea, FCL LCL shipping, pharmaceutical sea exports, temperature controlled containers"
                canonicalUrl="https://transline-logistics.com/sea-freight"
            >
                {/* Hero Banner Section */}
                <section className="section">
                    <div className="box-pageheader-1 text-center" style={{ background: "url(assets/imgs/s2.jpg) no-repeat center/cover fixed" }}>
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Sea Freight (Exports)</h2>
                        <p className="color-grey-700 text-white font-md wow animate__animated animate__fadeIn">
                            Dependable sea export logistics for pharma – planned, coordinated, and delivered worldwide by Transline Cargo Services.
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
                                        With a clear understanding of pharmaceutical shipping requirements, Transline Cargo Services manages sea exports with precision and accountability. From container selection to port handling, we ensure export logistics sea processes remain structured, reliable and aligned with global trade standards.
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
                                Why Choose Our Sea Freight Services
                            </h2>
                        </div>
                        <div className="row mt-35">
                            <div className="col-lg-4 col-md-6 mb-30">
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2 mb-15">Cost-Optimized Shipping</h6>
                                        <p className="font-md color-grey-700">
                                            Ship bulk pharmaceuticals by sea and lower your cost per unit. Transline's logistics team enables cost savings while still maintaining industry-approved pharma standards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2 mb-15">FCL & LCL Options</h6>
                                        <p className="font-md color-grey-700">
                                            Choose between Full Container Load and Less than Container Load solutions. Whether big or small, our sea logistics are tailored to fit any pharmaceutical export.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30">
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2 mb-15">Stable Supply Lines</h6>
                                        <p className="font-md color-grey-700">
                                            Experience timely and predictable deliveries thanks to established sea routes. Our planning enables you to manage inventories with confidence and avoid shortages.
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
                                        <h5 className="color-brand-2 mb-15">Specialized Pharma Logistics</h5>
                                        <p className="font-md color-grey-700">
                                            Unlike general forwarders, we use validated temperature-controlled containers for every Sea Export. Our Logistics protocols maintain chemical stability and strict GDP compliance throughout the journey.
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Sea Port-Level Advocacy</h5>
                                        <p className="font-md color-grey-700">
                                            Our Logistics teams coordinate with port authorities to ensure your Export shipments receive priority discharging. We fast-track pharmaceutical movement from the Sea vessel through the terminal gates.
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Ethical Export Transparency</h5>
                                        <p className="font-md color-grey-700">
                                            We provide a clear audit trail for every Sea Logistics operation. Our commitment to integrity ensures your pharmaceutical Export trade is conducted with the highest level of regulatory compliance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Consistent Export Planning and Control */}
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="color-brand-2 mb-15">Consistent Export Planning and Control</h5>
                                        <p className="font-md color-grey-700">
                                            We apply structured planning and close monitoring across sea logistics movements. This helps reduce disruptions, maintain schedule reliability and support smooth pharmaceutical exports across global routes.
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
                                Answers to Common Sea Freight Queries
                            </h2>
                        </div>
                        <div className="mt-35">
                            <div className="box-accordion">
                                <div className="accordion" id="accordionSeaFreight">
                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={isActive.key === 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                What is Export Logistics Sea for pharmaceutical shipments?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Export logistics refers to the planning, handling and movement of pharmaceutical cargo through sea freight while ensuring compliance, safety and reliability across global routes.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={isActive.key === 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                How does Transline Cargo Services manage sea freight exports?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Transline Cargo Services manages sea freight exports through structured export logistics sea processes including container planning, port coordination and documentation accuracy.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={isActive.key === 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                Do you handle temperature sensitive pharma cargo by sea?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Yes, export logistics sea services include temperature controlled containers and careful monitoring to protect sensitive pharmaceutical cargo during long sea journeys.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={isActive.key === 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                What sea freight options are available for exports?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                We offer flexible export logistics sea options including FCL and LCL shipments to suit different pharmaceutical export volumes and requirements.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow animate__animated animate__fadeIn">
                                        <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                                            <button className={isActive.key === 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                                Why choose Transline Cargo Services for Export Logistics Sea?
                                            </button>
                                        </h5>
                                        <div className={isActive.key === 5 ? "accordion-collapse" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                Transline Cargo Services combines pharma expertise, global sea connectivity and transparent export logistics sea operations to ensure smooth and compliant international shipping.
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


import Layout from "@/components/layout/Layout"

export default function Contact() {

    return (
        <>
            <Layout
                headTitle="Contact Transline Logistics"
                metaDescription="Contact Transline Logistics for pharmaceutical logistics, air freight, sea freight and cold chain solutions from India. Reach our specialist team for quotes, support and partnership enquiries."
                metaKeywords="contact Transline Logistics, pharma logistics contact, freight forwarding enquiry, pharma cold chain contact, logistics support India"
                canonicalUrl="https://transline-logistics.com/contact"
            >
                <section className="section">
                    <div className="box-pageheader-1 text-center">
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Contact Us</h2>
                        <p className="color-grey-700 text-white font-md wow animate__animated animate__fadeIn">
                            Speak with our pharmaceutical logistics experts for enquiries, quotes and support
                        </p>
                    </div>
                </section>
                <section className="section pt-100 pb-100">
                    <div className="container">
                        <div className="text-center">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">We would love to hear from you</p>
                            <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                                Reach out to our team
                            </h2>
                        </div>
                        <div className="mt-35">
                            <div className="row align-items-center">
                                <div className="col-xl-12">
                                    <form>
                                        <div className="row align-items-center wow animate__animated animate__fadeIn">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Your name *" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="email" placeholder="Your email *" name="email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Mobile *" name="mobile" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Subject *" name="subject" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message" rows={8} placeholder="Message *" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-brand-1-big">
                                                    Submit Now
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section d-block">
                    <div className="box-map-contact wow animate__animated animate__fadeIn">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0276435154938!2d72.86090877520611!3d19.106443182104403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c84844b1b5b7%3A0xa83cacd6feb6cadc!2sTransline%20Air%20Cargo%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1765793833799!5m2!1sen!2sin" height={570} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </Layout>
        </>
    )
}
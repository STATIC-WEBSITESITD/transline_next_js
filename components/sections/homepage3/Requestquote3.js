import Link from "next/link";

export default function Requestquote3() {
    return (
        <>
            <section id="request-a-quote" className="section mt-200 bg-2 bg-request-quote-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box-form-request-quote-2 box-form-request-quote-3">
                                <div className="box-form-contact-leading">
                                    <h2 className="title-favicon color-brand-2 mb-15 wow animate__animated animate__fadeIn">
                                        Request a Quote
                                    </h2>
                                    <p className="font-md color-grey-700 mb-25 wow animate__animated animate__fadeIn">
                                        If you have any queries, please fill out the form below to get a quote.
                                    </p>
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
                        <div className="col-lg-6">
                            <div className="why-choose-transline">
                                <h3 className="color-brand-2 pt-100 mb-30">WHY CHOOSE TRANSLINE</h3>
                                <ul className="list-why-choose">
                                    <li className="wow animate__animated animate__fadeIn mb-25">
                                        <h5 className="color-brand-2">Pharma-Grade Precision</h5>
                                        <p className="font-md color-grey-700">
                                            We apply the world’s strictest handling standards to all shipments, from medicine to textiles.
                                        </p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn mb-25">
                                        <h5 className="color-brand-2">Coverage</h5>
                                        <p className="font-md color-grey-700">
                                            Full-spectrum services including Air, Sea, Customs Clearance, and Cold Chain.
                                        </p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn mb-25">
                                        <h5 className="color-brand-2">Reliability</h5>
                                        <p className="font-md color-grey-700">
                                            A proven track record of reliability and compliance, with long-standing client partnerships built on trust.
                                        </p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn mb-25">
                                        <h5 className="color-brand-2">National Network</h5>
                                        <p className="font-md color-grey-700">
                                            Head office in Mumbai, with strategic branches across major hubs like Bangalore, Chennai, Delhi, Ahmedabad, and Goa.
                                        </p>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn mb-25">
                                        <h5 className="color-brand-2">Team &amp; Expertise</h5>
                                        <p className="font-md color-grey-700">
                                            Supported by a team of 80+ trained professionals committed to efficiency and customer satisfaction.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import Link from "next/link";

export default function Requestquote3() {
    return (
        <>
            <section id="request-a-quote" className="section mt-100 pt-100 pb-100 bg-2 bg-request-quote-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="box-form-request-quote-2 box-form-request-quote-3">
                                <div className="box-form-contact-leading">
                                    <div className="text-center">
                                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Request a Quote</p>
                                        <h2 className="color-brand-2 text-capitalize mb-30 mt-15 wow animate__animated animate__fadeIn">
                                            Get a Quote
                                        </h2>
                                    </div>
                                    <form>
                                        <div className="row align-items-center wow animate__animated animate__fadeIn">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Company Name *" name="company_name" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Name *" name="name" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="email" placeholder="Email *" name="email" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Mobile Number *" name="mobile" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <select className="form-control" name="commodities" required>
                                                        <option value="">Commodities *</option>
                                                        <option value="Documents">Documents</option>
                                                        <option value="Electronics">Electronics</option>
                                                        <option value="Garments / Textiles">Garments / Textiles</option>
                                                        <option value="Machinery Parts">Machinery Parts</option>
                                                        <option value="Household Goods">Household Goods</option>
                                                        <option value="Food Items (Non-Perishable)">Food Items (Non-Perishable)</option>
                                                        <option value="Medical Supplies">Medical Supplies</option>
                                                        <option value="Auto Spare Parts">Auto Spare Parts</option>
                                                        <option value="Chemicals (Non-Hazardous)">Chemicals (Non-Hazardous)</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Weight *" name="weight" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Number Of Pieces *" name="pieces" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Dimensions *" name="dimensions" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Destination *" name="destination" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="additional_info" rows={1} placeholder="Additional Information *" defaultValue={""} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-brand-1-big w-100">
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
                                <div className="text-left">
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Why Choose Us</p>
                                    <h2 className="color-brand-2 text-capitalize mb-30 mt-15 wow animate__animated animate__fadeIn">
                                        Why Choose Transline
                                    </h2>
                                </div>
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

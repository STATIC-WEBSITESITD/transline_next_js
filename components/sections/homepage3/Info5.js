import Link from "next/link";

export default function Info5() {
    return (
        <>
            <section className="section pt-100 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                                About Transline Logistics
                            </p>
                            <h2 className="color-brand-2 text-capitalize mb-30 mt-15 wow animate__animated animate__fadeIn">
                                Pharma-Focused, Cold Chain Ready
                            </h2>
                            <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">
                                For more than three decades, Transline has focused exclusively on moving
                                pharmaceutical cargo safely and compliantly from India to global destinations.
                                Our teams understand the criticality of temperature-sensitive products and
                                work closely with manufacturers, airlines and shipping lines to protect every
                                shipment end-to-end.
                            </p>
                            <p className="font-md color-grey-900 mb-40 wow animate__animated animate__fadeIn">
                                From validated cold chain solutions to time-definite air freight and
                                cost-efficient sea freight, we combine specialist expertise, robust processes
                                and transparent communication so your medicines arrive on time, in-spec and
                                audit-ready.
                            </p>
                            <div className="mt-10">
                                <Link className="btn btn-brand-2 wow animate__animated animate__fadeIn" href="/about">
                                    Explore More
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 position-relative">
                            <div className="certified-icon wow animate__animated animate__fadeIn">
                                <img src="/assets/imgs/page/homepage3/certified.png" alt="transp" />
                            </div>
                            <div className="row">
                                <div className="col-md-6 wow animate__animated animate__fadeIn">
                                    <img className="mt-90" src="/assets/imgs/about1.jpg" alt="transp" />
                                </div>
                                <div className="col-md-6 wow animate__animated animate__fadeIn">
                                    <img src="/assets/imgs/about2.jpg" alt="transp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

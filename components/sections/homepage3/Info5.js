import Link from "next/link";

export default function Info5() {
    return (
        <>
            <section className="section pt-100 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">About Us</p>
                            <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                                Your Dedicated Partner in Pharmaceutical Logistics
                            </h2>
                            <p className="font-md color-grey-900 mb-40 wow animate__animated animate__fadeIn">
                                The Transline Group was founded in 1989 by Mr. Dinesh Kirodian. From a single operation, we have grown into one of India's most trusted logistics and freight forwarding partners, specializing exclusively in pharmaceutical cargo movement. Our journey is defined by a consistent focus on compliance, quality, and the safe, fast, and timely delivery of life-saving medicines. We ensure your supply chain remains robust and reliable.
                            </p>
                            <div className="mt-20">
                                <Link className="btn btn-brand-2 wow animate__animated animate__fadeIn" href="/about">Explore More</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 position-relative">
                            <div className="certified-icon wow animate__animated animate__fadeIn">
                                <img src="/assets/imgs/page/homepage3/certified.png" alt="transp" />
                            </div>
                            <div className="row">
                                <div className="col-md-6 wow animate__animated animate__fadeIn">
                                    <img className="mt-90" src="/assets/imgs/page/homepage3/img-info-5.png" alt="transp" />
                                </div>
                                <div className="col-md-6 wow animate__animated animate__fadeIn">
                                    <img src="/assets/imgs/page/homepage3/img-info-5-2.png" alt="transp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

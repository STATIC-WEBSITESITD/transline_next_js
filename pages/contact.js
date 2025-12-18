import Layout from "@/components/layout/Layout"

export default function Contact() {
    const branches = [
        {
            city: "Mumbai (Head Office)",
            address: `116/117, Sahar Cargo Estate,
J. B. Nagar, Andheri East,
Mumbai – 400099`,
            contactPersons: [
                {
                    name: "Mr. Cedric Vaz",
                    email: "cedric@translinelogistics.com",
                    phone: "+91 98196 69926"
                },
                {
                    name: "Deepak Patel",
                    phone: "9920615329"
                }
            ],
        },
        {
            city: "Bengaluru",
            address: `No. 209, Prestige Terminus – 1,
2nd Floor, Airport Exit Road,
Bengaluru – 580017`,
            contactPersons: [
                {
                    name: "Rani Ravichandran",
                    designation: "Branch Head",
                    phone: "9845794536"
                }
            ],
        },
        {
            city: "Chennai",
            address: `No. 5, Thiru-Vi-Ka Street,
Meenambakkam,
Chennai – 600027`,
            contactPersons: [
                {
                    name: "C. P. Sanjeev",
                    designation: "Branch Head",
                    phone: "9444443007"
                }
            ],
        },
        {
            city: "Delhi (Gurgaon)",
            address: `1416, 14th Floor, Galleria Tower,
DLF Phase 4,
Gurgaon, Haryana – 122009`,
            contactPersons: [
                {
                    name: "Satish Kirodian",
                    designation: "Branch Head"
                }
            ]
        },
        {
            city: "Ahmedabad",
            address: `Office No. 317, Sunrise Mall,
Nyay Marg,
Ahmedabad, Gujarat – 380015`,
            contactPersons: [
                {
                    name: "Anita Sharma",
                    designation: "Head – Air Freight (India)"
                }
            ]
        },
    ];

    return (
        <>
            <Layout
                headTitle="Contact Transline Air Cargo | Pharma Logistics Experts"
                metaDescription="Get in touch with Transline Air Cargo for reliable pharmaceutical logistics, cold chain solutions, air & sea freight services across India and global markets."
                metaKeywords="Contact pharma logistics company, Transline Air Cargo contact, pharma cargo support India, logistics company Mumbai, cold chain logistics contact"
                canonicalUrl="https://transline-logistics.com/contact"
            >
                <section className="section">
                    <div className="box-pageheader-1 text-center" style={{ background: "url(assets/imgs/contact.jpg) no-repeat top/cover" }}>
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
                <section className="section pb-100">
                    <div className="container">
                        <div className="text-center">
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                                Connect with our regional offices across India
                            </p>
                            <h2 className="color-brand-2 text-capitalize mb-65 mt-15 wow animate__animated animate__fadeIn">
                                Our Branch Offices
                            </h2>
                        </div>
                        <div className="row justify-content-center">
                            {branches.map((branch, idx) => (
                                <div
                                    key={idx}
                                    className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch wow animate__animated animate__fadeIn"
                                >
                                    <div className="card branch-card w-100 h-100 border-0 d-flex flex-column">
                                        <div className="card-body d-flex flex-column p-0">
                                            
                                            <h5 className="color-brand-2 mb-2">{branch.city}</h5>
                                            <p
                                                className="font-sm color-grey-700 mb-3"
                                                style={{ whiteSpace: "pre-line" }}
                                            >
                                                {branch.address}
                                            </p>
                                            {branch.contactPersons && branch.contactPersons.length > 0 && (
                                                <div className="mt-auto">
                                                    <p className="font-xs text-uppercase color-grey-500 mb-2">
                                                        Key contacts
                                                    </p>
                                                    <ul className="list-unstyled mb-0">
                                                        {branch.contactPersons.map((person, pidx) => (
                                                            <li key={pidx} className="mb-2 branch-person">
                                                                <span className="fw-semibold color-brand-2">
                                                                    {person.name}
                                                                </span>
                                                                {person.phone && (
                                                                    <span>
                                                                        <a
                                                                            href={`tel:${person.phone.replace(/\s/g, '')}`}
                                                                            className="color-grey-900 d-inline-block"
                                                                        >
                                                                            {person.phone}
                                                                        </a>
                                                                    </span>
                                                                )}
                                                                {person.email && (
                                                                    <span>
                                                                        <a
                                                                            href={`mailto:${person.email}`}
                                                                            className="color-grey-900 d-inline-block"
                                                                        >
                                                                            {person.email}
                                                                        </a>
                                                                    </span>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="section d-block">
                    <div className="box-map-contact wow animate__animated animate__fadeIn">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0276435154933!2d72.86090877497823!3d19.106443182104424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c84844b1b5b7%3A0xa83cacd6feb6cadc!2sTransline%20Air%20Cargo%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1765982506015!5m2!1sen!2sin" height={570} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>

                <style jsx>{`
                    .branch-card {
                        padding: 24px 22px;
                        border-radius: 16px;
                        box-shadow: 0 8px 28px rgba(15, 23, 42, 0.06);
                        background: #ffffff;
                        transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
                        border: 1px solid rgba(148, 163, 184, 0.3);
                    }
                    .branch-card:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 18px 45px rgba(15, 23, 42, 0.16);
                        border-color: #2b6cb0;
                    }
                    .branch-tag {
                        display: inline-block;
                        padding: 4px 12px;
                        border-radius: 999px;
                        font-size: 11px;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                        background: rgba(59, 130, 246, 0.08);
                        color: #1d4ed8;
                        font-weight: 600;
                    }
                    .branch-person {
                        font-size: 14px;
                        line-height: 1.5;
                    }
                `}</style>
            </Layout>
        </>
    )
}
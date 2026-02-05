import Layout from "@/components/layout/Layout";
import { useState } from "react";

// Add award names in the array, matching to image order.
const box = [
    { src: "/assets/imgs/awards/aw1.svg", name: "Award 1" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.13 (1).jpeg", name: "Award 2" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.14 (1).jpeg", name: "Award 3" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.14 (2).jpeg", name: "Award 4" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.14.jpeg", name: "Award 5" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.15 (1).jpeg", name: "Award 6" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.15 (2).jpeg", name: "Award 7" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.16 (1).jpeg", name: "Award 8" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.16 (2).jpeg", name: "Award 9" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.16.jpeg", name: "Award 10" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.17 (1).jpeg", name: "Award 11" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.17 (2).jpeg", name: "Award 12" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.17.jpeg", name: "Award 13" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.18.jpeg", name: "Award 14" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.19 (2).jpeg", name: "Award 15" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.20 (1).jpeg", name: "Award 16" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.20.jpeg", name: "Award 17" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.21 (1).jpeg", name: "Award 18" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.21 (2).jpeg", name: "Award 19" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.21.jpeg", name: "Award 20" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.22 (1).jpeg", name: "Award 21" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.22.jpeg", name: "Award 22" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.23 (1).jpeg", name: "Award 23" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.23.jpeg", name: "Award 24" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.24 (1).jpeg", name: "Award 25" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.24.jpeg", name: "Award 26" },
    { src: "/assets/imgs/awards/WhatsApp Image 2026-02-05 at 11.14.25.jpeg", name: "Award 27" },
];

const cardStyle = {
    transition: "box-shadow 0.3s, transform 0.3s",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    borderRadius: "8px",
    cursor: "pointer",
    border: "1px solid #eee",
};
const cardHoverStyle = {
    boxShadow: "0 6px 24px 0 rgba(0,0,0,0.20)",
    transform: "translateY(-4px) scale(1.03)",
    border: "1px solid #a3d6ff",
};

function Card({ children }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="card h-100 shadow-sm text-center"
            style={{
                ...cardStyle,
                ...(hovered ? cardHoverStyle : {})
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </div>
    );
}

export default function About() {
    return (
        <>
            <Layout
                headTitle="Awards & Certifications | Trusted Pharma Logistics Company"
                metaDescription="Transline Air Cargo is recognized for excellence in pharma logistics, backed by industry certifications, compliance standards and trusted global partnerships."
                metaKeywords="Pharma logistics awards, logistics certifications India, trusted cargo company, compliant pharma logistics, Transline recognitions"
            >
                <section className="section">
                    <div className="box-pageheader-1 text-center" style={{ background: "url(assets/imgs/awards.jpg) no-repeat center/cover fixed" }}>
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Awards</h2>
                        <p className="color-grey-700 text-white font-lg wow animate__animated animate__fadeIn">
                            Honours and recognitions for our commitment to safe, compliant pharma logistics
                        </p>
                    </div>
                </section>
                <section className="section pt-100 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            {box.map((item, idx) => (
                                <div className="col-md-3 mb-4" key={idx}>
                                    <Card>
                                        <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                            <img
                                                src={item.src}
                                                alt={item.name}
                                                style={{ maxHeight: 300, width: "100%", objectFit: "contain" }}
                                                className="mb-3"
                                            />
                                            <div style={{ minHeight: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <h5 className="card-title mb-0" style={{ fontSize: "1.08rem" }}>{item.name}</h5>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
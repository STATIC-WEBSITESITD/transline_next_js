import Layout from "@/components/layout/Layout";
import { useState } from "react";

const box = [
    { src: "/assets/imgs/awards/aw1.svg" },
    { src: "/assets/imgs/awards/aw2.jpeg" },
    { src: "/assets/imgs/awards/aw3.jpeg" },
    { src: "/assets/imgs/awards/aw4.jpeg" },
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
            <Layout>
                <section className="section">
                        <div className="box-pageheader-1 text-center">
                            <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Awards</h2>
                            <p className="color-grey-700 text-white font-md wow animate__animated animate__fadeIn">
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
                                                alt={item.alt}
                                                style={{ maxHeight: 300, width: "100%", objectFit: "contain" }}
                                                className="mb-0"
                                            />
                                            <h5 className="card-title">{item.alt}</h5>
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
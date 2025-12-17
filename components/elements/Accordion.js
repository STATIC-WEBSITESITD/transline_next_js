import { useState } from "react";

export default function Accordion() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            Do you provide reliable pharmaceutical logistics services?
                        </button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            Yes, we specialize in reliable pharmaceutical logistics with strict quality and temperature control standards.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            Do you handle cold chain pharmaceutical shipments?
                        </button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            Yes, we manage temperature controlled pharmaceutical cargo with proper monitoring and handling procedures.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            What logistics modes do you offer for pharma exports?
                        </button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            We offer air freight and sea freight logistics along with complete customs clearance support.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            Where are your logistics operations based in India?
                        </button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            Our head office is in Mumbai with branches in Bangalore, Chennai, Delhi, Ahmedabad, and Goa.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                        <button className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            What type of pharmaceutical companies do you support?
                        </button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            We work with pharmaceutical manufacturers, exporters, and distributors handling regulated and time sensitive cargo.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import Layout from "@/components/layout/Layout";

export default function TrackParcel() {
    return (
        <>
            <Layout>
                <section className="section d-block">
                    <div className="container position-relative">
                        <div className="box-info-trackyourparcel" style={{ maxWidth: 480, margin: "0 auto" }}>
                            <h2 className="color-brand-2 mb-25 wow animate__animated animate__fadeIn" style={{ textAlign: "center" }}>
                                Package tracking is easy<br className="d-none d-lg-block" />with order number
                            </h2>
                            <div className="form-trackparcel wow animate__animated animate__fadeIn">
                                <form action="#" style={{ marginTop: 20 }}>
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Your package tracking number" />
                                        <input className="btn btn-brand-1 btn-track" type="submit" defaultValue="Track Package" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
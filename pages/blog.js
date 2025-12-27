import Layout from "@/components/layout/Layout"
import Brand1Slider from "@/components/slider/Brand1Slider"
import Link from "next/link"
export default function Blog() {

    return (
        <>
            <Layout>
                <section className="section">
                    <div className="box-pageheader-1 text-center" style={{ background: "url(assets/imgs/AboutBanner.jpg) no-repeat top/cover" }}>
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Blog</h2>
                        <p className="color-grey-700 text-white font-md wow animate__animated animate__fadeIn">
                            blogs related to pharma logistics
                        </p>
                    </div>
                </section>
                <section className="section pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/blog/news1.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-sing">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/blog/news2.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-sing">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/blog/news3.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-sing">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/blog/news4.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-sing">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/blog/news5.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-sing">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/blog/news6.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-sing">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/blog/news7.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-sing">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/blog/news8.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-sing">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow animate__animated animate__fadeIn">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/blog/news9.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-sing">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
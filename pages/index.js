import Layout from "@/components/layout/Layout"
import Brands1 from "@/components/sections/homepage1/Brands1"
import Brands2 from "@/components/sections/homepage1/Brands2"
import Hero1 from "@/components/sections/homepage1/Hero1"
import Info5 from "@/components/sections/homepage3/Info5"
import Projects3 from "@/components/sections/homepage4/Projects3"
import Requestquote3 from "@/components/sections/homepage3/Requestquote3"
import Faqs1 from "@/components/sections/homepage1/Faqs1"
export default function Home() {

    return (
        <>
            <Layout
                headTitle="Pharmaceutical Logistics & Freight Forwarding"
                metaDescription="Transline Logistics is a specialised pharmaceutical logistics provider in India, offering compliant air freight, sea freight and cold chain solutions for time‑critical, temperature‑sensitive medicines and healthcare products worldwide."
                metaKeywords="pharmaceutical logistics India, pharma freight forwarding, cold chain logistics, air freight pharma, sea freight pharma, Transline Logistics, time critical medicine delivery"
                canonicalUrl="https://transline-logistics.com/"
            >
                <Hero1 />
                <Info5 />
                <Brands1 />
                <Brands2 />
                <Projects3 />
                <Requestquote3 />
                <Faqs1 />
            </Layout>
        </>
    )
}
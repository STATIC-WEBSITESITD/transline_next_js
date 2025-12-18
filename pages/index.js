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
                headTitle="Transline Air Cargo | Pharma Logistics & Cold Chain India"
                metaDescription="Transline Air Cargo delivers trusted pharmaceutical logistics with cold chain, air freight, sea freight and compliant cargo solutions for time-sensitive shipments."
                metaKeywords="Pharmaceutical logistics India, pharma cargo services, cold chain logistics, air freight pharma, sea freight pharma, reliable logistics company, Transline Air Cargo"
                canonicalUrl="https://transline-logistics.com/"
            >
                <Hero1 />
                <Info5 />
                <Brands1 />
                <Projects3 />
                <Brands2 />
                <Requestquote3 />
                <Faqs1 />
            </Layout>
        </>
    )
}
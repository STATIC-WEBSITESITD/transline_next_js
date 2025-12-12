import Layout from "@/components/layout/Layout"
import Brands1 from "@/components/sections/homepage1/Brands1"
import Hero1 from "@/components/sections/homepage1/Hero1"
// import Info2 from "@/components/sections/homepage1/Info2"
import Info5 from "@/components/sections/homepage3/Info5"
import Projects3 from "@/components/sections/homepage4/Projects3"
import Requestquote3 from "@/components/sections/homepage3/Requestquote3"
// import Services1 from "@/components/sections/homepage1/Services1"
// import Bgmap from "@/components/sections/homepage1/Bgmap"
// import Cta1 from "@/components/sections/homepage1/Cta1"
// import Faqs1 from "@/components/sections/homepage1/Faqs1"
// import Howitwork1 from "@/components/sections/homepage1/Howitwork1"
// import Info1 from "@/components/sections/homepage1/Info1"
// import News1 from "@/components/sections/homepage1/News1"
// import Pricing1 from "@/components/sections/homepage1/Pricing1"
// import Projects1 from "@/components/sections/homepage1/Projects1"
// import Requestquote1 from "@/components/sections/homepage1/Requestquote1"
// import Testimonial1 from "@/components/sections/homepage1/Testimonial1"
export default function Home() {

    return (
        <>
            <Layout>
                <Hero1 />
                <Info5 />
                <Brands1 />
                <Projects3 />
                {/* <Info2 /> */}
                <Requestquote3 />
                {/* <Services1 />
                <Info1 />
                <Howitwork1 />
                <Testimonial1 />
                <Projects1 />
                <Requestquote1 />
                <Pricing1 />
                <Faqs1 />
                <Cta1 />
                <News1 />
                <Bgmap /> */}
            </Layout>
        </>
    )
}
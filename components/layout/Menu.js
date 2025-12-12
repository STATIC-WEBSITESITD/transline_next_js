import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
    const router = useRouter();

    return (
        <>
            <ul className="main-menu">
                <li><Link className="active" href="/">Home</Link></li>
                <li><Link href="/">About Us</Link></li>
                <li className="has-children">
                    <Link href="#">Services</Link>
                    <ul className="sub-menu">
                        <li><Link href="/air-freight">Air Freight</Link></li>
                        <li><Link href="/sea-freight">Sea Freight</Link></li>
                        <li><Link href="/customs-clearance">Customs Clearance</Link></li>
                    </ul>
                </li>
                <li><Link href="/certifications">Certifications</Link></li>
                <li><Link href="/">Contact Us</Link></li>
            </ul>
        </>
    );
}

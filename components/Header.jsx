import Nav from "./Nav"
import Image from "next/image"
import Link from "next/link"
import"../styles/header.css"

export default function Header() {
    return (
        <header>
            <Link href="/">
                <Image src="/img/fcis-logo.png" 
                alt="Logo FCIS" 
                width={150} 
                height={50}/>
            </Link>
            <Nav />
        </header>
    )
}
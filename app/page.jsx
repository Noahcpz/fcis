import "../styles/Home.css"
import Link from "next/link"
import Image from "next/image"  
import HomeHero from "../components/HomeHero"
import Spitch from "../components/Spitch"
import Cards from "../components/Cards"

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Spitch />
      <Cards />
    </main>
  );
}
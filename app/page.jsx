import "../styles/home.css"
import HomeHero from "../components/home/HomeHero"
import Spitch from "../components/home/Spitch"
import Cards from "../components/home/Cards"
import RappelContact from "../components/home/RappelContact"


export default function Home() {
  return (
    <main>
      <HomeHero />
      <Spitch />
      <Cards />
      <RappelContact />
    </main>
  )
}
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Menu from "../../components/Menu";
import Qualities from "../../components/Qualities";
import Team from "../../components/Team";
import About from "../../components/about";

export default function Home() {
  return (
    <>
    <div>
    <HeroSection/>
    <About/>
    <Qualities/>
    <Menu/>
    <Team/>
    <Footer/>
    </div>
    </>
  )
}

// components
import Header from "./components/General/Header/Header";
import Footer from "./components/General/Footer/Footer";
import Hero from "./components/HomeElmts/Hero";
import BigPoints from "./components/HomeElmts/BigPoints";
import Grids from "./components/HomeElmts/Grids";
import Review from "./components/HomeElmts/Review";
import CallToAction from "./components/HomeElmts/CallToAction";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BigPoints />
      <Grids />
      <Review />
      <CallToAction />
      <Footer />
    </>
  );
}

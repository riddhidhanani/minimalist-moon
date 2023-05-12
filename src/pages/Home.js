import Brand from "../components/brands/brand";
import Design from "../components/designs/design";
import Feature from "../components/featured/feature";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Horizantal from "../components/horizantal/horizantal";
import Journal from "../components/journal/journal";
import Parent from "../components/mainPage/parent";
import Portfolio from "../components/portfolio/portfolio";
import WhoWe from "../components/whoWe/whoWe";
import { useEffect, useState } from "react";
import Feedback from "../components/feedback/feedback";
import Faq from "../components/faq/faq";
import MainService from "../components/mainService/mainService";
// import DesignService from "../components/mainService/designService";

const Home = () => {

  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   
  
  }, []);

  return (
    <>
      <Header />
      <Parent />
      {/* <Open /> */}
      <Brand />
      <WhoWe />
      {/* <DesignService/> */}
      <Design />
  

      <Feature />
      <Portfolio />
      <Feedback />
      <Horizantal />
      <Faq />
      <Journal />
      <Footer />
    </>
  );
};

export default Home;

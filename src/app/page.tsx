import HomeP from "./main/Home";
import ClientShowcase from "./main/TechStacks";
import Work from "./main/work";
import Footer from "./main/Footer";
import OurDevelopers from "./main/OurDevelopers";
import Hero from "./main/Hero";


export default function Home() {
  return (
    <>
      {/* <HomeP /> */}
      <Hero />
      <Work/>
      {/* <Services/> */}
      {/* <DataFlowDiagram /> */}
      {/* <HappyClients/> */}
      <OurDevelopers/>
      <Footer/>
    </>

  );
}

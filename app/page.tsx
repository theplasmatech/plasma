import HomeP from "./main/Home";
import ClientShowcase from "./main/About";
import Work from "./main/work";
import Footer from "./main/Footer";
import OurDevelopers from "./main/OurDevelopers";


export default function Home() {
  return (
    <>
      <HomeP />
      <ClientShowcase />
      <Work/>
      {/* <Services/> */}
      {/* <DataFlowDiagram /> */}
      {/* <HappyClients/> */}
      <OurDevelopers/>
      <Footer/>
    </>

  );
}

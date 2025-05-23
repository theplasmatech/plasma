import HomeP from "./main/Home";
import ClientShowcase from "./main/About";
import Services from "./main/Service";
import Work from "./main/work";
import HappyClients from "./main/HappyClients";
import Footer from "./main/Footer";


export default function Home() {
  return (
    <>
      <HomeP />
      <ClientShowcase />
      <Work/>
      <Services/>
      {/* <DataFlowDiagram /> */}
      <HappyClients/>
      <Footer/>
    </>

  );
}

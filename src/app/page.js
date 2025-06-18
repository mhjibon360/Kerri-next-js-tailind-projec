import Aboutus from "@/components/Aboutus";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Client from "@/components/Client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hire from "@/components/Hire";
import Menubar from "@/components/Menubar";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <Menubar />
      <Banner />
      <Aboutus />
      <Services />
      <Hire />
      <Client/>
      <Work/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

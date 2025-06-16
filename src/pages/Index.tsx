
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Team from "@/components/Team";
import Products from "@/pages/Products";
import Services from "@/pages/Services";
import Partners from "@/pages/Partners";
import Achievements from "@/components/Achievements";
import Contact from "@/pages/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Hero />
      <Values />
      <Team />
      <Products />
      <Services />
      <Partners />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

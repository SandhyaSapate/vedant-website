
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Team from "@/components/Team";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
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


import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden z-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{minHeight: '100%', minWidth: '100%'}}
      >
        <source src="/Blue Tech Business Cyber Security Video (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left: Text */}
        {/* ...existing content... */}
      </div>
      {/* Right: Image */}
      <div className="md:w-1/2 w-full flex justify-center items-center">
        {/* Replace with your actual image or illustration */}
        <img src="/public/placeholder.svg" alt="Hero Illustration" className="w-full max-w-md" />
      </div>
  {/* Removed slanted bottom edge for clean hero banner */}
    </section>
  );
};

export default Hero;

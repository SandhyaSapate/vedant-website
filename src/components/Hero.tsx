
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-vedant-700 to-vedant-900 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Authorized Reseller on Government e-Marketplace
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Providing high-quality IT products, solutions, and services to government institutions across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="bg-gem-500 hover:bg-gem-600 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              Explore Products
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-vedant-700 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
    </div>
  );
};

export default Hero;

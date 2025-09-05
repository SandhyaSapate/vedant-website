
import { Heart, Users, Clock } from "lucide-react";

const Values = () => {
  return (
  <section className="py-16" style={{ backgroundColor: '#0F0E0E' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#800020] mb-12">
          Our Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vedant-100 text-vedant-600 mb-6">
              <Heart size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#800020]">Honesty</h3>
            <p className="text-gray-600">
              We believe in transparency and integrity in all our dealings with customers and partners.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vedant-100 text-vedant-600 mb-6">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#800020]">Hard Work</h3>
            <p className="text-gray-600">
              We are dedicated to going the extra mile to ensure that our customers receive the best products and services.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vedant-100 text-vedant-600 mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#800020]">Dedication</h3>
            <p className="text-gray-600">
              We are committed to our customers and their needs, ensuring satisfaction through exceptional service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

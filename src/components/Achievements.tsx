
import { Trophy, Users, Building } from "lucide-react";

const Achievements = () => {
  return (
    <section className="py-16 bg-vedant-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our Achievements
          </h2>
          <p className="max-w-2xl mx-auto text-vedant-100">
            We are thrilled to have successfully and happily served over 150 government customers across India, earning their trust and satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-vedant-700 p-6 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vedant-500 text-white mb-4">
              <Trophy size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-2">150+</h3>
            <p className="text-vedant-200">Government Customers</p>
          </div>
          
          <div className="bg-vedant-700 p-6 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vedant-500 text-white mb-4">
              <Building size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Pan India</h3>
            <p className="text-vedant-200">Service Coverage</p>
          </div>
          
          <div className="bg-vedant-700 p-6 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vedant-500 text-white mb-4">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p className="text-vedant-200">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

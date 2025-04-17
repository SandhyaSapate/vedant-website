
import { User, ShieldCheck, Briefcase } from "lucide-react";

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Team
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-vedant-50 border border-vedant-100 p-8 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-vedant-100 text-vedant-600 mb-6">
              <User size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Professionals</h3>
            <p className="text-gray-700 mb-6">
              We have a team of experts who are passionate about what they do and are dedicated to achieving the company's mission.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="mr-4 text-vedant-500">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Certified Specialists</h4>
                  <p className="text-sm text-gray-600">Industry-recognized expertise</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="mr-4 text-vedant-500">
                  <Briefcase size={24} />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Experienced Consultants</h4>
                  <p className="text-sm text-gray-600">Years of industry experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;


import { Cloud, Wrench, Users, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Cloud Services",
      description: "We provide comprehensive cloud services tailored to meet your business's specific needs.",
      icon: <Cloud size={24} />
    },
    {
      number: "02",
      title: "Annual Maintenance Contract (AMC)",
      description: "We provide Annual Maintenance Contract (AMC) services for IT products.",
      icon: <Wrench size={24} />
    },
    {
      number: "03",
      title: "Manpower Services",
      description: "We offer comprehensive manpower services including housekeeping, drivers, office staff, and IT professionals to meet all your operational needs.",
      icon: <Users size={24} />
    },
    {
      number: "04",
      title: "GeM Consultancy",
      description: "We specialize in providing GeM consultancy services tailored to meet your specific needs.",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Services Available on GeM
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our range of professional services designed to support government organizations in their operational needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="absolute top-6 right-6 text-4xl font-bold text-vedant-50 group-hover:text-vedant-100 transition-colors">
                {service.number}
              </div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-vedant-100 text-vedant-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

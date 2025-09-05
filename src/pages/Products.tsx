
import { Monitor, Printer, Database, Tv, Network, FileText, Activity, Briefcase, ShoppingBag } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      title: "Computers & Accessories",
      items: ["Laptop", "Desktop", "AIO", "Computer Printer", "UPS"],
      icon: <Monitor size={24} />
    },
    {
      title: "Education Solutions",
      items: ["E-Learning Software", "E-Learning Hardware Solution"],
      icon: <Database size={24} />
    },
    {
      title: "Display Solutions",
      items: ["Television", "Interactive Panel", "Audio Video Solutions"],
      icon: <Tv size={24} />
    },
    {
      title: "Networking",
      items: ["Networking Products", "Networking Solutions"],
      icon: <Network size={24} />
    },
    {
      title: "Office Supplies",
      items: ["Office Stationary Products", "Office Furniture"],
      icon: <FileText size={24} />
    },
    {
      title: "Specialized Equipment",
      items: ["Medical Equipment", "Sports Products", "Cloth Equipment"],
      icon: <Activity size={24} />
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Products Available on GeM
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As an authorized reseller on Government e-Marketplace (GeM), we offer a wide range of high-quality products to meet your requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-vedant-100 text-vedant-600 mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gem-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

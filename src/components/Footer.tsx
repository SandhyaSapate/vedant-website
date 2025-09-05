
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Vedant Enterprises & IT Solutions</h2>
            <p className="mb-4">
              Authorized reseller of various products, solutions, and services on Government e-Marketplace.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/#products" className="hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/#partners" className="hover:text-white transition-colors">Partners</Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Cloud Services</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Annual Maintenance Contract</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Manpower Services</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">GeM Consultancy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span>Office Address, Street Name, City, State, PIN Code</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@vedantenterprises.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Vedant Enterprises & IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

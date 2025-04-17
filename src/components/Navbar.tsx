
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-vedant-600">
              Vedant Enterprises & IT Solutions
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-vedant-600 font-medium">
              Home
            </Link>
            <Link to="/#products" className="text-gray-700 hover:text-vedant-600 font-medium">
              Products
            </Link>
            <Link to="/#services" className="text-gray-700 hover:text-vedant-600 font-medium">
              Services
            </Link>
            <Link to="/#partners" className="text-gray-700 hover:text-vedant-600 font-medium">
              Partners
            </Link>
            <Link to="/#contact" className="text-gray-700 hover:text-vedant-600 font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-vedant-600 font-medium" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/#products" className="text-gray-700 hover:text-vedant-600 font-medium" onClick={toggleMenu}>
                Products
              </Link>
              <Link to="/#services" className="text-gray-700 hover:text-vedant-600 font-medium" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/#partners" className="text-gray-700 hover:text-vedant-600 font-medium" onClick={toggleMenu}>
                Partners
              </Link>
              <Link to="/#contact" className="text-gray-700 hover:text-vedant-600 font-medium" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

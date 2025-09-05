
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <nav
    className="bg-transparent fixed top-0 left-0 w-full z-50"
    style={{
      background: 'rgba(34, 34, 34, 0.3)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: 'none',
    }}
  >
  <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/vedantlogo.png" alt="Vedant Logo" className="h-10 w-auto mr-3" />
            <Link to="/" className="text-2xl font-bold text-vedant-600">
              Vedant
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-vedant-600 font-medium">
              Home
            </Link>
            <Link to="/products" className="text-white hover:text-vedant-600 font-medium">
              Products
            </Link>
            <Link to="/services" className="text-white hover:text-vedant-600 font-medium">
              Services
            </Link>
            <Link to="/partners" className="text-white hover:text-vedant-600 font-medium">
              Partners
            </Link>
            <Link to="/contact" className="text-white hover:text-vedant-600 font-medium">
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
              <Link to="/" className="text-white hover:text-vedant-600 font-medium" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/products" className="text-white hover:text-vedant-600 font-medium" onClick={toggleMenu}>
                Products
              </Link>
              <Link to="/services" className="text-white hover:text-vedant-600 font-medium" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/partners" className="text-white hover:text-vedant-600 font-medium" onClick={toggleMenu}>
                Partners
              </Link>
              <Link to="/contact" className="text-white hover:text-vedant-600 font-medium" onClick={toggleMenu}>
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

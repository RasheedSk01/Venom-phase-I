import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../assets/logobg.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-transparent backdrop-blur-md border-b-0"
          :  "bg-transparent backdrop-blur-md border-b-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="w-15 h-13" />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 via-lime-400 to-yellow-300 bg-clip-text text-transparent">
  Venom's Index
</span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            {["Home", "About"].map((item) => (
              <motion.div
                key={item}
                className="relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to="/"
                  className="text-gray-200 hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-lime-400 to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-200 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-gradient-to-r from-green-400/95 via-lime-400/95 to-yellow-300/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {["Home", "About", "Contact"].map((item) => (
                <motion.div key={item} whileHover={{ x: 10 }} className="block">
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-200 hover:text-white block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ x: 10 }} className="block px-3 py-2">
                <button className="w-full py-2 bg-gradient-to-r from-green-400 via-lime-400 to-yellow-300 rounded-lg text-white font-semibold hover:from-green-500 hover:via-lime-500 hover:to-yellow-400 transition-all duration-300">
                  Login
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
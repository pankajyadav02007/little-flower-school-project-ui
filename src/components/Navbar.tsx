import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Branches', path: '/branches' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Events', path: '/events' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
  { name: 'Login', path: '/login' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-md py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Link href={'/'} className="w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
            <img src="	https://littleflowerschoolkhamaria.com/assets/img/logo.png" alt="littleflower-logo" />
          </Link>
          <div className="flex flex-col">
            <span className="font-bold text-primary text-xl leading-none">Little Flower</span>
            <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">School</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "font-medium transition-colors hover:text-accent",
                location.pathname === link.path ? "text-accent" : "text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admissions"
            className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "font-medium text-lg",
                    location.pathname === link.path ? "text-accent" : "text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admissions"
                className="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

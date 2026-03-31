import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Link href={'/'} className="w-10 h-10  flex items-center justify-center text-primary font-bold text-lg">
              <img src="	https://littleflowerschoolkhamaria.com/assets/img/logo.png" alt="littleflower-logo" />
            </Link>
            <span className="font-bold text-2xl">Little Flower School</span>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Nurturing young minds with values, discipline, and excellence since 2010. We provide a safe and modern environment for your child's growth.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-4 text-gray-300">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-accent transition-colors">Academics</Link></li>
            <li><Link to="/branches" className="hover:text-accent transition-colors">Branches</Link></li>
            <li><Link to="/facilities" className="hover:text-accent transition-colors">Facilities</Link></li>
            <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link to="/events" className="hover:text-accent transition-colors">Events</Link></li>
            <li><Link to="/news" className="hover:text-accent transition-colors">News</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Branches */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2 inline-block">Our Branches</h3>
          <ul className="space-y-4 text-gray-300">
            <li>Sultanpur Main Branch</li>
            <li>Lucknow Branch</li>
            <li>Ayodhya Branch</li>
            <li>Varanasi (Coming Soon)</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2 inline-block">Contact Us</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start space-x-3">
              <MapPin size={20} className="text-accent shrink-0 mt-1" />
              <span>Civil Lines, Sultanpur, Uttar Pradesh - 228001</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="text-accent shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={20} className="text-accent shrink-0" />
              <span>info@littleflower.edu.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Little Flower School. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

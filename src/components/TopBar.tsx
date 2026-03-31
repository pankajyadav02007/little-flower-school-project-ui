import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-accent" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-accent" />
            <span>info@littleflower.edu.in</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} className="text-accent" />
            <span>Sultanpur, UP</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-accent text-primary px-3 py-0.5 rounded-full font-bold text-xs"
          >
            ADMISSIONS OPEN 2026-27
          </motion.div>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

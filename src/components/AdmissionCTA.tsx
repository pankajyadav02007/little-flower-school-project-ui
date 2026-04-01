import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Download, Calendar, UserPlus } from 'lucide-react';

export default function AdmissionCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/admission-cta/1920/1080" 
          alt="Happy Students" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="md:text-4xl text-2xl md:text-6xl font-bold mb-8 leading-tight">
            Admissions Open for <span className="text-accent">Nursery to Class 12</span>
          </h2>
          <p className="md:text-xl text-gray-300 mb-12 leading-relaxed">
            Take the first step towards your child's bright future. Join the Little Flower School family today and experience world-class education.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/admissions" 
              className="bg-accent text-primary px-5 md:px-10 md:py-5 py-2.5 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center space-x-3 shadow-2xl"
            >
              <UserPlus size={24} />
              <span>Apply Now</span>
            </Link>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-5 md:px-10 md:py-5 py-2.5 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all flex items-center space-x-3">
              <Download size={24} />
              <span>Download Prospectus</span>
            </button>
            <Link 
              to="/contact" 
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-5 md:px-10 md:py-5 py-2.5 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all flex items-center space-x-3"
            >
              <Calendar size={24} />
              <span>Schedule a Visit</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

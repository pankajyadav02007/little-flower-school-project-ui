import { motion } from 'motion/react';
import { branches } from '../data/branches';
import { MapPin, Phone, GraduationCap, ArrowRight } from 'lucide-react';

export default function Branches() {
  return (
    <div >
      {/* Page Header */}
      <section className="bg-primary md:py-24 py-12 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/branches-bg/1920/1080" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:text-5xl text-2xl md:text-6xl font-bold mb-6"
          >
            Our School Branches
          </motion.h1>
          <p className="md:text-xl text-gray-300 leading-relaxed">
            Spreading the light of education across multiple locations. Find the branch nearest to you.
          </p>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="md:py-24 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 h-64 md:h-auto">
                  <img src={branch.image} alt={branch.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-primary mb-6">{branch.name}</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3 text-gray-600">
                      <MapPin size={20} className="text-accent shrink-0 mt-1" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone size={20} className="text-accent shrink-0" />
                      <span>{branch.contact}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <GraduationCap size={20} className="text-accent shrink-0" />
                      <span>{branch.classes}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={branch.mapUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-accent hover:text-primary transition-all flex items-center space-x-2"
                    >
                      <span>View on Map</span>
                      <ArrowRight size={16} />
                    </a>
                    <button className="bg-white text-primary border border-primary px-6 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all">
                      Contact Branch
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

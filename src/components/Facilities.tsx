import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { facilities } from '../data/facilities';

export default function Facilities() {
  return (
    <section className="md:py-24 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-2xl font-bold text-primary mb-4">World-Class School Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We provide the best-in-class infrastructure to support your child's academic and personal growth.</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = (Icons as any)[facility.icon];
            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="md:h-98 h-48 overflow-hidden relative">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-[250px] md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-xl text-primary shadow-md">
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{facility.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

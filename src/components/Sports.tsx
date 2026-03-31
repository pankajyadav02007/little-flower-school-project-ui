import { motion } from 'motion/react';
import { Trophy, Medal, Star, Target } from 'lucide-react';

const sports = [
  { name: "Cricket", icon: <Trophy size={24} /> },
  { name: "Football", icon: <Medal size={24} /> },
  { name: "Badminton", icon: <Star size={24} /> },
  { name: "Volleyball", icon: <Target size={24} /> },
  { name: "Yoga", icon: <Heart size={24} /> },
  { name: "Athletics", icon: <Zap size={24} /> },
];

import { Heart, Zap } from 'lucide-react';

export default function Sports() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-bold uppercase tracking-widest text-sm mb-4 inline-block"
            >
              Beyond Academics
            </motion.span>
            <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
              Sports, PT & Games for Overall Growth
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We believe in the power of physical education. Our students participate in regular PT classes, yoga, and various sports to build discipline, teamwork, and a healthy lifestyle.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
              {sports.map((sport, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-accent">{sport.icon}</div>
                  <span className="font-bold text-primary text-sm">{sport.name}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-12">
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Sports Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Annual Competitions</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/48957951_300245567288055_7446927714453291008_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=B0IXOKpNSiAQ7kNvwEriict&_nc_oc=AdpCD6jEWZoV5KCNRZBSsVDbOn29zTjfy7K0mqoXJNzsu-NVW8UlkrXLM_EO-vt0q0ewF1nPINmMKeVuutzQpbX6&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=g1EL2eGepJZBjP-bq7-A_A&_nc_ss=7a3a8&oh=00_AfwHGGxvIBTTtLUUR0TuY_t0uUIozl79PDMHuS6gIwJB4w&oe=69F306DC" 
                alt="Students playing sports" 
                className="w-full h-[550px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 bg-accent text-primary p-8 rounded-3xl shadow-xl hidden md:block max-w-xs">
              <p className="font-bold text-xl mb-2">"A healthy mind resides in a healthy body."</p>
              <p className="text-sm font-medium opacity-80">- School Motto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

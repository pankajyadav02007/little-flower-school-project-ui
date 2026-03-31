import { ShieldCheck, Users, BookOpen, Monitor, Trophy, HeartHandshake, Laptop } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Safe Campus with CCTV",
    description: "24/7 surveillance and secure entry/exit points for complete student safety.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Users size={40} />,
    title: "Experienced Teachers",
    description: "Highly qualified and passionate educators dedicated to student success.",
    image: "https://scontent.fvns6-3.fna.fbcdn.net/v/t1.6435-9/82979047_509792169666726_753732963350347776_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=tREuymSGHuEQ7kNvwFp33kZ&_nc_oc=AdpurgqGmQF7GF4uadffvigafhPZZbWM7AQ8REP4ntqHeXycDaINe-qw1MZm8oIgTThr_nKqhntD1tZrcLBI9_rN&_nc_zt=23&_nc_ht=scontent.fvns6-3.fna&_nc_gid=dPKGXMYiXgXNGkpvRhi1MQ&_nc_ss=7a3a8&oh=00_Afzpx2i1s4fVPgutItGiXgIQWqfN3D6ZHjFFwEy82Z031w&oe=69F30FDD"
  },
  {
    icon: <Laptop size={40} />,
    title: "Smart Education & Labs",
    description: "Holistic learning with modern technology integrated into every classroom and well-equipped labs.",
    image: "https://scontent.fvns6-3.fna.fbcdn.net/v/t39.30808-6/473048277_1562836197695646_548716894514734269_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=C2EE5yrIht4Q7kNvwFuDcAz&_nc_oc=AdpCXRQcofgO8oShigISeTkCI_bKwOWMY85AhvZfGinvFGem3g5-T3ilO1mBlu3rvxXiqs35kLkD-zKG-F0hp0Pg&_nc_zt=23&_nc_ht=scontent.fvns6-3.fna&_nc_gid=wMMwxcJwG45xoEJcjJateA&_nc_ss=7a3a8&oh=00_AfzFMz2FUld67a25j5SZWM0OlXH6y7CC1NuGXu0Fo3xIog&oe=69D14762"
  },
  {
    icon: <Trophy size={40} />,
    title: "Sports & PT Activities",
    description: "Focus on physical fitness with regular sports, yoga, and PT sessions.",
    image: "https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/82775836_507272196585390_4961163397019205632_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_aa0IGaY3kgQ7kNvwFBlrFM&_nc_oc=AdpQTwQr3gPyQ0yVRpXuNH2NSoC6YSMahc7UHqnbw28qcV5gYNcXObUCMgqVvJs6e7mS1LXsyXJevsogeNMPikRJ&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=UQ69jJSVXt5NGWZP7T6GZQ&_nc_ss=7a3a8&oh=00_AfzxU9Y4p1zwGhs7SRIKiNFo-V2oP726xbPCiQ37zCBNgA&oe=69F2E6EC"
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "Regular PTMs",
    description: "Strong parent-teacher collaboration for the overall growth of the child.",
    image: "https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/51993413_317694132209865_3048766845550067712_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=dPoolGq4K5oQ7kNvwGXXh50&_nc_oc=AdqkW9t9NAnrNUps47ZT521efxxbadw9RvDeOfD-2qD6oXtyD-yOBxCLqBP7ngguTuEecQotu3b2rToAsKKepu0_&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=gR4qzj1IK-g1JNy3Wz5orw&_nc_ss=7a3a8&oh=00_Afx4shVmThgTu2LjXmGQg6iJ0XjMZW0rfgRDdqHeoT-www&oe=69F3029E"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-widest uppercase text-sm mb-4 inline-block"
          >
            Our Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading"
          >
            Why Thousands of Parents Choose Us
          </motion.h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer ${index === 2 ? 'lg:col-span-1' : ''}`}
            >
              {/* Background Image */}
              <img 
                src={reason.image} 
                alt={reason.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-4 bg-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 font-heading">{reason.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {reason.description}
                </p>
                
                {/* Decorative Line */}
                <div className="w-0 h-1 bg-accent mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

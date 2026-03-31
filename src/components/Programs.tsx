import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, BookOpen, Users, School, Award } from 'lucide-react';

const programs = [
  {
    title: "Nursery & KG",
    description: "A playful and nurturing environment for the little ones to start their journey with joy and curiosity.",
    image: "https://scontent.fvns6-2.fna.fbcdn.net/v/t39.30808-6/531278679_1204230325056525_3989133785744702292_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=gph1JC_TJyAQ7kNvwHMGxOM&_nc_oc=AdqMQQG_RI5-bvuydMtXxLjrXLTnlsV29DCXzXbrZ9a9DNWA7kh3slLMft3FsKvmzisB9Ncx0WzSLNYKLj2i1P7J&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=e_K8Lt5PS7AAEKBOM4oDow&_nc_ss=7a3a8&oh=00_AfwGPH5MubSQ8ZfwQa0-Px2IggIuVVgk0XwXdM7U1P6brg&oe=69D1502E",
    icon: <Users size={24} />
  },
  {
    title: "Primary (1–5)",
    description: "Building strong foundations in core subjects with creative learning methods and character building.",
    image: "https://scontent.fvns6-2.fna.fbcdn.net/v/t39.30808-6/473279274_1562836211028978_6483221848349261446_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=fivMn5y0AXMQ7kNvwFpQSiR&_nc_oc=AdrZHrBslY7O47y_H3lbXDZDqFPRcctBs1aUV4P5T6qMyCyUEo3906pv58HDYpEOIbs5HgGlbFzIgBLHPJX5jnjx&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=neEZdAnIryc5wpNY67bdlQ&_nc_ss=7a3a8&oh=00_AfzfZJa4z8fFZoBGh7_EWZxpSmfGe5fPfIm0Bw2vhRab6w&oe=69D177BD",
    icon: <BookOpen size={24} />
  },
  {
    title: "Middle School (6–8)",
    description: "Developing critical thinking and exploring diverse subjects and extracurricular activities.",
    image: "https://scontent.fvns6-3.fna.fbcdn.net/v/t39.30808-6/505016987_1152541900225368_6880275571934803659_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=b895b5&_nc_ohc=8UUDlF9Klb8Q7kNvwEJBK4T&_nc_oc=AdrL3vYkwYAZreP0xzAFRgcKJ6EGutKqhfemqqmHeq-MkoIPSFcBBxxyhLAC6yw3esi824oojCxea172warKioqa&_nc_zt=23&_nc_ht=scontent.fvns6-3.fna&_nc_gid=ThGLaRp8GMI0ttuZJ_39SQ&_nc_ss=7a3a8&oh=00_AfzONudnPMogBW5utrK_WusJiOS2XRzxEYXT9wVApBUcwQ&oe=69D16CE7",
    icon: <School size={24} />
  },
  {
    title: "High School (9–10)",
    description: "Focused academic preparation for board exams with holistic development and career guidance.",
    image: "https://scontent.fvns6-3.fna.fbcdn.net/v/t39.30808-6/473580790_1562836451028954_7295397223027204927_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=FHKJz6TxLdcQ7kNvwGkBLuv&_nc_oc=AdqaAKxE6S4UjcoxHuJ45JafqrOa56JUhTjIMfZhj1dA3yNW_vMumSDLWi92I2xogD1cG4Dm5hAjO46i1ui9wvzv&_nc_zt=23&_nc_ht=scontent.fvns6-3.fna&_nc_gid=DdwPBekX4erI66SSQA-XKg&_nc_ss=7a3a8&oh=00_Afxof7m3UFULoWrlTe1uBgFKBX2BBrs5mxyUzA-fgBT96Q&oe=69D165A2",
    icon: <Award size={24} />
  },
  {
    title: "Senior Secondary (11–12)",
    description: "Specialized streams in Science, Commerce, and Arts for professional career readiness.",
    image: "https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/73504911_443400809639196_6953988017174347776_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=NdXZ2Z9Hl7kQ7kNvwGlljMj&_nc_oc=AdqhpFM7PFeUXRHfRsM86W7BoOPjU1I7nFoVnr1OQKsQ5Nypchb4gGjmehIydCUkU3bDg2alf1NWahA_Xo9Hcs04&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=3anBkqFwsQGQ4Uo_TZYBrw&_nc_ss=7a3a8&oh=00_AfztwyKJ9Megoo3GJmif-QFwxTlL7bAD5T-TRjl3sARaFw&oe=69F316A1",
    icon: <GraduationCap size={24} />,
    streams: ["Science", "Commerce", "Arts"]
  }
];

export default function Programs() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 inline-block"
          >
            Academic Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 font-heading"
          >
            Nursery to 12th Programs
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            We offer a comprehensive educational journey tailored to every stage of your child's development.
          </p>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={program.image} 
                alt={program.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="mb-6 flex items-center justify-between">
                  <div className="bg-accent/20 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                    {program.icon}
                  </div>
                  {program.streams && (
                    <div className="flex gap-2">
                      {program.streams.map(s => (
                        <span key={s} className="bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-white/10">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="text-3xl font-bold mb-4 font-heading leading-tight group-hover:text-accent transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-gray-200 text-base leading-relaxed mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 font-light">
                  {program.description}
                </p>

                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  <Link 
                    to="/admissions" 
                    className="bg-accent text-primary px-6 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 hover:bg-white transition-colors duration-300 shadow-lg"
                  >
                    <span>Register Now</span>
                    <ArrowRight size={16} />
                  </Link>
                  
                  <Link to="/academics" className="text-white/80 hover:text-white text-sm font-semibold flex items-center space-x-2 group/link">
                    <span>Details</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>

              {/* Decorative Border on Hover */}
              <div className="absolute inset-4 border border-white/0 rounded-[2rem] group-hover:border-white/20 transition-all duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

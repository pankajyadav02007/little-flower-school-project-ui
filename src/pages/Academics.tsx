import { motion } from 'motion/react';
import { BookOpen, Monitor, FlaskConical, Library, Trophy, Bus, ShieldCheck, Music, HeartPulse } from 'lucide-react';

const programs = [
  {
    title: "Nursery & Pre-Primary",
    age: "3 - 5 Years",
    focus: ["Play-way Method", "Sensory Activities", "Basic Literacy", "Social Skills"],
    description: "Our pre-primary program focuses on creating a love for learning through games, songs, and hands-on activities."
  },
  {
    title: "Primary School (1–5)",
    age: "6 - 10 Years",
    focus: ["Core Subjects", "Creative Writing", "Environmental Studies", "Value Education"],
    description: "Building strong academic foundations while encouraging curiosity and creative expression."
  },
  {
    title: "Middle School (6–8)",
    age: "11 - 13 Years",
    focus: ["Advanced Math & Science", "Integrated Social Studies", "Computer Science", "Third Language"],
    description: "Transitioning to more structured academic learning with a focus on critical thinking and research."
  },
  {
    title: "High School (9–10)",
    age: "14 - 15 Years",
    focus: ["Board Exam Prep", "Career Counseling", "Lab Practicals", "Physical Education"],
    description: "Intensive academic preparation combined with holistic development to prepare for board examinations."
  },
  {
    title: "Senior Secondary (11–12)",
    age: "16 - 17 Years",
    focus: ["Science Stream", "Commerce Stream", "Arts Stream", "Competitive Exam Coaching"],
    description: "Specialized education tailored to career goals with expert guidance in chosen streams."
  }
];

export default function Academics() {
  return (
    <div className="pt-12">
      {/* Page Header */}
      <section className="bg-primary py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/49019346_300245203954758_7991892140135284736_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Rrd2S6UY3eQQ7kNvwExXCJh&_nc_oc=AdpWrSb2toBvUhVwpWTI5p3_9uOeZuOUijlADbzdRabxOv3VndeqG_hjWxw2_kRxljIahhz-KVyqCMsU-0i3bfN2&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=RFfY0wQTDxfcfQ5vlwlgiw&_nc_ss=7a3a8&oh=00_AfzII9KVqghILLoz4ciYg4nlvKeUUD9v78vJP4LGw1Laww&oe=69F2F42D" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Academic Excellence
          </motion.h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Empowering students with a curriculum designed for the 21st century.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Educational Programs</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-accent text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                    {program.age}
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-6">{program.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{program.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {program.focus.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2 text-primary font-medium">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 w-full h-80 rounded-[2rem] overflow-hidden shadow-xl">
                  <img src={`https://picsum.photos/seed/program-${index}/800/600`} alt={program.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Our Teaching Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto text-accent">
                <Monitor size={40} />
              </div>
              <h3 className="text-2xl font-bold">Smart Learning</h3>
              <p className="text-gray-300 leading-relaxed">Integration of digital tools and interactive boards in every classroom for visual and engaging learning.</p>
            </div>
            <div className="space-y-6">
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto text-accent">
                <FlaskConical size={40} />
              </div>
              <h3 className="text-2xl font-bold">Practical Approach</h3>
              <p className="text-gray-300 leading-relaxed">Emphasis on hands-on experiments and real-world applications to bridge the gap between theory and practice.</p>
            </div>
            <div className="space-y-6">
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto text-accent">
                <Library size={40} />
              </div>
              <h3 className="text-2xl font-bold">Holistic Growth</h3>
              <p className="text-gray-300 leading-relaxed">Focus on emotional, social, and physical development alongside academic excellence.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

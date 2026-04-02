import { motion } from 'motion/react';
import { Target, Eye, History, Award } from 'lucide-react';

export default function About() {
  return (
    <div >
      {/* Page Header */}
      <section className="bg-primary md:py-24 py-12 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://scontent.fvns6-1.fna.fbcdn.net/v/t1.6435-9/46485392_284657408846871_440148978638520320_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=OpHlWdWtDGYQ7kNvwGNfxuB&_nc_oc=AdpJe1KmNTL2yu7oyypd2AM6qlQMowRpAkd5_Mddaz0k9yerAKrzauq8xuRrBDRpe7QaVSmPnExP5yzP0f6odM9V&_nc_zt=23&_nc_ht=scontent.fvns6-1.fna&_nc_gid=vFSXNc_ca9H82ce3Cwlumw&_nc_ss=7a3a8&oh=00_AfyngUTZde1VFiaw9hXMwE7UcVCQuRo2SMRHsLdSXTLkOQ&oe=69F2FEF3" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:text-5xl text-2xl md:text-6xl font-bold mb-6"
          >
            About Little Flower School
          </motion.h1>
          <p className="md:text-xl text-gray-300 leading-relaxed">
            A legacy of excellence, a future of innovation. Discover the story behind our commitment to education.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="md:py-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 text-accent mb-4">
              <History size={24} />
              <span className="font-bold uppercase tracking-widest text-sm">Our Legacy</span>
            </div>
            <h2 className="md:text-4xl text-2xl font-bold text-primary mb-6">Our History</h2>
            <p className="text-gray-600 md:text-lg mb-6 leading-relaxed">
              Founded in 2010, Little Flower School started with a vision to provide quality education in Sultanpur. What began as a small primary school has now grown into a premier educational institution with multiple branches across Uttar Pradesh.
            </p>
            <p className="text-gray-600 md:text-lg leading-relaxed">
              Over the last 15 years, we have nurtured thousands of students who are now excelling in various fields across the globe. Our focus has always been on holistic development, combining academic rigor with moral values.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src="https://scontent.fvns6-3.fna.fbcdn.net/v/t1.6435-9/52011261_321215338524411_5659011130677264384_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=PldFCc-GvJkQ7kNvwECBw4B&_nc_oc=Adp8a26m4eyZBp3GIFjAdTaq3puLrpj0xaWIRXhSwkOK4BZ5tYmLHDrr2BBJvl7ix1Yk-2u5WwkQikdPTTkP5xBT&_nc_zt=23&_nc_ht=scontent.fvns6-3.fna&_nc_gid=UNhnsLESxwj0DU-WsJmQYw&_nc_ss=7a3a8&oh=00_AfwPUu_5I4wgN4OtzUF_k-sqq7GdfXRiPCKTjIL-GQzNXg&oe=69F31C00" alt="School History" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white md:p-12 p-6 rounded-[3rem] shadow-sm border border-gray-100"
          >
            <div className="md:w-16 w-8 h-8 md:h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8">
              <Target size={32} />
            </div>
            <h3 className="md:text-3xl text-2xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-gray-600 md:text-lg leading-relaxed">
              To empower students with knowledge, skills, and values that will enable them to become responsible global citizens and lifelong learners. We strive to create an inclusive environment that fosters creativity and critical thinking.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white md:p-12 p-6 rounded-[3rem] shadow-sm border border-gray-100"
          >
            <div className="md:w-16 w-8 h-8 md:h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8">
              <Eye size={32} />
            </div>
            <h3 className="md:text-3xl text-2xl font-bold text-primary mb-6">Our Vision</h3>
            <p className="text-gray-600 md:text-lg leading-relaxed">
              To be a leading center of educational excellence that inspires students to achieve their full potential and contribute positively to society. We envision a school where every child is valued and encouraged to shine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 bg-primary rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <img src="https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/73504911_443400809639196_6953988017174347776_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=NdXZ2Z9Hl7kQ7kNvwEt4msj&_nc_oc=Ado82mmc8FM9x4gCYnqsGNG-snhjIfIaezG9xPjByYsIa7cSXw7nEr8QoX5T14jzd5k1OzWcXCZC9MtYiVUMRQMd&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=9Sf8Oqko5RriWzzcRcUvDA&_nc_ss=7a3a8&oh=00_AfyPruO8qjAQ2RrVZoV2kyqej1QazIPf3NgDx510ehJujA&oe=69F316A1" alt="Pattern" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shrink-0 shadow-2xl">
              <img src="https://littleflowerschoolkhamaria.com/assets/img/gallery/20.png" alt="Principal" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center space-x-3 text-accent mb-4">
                <Award size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Principal's Message</span>
              </div>
              <h2 className="md:text-3xl text-2xl font-bold mb-6">Leading with Vision</h2>
              <p className="text-gray-300 md:text-lg italic mb-8 leading-relaxed">
                "At Little Flower School, we believe that every child is a unique bloom. Our role is to provide the right soil, sunlight, and care for them to blossom. We are committed to providing an education that goes beyond textbooks, preparing our students for the challenges of the 21st century."
              </p>
              <div className="font-bold">
                <div className="text-xl text-accent">Sandeep Kumar maurya</div>
                <div className="text-sm text-gray-400">Principal, Little Flower School</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

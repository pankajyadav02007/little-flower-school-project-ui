import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const images = [
  "https://scontent.fvns6-1.fna.fbcdn.net/v/t39.30808-6/531483989_1204230958389795_8624639166256770904_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=h9HDlfklsWQQ7kNvwHcBUev&_nc_oc=AdpARXnLAkdeP3vLb_qWfYBvGjlnKPctaiTeBDwxsgpURF22qViKWUNTjUrTsVlfz83d2FEq2uQB0v30Xj74f-UH&_nc_zt=23&_nc_ht=scontent.fvns6-1.fna&_nc_gid=xhJiml_1G0Q1IV3MYuWsMQ&_nc_ss=7a3a8&oh=00_AfxuQpA0oYAETdRWfCgPnga3OmsEffdlnTp0-U_aaFoTFw&oe=69D154D2",
  "https://scontent.fvns6-3.fna.fbcdn.net/v/t39.30808-6/532125837_1204230708389820_3110386828246497427_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xYPUJfmIe8IQ7kNvwF0LOnp&_nc_oc=AdoHjJXT_mr5tAOL3D-ygPRC3PdZ5dmPlG0e5FiK6G0By7LIA_HxBmE-A_bstf9j45wDANgdbsNT0hrVTn99SWl2&_nc_zt=23&_nc_ht=scontent.fvns6-3.fna&_nc_gid=AILsSvLsOV7xqUlwUYdGOA&_nc_ss=7a3a8&oh=00_Afw886jjJsRei5adKmZ2y6RXZky7IQaAPcpFAc7qp3sTOw&oe=69D17854",
  "https://scontent.fvns6-2.fna.fbcdn.net/v/t39.30808-6/531278679_1204230325056525_3989133785744702292_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=gph1JC_TJyAQ7kNvwGV8xqv&_nc_oc=Adp5cD0ibgnzKyYAb9ByAOgnxWUW8-0gvUP_fcUkk-GIa0O_Qz3i-jcfsD4rmVa29iE7UlDaYCPle2wevc2rf-gm&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=i6ygFiQzAm24F-Dr-whSFA&_nc_ss=7a3a8&oh=00_AfxLwb6YIhlPJXN_kwUftnOmPzbBQdxENdWblrACm9YR8g&oe=69D1502E",
  "https://scontent.fvns6-2.fna.fbcdn.net/v/t39.30808-6/473037707_1562257847753481_8278286383256199207_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=QwqBMHsRGL8Q7kNvwEuVB_R&_nc_oc=AdpGM0PS6ZWHIkaZEQwNebP5V9_TPfO49Ck25Jf7m76_hgTKnid6nGJkS-s-N7XI-_vUmY5CCXSffNPkGcXy4qTn&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=hHYnYHkuV8iipIZzQ0HsRQ&_nc_ss=7a3a8&oh=00_Afyx1R9rd59YbM1lV9s6pYnvGRZG3qIHYVCG4Ju1y9yVuA&oe=69D1785A",
  "https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/83799819_507272236585386_3030656475996356608_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Tri1116dM1oQ7kNvwGUIkHA&_nc_oc=Adrap2xOCaojS6pAZTY4pfp6c6I9fs3BtzQ7ojdEopZCAQdNMiMclgjxZrORMUXH81hsZWcvS3-Xri0x4bBaj9A_&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=X_2sbCPL4cQZ544pT3WFSw&_nc_ss=7a3a8&oh=00_Afwda5QemZWON5Dz21XvWsFuZfVQFZhKSRDfG92SoCAJCA&oe=69F322DC",
  "https://scontent.fvns6-1.fna.fbcdn.net/v/t1.6435-9/80499376_488718421774101_7529652001504755712_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=KYWNJJRCDI8Q7kNvwFcQfsB&_nc_oc=AdozdJ5vzBBKjXAuvf9CVd7fnI1gkHDRbFUhv_7bHsl0ZSSL536VO3Adj6NkY0kx02Z8hkFFCtr6PfjD9PerL7CK&_nc_zt=23&_nc_ht=scontent.fvns6-1.fna&_nc_gid=nbKvQIXi-EeTvDF9mTwbzg&_nc_ss=7a3a8&oh=00_AfxbNa0UleFRcleN0_yqxTBRpaKsmUnqsNdSsGzPQgg_xA&oe=69F30E0F",
];

export default function GalleryPreview() {
  return (
    <section className="md:py-18 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-2xl font-bold text-primary mb-4">Life at Little Flower School</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A glimpse into our vibrant campus, classrooms, and student activities.</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 mb-16">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <img 
                src={img} 
                alt={`Gallery ${index}`} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link to='/Gallery' className="bg-white text-primary p-4 rounded-full shadow-xl">
                  <ArrowRight size={24} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery" className="inline-flex items-center space-x-3 bg-primary text-white px-5 md:px-10 md:py-4 py-2 rounded-full font-bold hover:bg-accent hover:text-primary transition-all shadow-xl">
            <span>View Full Gallery</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

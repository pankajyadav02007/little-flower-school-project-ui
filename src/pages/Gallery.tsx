import { motion } from 'motion/react';
import { useState } from 'react';
import { Camera, Image as ImageIcon, Film, X } from 'lucide-react';

const categories = ["All", "Campus", "Classroom", "Sports", "Events", "Labs"];

const galleryImages = [
  { id: 1, category: "Campus", url: "https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/48425563_300245170621428_4552418033838063616_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=pQLS3D66qH8Q7kNvwHBXDeG&_nc_oc=AdodGrrA7hCAw2sUh0mPYJyE_GXNWPRXoL2iPle6FCLmvgYIX5RbAiwPuHbPyq1Gfji19A-goI39zuX4iDToEQA9&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=Lwm6FIsd2h49XQBKZ5psSA&_nc_ss=7a3a8&oh=00_Afw8rSFot8-SI-MhUufqFY7eJrSNu9ULPXu3a2hHvQ7wpQ&oe=69F313FC" },
  { id: 2, category: "Classroom", url: "https://scontent.fvns6-3.fna.fbcdn.net/v/t1.6435-9/48987531_300245727288039_4086999632293396480_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Mv_hQN0aVTkQ7kNvwHV8Qx8&_nc_oc=AdrUzeWScSUzaPmT_dY7VsbPAErDVMJ5juj8geVNTq2W6j177gzbnQOXpMKnyqgJlVT7yvrNS9anU3ISSl6ZmoWl&_nc_zt=23&_nc_ht=scontent.fvns6-3.fna&_nc_gid=My3eCLHqe9bu4etVmoY1aQ&_nc_ss=7a3a8&oh=00_AfwNJuHEjZ-pTgjcDwS4JbU2Fuy551vm7r_UwM3g_M9LKw&oe=69F327D4" },
  { id: 3, category: "Sports", url: "https://scontent.fvns6-3.fna.fbcdn.net/v/t1.6435-9/48981202_300245423954736_51466082006859776_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=weC_qgeJHnoQ7kNvwE96XHF&_nc_oc=AdogkLpNrWPPlUgbE_GvxQA7WCQ2xe44Rzl-paj1L-2uNW9-xMFZ6wyUkmAU1L88OTMUECHpR1OSZyV_QOsBfbEz&_nc_zt=23&_nc_ht=scontent.fvns6-3.fna&_nc_gid=FmlCYFeaboqFAqSflCNOhw&_nc_ss=7a3a8&oh=00_AfyqvbsdNoLub8Pbkwh-GTYffx6jqBym4JC2Ee9KYNz5eg&oe=69F2FAC8" },
  { id: 4, category: "Events", url: "https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/48930750_300245110621434_4654631834506756096_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=tHCF-6_Gf64Q7kNvwEYhqsO&_nc_oc=AdqCljk2PaGbdQfT4swMXUqIvxISd4xdob-CtwvtfsO6-7VSNEtPjhMh0WHtrhMMoaZd5CvUuOLPKxTrn5Yqy3Yr&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=GViyAZet_ThwacednYtDOw&_nc_ss=7a3a8&oh=00_AfzbMPXCCXMR2EBVsTba98XSAZfHk4O9ti5JFSiFB5jfTw&oe=69F326B7" },
  { id: 5, category: "Labs", url: "https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/46133177_281671055812173_4809266093275217920_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=e675D48JgokQ7kNvwH4EKxq&_nc_oc=Adr_mWR-_YRDnStY6FM95Lv3XRmfQM1zdN5TfKnZM8Q6W9Cp5Yf5CJ8eqDAquBlwjgwISRAla12SPPb2ZW_uw58x&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=DutVvjtVSoC5s10c4TsHyw&_nc_ss=7a3a8&oh=00_AfzG5EKD-kIB7hTM6d9X9ghjYWHlq-qcdZ1G_bYL71K7gA&oe=69F30211" },
  { id: 6, category: "Campus", url: "https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/44680901_275210833124862_1144898363963998208_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=X-vE6ggyUpQQ7kNvwFrkm-0&_nc_oc=AdrBXwMHFCMYxCFvb1FOgePePwJE0czEBdDFV_YfGS0fl9l2oSQOVoE6BMsLbJVAuxGdGpxkWjeWXjQ6OUY8cNoY&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=GbNGhnBB9AZeRUGuRJMY2Q&_nc_ss=7a3a8&oh=00_AfzIHl8G8Ysb15eG2G5M2JeTorLGkbtTjnlhU8XDkEix6Q&oe=69F322CF" },
  { id: 7, category: "Classroom", url: "https://scontent.fvns6-3.fna.fbcdn.net/v/t1.6435-9/45956983_281671742478771_8904473021524213760_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=98gGwKdWca0Q7kNvwGtHZ2Q&_nc_oc=AdqkdWxUOMZNXLpgZ9KNHxR-Q2KQ8mujdlY_3uObedyOSt_3Eww37k0uVKR3dYPT-ZJB6NnRx0jquI0n_kTfk0ed&_nc_zt=23&_nc_ht=scontent.fvns6-3.fna&_nc_gid=lNW2PNUBwQ7HfrHYy1T8FA&_nc_ss=7a3a8&oh=00_AfyxkFwl7xsuPPv8DKGo4RYJzaUnY-loo8sjO68fRvs9Kg&oe=69F2FA40" },
  { id: 8, category: "Sports", url: "https://scontent.fvns6-1.fna.fbcdn.net/v/t1.6435-9/49118569_300245790621366_3290637069830848512_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=m4Vlb-dQ7aUQ7kNvwGm54tG&_nc_oc=Adr2SJIO26ASHpKpFD0OGOFkhR2FTagwjTMtSVzoiBGXBtdIK4m4a2uoML9vYG6WKplQwj7I6v5EfB1dvp70T9i4&_nc_zt=23&_nc_ht=scontent.fvns6-1.fna&_nc_gid=T_BbRGbHzjHgH8VAV4uGvw&_nc_ss=7a3a8&oh=00_AfwSSTuA8whFXLHLKxYSAt6-7qqlBw5__CxnDoTMhqRTXA&oe=69F325F7" },
  { id: 9, category: "Events", url: "https://scontent.fvns6-3.fna.fbcdn.net/v/t1.6435-9/52605857_321215145191097_3523686187199889408_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=pbOjEgZfZvIQ7kNvwHv9Q5e&_nc_oc=AdqNNdfpb6W8w2D0gNCsIrtsuibyw_72bhH7X9nu0w7ij-9kkYZLOyNbutcbiEDf0FjwEX-rlrcIchi3TEcQZtLt&_nc_zt=23&_nc_ht=scontent.fvns6-3.fna&_nc_gid=h8qaHhbczfxyFVipTBOoNQ&_nc_ss=7a3a8&oh=00_Afx5xdcblliNJhG5avV7wTxSADVfvOT6uICPK-5BaFqqNg&oe=69F2F8AE" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

    const handlePrev = (e: any) => {
  e.stopPropagation();
  if (currentIndex === null) return;

  const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
  setCurrentIndex(newIndex);
  setSelectedImage(filteredImages[newIndex].url);
};

const handleNext = (e: any) => {
  e.stopPropagation();
  if (currentIndex === null) return;

  const newIndex = (currentIndex + 1) % filteredImages.length;
  setCurrentIndex(newIndex);
  setSelectedImage(filteredImages[newIndex].url);
};

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary md:py-24 py-12 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/gallery-bg/1920/1080" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:text-5xl text-2xl md:text-6xl font-bold mb-6"
          >
            Photo Gallery
          </motion.h1>
          <p className="md:text-xl text-gray-300 leading-relaxed">
            A visual journey through the life and activities at Little Flower School.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="md:py-24 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeCategory === cat 
                  ? "bg-primary text-white shadow-lg" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative h-80 rounded-[2rem] overflow-hidden group cursor-pointer shadow-md"
                onClick={() => {
  setSelectedImage(img.url);
  setCurrentIndex(index);
}}
              >
                <img 
                  src={img.url} 
                  alt={img.category} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                  <ImageIcon size={40} className="mb-2" />
                  <span className="font-bold uppercase tracking-widest text-xs">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {/* Prev Button */}
<button 
  onClick={handlePrev}
  className="absolute left-5 md:left-10 text-white hover:text-accent"
>
  ◀
</button>

{/* Next Button */}
<button 
  onClick={handleNext}
  className="absolute right-5 md:right-10 text-white hover:text-accent"
>
  ▶
</button>


      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-accent transition-colors">
            <X size={40} />
          </button>
         {/* Prev Button */}
<button 
  onClick={handlePrev}
  className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/80 transition"
>
  ◀
</button>

{/* Next Button */}
<button 
  onClick={handleNext}
  className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/80 transition"
>
  ▶
</button>
          <img 
            src={selectedImage} 
            alt="Selected" 
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
}

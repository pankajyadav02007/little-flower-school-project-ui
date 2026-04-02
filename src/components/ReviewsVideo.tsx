import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoItem {
  id: number;
  name: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 1,
    name: "Muktesh Narula",
    title: "DOVESOFT",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-at-home-4344-large.mp4",
    thumbnail: "https://picsum.photos/seed/muktesh/400/600"
  },
  {
    id: 2,
    name: "Shriya Sadneni",
    title: "MURZBAN",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-dancing-alone-34446-large.mp4",
    thumbnail: "https://picsum.photos/seed/shriya/400/600"
  },
  {
    id: 3,
    name: "Yash Goswami",
    title: "BITEBEE FOUNDER",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-the-beach-at-sunset-1240-large.mp4",
    thumbnail: "https://picsum.photos/seed/yash/400/600"
  },
  {
    id: 4,
    name: "Ajay Agarwal",
    title: "AVEENA CO-FOUNDER",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-1237-large.mp4",
    thumbnail: "https://picsum.photos/seed/ajay/400/600"
  }
];

export default function ReviewsVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    handleNext();
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  // Handle Mouse Wheel Scroll
  const handleWheel = (e: React.WheelEvent) => {
    if (isScrolling) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 20) {
      setIsScrolling(true);
      if (delta > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setTimeout(() => setIsScrolling(false), 600);
    }
  };

  // Handle Touch Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStart(null);
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.muted = isMuted;
        if (index === currentIndex) {
          if (isPlaying) {
            video.play().catch(() => console.log("Autoplay blocked"));
          } else {
            video.pause();
          }
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex, isPlaying, isMuted]);

  return (
    <div 
      className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center p-4 overflow-hidden select-none"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header Section */}
      <div className="text-center mb-10 space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
         What Students Say About Us
        </h1>
        <p className="text-slate-500 text-sm">Swipe or scroll to see more</p>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-7xl h-[550px] md:h-[650px] flex items-center justify-center">
        <div className="flex items-center justify-center gap-6 w-full relative">
          {VIDEOS.map((video, index) => {
            let position = index - currentIndex;
            
            // Circular logic
            if (position < -Math.floor(VIDEOS.length / 2)) position += VIDEOS.length;
            if (position > Math.floor(VIDEOS.length / 2)) position -= VIDEOS.length;

            const isActive = position === 0;
            const isVisible = Math.abs(position) <= 1.5; // Show more cards

            if (!isVisible) return null;

            return (
              <motion.div
                key={video.id}
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.9,
                  x: position * (window.innerWidth < 768 ? 260 : 340),
                  opacity: isVisible ? 1 : 0,
                  zIndex: isActive ? 10 : 5,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className={`absolute rounded-[2rem] overflow-hidden shadow-xl bg-black cursor-pointer transition-all duration-500 border-4 ${
                  isActive ? 'w-[280px] h-[500px] md:w-[320px] md:h-[600px] border-white/20' : 'w-[260px] h-[460px] md:w-[300px] md:h-[560px] border-transparent opacity-60'
                }`}
                onClick={() => !isActive && setCurrentIndex(index)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  playsInline
                  onEnded={handleVideoEnd}
                />
                
                {/* Top Controls */}
                <div className="absolute top-0 left-0 right-0 p-5 flex justify-between items-start z-20">
                  <button 
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                  >
                    {isPlaying && isActive ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" className="ml-1" />}
                  </button>
                  
                  <button 
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-20 text-white pointer-events-none">
                  <div className="space-y-0.5">
                    <h4 className="text-xl font-bold tracking-wide">
                      {video.name}
                    </h4>
                    <p className="text-xs font-medium uppercase tracking-widest opacity-80">
                      {video.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-10 flex items-center gap-6">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white shadow-md hover:shadow-lg border border-slate-100 transition-all group active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-slate-600" />
        </button>

        <div className="flex items-center gap-2.5">
          {VIDEOS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'w-10 bg-slate-800' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white shadow-md hover:shadow-lg border border-slate-100 transition-all group active:scale-95"
        >
          <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-slate-600" />
        </button>
      </div>
    </div>
  );
}

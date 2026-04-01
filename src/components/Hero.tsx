"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const pfRef = useRef();
  const [cur, setCur] = useState(0);

  const DUR = 5000;

  const IMGS = [
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1800&q=85&auto=format&fit=crop",
    "https://scontent.fvns6-2.fna.fbcdn.net/v/t39.30808-6/505178624_1152541420225416_2719295324039215791_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=laVL5NghHvEQ7kNvwF-t6Xq&_nc_oc=AdpvI148hupNm4QUyhWR_wCdz6x5d-iV-ceD3Lba9SRQ5UQsFgWENNv_R5J_FPup2lUTK5PsOhOjpvinvXPXA91T&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=zXpOdHFWWyomKzIN39myfQ&_nc_ss=7a3a8&oh=00_AfzuUcsmJTAo63X4kFIyZkkE_Wl1GswuUpDyQ3UDy8yEvg&oe=69D14977",
    "https://scontent.fvns6-2.fna.fbcdn.net/v/t39.30808-6/531520821_1204231028389788_8389759215347356354_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xCxc91tATmEQ7kNvwFrAetM&_nc_oc=AdpLmGH4kbBes9wI58EWXzcJFZPi1qjdmE7ebActL1lecdsacUon9__fOAwgq8G9HPXeGsqbsJrU1BLL2WJAa5Rt&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=_iffoFJ6ZJKoJX-QHDFU-g&_nc_ss=7a3a8&oh=00_Afw-9TZQ6O6499VriZnYvJYfQqwk5pbDCn__C6ewgTHVCw&oe=69D140BF",
  ];

  // Stats numbers for counting
  const STATS = [
    { value: 5000, label: "Students" },
    { value: 100, label: "Expert Teachers" },
    { value: 5, label: "School Branches" },
    { value: 15, label: "Years of Excellence" },
  ];

  const [counters, setCounters] = useState(STATS.map(() => 0));

  /* AUTO SLIDE */
  useEffect(() => {
    const t = setInterval(() => {
      setCur((p) => (p + 1) % 3);
    }, DUR);
    return () => clearInterval(t);
  }, []);

  /* PROGRESS BAR */
  useEffect(() => {
    let w = 0;
    const el = pfRef.current;
    el.style.width = "0%";

    const t = setInterval(() => {
      w += 2;
      el.style.width = w + "%";
      if (w >= 100) clearInterval(t);
    }, DUR / 50);

    return () => clearInterval(t);
  }, [cur]);

  /* COUNTER ANIMATION */
  useEffect(() => {
    const interval = 50; // update every 50ms
    const duration = 2000; // 2 seconds to reach the final number
    const steps = Math.ceil(duration / interval);

    const increments = STATS.map((stat) => stat.value / steps);

    let currentStep = 0;
    const t = setInterval(() => {
      currentStep++;
      setCounters((prev) =>
        prev.map((val, i) => {
          const nextVal = val + increments[i];
          return nextVal >= STATS[i].value ? STATS[i].value : nextVal;
        })
      );
      if (currentStep >= steps) clearInterval(t);
    }, interval);

    return () => clearInterval(t);
  }, []);

  return (
    <section className="h-screen min-h-[250px] relative overflow-hidden bg-[#0D1B30] text-white">

      {/* SLIDER TRACK */}
      <div
        className="flex w-[350%] h-full transition-all duration-700 ease-in-out"
        style={{ transform: `translateX(-${cur * (100 / 3)}%)` }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-1/3 h-full relative">

            {/* BG IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[9000ms]"
              style={{
                backgroundImage: `url(${IMGS[i]})`,
                transform: cur === i ? "scale(1)" : "scale(1.08)",
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(8,16,32,.88)_0%,rgba(8,16,32,.62)_48%,rgba(8,16,32,.20)_100%)]" />

            {/* CONTENT */}
            <div className="absolute top-[68px] bottom-[90px] flex flex-col justify-center px-6 md:px-16 max-w-[800px]">

              {/* BADGE */}
              <div className="w-70 md:w-100 inline-flex items-center gap-2 bg-[#F5A623]/20 border border-[#F5A623]/40 rounded-full px-4 py-1 text-[10px] tracking-[2px] uppercase mb-4">
                <div className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse" />
                {i === 0 && "Nurturing Excellence Since 2010"}
                {i === 1 && "World-Class Academic Excellence"}
                {i === 2 && "5 Branches Across the City"}
              </div>

              {/* TITLE */}
              <h1 className="font-serif font-black leading-tight mb-4 text-[clamp(2rem,5vw,4.5rem)]">
                {i === 0 && <>Shaping Bright <span className="text-[#F5A623]">Futures</span></>}
                {i === 1 && <>100+ Expert <span className="text-[#F5A623]">Teachers</span></>}
                {i === 2 && <>5000+ Happy <span className="text-[#F5A623]">Students</span></>}
              </h1>

              {/* TEXT */}
              <p className="text-white/70 max-w-[500px] mb-6">
                A safe, modern and value-based education for your child — where every young mind grows.
              </p>

              {/* BUTTONS */}
              <div className="flex gap-3 flex-col md:flex-row md:flex-wrap">
                <button className="w-50 md:w-60 bg-gradient-to-br from-[#F5A623] to-[#c97d00] text-[#0D1B30] text-sm md:text-[17px] font-bold md:font-bold px-3 md:px-6 py-1.5 md:py-3 rounded-full">
                  Apply for Admission
                </button>
                <button className="w-50 md:w-60 border border-white/30 text-sm md:text-[17px] font-bold md:font-bold px-3 md:px-6 py-1.5 md:py-3 rounded-full">
                  Book School Visit
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ARROWS */}
      <div className="absolute right-6 md:right-12 bottom-28 flex gap-3 z-10">
        <button
          onClick={() => setCur((cur - 1 + 3) % 3)}
          className="w-9 md:w-11 h-9 md:h-11 rounded-full border border-white/30 bg-white/10"
        >
          ←
        </button>
        <button
          onClick={() => setCur((cur + 1) % 3)}
          className="w-9 md:w-11 h-9 md:h-11 rounded-full border border-white/30 bg-white/10"
        >
          →
        </button>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            className={`h-2 rounded transition-all ${
              cur === i
                ? "w-6 bg-[#F5A623]"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* PROGRESS */}
      <div className="absolute bottom-[90px] left-0 right-0 h-[3px] bg-white/10">
        <div
          ref={pfRef}
          className="h-full bg-gradient-to-r from-[#F5A623] to-[#FFD27F]"
        />
      </div>

      {/* STATS */}
      <div className="absolute bottom-0 w-full h-[90px] bg-[#081020]/90 flex backdrop-blur-xl border-t border-white/10">
        {STATS.map(({ label }, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center justify-center border-r border-white/10 last:border-none"
          >
            <div className="text-[#F5A623] font-serif text-2xl font-bold">
              {Math.floor(counters[i])}{i < 2 ? "+" : ""}
            </div>
            <div className="text-[10px] tracking-widest text-white/50 uppercase">
              {label}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
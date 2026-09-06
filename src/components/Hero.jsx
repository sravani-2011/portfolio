import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { profile, marquee } from '../data/content';
import ArrowUpRight from './ArrowUpRight';

// ── DROP YOUR VIDEO IN HERE ───────────────────────────────────────────────
// 1. Put the file at  src/assets/hero/your-video.mp4
// 2. Uncomment the import below and set HERO_VIDEO to it.
// The animated background is used automatically whenever HERO_VIDEO is null.
//
// import heroVideo from '../assets/hero/your-video.mp4';
const HERO_VIDEO = null;
// ──────────────────────────────────────────────────────────────────────────

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background: video when supplied, animated grid otherwise */}
      {HERO_VIDEO ? (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="hero-grid absolute inset-0" />
          {/* Red bloom that keeps the frame from reading flat */}
          <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] max-w-[140vw] rounded-full bg-[#ff2a2a]/20 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] max-w-[100vw] rounded-full bg-[#ff2a2a]/10 blur-[120px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 z-20 px-6 pb-24 md:pb-[10%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <span
            data-aos="fade-up"
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/80 text-[11px] md:text-xs font-bold tracking-widest uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
            Open to 2027 grad roles
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-3xl md:text-6xl font-black mb-5 tracking-tight leading-[1.05]"
          >
            Hi, I&apos;m Sravani — <br />
            <span className="text-[#ff2a2a]">{profile.role}</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/80 text-sm md:text-lg font-medium mb-8 max-w-xl drop-shadow-md leading-relaxed"
          >
            {profile.tagline}
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <a
              href="#projects"
              className="px-5 py-2.5 md:px-7 md:py-3 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 md:px-7 md:py-3 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: reel button (video) or quick links (no video) */}
        {HERO_VIDEO ? (
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
            onClick={toggleVideo}
          >
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
              {!isPlaying ? (
                <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </div>
            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              {!isPlaying ? 'Play Reel' : 'Pause'}
            </span>
          </div>
        ) : (
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="mt-10 md:mt-0 flex flex-row md:flex-col items-start md:items-end gap-4 md:gap-3 self-start md:self-auto"
          >
            {[
              { label: 'GitHub', href: profile.github },
              { label: 'LinkedIn', href: profile.linkedin },
              { label: 'Résumé', href: profile.resume },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors"
              >
                {link.label}
                <ArrowUpRight />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Tech ticker */}
      <div className="absolute bottom-0 left-0 w-full z-20 border-t border-white/10 bg-black/40 backdrop-blur-sm py-3 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={i}
              className="mx-6 text-white/40 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap"
            >
              {item} <span className="text-[#ff2a2a] ml-6">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

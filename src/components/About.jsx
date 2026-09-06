import React from 'react';
import { profile, stats, skills } from '../data/content';

// Badge photo. Swap the file at src/assets/about/profile.jpg to change it —
// a 3:4 portrait crop fits the badge frame. Set to null to fall back to the
// "SD" monogram.
import profilePhoto from '../assets/about/profile.jpg';
const PROFILE_PHOTO = profilePhoto;

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-24 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left: lanyard ID badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>

              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                {PROFILE_PHOTO ? (
                  <img src={PROFILE_PHOTO} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black text-center px-4">
                    <span className="text-6xl font-black text-[#ff2a2a] tracking-tighter">SD</span>
                    <span className="mt-4 text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase">
                      {profile.role}
                    </span>
                    <span className="mt-1 text-white/30 text-[9px] font-mono">SRMIST · 2027</span>
                  </div>
                )}
              </div>

              {/* Badge footer */}
              <div className="px-2 pt-3 pb-1 text-center">
                <p className="text-white font-black text-sm tracking-tight">{profile.name}</p>
                <p className="text-white/40 text-[10px] font-mono tracking-widest uppercase mt-0.5">
                  AWS Certified
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-10 leading-relaxed max-w-3xl text-red-50">
            Hi, my name is{' '}
            <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">
              {profile.shortName}
            </span>
            , {profile.intro}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-aos="zoom-in"
                data-aos-delay={200 + i * 100}
                className="bg-black/20 backdrop-blur-sm border border-black/20 rounded-2xl px-4 py-5 text-center"
              >
                <div className="text-2xl md:text-3xl font-black text-black leading-none">{stat.value}</div>
                <div className="mt-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-red-50/90 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <h3 className="text-2xl font-black text-black mb-6 tracking-tight">What I work with</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((group, i) => (
              <div
                key={group.title}
                data-aos="fade-up"
                data-aos-delay={100 + i * 80}
                className="bg-black/15 border border-black/10 rounded-2xl p-5 hover:bg-black/25 transition-colors duration-300"
              >
                <h4 className="text-black font-black text-sm uppercase tracking-widest mb-3">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-red-50 text-xs font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Torn paper divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse pointer-events-none">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
      <div
        className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
      >
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};

export default About;

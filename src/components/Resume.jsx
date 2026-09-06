import React from 'react';
import { profile, education, certifications } from '../data/content';

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-[#0d0d0d] w-full py-24 px-6 md:px-12 relative overflow-hidden border-t border-white/5"
    >
      {/* Faint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-16 max-w-2xl">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6">
            Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Education &amp; certifications
          </h2>
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group"
          >
            Download Résumé
            <svg
              className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Education */}
          <div data-aos="fade-right">
            <h3 className="text-white/40 text-xs font-bold uppercase tracking-[0.25em] mb-8">
              Education
            </h3>
            <div className="relative border-l border-white/10 pl-8 space-y-10">
              {education.map((item) => (
                <div key={item.school} className="relative">
                  <span className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-[#ff2a2a] ring-4 ring-[#0d0d0d]" />
                  <p className="text-white/40 text-xs font-mono tracking-widest mb-1">{item.period}</p>
                  <h4 className="text-white font-bold text-lg leading-snug">{item.school}</h4>
                  <p className="text-white/60 text-sm mt-1">{item.detail}</p>
                  <p className="text-[#ff2a2a] text-sm font-bold mt-1.5">{item.score}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div data-aos="fade-left">
            <h3 className="text-white/40 text-xs font-bold uppercase tracking-[0.25em] mb-8">
              Certifications &amp; awards
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="border border-white/10 rounded-2xl p-5 hover:border-[#ff2a2a]/50 hover:bg-white/[0.03] transition-all duration-300"
                >
                  <h4 className="text-white font-bold leading-snug">{cert.name}</h4>
                  <p className="text-white/40 text-xs font-mono tracking-widest mt-2">{cert.period}</p>
                </div>
              ))}

              <div className="border border-[#ff2a2a]/40 bg-[#ff2a2a]/10 rounded-2xl p-5">
                <h4 className="text-white font-bold leading-snug">First Prize — NWC Expo 2026, SRMIST</h4>
                <p className="text-white/70 text-sm mt-2 leading-relaxed">
                  For independently developing and deploying NexGen Tutor — a production-stable full-stack
                  AI application with documented evaluation metrics.
                </p>
                <p className="text-white/40 text-xs font-mono tracking-widest mt-3">Apr 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

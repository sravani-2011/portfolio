import React from 'react';
import { profile } from '../data/content';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Cloud &amp; Backend Engineering</p>
          <p>ML / AI Application Development</p>
          <p>Data Pipelines &amp; Analytics</p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p>AWS Certified Solutions Architect</p>
          <a
            href="#projects"
            className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1"
          >
            View Work
          </a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p>{profile.location}</p>
          <p>{year}</p>
        </div>
      </div>

      {/* Huge wordmark */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          {profile.shortName.toLowerCase()}
        </h2>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a
            href="#contact"
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold"
          >
            Contact
          </a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {year} {profile.name} | Built with React
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase"
          >
            {profile.email}
          </a>
          <a
            href={profile.resume}
            download
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1"
          >
            Résumé (PDF)
          </a>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

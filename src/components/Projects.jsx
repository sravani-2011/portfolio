import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { projects } from '../data/content';

// Card lights up as the animated dashed line reaches it.
const ProjectCard = ({ project, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    // Trigger once the line tip is 50px into the card.
    const triggerY = cardRect.top - containerRect.top + 50;
    const lineTipY = latest * containerRect.height;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || 'fade-up'}
      data-aos-delay={aosDelay}
      className={`w-full max-w-sm lg:w-96 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive
          ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]'
          : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* Hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>

      <div
        className={`w-full h-full rounded-[1.5rem] mt-8 p-7 flex flex-col transition-colors duration-700 ${
          isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
        }`}
      >
        <span
          className={`text-xl font-bold mb-1 font-serif italic transition-colors duration-700 ${
            isActive ? 'text-red-200' : 'text-gray-400'
          }`}
        >
          {project.number}
        </span>

        <h3
          className={`text-xl md:text-2xl font-black mb-1.5 tracking-tight leading-tight transition-colors duration-700 ${
            isActive ? 'text-white' : 'text-gray-900'
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-[10px] font-bold uppercase tracking-widest mb-4 transition-colors duration-700 ${
            isActive ? 'text-red-200' : 'text-gray-400'
          }`}
        >
          {project.kicker}
        </p>

        <p
          className={`text-sm leading-relaxed font-medium mb-5 transition-colors duration-700 ${
            isActive ? 'text-red-50' : 'text-gray-500'
          }`}
        >
          {project.text}
        </p>

        {/* Metrics */}
        <div
          className={`grid grid-cols-3 gap-2 mb-5 pt-4 border-t transition-colors duration-700 ${
            isActive ? 'border-red-300/40' : 'border-gray-200'
          }`}
        >
          {project.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div
                className={`text-base font-black leading-none transition-colors duration-700 ${
                  isActive ? 'text-white' : 'text-gray-900'
                }`}
              >
                {metric.value}
              </div>
              <div
                className={`mt-1 text-[9px] font-bold uppercase tracking-wider leading-tight transition-colors duration-700 ${
                  isActive ? 'text-red-200' : 'text-gray-400'
                }`}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors duration-700 ${
                isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Shared by the guide path and the revealed path. Coordinates are
// container-relative pixels (viewBox 1000 x CANVAS_HEIGHT, preserveAspectRatio="none"),
// routed to pass through each card in turn.
const CANVAS_HEIGHT = 1700;
const LINE_PATH =
  'M 800,180 C 600,320 250,420 200,700 C 160,930 700,860 780,1060 C 840,1220 350,1250 200,1400';

const Projects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  // The scattered layout needs room for a 384px card plus the 420px header column,
  // so it only kicks in at lg. Below that the cards stack in normal flow.
  // Card 02 is placed below the header block, which owns the top-left corner.
  const layouts = [
    'lg:absolute lg:top-[10px] lg:right-[9%] rotate-2 lg:rotate-6',
    'lg:absolute lg:top-[660px] lg:left-[9%] -rotate-2 lg:-rotate-6',
    'lg:absolute lg:top-[1000px] lg:right-[13%] rotate-1 lg:rotate-3',
  ];
  const aosTypes = ['fade-left', 'fade-right', 'fade-left'];

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative lg:h-[1700px]">
        {/* Header */}
        <div data-aos="fade-up" className="lg:absolute lg:top-10 lg:left-0 lg:w-[420px] z-20 mb-16 lg:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Selected work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Things I built, and the numbers that came out
            {/* Hand-drawn arrow */}
            <svg className="absolute -bottom-10 right-10 w-12 h-12 text-gray-800" fill="none" viewBox="0 0 24 24">
              <path
                d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            Each of these went the whole way — requirements through deployment and documentation. Every
            metric below is one I measured myself.
          </p>
        </div>

        {/* Desktop animated dashed line */}
        <svg
          className="hidden lg:block absolute top-0 left-0 w-full pointer-events-none z-0"
          style={{ height: CANVAS_HEIGHT }}
          viewBox={`0 0 1000 ${CANVAS_HEIGHT}`}
          preserveAspectRatio="none"
        >
          <path d={LINE_PATH} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 10" />

          <mask id="projects-path-mask">
            <motion.path
              d={LINE_PATH}
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          <path
            d={LINE_PATH}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#projects-path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile animated vertical dashed line */}
        <svg
          className="lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="projects-path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#projects-path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards */}
        <div className="flex flex-col gap-8 lg:gap-12 items-center lg:block relative z-10 w-full pt-4 lg:pt-0 pb-12 lg:pb-0">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.number}
              project={project}
              className={layouts[i]}
              aosType={aosTypes[i]}
              aosDelay={100 + i * 100}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}

          <div
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden lg:block absolute top-[1400px] left-[6%] font-[Caveat,cursive] text-3xl text-gray-600 -rotate-6"
          >
            …and more on GitHub!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

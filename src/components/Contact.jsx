import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/content';
import ArrowUpRight from './ArrowUpRight';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax for the oversized background word.
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [consent, setConsent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  // No backend: hand the message to the visitor's own mail client, pre-filled.
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = `${form.firstName} ${form.lastName}`.trim() || 'Someone';
    const subject = `Portfolio enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      form.email ? `Email: ${form.email}` : null,
      '',
      form.message,
    ]
      .filter((line) => line !== null)
      .join('\n');

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-gray-900"
    >
      {/* Oversized background word */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form card */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 md:mb-20">
            <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90">Reach me</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold tracking-widest uppercase">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
              >
                GitHub
                <ArrowUpRight />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
              >
                LinkedIn
                <ArrowUpRight />
              </a>
              <a href={`mailto:${profile.email}`} className="hover:text-black transition-colors normal-case tracking-normal">
                {profile.email}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left column */}
              <div className="flex-1 flex flex-col gap-10">
                <input
                  type="text"
                  id="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  aria-label="First name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                />
                <input
                  type="text"
                  id="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  aria-label="Last name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                />
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  aria-label="Email"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                />
              </div>

              {/* Right column */}
              <div className="flex-1 flex flex-col">
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  aria-label="Message"
                  className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                ></textarea>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input
                  type="checkbox"
                  id="permission"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent cursor-pointer"
                  style={{ accentColor: 'white' }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  Sending opens your own email client with the message pre-filled — nothing is stored on
                  this site and no data is sent anywhere else.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    Based in {profile.location}. Open to remote and relocation.
                  </p>

                  <button
                    type="submit"
                    disabled={!consent}
                    className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white"
                  >
                    Send
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

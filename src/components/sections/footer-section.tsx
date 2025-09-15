import React from 'react';

const FramerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="currentColor">
    <path d="M 9 0 L 13.5 0 L 13.5 4.5 L 9 4.5 L 9 0 Z M 9 4.5 L 13.5 4.5 L 13.5 9 L 9 9 L 9 4.5 Z M 4.5 4.5 L 9 4.5 L 9 9 L 4.5 9 L 4.5 4.5 Z M 4.5 9 L 9 9 L 9 13.5 L 4.5 13.5 L 4.5 9 Z" />
  </svg>
);


const FooterLink = ({ href = "#", children }: { href?: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-base font-normal text-white hover:underline leading-tight">
      {children}
    </a>
  </li>
);

export default function FooterSection() {
  const services = [
    "Tutoring: IBDP",
    "Tutoring: ACT/SAT/AP",
    "US College Admissions",
    "UK University Admissions",
    "EU University Admissions",
    "APAC University Admissions",
  ];

  const about = [
    "Our Story",
    "Our Tutors",
    "Link",
  ];

  const resources = [
    "Articles",
    "Careers",
  ];

  return (
    <footer className="bg-black py-20 px-6 md:px-[60px]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col">
        <div className="flex flex-wrap items-start gap-x-[90px] gap-y-12">
          <div className="flex-shrink-0">
            <h2 className="font-display font-bold text-[42px] leading-none text-[#D9FFD9]">
              WellPrepped+
            </h2>
          </div>
          
          <div>
            <h6 className="font-bold text-base text-[#D9FFD9] mb-5">
              Our Services
            </h6>
            <ul className="flex flex-col gap-5">
              {services.map((service, index) => (
                <FooterLink key={index}>{service}</FooterLink>
              ))}
            </ul>
          </div>
          
          <div>
            <h6 className="font-bold text-base text-[#D9FFD9] mb-5">
              About WellPrepped+
            </h6>
            <ul className="flex flex-col gap-5">
              {about.map((item, index) => (
                <FooterLink key={index}>{item}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-base text-[#D9FFD9] mb-5">
              More Resources
            </h6>
            <ul className="flex flex-col gap-5">
              {resources.map((item, index) => (
                <FooterLink key={index}>{item}</FooterLink>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex justify-end pt-10">
          <a
            href="https://www.framer.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Create a free website with Framer, the website builder loved by startups, designers and agencies."
            className="flex items-center gap-2 bg-white text-black rounded-xl py-2 pl-3 pr-4 text-sm font-semibold transition hover:opacity-80"
          >
            <FramerIcon />
            Made in Framer
          </a>
        </div>
      </div>
    </footer>
  );
}
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const logos = [
  { name: "St. Joseph's Institution", alt: "St. Joseph's Institution International" },
  { name: "UNIS", alt: "United Nations International School" },
  { name: "British School Jakarta", alt: "British School Jakarta" },
  { name: "EtonHouse", alt: "EtonHouse International School" },
  { name: "UWC Southeast Asia", alt: "United World College Southeast Asia" },
  { name: "Harrow School", alt: "Harrow International School" },
  { name: "SOKA", alt: "SOKA International School" },
  { name: "Stamford American", alt: "Stamford American International School" },
];

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[100vh] md:h-[632px] flex flex-col justify-center items-center text-foreground text-center overflow-hidden p-4 md:p-8 lg:p-16" id="home">
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
      <Image
        src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1920&h=1080&fit=crop&crop=center"
        alt="A warm classroom setting with wooden desks and large windows with natural lighting"
        fill
        sizes="100vw"
        quality={100}
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 bg-background/70 z-10" />

      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center gap-y-6 md:gap-y-10">
        <div className="flex flex-col items-center gap-y-4 md:gap-y-6">
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-none text-[#d9ffd9]">
            WellPrepped+
          </h2>

          <div className="w-full max-w-6xl overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex animate-marquee">
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <div key={index} className="mx-4 md:mx-8 flex-shrink-0 h-8 md:h-10 flex items-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 md:px-6 py-1 md:py-2 border border-white/30">
                    <span className="text-white font-semibold text-xs md:text-sm whitespace-nowrap">
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-4 md:gap-y-6">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight text-foreground max-w-4xl px-4">
            All your IB needs in one place
          </h1>
          <div className="text-base md:text-lg font-medium max-w-3xl px-4">
            <p>
              Learn from top IB tutors and access college admissions support
            </p>
            <p>from the world's best IB scorers</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-4 md:gap-y-6">
          <p className="max-w-3xl text-sm md:text-lg text-text-secondary leading-normal px-4 text-center">
            Trusted by students from the world's{" "}
            <strong className="font-semibold text-foreground">
              top international schools
            </strong>
            ,
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            with <strong className="font-semibold text-foreground">3000+ hours</strong> taught to
            students across{" "}
            <strong className="font-semibold text-foreground">
              50+ schools in 15+ countries
            </strong>
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 md:px-8 py-3 md:py-4 h-auto text-sm md:text-base font-medium transition-transform hover:scale-105"
          >
            <a href="https://tally.so/r/wellprepped-plus" target="_blank" rel="noopener noreferrer">Get Started Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
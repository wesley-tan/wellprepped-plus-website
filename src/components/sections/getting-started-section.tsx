import React from 'react';

interface Step {
  step: string;
  title: string;
  description: React.ReactNode;
  icon: 'square' | 'circle';
}

const steps: Step[] = [
  {
    step: "Step 1",
    title: "Individual Consultation with your Learning Manager",
    description: (
      <>
        Every client is assigned a <em className="italic">learning manager</em>, who designs a tailored suite of services based on your specific learning needs.
      </>
    ),
    icon: 'square',
  },
  {
    step: "Step 2",
    title: "Personalized matching with a suite of tutors",
    description: "After an introductory call, we connect you with the best-suited tutors from our team of 43-45 point scoring educators, based on your learning requirements and personality.",
    icon: 'square',
  },
  {
    step: "Step 3",
    title: "24/7 Tutor Support & Monthly Progress Updates",
    description: "Your learning manager regularly checks in with you to track your progress, refine strategies, and recommend additional support where needed.",
    icon: 'circle',
  }
];

const StepCard = ({ step, title, description, icon }: Step) => {
  return (
    <div className="flex h-full flex-col gap-6 rounded-lg bg-background-alt p-6 text-background">
      <div className="flex h-[200px] shrink-0 items-center justify-center rounded-lg bg-[#d9d9d9]">
        <div className={`h-20 w-20 bg-white ${icon === 'circle' ? 'rounded-full' : ''}`} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-body text-2xl font-semibold leading-tight text-accent">
          {step}: {title}
        </h3>
        <p className="font-body text-base leading-relaxed text-background">
          {description}
        </p>
      </div>
    </div>
  );
};

const GettingStartedSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-16 text-center font-display text-5xl font-bold text-foreground">
          Getting started with WellPrepped+
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((item, index) => (
            <StepCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
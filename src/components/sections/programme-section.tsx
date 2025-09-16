import React from 'react';

const ProgrammeSection = () => {
  return (
    <section className="bg-background text-foreground py-20" id="programme">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-16 items-start">
          <div className="md:col-span-2">
            <h2 className="text-[48px] font-display leading-[1.2]">
              Our Programme
            </h2>
          </div>
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg font-bold">
              WellPrepped+ is the world’s only education company dedicated exclusively to the IB Diploma Programme and IB-focused university admissions.
            </p>
            <p className="text-lg text-[#d0cfc8]">
              We deliver personalised IB tutoring and bespoke college guidance to ambitious students across the globe — from New York and Paris to Zurich, Munich, Singapore, and Shanghai. Wherever they are in the world, WellPrepped students gain access to world-class teaching, strategic admissions support, and unparalleled extracurricular opportunities — empowering them to excel in the IB and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
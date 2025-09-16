import React from 'react';

const ServicesSection = () => {
  const stripeBackground = {
    backgroundImage:
      'repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 6px)',
  };

  return (
    <section className="bg-background py-20" id="services">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <h2 className="font-display text-5xl text-center text-foreground">
            Our Services
          </h2>

          <div className="w-full flex flex-col gap-12">
            {/* Service Card 1: 1-on-1 Tutoring */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col gap-6 py-10 lg:py-0 lg:order-2">
                <h4 className="font-body text-2xl font-bold text-foreground">
                  1-on-1 tutoring with top IB scorers
                </h4>
                <p className="text-base text-muted">
                  The WellPrepped+ tutoring team represents the world's top 1.8% of IB scorers, with a minimum of 43/45 points.
                  <br />
                  <br />
                  WellPrepped+ students are supported with a team of dedicated tutors who provide weekly IB tutoring and 24/7 EE/IA/TOK guidance.
                </p>
                <a
                  href="#"
                  className="btn bg-primary text-primary-foreground self-start transition-transform transform hover:scale-105 hover:bg-primary/90"
                >
                  Sign-up
                </a>
              </div>
              <div
                className="aspect-square rounded-[20px] bg-card lg:order-1"
                style={stripeBackground}
              />
            </div>

            {/* Service Card 2: Personalized College Admissions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col gap-6 py-10 lg:py-0">
                <h4 className="font-body text-2xl font-bold text-foreground">
                  Personalized College Admissions
                </h4>
                <p className="text-base text-muted">
                  We maximize your child's potential through olympiads, essay competitions, volunteering and entrepreneurial activities tailored to their interests.
                  <br />
                  <br />
                  WellPrepped+ students have gone on to Columbia, UPenn, Oxford and other T50 universities.
                </p>
                <a
                  href="#"
                  className="btn bg-primary text-primary-foreground self-start transition-transform transform hover:scale-105 hover:bg-primary/90"
                >
                  Explore College Admissions
                </a>
              </div>
              <div
                className="aspect-square rounded-[20px] bg-card"
                style={stripeBackground}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
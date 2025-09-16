import React from 'react';

const statsData = [
  {
    value: "2500",
    label: "Hours of Lessons taught and counting",
  },
  {
    value: "31",
    label: "Average score of our tutors,<br />our minimum is 43/45",
  },
  {
    value: "13",
    label: "Number of T50 universities that WellPrepped students attend",
  },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center text-center">
    <span className="font-display text-7xl font-bold leading-none text-foreground">
      {value}
    </span>
    <p
      className="mt-4 max-w-[280px] text-base text-secondary"
      dangerouslySetInnerHTML={{ __html: label }}
    />
  </div>
);

const ResultsSection = () => {
  return (
    <section className="bg-background py-20" id="results">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-16 text-center font-display text-5xl text-foreground">
          Results by the Numbers
        </h2>
        <div className="flex flex-col items-start justify-around gap-y-12 md:flex-row md:gap-x-8">
          {statsData.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
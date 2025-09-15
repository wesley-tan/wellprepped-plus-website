import React from "react";
import Navigation from "@/components/sections/navigation";
import Image from "next/image";

const CollegeAdmissionsPage = () => {
  const admissionServices = [
    {
      region: "US Admissions",
      description: "Ivy League and Top 50 universities",
      features: [
        "Common Application guidance",
        "Essay writing workshops",
        "Interview preparation",
        "Scholarship applications",
        "SAT/ACT preparation"
      ],
      universities: ["Harvard", "Yale", "MIT", "Stanford", "Columbia", "UPenn"],
      color: "bg-primary"
    },
    {
      region: "UK Admissions",
      description: "Oxbridge and Russell Group universities",
      features: [
        "UCAS application support",
        "Personal statement crafting",
        "Interview coaching",
        "Oxbridge preparation",
        "Subject-specific guidance"
      ],
      universities: ["Oxford", "Cambridge", "LSE", "UCL", "KCL", "Imperial"],
      color: "bg-accent"
    },
    {
      region: "EU Admissions",
      description: "Top European institutions",
      features: [
        "Application strategy",
        "Language requirements",
        "Portfolio development",
        "Motivation letters",
        "Entrance exam prep"
      ],
      universities: ["ETH Zurich", "Sciences Po", "Bocconi", "INSEAD", "TU Delft", "KU Leuven"],
      color: "bg-secondary"
    },
    {
      region: "APAC Admissions",
      description: "Leading Asian universities",
      features: [
        "Regional application systems",
        "Cultural considerations",
        "Merit scholarship guidance",
        "Research opportunities",
        "Exchange programs"
      ],
      universities: ["NUS", "NTU", "HKU", "University of Tokyo", "KAIST", "ANU"],
      color: "bg-card"
    }
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      university: "Harvard University",
      program: "Economics",
      story: "With WellPrepped's guidance, I crafted a compelling narrative that showcased my passion for behavioral economics and secured admission to my dream school."
    },
    {
      name: "James Wilson",
      university: "Oxford University",
      program: "Philosophy, Politics & Economics",
      story: "The interview preparation was invaluable. My tutor helped me think critically and articulate complex ideas clearly for my Oxford interview."
    },
    {
      name: "Maria Rodriguez",
      university: "ETH Zurich",
      program: "Computer Science",
      story: "WellPrepped helped me navigate the complex Swiss application system and prepare for the technical assessments required for ETH admission."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-background py-20" id="admissions">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-6xl font-display font-bold text-foreground mb-6">
                  University Admissions that <span className="text-primary">Open Doors</span>
                </h1>
                <p className="text-xl text-[#d0cfc8] mb-8">
                  Our admissions specialists have helped students gain acceptance to the world's most prestigious universities. With a 95% success rate, we turn university dreams into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-3xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                    Start Your Journey
                  </button>
                  <button className="bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 rounded-3xl font-semibold text-lg transition-all duration-300">
                    Book Consultation
                  </button>
                </div>
              </div>
              <div className="relative h-96">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&crop=center"
                  alt="University campus with students"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Admissions Services */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display text-foreground mb-6">
                Global University Admissions
              </h2>
              <p className="text-xl text-[#d0cfc8] max-w-3xl mx-auto">
                Specialized guidance for universities worldwide, tailored to each region's unique requirements and cultural expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {admissionServices.map((service, index) => (
                <div key={index} className="bg-background-alt rounded-lg p-8 border border-background/10">
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <span className="text-2xl font-bold text-white">
                      {service.region.split(' ')[0].slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-background mb-2">
                    {service.region}
                  </h3>
                  <p className="text-background/80 mb-6">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-background mb-3">Services Include:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-background/80">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-background mb-3">Target Universities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.universities.map((uni, uIndex) => (
                        <span key={uIndex} className="bg-background text-background-alt px-3 py-1 rounded-full text-sm">
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="bg-background-alt py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-background mb-6">
                Our Admissions Process
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Initial Assessment", desc: "Evaluate your profile, goals, and target universities" },
                { step: "02", title: "Strategy Development", desc: "Create a personalized admissions roadmap" },
                { step: "03", title: "Application Support", desc: "Essays, interviews, and application optimization" },
                { step: "04", title: "Final Review", desc: "Polish and submit your applications with confidence" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-display font-bold text-background mb-2">
                    {item.title}
                  </h3>
                  <p className="text-background/80">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-[#d0cfc8]">
                Real students, real results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-background-alt rounded-lg p-6 border border-background/10">
                  <div className="text-4xl text-accent mb-4">"</div>
                  <p className="text-background mb-6 leading-relaxed">
                    {story.story}
                  </p>
                  <div className="border-t border-background/20 pt-4">
                    <div className="font-bold text-background">{story.name}</div>
                    <div className="text-background/80 text-sm">{story.university}</div>
                    <div className="text-accent text-sm">{story.program}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CollegeAdmissionsPage;


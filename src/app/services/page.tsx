import React from "react";
import Navigation from "@/components/sections/navigation";
import Image from "next/image";
import { BookOpen, Users, Trophy, Clock, Target, Lightbulb, FileText, GraduationCap } from "lucide-react";

const ServicesPage = () => {
  const mainServices = [
    {
      icon: BookOpen,
      title: "1-on-1 IB Tutoring",
      description: "Personalized tutoring sessions tailored to your learning style and pace",
      features: [
        "All IB subjects at HL and SL levels",
        "Flexible scheduling to fit your timetable",
        "Expert tutors with 43-45 IB scores",
        "Interactive online learning platform",
        "Progress tracking and regular assessments"
      ],
      pricing: "From $80/hour",
      popular: true
    },
    {
      icon: Users,
      title: "Small Group Classes",
      description: "Learn with peers in focused, small group environments",
      features: [
        "2-4 students per class",
        "Subject-specific focus sessions",
        "Collaborative learning approach",
        "Competitive pricing option",
        "Peer motivation and support"
      ],
      pricing: "From $45/hour per student",
      popular: false
    },
    {
      icon: Trophy,
      title: "Exam Preparation",
      description: "Intensive preparation for IB final exams and mock assessments",
      features: [
        "Past paper practice and analysis",
        "Exam technique workshops",
        "Time management strategies",
        "Stress management support",
        "Subject-specific exam tips"
      ],
      pricing: "From $100/session",
      popular: false
    }
  ];

  const specializedServices = [
    {
      icon: Target,
      title: "Internal Assessments (IA)",
      description: "Expert guidance for all your Internal Assessment projects",
      details: [
        "Topic selection and research methodology",
        "Data collection and analysis support",
        "Writing and formatting guidance",
        "Criterion-based feedback",
        "Multiple draft reviews"
      ]
    },
    {
      icon: Lightbulb,
      title: "Extended Essay (EE)",
      description: "Comprehensive support for your 4,000-word research project",
      details: [
        "Research question development",
        "Supervisor matching and coordination",
        "Research methodology training",
        "Academic writing workshops",
        "Citation and bibliography support"
      ]
    },
    {
      icon: FileText,
      title: "Theory of Knowledge (TOK)",
      description: "Master the philosophical heart of the IB Diploma",
      details: [
        "Essay writing techniques",
        "Presentation planning and delivery",
        "Critical thinking development",
        "Knowledge question exploration",
        "Real-life situation analysis"
      ]
    },
    {
      icon: GraduationCap,
      title: "University Admissions",
      description: "Complete guidance for university applications worldwide",
      details: [
        "University selection strategy",
        "Personal statement writing",
        "Interview preparation",
        "Application timeline management",
        "Scholarship opportunity identification"
      ]
    }
  ];

  const subjects = [
    {
      category: "Sciences",
      subjects: ["Biology HL/SL", "Chemistry HL/SL", "Physics HL/SL", "Environmental Systems & Societies SL"],
      color: "from-green-500 to-emerald-600"
    },
    {
      category: "Mathematics",
      subjects: ["Mathematics AA HL/SL", "Mathematics AI HL/SL"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      category: "Languages",
      subjects: ["English A HL/SL", "French B HL/SL", "Spanish B HL/SL", "Mandarin B HL/SL"],
      color: "from-purple-500 to-violet-600"
    },
    {
      category: "Humanities",
      subjects: ["History HL/SL", "Geography HL/SL", "Economics HL/SL", "Psychology HL/SL"],
      color: "from-orange-500 to-red-600"
    },
    {
      category: "Arts",
      subjects: ["Visual Arts HL/SL", "Music HL/SL", "Theatre Arts HL/SL"],
      color: "from-pink-500 to-rose-600"
    },
    {
      category: "Business",
      subjects: ["Business Management HL/SL", "Information Technology in Global Society HL/SL"],
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const testimonials = [
    {
      name: "Emma Thompson",
      score: "44/45",
      university: "Oxford University",
      quote: "The personalized tutoring helped me improve from a predicted 38 to achieving 44 points. The tutors really understood how to teach complex concepts in a way that clicked for me.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Chen",
      score: "43/45",
      university: "MIT",
      quote: "The Extended Essay support was incredible. My tutor helped me develop a research question I was passionate about and guided me through every step of the process.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sofia Rodriguez",
      score: "45/45",
      university: "Cambridge University",
      quote: "Perfect 45! The comprehensive approach covering all subjects and the university admissions guidance made all the difference. I couldn't have done it without WellPrepped+.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-display font-bold text-foreground mb-6">
                Our Services
              </h1>
              <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive IB support from expert tutors who scored 43-45 points. 
                Everything you need to excel in the IB Diploma Programme and gain admission to top universities.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="bg-background-alt py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display font-bold text-background mb-6">
                Core Tutoring Services
              </h2>
              <p className="text-lg text-background/80 max-w-2xl mx-auto">
                Choose the learning format that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div 
                  key={index} 
                  className={`bg-background rounded-xl p-8 border border-background/10 hover:shadow-2xl hover:border-accent/20 hover:-translate-y-2 transition-all duration-500 group relative ${
                    service.popular ? "ring-2 ring-accent/30" : ""
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground/80 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground/90 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-foreground/10 pt-6">
                    <div className="text-2xl font-bold text-accent mb-4">{service.pricing}</div>
                    <button className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display font-bold text-foreground mb-6">
                Specialized Support
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Expert guidance for the unique components of the IB Diploma Programme
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specializedServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-background-alt rounded-xl p-8 border border-background/10 hover:shadow-xl hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-background mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-background/80 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-background/90 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subjects Grid */}
        <section className="bg-background-alt py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display font-bold text-background mb-6">
                All IB Subjects Covered
              </h2>
              <p className="text-lg text-background/80 max-w-2xl mx-auto">
                Our expert tutors cover every subject in the IB curriculum at both Higher and Standard Level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-background rounded-xl p-6 border border-background/10 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${category.color} text-white p-4 rounded-lg mb-6`}>
                    <h3 className="text-xl font-display font-bold">{category.category}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.subjects.map((subject, subjectIndex) => (
                      <li key={subjectIndex} className="text-foreground/90 text-sm py-2 border-b border-foreground/5 last:border-b-0">
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display font-bold text-foreground mb-6">
                Success Stories
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Real results from real students who achieved their IB dreams with our help
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-background-alt rounded-xl p-6 border border-background/10 hover:shadow-xl hover:border-accent/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-background">{testimonial.name}</h4>
                      <p className="text-accent font-bold text-lg">{testimonial.score}</p>
                      <p className="text-background/70 text-sm">{testimonial.university}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-background/90 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-background-alt to-background py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-display font-bold text-background mb-6">
                Ready to Excel in IB?
              </h2>
              <p className="text-background font-medium mb-8 leading-relaxed text-lg">
                Join thousands of students who have achieved their IB goals with our expert tutoring. 
                Start your journey to academic excellence today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-accent to-primary text-white hover:from-accent/90 hover:to-primary/90 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                  Book Free Consultation
                </button>
                <button className="bg-background text-background-alt border-2 border-background/20 hover:bg-background/90 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicesPage;

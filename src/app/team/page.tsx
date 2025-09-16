import React from "react";
import Navigation from "@/components/sections/navigation";
import Image from "next/image";
import { Star, GraduationCap, Globe, Award } from "lucide-react";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & Lead IB Tutor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face",
      ib_score: 45,
      university: "Oxford University",
      subjects: ["Mathematics HL", "Physics HL", "Economics HL"],
      experience: "5+ years",
      students: "200+",
      bio: "Sarah founded WellPrepped+ after achieving a perfect 45 points in the IB. She specializes in helping students excel in STEM subjects and has guided over 200 students to top university placements."
    },
    {
      name: "Marcus Thompson",
      role: "English & Literature Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      ib_score: 44,
      university: "Cambridge University",
      subjects: ["English Literature HL", "History HL", "Psychology HL"],
      experience: "4+ years",
      students: "150+",
      bio: "Marcus brings expertise in humanities subjects, helping students craft compelling essays and develop critical thinking skills that universities value."
    },
    {
      name: "Dr. Priya Patel",
      role: "Science & Medicine Mentor",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      ib_score: 45,
      university: "Imperial College London",
      subjects: ["Chemistry HL", "Biology HL", "Mathematics HL"],
      experience: "6+ years",
      students: "180+",
      bio: "Dr. Patel combines her medical background with IB expertise to guide pre-med students through the most challenging science subjects."
    },
    {
      name: "James Wilson",
      role: "College Admissions Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      ib_score: 43,
      university: "Harvard University",
      subjects: ["Economics HL", "Business Management HL", "English Literature HL"],
      experience: "7+ years",
      students: "300+",
      bio: "James specializes in US university admissions, having helped hundreds of students gain acceptance to Ivy League and top-tier institutions."
    },
    {
      name: "Elena Rodriguez",
      role: "Languages & TOK Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      ib_score: 44,
      university: "LSE",
      subjects: ["Spanish A HL", "French B HL", "Theory of Knowledge"],
      experience: "5+ years",
      students: "120+",
      bio: "Elena brings multilingual expertise and philosophical depth to help students excel in language subjects and Theory of Knowledge."
    },
    {
      name: "Alex Kim",
      role: "Arts & Extended Essay Mentor",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      ib_score: 43,
      university: "UCL",
      subjects: ["Visual Arts HL", "Art History", "Extended Essay"],
      experience: "4+ years",
      students: "100+",
      bio: "Alex helps creative students balance artistic expression with academic rigor, specializing in Extended Essay supervision across all subjects."
    }
  ];

  const stats = [
    { icon: Star, value: "44.2", label: "Average IB Score of Our Tutors" },
    { icon: GraduationCap, value: "1000+", label: "Students Taught" },
    { icon: Globe, value: "25+", label: "Countries Represented" },
    { icon: Award, value: "95%", label: "University Admission Success Rate" },
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
                Meet Our Expert Team
              </h1>
              <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our tutors are top IB graduates from the world's best universities. Each team member scored 43-45 points 
                and brings years of experience helping students achieve their academic dreams.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-background-alt py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <stat.icon className="w-10 h-10 text-accent" />
                  </div>
                  <div className="text-4xl font-display font-bold text-background mb-2">{stat.value}</div>
                  <div className="text-background/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display font-bold text-foreground mb-6">
                Our Tutors
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Each tutor is carefully selected for their exceptional IB performance, university credentials, and teaching excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-background-alt rounded-xl overflow-hidden border border-background/10 hover:shadow-2xl hover:border-accent/20 hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                        IB Score: {member.ib_score}/45
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold text-background mb-2 group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold mb-3">{member.role}</p>
                    <p className="text-background/90 font-medium mb-4 text-sm">{member.university}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-background/70">Experience:</span>
                        <span className="text-background font-semibold">{member.experience}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-background/70">Students Taught:</span>
                        <span className="text-background font-semibold">{member.students}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-background font-semibold mb-2 text-sm">Specializes in:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.subjects.map((subject, subIndex) => (
                          <span 
                            key={subIndex}
                            className="bg-background/20 text-background text-xs px-2 py-1 rounded-full"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-background/80 text-sm leading-relaxed">{member.bio}</p>
                  </div>
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
                Ready to Work with Our Team?
              </h2>
              <p className="text-background font-medium mb-8 leading-relaxed text-lg">
                Get matched with the perfect tutor for your subjects and goals. 
                Our team is ready to help you achieve your IB dreams.
              </p>
              <button className="bg-gradient-to-r from-accent to-primary text-white hover:from-accent/90 hover:to-primary/90 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                Book Your First Lesson
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TeamPage;

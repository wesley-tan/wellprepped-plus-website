import React from "react";
import Navigation from "@/components/sections/navigation";
import { Mail, Clock, MessageCircle, Calendar, FileText } from "lucide-react";

const ContactPage = () => {
  const primaryContactInfo = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Application Form",
      value: "Start Your Journey",
      description: "Complete our quick form to get matched with the perfect tutor",
      link: "https://tally.so/r/wellprepped-plus"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+1 (555) 123-4567",
      description: "Quick responses for urgent questions",
      link: "https://wa.me/15551234567"
    }
  ];

  const socialLinks = [
    {
      name: "Email",
      username: "hello@wellpreparedplus.com",
      url: "mailto:hello@wellpreparedplus.com",
      icon: <Mail className="w-6 h-6" />,
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600"
    },
    {
      name: "Calendar",
      username: "Book a consultation",
      url: "https://calendly.com/wellprepped-plus",
      icon: <Calendar className="w-6 h-6" />,
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      name: "TikTok",
      username: "@wellpreppedplus",
      url: "https://tiktok.com/@wellpreppedplus",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.806-.948-1.107-1.792-1.147-2.338H12.75v10.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5c.173 0 .342.018.5.052V7.5a5.5 5.5 0 0 0-.5-.022c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5V9.562a8.7 8.7 0 0 0 4.571 1.306v-3c-.721 0-1.379-.297-1.856-.756-.244-.236-.457-.5-.644-.785z"/>
        </svg>
      ),
      bgColor: "bg-pink-500",
      hoverColor: "hover:bg-pink-600"
    },
    {
      name: "Instagram",
      username: "@wellpreppedplus",
      url: "https://instagram.com/wellpreppedplus",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
        </svg>
      ),
      bgColor: "bg-purple-500",
      hoverColor: "hover:bg-purple-600"
    },
    {
      name: "LinkedIn",
      username: "WellPrepped Plus",
      url: "https://linkedin.com/company/wellpreppedplus",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    }
  ];

  const officeHours = [
    { region: "Americas (EST)", hours: "9:00 AM - 8:00 PM" },
    { region: "Europe (CET)", hours: "2:00 PM - 11:00 PM" },
    { region: "Asia Pacific (SGT)", hours: "10:00 PM - 7:00 AM+1" }
  ];

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer: "We can match you with a tutor within 24 hours of your initial consultation."
    },
    {
      question: "Do you offer a free trial lesson?",
      answer: "Yes! All lessons are covered by our 'risk-free first trial' policy."
    },
    {
      question: "What qualifications do your tutors have?",
      answer: "All our tutors scored 43-45 points in the IB and many have degrees from top universities."
    },
    {
      question: "Can you help with university applications?",
      answer: "Absolutely! We provide comprehensive admissions support for universities worldwide."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-background py-20" id="contact">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-display font-bold text-foreground mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-[#d0cfc8] mb-8">
                Ready to excel in the IB and secure admission to your dream university? Our team is here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://tally.so/r/wellprepped-plus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-3xl font-semibold text-lg transition-all duration-300 hover:scale-105 text-center"
                >
                  Get Started Now
                </a>
                <a 
                  href="https://calendly.com/wellprepped-plus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 rounded-3xl font-semibold text-lg transition-all duration-300 text-center"
                >
                  Schedule Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-background-alt py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-background mb-4">
                How to Reach Us
              </h2>
              <p className="text-background/80 text-lg">
                Choose your preferred way to get started
              </p>
            </div>
            
            {/* Primary Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {primaryContactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center p-8 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                    info.title === 'Application Form'
                      ? 'bg-gradient-to-br from-primary to-accent text-white border-primary/20 hover:shadow-2xl ring-2 ring-primary/30' 
                      : 'bg-gradient-to-br from-green-500 to-green-600 text-white border-green-400/20 hover:shadow-2xl ring-2 ring-green-400/30'
                  }`}
                >
                  <div className="w-20 h-20 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    {info.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 text-white">
                    {info.title}
                  </h3>
                  <p className="font-semibold mb-4 text-base text-white/90">
                    {info.value}
                  </p>
                  <p className="text-sm leading-relaxed text-white/80 mb-4">
                    {info.description}
                  </p>
                  <div className="text-white/90 text-sm font-medium">
                    {info.title === 'Application Form' ? 'Click to get started →' : 'Message us now →'}
                  </div>
                </a>
              ))}
            </div>

            {/* Other Contact Methods */}
            <div className="text-center">
              <h3 className="text-2xl font-display font-semibold text-background mb-8">
                Other Ways to Connect
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-5 ${social.bgColor} ${social.hoverColor} text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group min-h-[80px]`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      {social.icon}
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="font-bold text-sm lg:text-base mb-1">{social.name}</div>
                      <div className="text-white/90 text-xs lg:text-sm truncate font-medium">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-background/60 text-base mt-8 max-w-md mx-auto">
                Follow us on social media or reach out directly
              </p>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Office Hours */}
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Office Hours
                </h3>
                <div className="space-y-4">
                  {officeHours.map((office, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-background-alt rounded-lg border border-background/10">
                      <Clock className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-semibold text-background">{office.region}</div>
                        <div className="text-background/80">{office.hours}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Answers */}
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Quick Answers
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="p-6 bg-background-alt rounded-lg border border-background/10">
                      <h4 className="font-semibold text-background mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-background/80">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-background-alt py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-background mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-background/80 mb-8">
                Join thousands of students who have achieved their academic dreams with WellPrepped+. Get matched with a top-scoring tutor within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://tally.so/r/wellprepped-plus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-3xl font-semibold text-lg transition-all duration-300 text-center"
                >
                  <FileText className="w-5 h-5 inline-block mr-2" />
                  Get Started Now
                </a>
                <a 
                  href="https://calendly.com/wellprepped-plus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-background-alt px-8 py-4 rounded-3xl font-semibold text-lg transition-all duration-300 text-center"
                >
                  <Calendar className="w-5 h-5 inline-block mr-2" />
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;


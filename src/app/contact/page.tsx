import React from "react";
import Navigation from "@/components/sections/navigation";
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "hello@wellpreparedplus.com",
      description: "Get in touch for inquiries and support"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+1 (555) 123-4567",
      description: "Quick responses for urgent questions"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 987-6543",
      description: "Speak directly with our team"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Global Reach",
      value: "Worldwide",
      description: "Serving students across 30+ countries"
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
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-3xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Book Free Consultation
                </button>
                <button className="bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 rounded-3xl font-semibold text-lg transition-all duration-300">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-background-alt py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center p-6 bg-background rounded-lg border border-background/10">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-background mb-2">
                    {info.title}
                  </h3>
                  <p className="text-accent font-semibold mb-2">
                    {info.value}
                  </p>
                  <p className="text-background/80 text-sm">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <p className="text-[#d0cfc8] mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-semibold mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-background-alt text-background border border-background/20 focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-semibold mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-background-alt text-background border border-background/20 focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-background-alt text-background border border-background/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-background-alt text-background border border-background/20 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">
                      Subject *
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg bg-background-alt text-background border border-background/20 focus:outline-none focus:ring-2 focus:ring-accent">
                      <option>IB Tutoring</option>
                      <option>University Admissions</option>
                      <option>General Inquiry</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background-alt text-background border border-background/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Tell us about your goals and how we can help..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Additional Info */}
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Office Hours
                </h3>
                <div className="space-y-4 mb-8">
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
                <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-3xl font-semibold text-lg transition-all duration-300">
                  <Calendar className="w-5 h-5 inline-block mr-2" />
                  Book Free Trial Lesson
                </button>
                <button className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-background-alt px-8 py-4 rounded-3xl font-semibold text-lg transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;


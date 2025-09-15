"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const faqData = [
  {
    question: "How do WellPrepped lessons work?",
    answer:
      "WellPrepped lessons are fully customizable to your child's schedule and needs.\n\nFor our IB students, we generally recommend 1.5 hours weekly for content based work. Our tutors will adjust the frequency of lessons based on your child's needs, as our 1-on-1 tutoring is highly personalized.",
  },
  {
    question: "What does WellPrepped teach?",
    answer:
      "Our mission is simple: to provide all your IB needs in one place.\n\nThis means that we cover everything that your child needs to excel in the IB (IAs, EE, TOK, Content work). We teach every single subject offered by the IB, at HL and SL levels.\n\nWe also specialise in college admissions support, with our students attending Columbia, UPenn, Oxford, LSE, UCL and KCL.",
  },
  {
    question: "Which countries does WellPrepped operate in?",
    answer:
      "WellPrepped students come from everywhere in the world.\n\nWe've delivered 3000+ hours of lessons to students worldwide. Our clients come from New York, Berlin, Zurich, Paris, Singapore, Shanghai, Sydney and Southeast Asia.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out our contact form, and our team will get in touch within 24 hours.\n\nWe will have a short call to understand your needs, and connect you with a top scoring IB tutor within the day itself. All of our lessons are covered by our \"risk-free first trial\" policy, meaning that you only pay for the lesson if you'd like to continue with the tutor.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-background py-20" id="faq">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-display text-foreground text-center mb-16">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="bg-background-alt rounded-lg border border-background/10 group shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-background hover:no-underline p-6 text-xl text-left justify-start [&>svg:last-child]:hidden hover:bg-background/5 transition-colors duration-200">
                <div className="flex items-center gap-5 w-full">
                  <Plus className="h-6 w-6 text-background flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                  <span className="font-body font-semibold text-background">{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-background px-6 pb-6 pt-0 font-body text-base leading-relaxed">
                <div className="pl-[44px] border-l-2 border-accent/20 ml-3">
                  {item.answer.split("\n\n").map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4 last:mb-0 text-background/90">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
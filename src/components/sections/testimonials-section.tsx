import React from 'react';

type Testimonial = {
  name: string;
  subject: string;
  school: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Chiara.Z',
    subject: 'HL Economics (7)',
    school: 'British School Jakarta',
    review: 'Mr. Ammiel is the best tutor I have ever learned with. As a student who did not study IGCSE Economics, I was seriously underprepared to go into IB Higher Level Economics. However, my concerns all went away when Mr. Ammiel started tutoring me. His detailed notes on definitions, diagrams, and concepts for each subtopic of the IB Econs syllabus were very clear. His teaching style is not only encouraging but thorough. He always makes time to respond online to your questions or to mark your essay homework before you turn them in. Thank you abundantly Mr. Ammiel!',
  },
  {
    name: 'Charlie.M',
    subject: 'Economics (7)',
    school: 'British School Istanbul',
    review: 'Ammiel is an outstanding economics tutor. His ability to explain complex concepts in a clear and relatable way has made a significant difference in my understanding of the subject. He is super methodical in his approach and always ensures that every detail is covered. Ammiel answered all my questions patiently, breaking down difficult topics into manageable pieces and making them easy to grasp. Thanks to his excellent guidance, I achieved a 7 in IB Economics. His approachable teaching style creates a comfortable learning environment, allowing me to gain a deeper understanding. Highly recommended!',
  },
  {
    name: 'Caroline',
    subject: 'Biology (7)',
    school: 'SJI International',
    review: 'Although my son was resistant to tuition, Abel was able to connect with him such that he was more accepting of help and even willing to go for extra tuition. Abel went out of his way to give my son tuition physically and at later stages before. Despite my son being initially resistant to online tuition before engaging Abel, he was receptive and very willing to do so with Abel, as he explained concepts well, and was friendly and caring',
  },
  {
    name: 'Stephanie',
    subject: 'Theory of Knowledge',
    school: 'ACS Independent',
    review: 'I attended WellPrepped’s TOK Essay Masterclass. The essay titles were broken down and explained very clearly which helped me understand the demands of the questions better. The lecture also allowed me to clarify my queries and made me aware of points to consider when writing the essay that were not brought up in school!',
  },
  {
    name: 'Naomi.W',
    subject: 'Chemistry (7)',
    school: 'ACS Independent',
    review: "My experience with Abel for my Chemistry IA was exceptional. Despite the short notice, he demonstrated deep knowledge of the subject and provided invaluable guidance on content and scoring strategies. Abel's friendly demeanor and efficient tutoring style made the sessions both enjoyable and productive. He utilized our time effectively, ensuring all essential topics were covered. Overall, I highly recommend Abel for his expertise and supportive approach to tutoring.",
  },
  {
    name: 'Ajay.M',
    subject: 'HL Economics (6)',
    school: 'UWC Dover',
    review: 'Ammiel is a proactive and well-informed tutor. He consistently makes efforts to ensure that his students understand concepts and can effectively apply them to exam style questions. His teaching style is well structured and course material is clearly delivered.',
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex h-full flex-shrink-0 w-[384px] flex-col justify-between gap-6 rounded-lg bg-card p-8 text-card-foreground">
    <div className="flex flex-col">
      <h5 className="font-body text-lg font-bold text-foreground">{testimonial.name}</h5>
      <p className="mt-1 font-body text-sm text-[#d0cfc8]">{testimonial.subject}</p>
      <p className="font-body text-sm text-[#d0cfc8]">{testimonial.school}</p>
    </div>
    <p className="font-body text-base leading-relaxed text-foreground/90">{testimonial.review}</p>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20" id="testimonials">
      <div className="container mx-auto flex flex-col items-center px-6">
        <h2 className="max-w-4xl text-center font-display text-4xl leading-tight text-foreground">
          WellPrepped's students come from <strong className="font-semibold">30+ schools across 11+ countries</strong>.
          <br />
          Read their stories here.
        </h2>
        <div className="mt-16 w-full">
          <div className="flex gap-6 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
             {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`clone-1-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
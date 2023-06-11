import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQPage = () => {
  const faqData = [
    {
      question: "What activities are offered at TuneTutors?",
      answer:
        "TuneTutors offers a wide range of activities including music instrument lessons, vocal training, songwriting workshops, and more.",
    },
    {
      question: "How can I enroll in a summer camp at TuneTutors?",
      answer:
        'Enrolling in a summer camp at TuneTutors is easy! Simply visit our website and navigate to the "Summer Camps" section. Choose the camp you\'re interested in and follow the enrollment instructions.',
    },
    {
      question:
        "Are there any age restrictions for enrolling in TuneTutors programs?",
      answer:
        "TuneTutors welcomes students of all ages! Our programs cater to children, teenagers, and adults alike. We believe that music education should be accessible to everyone.",
    },
    {
      question: "Can I bring my own instrument?",
      answer:
        "Yes, you can bring your own instrument to TuneTutors. In fact, we encourage students to practice and learn on their own instruments to develop a stronger connection with their music.",
    },
    {
      question: "Are scholarships available for students?",
      answer:
        "TuneTutors offers scholarships to deserving students based on their talent, dedication, and financial need. Please contact our admissions office for more information.",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-500 text-center mb-4">
          FAQs
        </h1>
        <h1 className="text-2xl font-bold text-slate-900 text-center mb-8">
          Answers to Your Questions
        </h1>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="p-6 shadow-md">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h2 className="font-semibold text-slate-900">{faq.question}</h2>
                <div className="transition-transform">
                  {activeIndex === index ? (
                    <FaMinus className="text-xl" />
                  ) : (
                    <FaPlus className="text-xl" />
                  )}
                </div>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-slate-900">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black rounded my-12 h-1 w-full"></div>
    </div>
  );
};

export default FAQPage;

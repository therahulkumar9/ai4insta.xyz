
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const FaqSection = () => {
  const faqs = [
    {
      question: "What is AI4Insta?",
      answer: "AI4Insta is a platform that provides AI-powered tools to help you create better content for Instagram."
    },
    {
      question: "How does the caption generator work?",
      answer: "Our caption generator uses advanced AI to analyze your content and generate engaging, relevant captions tailored to your Instagram posts."
    },
    {
      question: "Is AI4Insta free to use?",
      answer: "We offer both free and premium features. You can try our basic tools for free and upgrade for access to advanced features."
    },
    {
      question: "How often do you add new tools?",
      answer: "We regularly update our platform with new tools and features to help you improve your Instagram presence."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <span className="text-2xl">❓</span>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
            Frequently Asked Questions
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-gray-800 dark:text-gray-100 hover:text-pink-600 dark:hover:text-pink-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

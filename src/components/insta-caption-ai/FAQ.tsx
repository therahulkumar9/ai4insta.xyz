
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does InstaCaptionAI work?",
      answer: "InstaCaptionAI uses advanced artificial intelligence to analyze your photos and generate contextually relevant captions. Simply upload your image, customize your preferences, and let our AI create engaging captions for you."
    },
    {
      question: "Is an API key required?",
      answer: "Yes, you'll need a Google Gemini API key to use InstaCaptionAI. You can get one for free from Google AI Studio and add it in the API Settings section."
    },
    {
      question: "What languages are supported?",
      answer: "InstaCaptionAI supports multiple languages including English, Hindi, Spanish, French, German, Italian, Portuguese, Russian, Japanese, Korean, and Chinese. We also support Hinglish (Hindi-English mix)."
    },
    {
      question: "Can I customize the captions?",
      answer: "Absolutely! You can customize the tone (casual, professional, friendly, etc.), add hashtags, include emojis, and even provide your own description to influence the caption generation."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-medium py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

import { Check } from "lucide-react";
import { Button } from "../button2";

const PricingSection = () => {
  const features = [
    "Unlimited image uploads",
    "Multiple caption variants",
    "AI-powered generation",
    "Custom tone selection",
    "Hashtag suggestions",
    "Emoji support",
    "Multi-language support",
  ];

  const handleGetStarted = () => {
    const captionSection = document.getElementById("caption-generator");
    if (captionSection) {
      captionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Simple, Free Pricing
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Start generating engaging captions today with our free plan
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-purple-100 dark:border-purple-900/20">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Free Forever</h3>
              <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                $0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">No credit card required</p>
            </div>

            <ul className="space-y-4 mb-8 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={handleGetStarted}
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

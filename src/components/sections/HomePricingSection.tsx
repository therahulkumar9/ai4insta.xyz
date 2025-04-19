
import { Check } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export const HomePricingSection = () => {
  const features = [
    "Unlimited image uploads",
    "Multiple caption variants",
    "AI-powered generation",
    "Custom tone selection",
    "Hashtag suggestions",
    "Emoji support",
    "Multi-language support"
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4"><span className="text-2xl md:text-3xl mr-3">🔢</span>
 Simple Pricing</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 font-medium">
          Get started for free - just bring your own API key
        </p>

        <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-pink-500/20 dark:bg-gray-800/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Free Forever</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-gray-600 dark:text-gray-400">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 justify-center">
                <Check className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Just provide your own API key to get started
          </p>
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
            onClick={() => document.getElementById('featured-tool')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Now
          </Button>
        </Card>
      </div>
    </section>
  );
};
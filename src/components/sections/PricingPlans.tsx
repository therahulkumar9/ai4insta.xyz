
import { Check } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export const PricingPlans = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        "5 AI captions per day",
        "Basic hashtag suggestions",
        "Standard response time",
        "Community support"
      ]
    },
    {
      name: "Premium",
      price: "9.99",
      features: [
        "Unlimited AI captions",
        "Advanced hashtag optimization",
        "Priority response time",
        "Custom tone & style settings",
        "Email support",
        "API access",
        "Analytics dashboard"
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {plans.map((plan) => (
        <Card key={plan.name} className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-pink-500/20 dark:bg-gray-800/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold">${plan.price}</span>
            {plan.price !== "0" && <span className="text-gray-600 dark:text-gray-400">/month</span>}
          </div>
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90">
            Get Started
          </Button>
        </Card>
      ))}
    </div>
  );
};

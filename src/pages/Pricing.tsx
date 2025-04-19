
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PricingPlans } from "@/components/sections/PricingPlans";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Choose the plan that best fits your needs. Start with our free tier and upgrade when you're ready.
        </p>
        <PricingPlans />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

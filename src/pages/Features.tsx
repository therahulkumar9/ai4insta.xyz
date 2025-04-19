
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Features = () => {
  const features = [
    {
      icon: <span className="text-2xl text-pink-600">⭐</span>,
      title: "AI Caption Generation",
      description: "Generate engaging, context-aware captions for your Instagram posts in seconds."
    },
    {
      icon: <span className="text-2xl text-pink-600">🧠</span>,
      title: "Smart Hashtag Suggestions",
      description: "Get relevant hashtag recommendations to increase your post visibility."
    },
    {
      icon: <span className="text-2xl text-pink-600">⚡</span>,
      title: "Quick Tone Adjustment",
      description: "Easily adjust the tone of your captions to match your brand voice."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-4">Features</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Discover how AI4Insta can help you create better Instagram content faster.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} 
              className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-pink-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
